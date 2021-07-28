/**
 * Livewatch API
 * Livewatch Server Monitoring API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 6.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['LivewatchApi/ApiClient', 'LivewatchApi/model/ApiToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiToken'));
  } else {
    // Browser globals (root is window)
    if (!root.LivewatchApi) {
      root.LivewatchApi = {};
    }
    root.LivewatchApi.UserApi = factory(root.LivewatchApi.ApiClient, root.LivewatchApi.ApiToken);
  }
}(this, function(ApiClient, ApiToken) {
  'use strict';

  /**
   * User service.
   * @module LivewatchApi/api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:LivewatchApi/api/UserApi
   * @class
   * @param {module:LivewatchApi/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:LivewatchApi/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiTokenDetails operation.
     * @callback module:LivewatchApi/api/UserApi~apiTokenDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:LivewatchApi/model/ApiToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your API-Token
     * Provide your access credentials and return api token
     * @param {String} username 
     * @param {String} password 
     * @param {module:LivewatchApi/api/UserApi~apiTokenDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:LivewatchApi/model/ApiToken}
     */
    this.apiTokenDetails = function(username, password, callback) {
      var postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling apiTokenDetails");
      }
      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling apiTokenDetails");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'username': username,
        'password': password
      };

      var authNames = ['LivewatchToken'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ApiToken;
      return this.apiClient.callApi(
        '/api/user/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
