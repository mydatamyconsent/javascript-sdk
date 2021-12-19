# .DataConsentRequestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelConsentRequest**](DataConsentRequestsApi.md#cancelConsentRequest) | **DELETE** /v1/consent-requests/{requestId}/cancel | Cancel a Consent Request by ID.
[**createRequest**](DataConsentRequestsApi.md#createRequest) | **POST** /v1/consent-requests | Create a consent request.
[**getAllConsentRequests**](DataConsentRequestsApi.md#getAllConsentRequests) | **GET** /v1/consent-requests | Get all Consent Requests.
[**getConsentRequestById**](DataConsentRequestsApi.md#getConsentRequestById) | **GET** /v1/consent-requests/{requestId} | Get a Consent Request by ID.


# **cancelConsentRequest**
> void cancelConsentRequest()

.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentRequestsApi(configuration);

let body:.DataConsentRequestsApiCancelConsentRequestRequest = {
  // string | consent request id.
  requestId: "requestId_example",
};

apiInstance.cancelConsentRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **string** | consent request id. | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createRequest**
> DataConsent createRequest()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentRequestsApi(configuration);

let body:.DataConsentRequestsApiCreateRequestRequest = {
  // DataConsentRequestModel | MyDataMyConsent.Models.Consents.DataConsentRequestModel. (optional)
  dataConsentRequestModel: {
    organizationId: "organizationId_example",
    transactionId: "transactionId_example",
    identifiers: {
      "key": "key_example",
    },
    startDateTime: new Date('1970-01-01T00:00:00.00Z'),
    expiryDateTime: new Date('1970-01-01T00:00:00.00Z'),
    description: "description_example",
    purposeCode: "purposeCode_example",
    purposeLink: "purposeLink_example",
    dataLifeUnit: "Month",
    dataLifeValue: 1,
    dataFetchFrequencyUnit: "Hourly",
    dataFetchFrequencyUnitValue: 1,
    dataFetchType: "Onetime",
    agreementId: "agreementId_example",
    identityClaims: [
      "Email",
    ],
    financialAccounts: [
      {
        drn: "drn_example",
        fromDatetime: new Date('1970-01-01T00:00:00.00Z'),
        toDatetime: new Date('1970-01-01T00:00:00.00Z'),
        providerId: "providerId_example",
        accountType: "SavingsBankAccount",
        accountIdentifier: "accountIdentifier_example",
        filters: [
          {
            filterType: "TransactionType",
            operator: "EqualTo",
            value: "value_example",
          },
        ],
      },
    ],
    documents: [
      {
        drn: "drn_example",
        fromDatetime: new Date('1970-01-01T00:00:00.00Z'),
        toDatetime: new Date('1970-01-01T00:00:00.00Z'),
        providerId: "providerId_example",
        documentTypeId: "documentTypeId_example",
        documentIdentifier: "documentIdentifier_example",
      },
    ],
  },
};

apiInstance.createRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataConsentRequestModel** | **DataConsentRequestModel**| MyDataMyConsent.Models.Consents.DataConsentRequestModel. |


### Return type

**DataConsent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllConsentRequests**
> any getAllConsentRequests()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentRequestsApi(configuration);

let body:.DataConsentRequestsApiGetAllConsentRequestsRequest = {
  // DataConsentStatus (optional)
  status: "Pending",
};

apiInstance.getAllConsentRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **DataConsentStatus** |  | (optional) defaults to undefined


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

# **getConsentRequestById**
> DataConsentDetailsDto getConsentRequestById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataConsentRequestsApi(configuration);

let body:.DataConsentRequestsApiGetConsentRequestByIdRequest = {
  // string
  requestId: "requestId_example",
};

apiInstance.getConsentRequestById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **string** |  | defaults to undefined


### Return type

**DataConsentDetailsDto**

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


