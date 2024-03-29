/**
 * Livewatch API
 * Livewatch Server Monitoring API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * Get your free server monitoring token at https://www.livewatch.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 6.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['LivewatchApi/ApiClient', 'LivewatchApi/model/Check', 'LivewatchApi/model/CheckEvent', 'LivewatchApi/model/CheckHistory', 'LivewatchApi/model/CheckNotification', 'LivewatchApi/model/CheckStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Check'), require('../model/CheckEvent'), require('../model/CheckHistory'), require('../model/CheckNotification'), require('../model/CheckStats'));
  } else {
    // Browser globals (root is window)
    if (!root.LivewatchApi) {
      root.LivewatchApi = {};
    }
    root.LivewatchApi.CheckApi = factory(root.LivewatchApi.ApiClient, root.LivewatchApi.Check, root.LivewatchApi.CheckEvent, root.LivewatchApi.CheckHistory, root.LivewatchApi.CheckNotification, root.LivewatchApi.CheckStats);
  }
}(this, function(ApiClient, Check, CheckEvent, CheckHistory, CheckNotification, CheckStats) {
  'use strict';

  /**
   * Check service.
   * @module LivewatchApi/api/CheckApi
   * @version 1.1.2
   */

  /**
   * Constructs a new CheckApi. 
   * @alias module:LivewatchApi/api/CheckApi
   * @class
   * @param {module:LivewatchApi/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:LivewatchApi/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the allCheckNotifications operation.
     * @callback module:LivewatchApi/api/CheckApi~allCheckNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:LivewatchApi/model/CheckNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get notifications of all checks
     * Retrieve the latest notifications of all checks - limit to 50 entries
     * @param {module:LivewatchApi/api/CheckApi~allCheckNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:LivewatchApi/model/CheckNotification}
     */
    this.allCheckNotifications = function(callback) {
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
      var returnType = CheckNotification;
      return this.apiClient.callApi(
        '/api/check/notifications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkDetails operation.
     * @callback module:LivewatchApi/api/CheckApi~checkDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:LivewatchApi/model/Check} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details of one check
     * Retrieve information about one check
     * @param {String} uuid 
     * @param {module:LivewatchApi/api/CheckApi~checkDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:LivewatchApi/model/Check}
     */
    this.checkDetails = function(uuid, callback) {
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling checkDetails");
      }

      var pathParams = {
        'uuid': uuid
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
      var returnType = Check;
      return this.apiClient.callApi(
        '/api/check/details/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkEventsByDate operation.
     * @callback module:LivewatchApi/api/CheckApi~checkEventsByDateCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:LivewatchApi/model/CheckEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get events of one check by date
     * Retrieve events by check and day
     * @param {String} date Date to get events for
     * @param {String} uuid 
     * @param {module:LivewatchApi/api/CheckApi~checkEventsByDateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:LivewatchApi/model/CheckEvent>}
     */
    this.checkEventsByDate = function(date, uuid, callback) {
      var postBody = null;
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling checkEventsByDate");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling checkEventsByDate");
      }

      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
        'date': date,
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
      var returnType = [CheckEvent];
      return this.apiClient.callApi(
        '/api/check/check/events/{uuid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkHistory operation.
     * @callback module:LivewatchApi/api/CheckApi~checkHistoryCallback
     * @param {String} error Error message, if any.
     * @param {module:LivewatchApi/model/CheckHistory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get history of one check
     * Retrieve the latest check history about one check - limit to 50 entries
     * @param {String} uuid 
     * @param {module:LivewatchApi/api/CheckApi~checkHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:LivewatchApi/model/CheckHistory}
     */
    this.checkHistory = function(uuid, callback) {
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling checkHistory");
      }

      var pathParams = {
        'uuid': uuid
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
      var returnType = CheckHistory;
      return this.apiClient.callApi(
        '/api/check/latest/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkList operation.
     * @callback module:LivewatchApi/api/CheckApi~checkListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:LivewatchApi/model/Check>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all your checks configured
     * Retrieve a list of all checks assigned to your account
     * @param {String} page 
     * @param {module:LivewatchApi/api/CheckApi~checkListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:LivewatchApi/model/Check>}
     */
    this.checkList = function(page, callback) {
      var postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling checkList");
      }

      var pathParams = {
        'page': page
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
      var returnType = [Check];
      return this.apiClient.callApi(
        '/api/check/list/{page}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkNotifications operation.
     * @callback module:LivewatchApi/api/CheckApi~checkNotificationsCallback
     * @param {String} error Error message, if any.
     * @param {module:LivewatchApi/model/CheckNotification} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get notifications of one check
     * Retrieve the latest notifications about one check - limit to 25 entries
     * @param {String} uuid 
     * @param {module:LivewatchApi/api/CheckApi~checkNotificationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:LivewatchApi/model/CheckNotification}
     */
    this.checkNotifications = function(uuid, callback) {
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling checkNotifications");
      }

      var pathParams = {
        'uuid': uuid
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
      var returnType = CheckNotification;
      return this.apiClient.callApi(
        '/api/check/notifications/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checkReport operation.
     * @callback module:LivewatchApi/api/CheckApi~checkReportCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:LivewatchApi/model/CheckStats>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get report of one check
     * Retrieve reporting information about one check
     * @param {String} uuid 
     * @param {module:LivewatchApi/api/CheckApi~checkReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:LivewatchApi/model/CheckStats>}
     */
    this.checkReport = function(uuid, callback) {
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling checkReport");
      }

      var pathParams = {
        'uuid': uuid
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
      var returnType = [CheckStats];
      return this.apiClient.callApi(
        '/api/check/report/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the checksByTag operation.
     * @callback module:LivewatchApi/api/CheckApi~checksByTagCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:LivewatchApi/model/Check>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get report of checks by Tag
     * Retrieve checks by tag
     * @param {String} tags Comma seperated tags to search for
     * @param {Object} opts Optional parameters
     * @param {Number} opts.statDays History range in days
     * @param {module:LivewatchApi/api/CheckApi~checksByTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:LivewatchApi/model/Check>}
     */
    this.checksByTag = function(tags, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'tags' is set
      if (tags === undefined || tags === null) {
        throw new Error("Missing the required parameter 'tags' when calling checksByTag");
      }

      var pathParams = {
      };
      var queryParams = {
        'tags': tags,
        'stat_days': opts['statDays'],
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
      var returnType = [Check];
      return this.apiClient.callApi(
        '/api/check/checks/tag', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setCheckState operation.
     * @callback module:LivewatchApi/api/CheckApi~setCheckStateCallback
     * @param {String} error Error message, if any.
     * @param {module:LivewatchApi/model/Check} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable or disable a check
     * Enable or disable a check by uuid
     * @param {Boolean} state 
     * @param {String} uuid 
     * @param {module:LivewatchApi/api/CheckApi~setCheckStateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:LivewatchApi/model/Check}
     */
    this.setCheckState = function(state, uuid, callback) {
      var postBody = null;
      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling setCheckState");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling setCheckState");
      }

      var pathParams = {
        'state': state,
        'uuid': uuid
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
      var returnType = Check;
      return this.apiClient.callApi(
        '/api/check/enable/{uuid}/{state}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
