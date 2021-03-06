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
    instance = new LivewatchApi.Check();
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

  describe('Check', function() {
    it('should create an instance of Check', function() {
      // uncomment below and update the code to test Check
      //var instane = new LivewatchApi.Check();
      //expect(instance).to.be.a(LivewatchApi.Check);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property checkType (base name: "check_type")', function() {
      // uncomment below and update the code to test the property checkType
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdate (base name: "last_update")', function() {
      // uncomment below and update the code to test the property lastUpdate
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property checkType (base name: "checkType")', function() {
      // uncomment below and update the code to test the property checkType
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdate (base name: "lastUpdate")', function() {
      // uncomment below and update the code to test the property lastUpdate
      //var instance = new LivewatchApi.Check();
      //expect(instance).to.be();
    });

  });

}));
