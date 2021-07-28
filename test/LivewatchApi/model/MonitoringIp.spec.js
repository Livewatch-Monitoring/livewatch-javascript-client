/**
 * Livewatch API
 * Livewatch Server Monitoring API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/LivewatchApi/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/LivewatchApi/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LivewatchApi);
  }
}(this, function(expect, LivewatchApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LivewatchApi.MonitoringIp();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MonitoringIp', function() {
    it('should create an instance of MonitoringIp', function() {
      // uncomment below and update the code to test MonitoringIp
      //var instane = new LivewatchApi.MonitoringIp();
      //expect(instance).to.be.a(LivewatchApi.MonitoringIp);
    });

    it('should have the property ipv4 (base name: "ipv4")', function() {
      // uncomment below and update the code to test the property ipv4
      //var instance = new LivewatchApi.MonitoringIp();
      //expect(instance).to.be();
    });

    it('should have the property ipv6 (base name: "ipv6")', function() {
      // uncomment below and update the code to test the property ipv6
      //var instance = new LivewatchApi.MonitoringIp();
      //expect(instance).to.be();
    });

  });

}));