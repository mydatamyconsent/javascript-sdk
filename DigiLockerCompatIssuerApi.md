# .DigiLockerCompatIssuerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuerIssuedoc1XmlPost**](DigiLockerCompatIssuerApi.md#issuerIssuedoc1XmlPost) | **POST** /issuer/issuedoc/1/xml | Digilocker Compatible endpoint to Issue Documents.


# **issuerIssuedoc1XmlPost**
> PushUriResponse issuerIssuedoc1XmlPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DigiLockerCompatIssuerApi(configuration);

let body:.DigiLockerCompatIssuerApiIssuerIssuedoc1XmlPostRequest = {
  // PushUriRequest (optional)
  pushUriRequest: {
    uriDetails: {
      aadhaar: "aadhaar_example",
      uri: "uri_example",
      docType: "docType_example",
      docName: "docName_example",
      docId: "docId_example",
      issuedOn: "issuedOn_example",
      validFrom: "validFrom_example",
      validTo: "validTo_example",
      timestamp: "timestamp_example",
      action: "action_example",
    },
    ns2: "ns2_example",
    ver: "ver_example",
    ts: "ts_example",
    txn: "txn_example",
    orgId: "orgId_example",
    keyhash: "keyhash_example",
  },
};

apiInstance.issuerIssuedoc1XmlPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushUriRequest** | **PushUriRequest**|  |


### Return type

**PushUriResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**500** | Server Error |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


