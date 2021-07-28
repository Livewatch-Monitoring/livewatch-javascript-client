# LivewatchApi.AccountApi

All URIs are relative to *https://www.livewatch.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountDetails**](AccountApi.md#accountDetails) | **GET** /api/account | Get Account details



## accountDetails

> Account accountDetails()

Get Account details

Gets your account details

### Example

```javascript
var LivewatchApi = require('livewatch_api');
var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix = 'Token';

var apiInstance = new LivewatchApi.AccountApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountDetails(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Account**](Account.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

