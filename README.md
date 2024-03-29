# Livewatch Server Monitoring API

LivewatchApi - JavaScript client for LivewatchApi
Livewatch Server Monitoring API

[![Livewatch Server Monitoring](https://www.livewatch.de/build/media/external/logo.png)](https://www.livewatch.de)

- API version: 1.0.0
- Package version: 1.1.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.livewatch.de](https://www.livewatch.de)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install it via:

```shell
npm install @livewatch-monitoring/livewatch-api --save
```

##### Local development

To use the library locally, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your @livewatch-monitoring/livewatch-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('@livewatch-monitoring/livewatch-api')` in javascript files from the directory you ran the last command above from.

### git

Install it via:

```shell
npm install livewatch-monitoring/livewatch-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

### Register your free account

To receive an API-Token, register a free account at https://www.livewatch.de
After registration you will find your personal API token at https://www.livewatch.de/profile

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LivewatchApi = require('@livewatch-monitoring/livewatch-api');

var defaultClient = LivewatchApi.ApiClient.instance;
// Configure API key authorization: LivewatchToken
var LivewatchToken = defaultClient.authentications['LivewatchToken'];
LivewatchToken.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//LivewatchToken.apiKeyPrefix['auth-livewatch-token'] = "Token"

var api = new LivewatchApi.AccountApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountDetails(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.livewatch.de*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LivewatchApi.AccountApi* | [**accountDetails**](docs/AccountApi.md#accountDetails) | **GET** /api/account | Get Account details
*LivewatchApi.CheckApi* | [**allCheckNotifications**](docs/CheckApi.md#allCheckNotifications) | **GET** /api/check/notifications | Get notifications of all checks
*LivewatchApi.CheckApi* | [**checkDetails**](docs/CheckApi.md#checkDetails) | **GET** /api/check/details/{uuid} | Get details of one check
*LivewatchApi.CheckApi* | [**checkEventsByDate**](docs/CheckApi.md#checkEventsByDate) | **POST** /api/check/check/events/{uuid} | Get events of one check by date
*LivewatchApi.CheckApi* | [**checkHistory**](docs/CheckApi.md#checkHistory) | **GET** /api/check/latest/{uuid} | Get history of one check
*LivewatchApi.CheckApi* | [**checkList**](docs/CheckApi.md#checkList) | **GET** /api/check/list/{page} | List all your checks configured
*LivewatchApi.CheckApi* | [**checkNotifications**](docs/CheckApi.md#checkNotifications) | **GET** /api/check/notifications/{uuid} | Get notifications of one check
*LivewatchApi.CheckApi* | [**checkReport**](docs/CheckApi.md#checkReport) | **GET** /api/check/report/{uuid} | Get report of one check
*LivewatchApi.CheckApi* | [**checksByTag**](docs/CheckApi.md#checksByTag) | **POST** /api/check/checks/tag | Get report of checks by Tag
*LivewatchApi.CheckApi* | [**setCheckState**](docs/CheckApi.md#setCheckState) | **POST** /api/check/enable/{uuid}/{state} | Enable or disable a check
*LivewatchApi.GeneralApi* | [**listMonitoringIPs**](docs/GeneralApi.md#listMonitoringIPs) | **GET** /api/general/listMonitoringIPs | List all our IPs with details
*LivewatchApi.UserApi* | [**apiTokenDetails**](docs/UserApi.md#apiTokenDetails) | **POST** /api/user/token | Get your API-Token


## Documentation for Models

 - [LivewatchApi.Account](docs/Account.md)
 - [LivewatchApi.ApiToken](docs/ApiToken.md)
 - [LivewatchApi.Check](docs/Check.md)
 - [LivewatchApi.CheckEvent](docs/CheckEvent.md)
 - [LivewatchApi.CheckHistory](docs/CheckHistory.md)
 - [LivewatchApi.CheckNotification](docs/CheckNotification.md)
 - [LivewatchApi.CheckStats](docs/CheckStats.md)
 - [LivewatchApi.Contact](docs/Contact.md)
 - [LivewatchApi.MonitoringIp](docs/MonitoringIp.md)


## Documentation for Authorization



### LivewatchToken


- **Type**: API key
- **API key parameter name**: auth-livewatch-token
- **Location**: HTTP header

