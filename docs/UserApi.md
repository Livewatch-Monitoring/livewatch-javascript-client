# LivewatchApi.UserApi

All URIs are relative to *https://www.livewatch.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTokenDetails**](UserApi.md#apiTokenDetails) | **POST** /api/user/token | Get your API-Token



## apiTokenDetails

> ApiToken apiTokenDetails(username, password)

Get your API-Token

Provide your access credentials and return api token

### Example

```javascript
var LivewatchApi = require('livewatch_api');
var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix = 'Token';

var apiInstance = new LivewatchApi.UserApi();
var username = "username_example"; // String | 
var password = "password_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiTokenDetails(username, password, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 
 **password** | **String**|  | 

### Return type

[**ApiToken**](ApiToken.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

