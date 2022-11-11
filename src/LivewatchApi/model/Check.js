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
    define(['LivewatchApi/ApiClient', 'LivewatchApi/model/CheckStats', 'LivewatchApi/model/Contact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CheckStats'), require('./Contact'));
  } else {
    // Browser globals (root is window)
    if (!root.LivewatchApi) {
      root.LivewatchApi = {};
    }
    root.LivewatchApi.Check = factory(root.LivewatchApi.ApiClient, root.LivewatchApi.CheckStats, root.LivewatchApi.Contact);
  }
}(this, function(ApiClient, CheckStats, Contact) {
  'use strict';



  /**
   * The Check model module.
   * @module LivewatchApi/model/Check
   * @version 1.1.2
   */

  /**
   * Constructs a new <code>Check</code>.
   * @alias module:LivewatchApi/model/Check
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Check</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:LivewatchApi/model/Check} obj Optional instance to populate.
   * @return {module:LivewatchApi/model/Check} The populated <code>Check</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('check_type')) {
        obj['check_type'] = ApiClient.convertToType(data['check_type'], 'String');
      }
      if (data.hasOwnProperty('last_update')) {
        obj['last_update'] = ApiClient.convertToType(data['last_update'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], [Contact]);
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = ApiClient.convertToType(data['stats'], [CheckStats]);
      }
      if (data.hasOwnProperty('checkType')) {
        obj['checkType'] = ApiClient.convertToType(data['checkType'], 'String');
      }
      if (data.hasOwnProperty('lastUpdate')) {
        obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} check_type
   */
  exports.prototype['check_type'] = undefined;
  /**
   * @member {String} last_update
   */
  exports.prototype['last_update'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:LivewatchApi/model/Contact>} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * @member {Array.<module:LivewatchApi/model/CheckStats>} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * @member {String} checkType
   */
  exports.prototype['checkType'] = undefined;
  /**
   * @member {String} lastUpdate
   */
  exports.prototype['lastUpdate'] = undefined;



  return exports;
}));


