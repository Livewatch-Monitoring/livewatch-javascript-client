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
    define(['LivewatchApi/ApiClient', 'LivewatchApi/model/Account'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Account'));
  } else {
    // Browser globals (root is window)
    if (!root.LivewatchApi) {
      root.LivewatchApi = {};
    }
    root.LivewatchApi.AccountApi = factory(root.LivewatchApi.ApiClient, root.LivewatchApi.Account);
  }
}(this, function(ApiClient, Account) {
  'use strict';

  /**
   * Account service.
   * @module LivewatchApi/api/AccountApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AccountApi. 
   * @alias module:LivewatchApi/api/AccountApi
   * @class
   * @param {module:LivewatchApi/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:LivewatchApi/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountDetails operation.
     * @callback module:LivewatchApi/api/AccountApi~accountDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:LivewatchApi/model/Account} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account details
     * Gets your account details
     * @param {module:LivewatchApi/api/AccountApi~accountDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:LivewatchApi/model/Account}
     */
    this.accountDetails = function(callback) {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['LivewatchToken'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Account;
      return this.apiClient.callApi(
        '/api/account', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
