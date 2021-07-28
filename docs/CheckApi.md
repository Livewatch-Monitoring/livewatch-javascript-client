# LivewatchApi.CheckApi

All URIs are relative to *https://www.livewatch.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkDetails**](CheckApi.md#checkDetails) | **GET** /api/check/details/{uuid} | Get details of one check
[**checkList**](CheckApi.md#checkList) | **GET** /api/check/list/{page} | List all your checks configured
[**checkReport**](CheckApi.md#checkReport) | **GET** /api/check/report/{uuid} | Get details of one check
[**setCheckState**](CheckApi.md#setCheckState) | **POST** /api/check/enable/{uuid}/{state} | Enable or disable a check



## checkDetails

> Check checkDetails(uuid)

Get details of one check

Retrieve information about one check

### Example

```javascript
var LivewatchApi = require('livewatch_api');
var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix = 'Token';

var apiInstance = new LivewatchApi.CheckApi();
var uuid = "uuid_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkDetails(uuid, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**Check**](Check.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkList

> [Check] checkList(page)

List all your checks configured

Retrieve a list of all checks assigned to your account

### Example

```javascript
var LivewatchApi = require('livewatch_api');
var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix = 'Token';

var apiInstance = new LivewatchApi.CheckApi();
var page = "page_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkList(page, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **String**|  | 

### Return type

[**[Check]**](Check.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkReport

> Check checkReport(uuid)

Get details of one check

Retrieve information about one check

### Example

```javascript
var LivewatchApi = require('livewatch_api');
var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix = 'Token';

var apiInstance = new LivewatchApi.CheckApi();
var uuid = "uuid_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkReport(uuid, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**Check**](Check.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setCheckState

> Check setCheckState(state, uuid)

Enable or disable a check

Enable or disable a check by uuid

### Example

```javascript
var LivewatchApi = require('livewatch_api');
var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix = 'Token';

var apiInstance = new LivewatchApi.CheckApi();
var state = true; // Boolean | 
var uuid = "uuid_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setCheckState(state, uuid, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **Boolean**|  | 
 **uuid** | **String**|  | 

### Return type

[**Check**](Check.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

