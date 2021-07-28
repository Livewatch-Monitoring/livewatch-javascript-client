# LivewatchApi.GeneralApi

All URIs are relative to *https://www.livewatch.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMonitoringIPs**](GeneralApi.md#listMonitoringIPs) | **GET** /api/general/listMonitoringIPs | List all our IPs with details



## listMonitoringIPs

> [MonitoringIp] listMonitoringIPs()

List all our IPs with details

Retrieve a list of all IPs (satellite systems) used by Livewatch

### Example

```javascript
var LivewatchApi = require('livewatch_api');
var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix = 'Token';

var apiInstance = new LivewatchApi.GeneralApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMonitoringIPs(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MonitoringIp]**](MonitoringIp.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

