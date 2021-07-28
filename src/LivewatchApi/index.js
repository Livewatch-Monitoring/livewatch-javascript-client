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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['LivewatchApi/ApiClient', 'LivewatchApi/model/Account', 'LivewatchApi/model/ApiToken', 'LivewatchApi/model/Check', 'LivewatchApi/model/MonitoringIp', 'LivewatchApi/api/AccountApi', 'LivewatchApi/api/CheckApi', 'LivewatchApi/api/GeneralApi', 'LivewatchApi/api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/ApiToken'), require('./model/Check'), require('./model/MonitoringIp'), require('./api/AccountApi'), require('./api/CheckApi'), require('./api/GeneralApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Account, ApiToken, Check, MonitoringIp, AccountApi, CheckApi, GeneralApi, UserApi) {
  'use strict';

  /**
   * Livewatch Server Monitoring API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var LivewatchApi = require('LivewatchApi/index'); // See note below*.
   * var xxxSvc = new LivewatchApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new LivewatchApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['LivewatchApi/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new LivewatchApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new LivewatchApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module LivewatchApi/index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:LivewatchApi/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:LivewatchApi/model/Account}
     */
    Account: Account,
    /**
     * The ApiToken model constructor.
     * @property {module:LivewatchApi/model/ApiToken}
     */
    ApiToken: ApiToken,
    /**
     * The Check model constructor.
     * @property {module:LivewatchApi/model/Check}
     */
    Check: Check,
    /**
     * The MonitoringIp model constructor.
     * @property {module:LivewatchApi/model/MonitoringIp}
     */
    MonitoringIp: MonitoringIp,
    /**
     * The AccountApi service constructor.
     * @property {module:LivewatchApi/api/AccountApi}
     */
    AccountApi: AccountApi,
    /**
     * The CheckApi service constructor.
     * @property {module:LivewatchApi/api/CheckApi}
     */
    CheckApi: CheckApi,
    /**
     * The GeneralApi service constructor.
     * @property {module:LivewatchApi/api/GeneralApi}
     */
    GeneralApi: GeneralApi,
    /**
     * The UserApi service constructor.
     * @property {module:LivewatchApi/api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
