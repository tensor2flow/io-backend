/**
 * This controller handles the call from the IDP after a successful
 * authentication. In the request headers there are all the attributes sent from
 * the IDP.
 */

import * as express from "express";
import { isLeft } from "fp-ts/lib/Either";
import {
  IResponseErrorInternal,
  IResponsePermanentRedirect,
  IResponseSuccessJson,
  IResponseSuccessXml,
  ResponseErrorInternal,
  ResponsePermanentRedirect,
  ResponseSuccessJson,
  ResponseSuccessXml
} from "italia-ts-commons/lib/responses";
import { UrlFromString } from "italia-ts-commons/lib/url";
import { ISessionStorage } from "../services/ISessionStorage";
import TokenService from "../services/tokenService";
import { SuccessResponse } from "../types/commons";
import { SessionToken, WalletToken } from "../types/token";
import {
  extractUserFromRequest,
  toAppUser,
  validateSpidUser
} from "../types/user";
import { log } from "../utils/logger";

export default class AuthenticationController {
  constructor(
    private readonly sessionStorage: ISessionStorage,
    private readonly samlCert: string,
    private readonly spidStrategy: SpidStrategy,
    private readonly tokenService: TokenService,
    private readonly getClientProfileRedirectionUrl: (
      token: string
    ) => UrlFromString
  ) {}

  /**
   * The Assertion consumer service.
   */
  public async acs(
    // tslint:disable-next-line:no-any
    userPayload: any
  ): Promise<IResponseErrorInternal | IResponsePermanentRedirect> {
    const errorOrUser = validateSpidUser(userPayload);

    if (isLeft(errorOrUser)) {
      const error = errorOrUser.value;
      log.error(
        "Error validating the SPID user %O: %s",
        userPayload,
        error.message
      );
      return ResponseErrorInternal(error.message);
    }

    const spidUser = errorOrUser.value;
    const sessionToken = this.tokenService.getNewToken() as SessionToken;
    const walletToken = this.tokenService.getNewToken() as WalletToken;
    const user = toAppUser(spidUser, sessionToken, walletToken);

    const errorOrResponse = await this.sessionStorage.set(user);

    if (isLeft(errorOrResponse)) {
      const error = errorOrResponse.value;
      log.error("Error storing the user in the session: %s", error.message);
      return ResponseErrorInternal(error.message);
    }
    const response = errorOrResponse.value;

    if (!response) {
      log.error("Error storing the user in the session");
      return ResponseErrorInternal("Error creating the user session");
    }
    const urlWithToken = this.getClientProfileRedirectionUrl(
      user.session_token
    );

    return ResponsePermanentRedirect(urlWithToken);
  }
  /**
   * Retrieves the logout url from the IDP.
   */
  public async logout(
    req: express.Request
  ): Promise<IResponseErrorInternal | IResponseSuccessJson<SuccessResponse>> {
    const errorOrUser = extractUserFromRequest(req);

    if (isLeft(errorOrUser)) {
      const error = errorOrUser.value;
      return ResponseErrorInternal(error.message);
    }

    const user = errorOrUser.value;

    const errorOrResponse = await this.sessionStorage.del(
      user.session_token,
      user.wallet_token
    );

    if (isLeft(errorOrResponse)) {
      const error = errorOrResponse.value;
      return ResponseErrorInternal(error.message);
    }

    const response = errorOrResponse.value;

    if (!response) {
      return ResponseErrorInternal("Error destroying the user session");
    }

    return ResponseSuccessJson({ message: "ok" });
  }

  /**
   * The Single logout service.
   */
  public async slo(): Promise<IResponsePermanentRedirect> {
    const url: UrlFromString = {
      href: "/"
    };

    return ResponsePermanentRedirect(url);
  }

  /**
   * The metadata for this Service Provider.
   */
  public async metadata(): Promise<IResponseSuccessXml<string>> {
    const metadata = this.spidStrategy.generateServiceProviderMetadata(
      this.samlCert
    );

    return ResponseSuccessXml(metadata);
  }
}
