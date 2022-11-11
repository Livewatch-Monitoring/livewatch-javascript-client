# LivewatchApi.CheckApi

All URIs are relative to *https://www.livewatch.de*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allCheckNotifications**](CheckApi.md#allCheckNotifications) | **GET** /api/check/notifications | Get notifications of all checks
[**checkDetails**](CheckApi.md#checkDetails) | **GET** /api/check/details/{uuid} | Get details of one check
[**checkEventsByDate**](CheckApi.md#checkEventsByDate) | **POST** /api/check/check/events/{uuid} | Get events of one check by date
[**checkHistory**](CheckApi.md#checkHistory) | **GET** /api/check/latest/{uuid} | Get history of one check
[**checkList**](CheckApi.md#checkList) | **GET** /api/check/list/{page} | List all your checks configured
[**checkNotifications**](CheckApi.md#checkNotifications) | **GET** /api/check/notifications/{uuid} | Get notifications of one check
[**checkReport**](CheckApi.md#checkReport) | **GET** /api/check/report/{uuid} | Get report of one check
[**checksByTag**](CheckApi.md#checksByTag) | **POST** /api/check/checks/tag | Get report of checks by Tag
[**setCheckState**](CheckApi.md#setCheckState) | **POST** /api/check/enable/{uuid}/{state} | Enable or disable a check



## allCheckNotifications

> CheckNotification allCheckNotifications()

Get notifications of all checks

Retrieve the latest notifications of all checks - limit to 50 entries

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
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.allCheckNotifications(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CheckNotification**](CheckNotification.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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


## checkEventsByDate

> [CheckEvent] checkEventsByDate(date, uuid)

Get events of one check by date

Retrieve events by check and day

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
var date = "date_example"; // String | Date to get events for
var uuid = "uuid_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkEventsByDate(date, uuid, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **String**| Date to get events for | 
 **uuid** | **String**|  | 

### Return type

[**[CheckEvent]**](CheckEvent.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkHistory

> CheckHistory checkHistory(uuid)

Get history of one check

Retrieve the latest check history about one check - limit to 50 entries

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
apiInstance.checkHistory(uuid, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**CheckHistory**](CheckHistory.md)

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


## checkNotifications

> CheckNotification checkNotifications(uuid)

Get notifications of one check

Retrieve the latest notifications about one check - limit to 25 entries

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
apiInstance.checkNotifications(uuid, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**|  | 

### Return type

[**CheckNotification**](CheckNotification.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checkReport

> [CheckStats] checkReport(uuid)

Get report of one check

Retrieve reporting information about one check

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

[**[CheckStats]**](CheckStats.md)

### Authorization

[LivewatchToken](../README.md#LivewatchToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checksByTag

> [Check] checksByTag(tags, opts)

Get report of checks by Tag

Retrieve checks by tag

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
var tags = "tags_example"; // String | Comma seperated tags to search for
var opts = {
  'statDays': 7 // Number | History range in days
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checksByTag(tags, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | **String**| Comma seperated tags to search for | 
 **statDays** | **Number**| History range in days | [optional] 

### Return type

[**[Check]**](Check.md)

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

