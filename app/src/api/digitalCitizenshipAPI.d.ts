/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from "./models";

/**
 * DigitalCitizenshipAPIOptions for DigitalCitizenshipAPI.
 */
declare interface DigitalCitizenshipAPIOptions extends ServiceClientOptions {
  /**
   * @property {string} [cursor] - An opaque identifier that points to the next item in the collection.
   */
  cursor?: string;
}

declare class DigitalCitizenshipAPI extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the DigitalCitizenshipAPI class.
   * @constructor
   *
   * @param {string} fiscalCode - The fiscal code of the user, all upper case.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.cursor] - An opaque identifier that points to the next item in the collection.
   *
   */
  constructor(fiscalCode: string, baseUri?: string, options?: DigitalCitizenshipAPIOptions);

  cursor: string;

  fiscalCode: string;


  /**
   * @summary Get Message
   *
   * The previously created message with the provided message ID is returned.
   *
   * @param {string} id The ID of the message.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<MessageResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getMessageWithHttpOperationResponse(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MessageResponse>>;

  /**
   * @summary Get Message
   *
   * The previously created message with the provided message ID is returned.
   *
   * @param {string} id The ID of the message.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {MessageResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {MessageResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link MessageResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getMessage(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.MessageResponse>;
  getMessage(id: string, callback: ServiceCallback<models.MessageResponse>): void;
  getMessage(id: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MessageResponse>): void;


  /**
   * @summary Get messages by user
   *
   * Returns the messages for the user identified by the provided fiscal code.
   * Messages will be returned in inverse acceptance order (from last to first).
   * The "next" field, when present, contains an URL pointing to the next page of
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GetMessagesByUserOKResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getMessagesByUserWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GetMessagesByUserOKResponse>>;

  /**
   * @summary Get messages by user
   *
   * Returns the messages for the user identified by the provided fiscal code.
   * Messages will be returned in inverse acceptance order (from last to first).
   * The "next" field, when present, contains an URL pointing to the next page of
   * results.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GetMessagesByUserOKResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GetMessagesByUserOKResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GetMessagesByUserOKResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getMessagesByUser(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.GetMessagesByUserOKResponse>;
  getMessagesByUser(callback: ServiceCallback<models.GetMessagesByUserOKResponse>): void;
  getMessagesByUser(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetMessagesByUserOKResponse>): void;


  /**
   * @summary Submit a message
   *
   * Submits a message to a user.
   * On error, the reason is returned in the response payload.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.message]
   *
   * @param {number} [options.message.timeToLive]
   *
   * @param {object} options.message.content
   *
   * @param {string} [options.message.content.subject]
   *
   * @param {string} options.message.content.markdown
   *
   * @param {object} [options.message.defaultAddresses]
   *
   * @param {string} [options.message.defaultAddresses.email]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ProblemJson>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  submitMessageforUserWithHttpOperationResponse(options?: { message? : models.NewMessage, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ProblemJson>>;

  /**
   * @summary Submit a message
   *
   * Submits a message to a user.
   * On error, the reason is returned in the response payload.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.message]
   *
   * @param {number} [options.message.timeToLive]
   *
   * @param {object} options.message.content
   *
   * @param {string} [options.message.content.subject]
   *
   * @param {string} options.message.content.markdown
   *
   * @param {object} [options.message.defaultAddresses]
   *
   * @param {string} [options.message.defaultAddresses.email]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ProblemJson} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ProblemJson} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ProblemJson} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  submitMessageforUser(options?: { message? : models.NewMessage, customHeaders? : { [headerName: string]: string; } }): Promise<models.ProblemJson>;
  submitMessageforUser(callback: ServiceCallback<models.ProblemJson>): void;
  submitMessageforUser(options: { message? : models.NewMessage, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ProblemJson>): void;


  /**
   * @summary Get User's Preferences
   *
   * Returns the preferences for the user identified by the provided fiscal code.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<GetProfileOKResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getProfileWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.GetProfileOKResponse>>;

  /**
   * @summary Get User's Preferences
   *
   * Returns the preferences for the user identified by the provided fiscal code.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {GetProfileOKResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {GetProfileOKResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link GetProfileOKResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getProfile(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.GetProfileOKResponse>;
  getProfile(callback: ServiceCallback<models.GetProfileOKResponse>): void;
  getProfile(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.GetProfileOKResponse>): void;


  /**
   * @summary Set User's Preferences
   *
   * Create or update the preferences for the user identified by the provided
   * fiscal code.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} [options.body.email]
   *
   * @param {array} [options.body.preferredLanguages]
   *
   * @param {number} [options.body.version]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<UpsertProfileOKResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  upsertProfileWithHttpOperationResponse(options?: { body? : models.ExtendedProfile, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.UpsertProfileOKResponse>>;

  /**
   * @summary Set User's Preferences
   *
   * Create or update the preferences for the user identified by the provided
   * fiscal code.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.body]
   *
   * @param {string} [options.body.email]
   *
   * @param {array} [options.body.preferredLanguages]
   *
   * @param {number} [options.body.version]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {UpsertProfileOKResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {UpsertProfileOKResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link UpsertProfileOKResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  upsertProfile(options?: { body? : models.ExtendedProfile, customHeaders? : { [headerName: string]: string; } }): Promise<models.UpsertProfileOKResponse>;
  upsertProfile(callback: ServiceCallback<models.UpsertProfileOKResponse>): void;
  upsertProfile(options: { body? : models.ExtendedProfile, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.UpsertProfileOKResponse>): void;


  /**
   * @summary API test endpoint
   *
   * An endpoint to test authenticated access to the API backend.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getInfoWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary API test endpoint
   *
   * An endpoint to test authenticated access to the API backend.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getInfo(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getInfo(callback: ServiceCallback<any>): void;
  getInfo(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
}

export = DigitalCitizenshipAPI;