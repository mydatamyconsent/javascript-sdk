# .DataConsentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ConsentsConsentIdAccountsAccountIdGet**](DataConsentsApi.md#v1ConsentsConsentIdAccountsAccountIdGet) | **GET** /v1/consents/{consentId}/accounts/{accountId} | Get consented financial account details.
[**v1ConsentsConsentIdAccountsAccountIdInsightsGet**](DataConsentsApi.md#v1ConsentsConsentIdAccountsAccountIdInsightsGet) | **GET** /v1/consents/{consentId}/accounts/{accountId}/insights | Get consented financial account insights.
[**v1ConsentsConsentIdAccountsAccountIdTransactionsGet**](DataConsentsApi.md#v1ConsentsConsentIdAccountsAccountIdTransactionsGet) | **GET** /v1/consents/{consentId}/accounts/{accountId}/transactions | Get consented financial account transactions.
[**v1ConsentsConsentIdAccountsGet**](DataConsentsApi.md#v1ConsentsConsentIdAccountsGet) | **GET** /v1/consents/{consentId}/accounts | Get all accounts in a consent.
[**v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet**](DataConsentsApi.md#v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet) | **GET** /v1/consents/{consentId}/documents/{documentId}/analysis | Get analysis of a consented document.
[**v1ConsentsConsentIdDocumentsDocumentIdDownloadGet**](DataConsentsApi.md#v1ConsentsConsentIdDocumentsDocumentIdDownloadGet) | **GET** /v1/consents/{consentId}/documents/{documentId}/download | Download a consented document.
[**v1ConsentsConsentIdDocumentsDocumentIdGet**](DataConsentsApi.md#v1ConsentsConsentIdDocumentsDocumentIdGet) | **GET** /v1/consents/{consentId}/documents/{documentId} | Get consented document details.
[**v1ConsentsConsentIdDocumentsGet**](DataConsentsApi.md#v1ConsentsConsentIdDocumentsGet) | **GET** /v1/consents/{consentId}/documents | Get all documents in a consent.
[**v1ConsentsConsentIdGet**](DataConsentsApi.md#v1ConsentsConsentIdGet) | **GET** /v1/consents/{consentId} | Get consent details by consent id.
[**v1ConsentsGet**](DataConsentsApi.md#v1ConsentsGet) | **GET** /v1/consents | Get all consents filtered by status and time.


# **v1ConsentsConsentIdAccountsAccountIdGet**
> any v1ConsentsConsentIdAccountsAccountIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdAccountsAccountIdGetRequest = {
  // string
  consentId: "consentId_example",
  // string
  accountId: "accountId_example",
};

apiInstance.v1ConsentsConsentIdAccountsAccountIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined
 **accountId** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdAccountsAccountIdInsightsGet**
> any v1ConsentsConsentIdAccountsAccountIdInsightsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdAccountsAccountIdInsightsGetRequest = {
  // string
  consentId: "consentId_example",
  // string
  accountId: "accountId_example",
};

apiInstance.v1ConsentsConsentIdAccountsAccountIdInsightsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined
 **accountId** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdAccountsAccountIdTransactionsGet**
> any v1ConsentsConsentIdAccountsAccountIdTransactionsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdAccountsAccountIdTransactionsGetRequest = {
  // string
  consentId: "consentId_example",
  // string
  accountId: "accountId_example",
  // string (optional)
  filters: "filters_example",
  // Date (optional)
  fromDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  toDate: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.v1ConsentsConsentIdAccountsAccountIdTransactionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined
 **accountId** | [**string**] |  | defaults to undefined
 **filters** | [**string**] |  | (optional) defaults to undefined
 **fromDate** | [**Date**] |  | (optional) defaults to undefined
 **toDate** | [**Date**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdAccountsGet**
> any v1ConsentsConsentIdAccountsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdAccountsGetRequest = {
  // string
  consentId: "consentId_example",
};

apiInstance.v1ConsentsConsentIdAccountsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet**
> any v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdAnalysisGetRequest = {
  // string
  consentId: "consentId_example",
  // string | Document Id.
  documentId: "documentId_example",
};

apiInstance.v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined
 **documentId** | [**string**] | Document Id. | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdDocumentsDocumentIdDownloadGet**
> any v1ConsentsConsentIdDocumentsDocumentIdDownloadGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdDownloadGetRequest = {
  // string
  consentId: "consentId_example",
  // string | Document Id.
  documentId: "documentId_example",
};

apiInstance.v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined
 **documentId** | [**string**] | Document Id. | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdDocumentsDocumentIdGet**
> any v1ConsentsConsentIdDocumentsDocumentIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdGetRequest = {
  // string
  consentId: "consentId_example",
  // string | Document Id.
  documentId: "documentId_example",
};

apiInstance.v1ConsentsConsentIdDocumentsDocumentIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined
 **documentId** | [**string**] | Document Id. | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdDocumentsGet**
> any v1ConsentsConsentIdDocumentsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdDocumentsGetRequest = {
  // string
  consentId: "consentId_example",
};

apiInstance.v1ConsentsConsentIdDocumentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsConsentIdGet**
> any v1ConsentsConsentIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsConsentIdGetRequest = {
  // string
  consentId: "consentId_example",
};

apiInstance.v1ConsentsConsentIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1ConsentsGet**
> any v1ConsentsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentsApi(configuration);

let body:.DataConsentsApiV1ConsentsGetRequest = {
  // DataConsentStatus | MyDataMyConsent.Domain.Entities.ConsentAggregate.Enums.DataConsentStatus. (optional)
  status: "Pending",
  // Date | System.DateTime. (optional)
  startDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | till dateSystem.DateTime. (optional)
  endDate: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.v1ConsentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **DataConsentStatus** | MyDataMyConsent.Domain.Entities.ConsentAggregate.Enums.DataConsentStatus. | (optional) defaults to undefined
 **startDate** | [**Date**] | System.DateTime. | (optional) defaults to undefined
 **endDate** | [**Date**] | till dateSystem.DateTime. | (optional) defaults to undefined


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


