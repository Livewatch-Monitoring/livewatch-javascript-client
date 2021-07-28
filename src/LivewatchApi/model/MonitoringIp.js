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
    define(['LivewatchApi/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LivewatchApi) {
      root.LivewatchApi = {};
    }
    root.LivewatchApi.MonitoringIp = factory(root.LivewatchApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MonitoringIp model module.
   * @module LivewatchApi/model/MonitoringIp
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MonitoringIp</code>.
   * @alias module:LivewatchApi/model/MonitoringIp
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MonitoringIp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:LivewatchApi/model/MonitoringIp} obj Optional instance to populate.
   * @return {module:LivewatchApi/model/MonitoringIp} The populated <code>MonitoringIp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ipv4')) {
        obj['ipv4'] = ApiClient.convertToType(data['ipv4'], 'String');
      }
      if (data.hasOwnProperty('ipv6')) {
        obj['ipv6'] = ApiClient.convertToType(data['ipv6'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} ipv4
   */
  exports.prototype['ipv4'] = undefined;
  /**
   * @member {String} ipv6
   */
  exports.prototype['ipv6'] = undefined;



  return exports;
}));

