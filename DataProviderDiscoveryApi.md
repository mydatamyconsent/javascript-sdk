# .DataProviderDiscoveryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1DataProvidersGet**](DataProviderDiscoveryApi.md#v1DataProvidersGet) | **GET** /v1/data-providers | Discover all data providers in My Data My Consent by country and filters.
[**v1DataProvidersProviderIdGet**](DataProviderDiscoveryApi.md#v1DataProvidersProviderIdGet) | **GET** /v1/data-providers/{providerId} | Get a Data Provider details.


# **v1DataProvidersGet**
> DataProviderPaginatedList v1DataProvidersGet()

.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataProviderDiscoveryApi(configuration);

let body:.DataProviderDiscoveryApiV1DataProvidersGetRequest = {
  // string | Account type. (optional)
  accountType: "accountType_example",
  // string | Document type. (optional)
  documentType: "documentType_example",
  // string | Organization category. (optional)
  organizationCategory: "organizationCategory_example",
  // number | Page number. (optional)
  pageNo: 1,
  // number | Page size. (optional)
  pageSize: 1,
  // string | ISO2 Country code. (optional)
  country: "IN",
};

apiInstance.v1DataProvidersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountType** | [**string**] | Account type. | (optional) defaults to undefined
 **documentType** | [**string**] | Document type. | (optional) defaults to undefined
 **organizationCategory** | [**string**] | Organization category. | (optional) defaults to undefined
 **pageNo** | [**number**] | Page number. | (optional) defaults to undefined
 **pageSize** | [**number**] | Page size. | (optional) defaults to undefined
 **country** | [**string**] | ISO2 Country code. | (optional) defaults to 'IN'


### Return type

**DataProviderPaginatedList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1DataProvidersProviderIdGet**
> DataProvider v1DataProvidersProviderIdGet()

.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataProviderDiscoveryApi(configuration);

let body:.DataProviderDiscoveryApiV1DataProvidersProviderIdGetRequest = {
  // string | Provider Id.
  providerId: "providerId_example",
};

apiInstance.v1DataProvidersProviderIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**string**] | Provider Id. | defaults to undefined


### Return type

**DataProvider**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**401** | Unauthorized. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


