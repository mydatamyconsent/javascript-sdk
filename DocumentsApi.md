# .DocumentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueDocument**](DocumentsApi.md#issueDocument) | **POST** /v1/documents/issue | Issue a new document.
[**v1DocumentsIssuedDocumentIdGet**](DocumentsApi.md#v1DocumentsIssuedDocumentIdGet) | **GET** /v1/documents/issued/{documentId} | Get issued document.
[**v1DocumentsIssuedGet**](DocumentsApi.md#v1DocumentsIssuedGet) | **GET** /v1/documents/issued | Get issued documents.
[**v1DocumentsTypesGet**](DocumentsApi.md#v1DocumentsTypesGet) | **GET** /v1/documents/types | Get registered document types.


# **issueDocument**
> boolean issueDocument()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiIssueDocumentRequest = {
  // DocumentIssueRequest (optional)
  documentIssueRequest: {
    documentTypeId: "documentTypeId_example",
    identifier: "identifier_example",
    name: "name_example",
    description: "description_example",
    receiver: {
      type: "Individual",
      identifiers: [
        {
          key: "Email",
          value: "value_example",
        },
      ],
      identificationStrategy: "MatchAtLeastOneIdentifier",
    },
    expiresAtUtc: "expiresAtUtc_example",
    base64PDFDocument: "base64PDFDocument_example",
    metadata: null,
  },
};

apiInstance.issueDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentIssueRequest** | **DocumentIssueRequest**|  |


### Return type

**boolean**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |
**200** | Success |  -  |
**400** | Bad Request |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DocumentsIssuedDocumentIdGet**
> v1DocumentsIssuedDocumentIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiV1DocumentsIssuedDocumentIdGetRequest = {
  // string | Document id.
  documentId: "documentId_example",
};

apiInstance.v1DocumentsIssuedDocumentIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **string** | Document id. | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DocumentsIssuedGet**
> v1DocumentsIssuedGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiV1DocumentsIssuedGetRequest = {
  // string (optional)
  documentTypeId: "documentTypeId_example",
  // Date (optional)
  fromDateTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  toDateTime: new Date('1970-01-01T00:00:00.00Z'),
  // number (optional)
  pageSize: 25,
  // number (optional)
  pageNo: 1,
};

apiInstance.v1DocumentsIssuedGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentTypeId** | **string** |  | (optional) defaults to undefined
 **fromDateTime** | [**Date**] |  | (optional) defaults to undefined
 **toDateTime** | [**Date**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 25
 **pageNo** | [**number**] |  | (optional) defaults to 1


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DocumentsTypesGet**
> v1DocumentsTypesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiV1DocumentsTypesGetRequest = {
  // number (optional)
  pageSize: 1,
  // number (optional)
  pageNo: 1,
};

apiInstance.v1DocumentsTypesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] |  | (optional) defaults to undefined
 **pageNo** | [**number**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


