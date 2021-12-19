import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ApplicationUser } from '../models/ApplicationUser';
import { BankAccountType } from '../models/BankAccountType';
import { CategoryIconFontFamily } from '../models/CategoryIconFontFamily';
import { Country } from '../models/Country';
import { CountryState } from '../models/CountryState';
import { DataConsent } from '../models/DataConsent';
import { DataConsentDetailsDto } from '../models/DataConsentDetailsDto';
import { DataConsentIdentifier } from '../models/DataConsentIdentifier';
import { DataConsentRequestModel } from '../models/DataConsentRequestModel';
import { DataConsentRequestedAccountDto } from '../models/DataConsentRequestedAccountDto';
import { DataConsentRequestedDocument } from '../models/DataConsentRequestedDocument';
import { DataConsentRequestedDocumentDto } from '../models/DataConsentRequestedDocumentDto';
import { DataConsentRequestedFaDto } from '../models/DataConsentRequestedFaDto';
import { DataConsentRequestedFinancialAccount } from '../models/DataConsentRequestedFinancialAccount';
import { DataConsentRequesterDto } from '../models/DataConsentRequesterDto';
import { DataConsentRfaFilter } from '../models/DataConsentRfaFilter';
import { DataConsentRfaFilterDto } from '../models/DataConsentRfaFilterDto';
import { DataConsentStatus } from '../models/DataConsentStatus';
import { DataFetchFrequencyUnit } from '../models/DataFetchFrequencyUnit';
import { DataFetchType } from '../models/DataFetchType';
import { DataLifeUnit } from '../models/DataLifeUnit';
import { DataProcessingAgreement } from '../models/DataProcessingAgreement';
import { DataProcessingAgreementPaginatedList } from '../models/DataProcessingAgreementPaginatedList';
import { DataProtectionOfficer } from '../models/DataProtectionOfficer';
import { DataProvider } from '../models/DataProvider';
import { DataProviderPaginatedList } from '../models/DataProviderPaginatedList';
import { DocumentIssueRequest } from '../models/DocumentIssueRequest';
import { DocumentProviderCategory } from '../models/DocumentProviderCategory';
import { FileType } from '../models/FileType';
import { FilterType } from '../models/FilterType';
import { FinancialAccountTypes } from '../models/FinancialAccountTypes';
import { Gender } from '../models/Gender';
import { IdentificationStrategy } from '../models/IdentificationStrategy';
import { Identifier } from '../models/Identifier';
import { IdentifierStringKeyValuePair } from '../models/IdentifierStringKeyValuePair';
import { IdentityClaim } from '../models/IdentityClaim';
import { JsonSchema } from '../models/JsonSchema';
import { Operator } from '../models/Operator';
import { Organization } from '../models/Organization';
import { OrganizationAddress } from '../models/OrganizationAddress';
import { OrganizationAddressType } from '../models/OrganizationAddressType';
import { OrganizationCategory } from '../models/OrganizationCategory';
import { OrganizationFinancialAccount } from '../models/OrganizationFinancialAccount';
import { OrganizationKyoDocument } from '../models/OrganizationKyoDocument';
import { OrganizationMetaData } from '../models/OrganizationMetaData';
import { OrganizationStatus } from '../models/OrganizationStatus';
import { OrganizationType } from '../models/OrganizationType';
import { ProblemDetails } from '../models/ProblemDetails';
import { ProofDocumentType } from '../models/ProofDocumentType';
import { PushUriRequest } from '../models/PushUriRequest';
import { PushUriResponse } from '../models/PushUriResponse';
import { Receiver } from '../models/Receiver';
import { ReceiverType } from '../models/ReceiverType';
import { RefreshToken } from '../models/RefreshToken';
import { Rejection } from '../models/Rejection';
import { SuggestedAccountDto } from '../models/SuggestedAccountDto';
import { Theme } from '../models/Theme';
import { UriDetails } from '../models/UriDetails';

import { ObservableDataConsentRequestsApi } from "./ObservableAPI";
import { DataConsentRequestsApiRequestFactory, DataConsentRequestsApiResponseProcessor} from "../apis/DataConsentRequestsApi";

export interface DataConsentRequestsApiCancelConsentRequestRequest {
    /**
     * consent request id.
     * @type string
     * @memberof DataConsentRequestsApicancelConsentRequest
     */
    requestId: string
}

export interface DataConsentRequestsApiCreateRequestRequest {
    /**
     * MyDataMyConsent.Models.Consents.DataConsentRequestModel.
     * @type DataConsentRequestModel
     * @memberof DataConsentRequestsApicreateRequest
     */
    dataConsentRequestModel?: DataConsentRequestModel
}

export interface DataConsentRequestsApiGetAllConsentRequestsRequest {
    /**
     * 
     * @type DataConsentStatus
     * @memberof DataConsentRequestsApigetAllConsentRequests
     */
    status?: DataConsentStatus
}

export interface DataConsentRequestsApiGetConsentRequestByIdRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentRequestsApigetConsentRequestById
     */
    requestId: string
}

export class ObjectDataConsentRequestsApi {
    private api: ObservableDataConsentRequestsApi

    public constructor(configuration: Configuration, requestFactory?: DataConsentRequestsApiRequestFactory, responseProcessor?: DataConsentRequestsApiResponseProcessor) {
        this.api = new ObservableDataConsentRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * .
     * Cancel a Consent Request by ID.
     * @param param the request object
     */
    public cancelConsentRequest(param: DataConsentRequestsApiCancelConsentRequestRequest, options?: Configuration): Promise<void> {
        return this.api.cancelConsentRequest(param.requestId,  options).toPromise();
    }

    /**
     * Create a consent request.
     * @param param the request object
     */
    public createRequest(param: DataConsentRequestsApiCreateRequestRequest, options?: Configuration): Promise<DataConsent> {
        return this.api.createRequest(param.dataConsentRequestModel,  options).toPromise();
    }

    /**
     * Get all Consent Requests.
     * @param param the request object
     */
    public getAllConsentRequests(param: DataConsentRequestsApiGetAllConsentRequestsRequest, options?: Configuration): Promise<any> {
        return this.api.getAllConsentRequests(param.status,  options).toPromise();
    }

    /**
     * Get a Consent Request by ID.
     * @param param the request object
     */
    public getConsentRequestById(param: DataConsentRequestsApiGetConsentRequestByIdRequest, options?: Configuration): Promise<DataConsentDetailsDto> {
        return this.api.getConsentRequestById(param.requestId,  options).toPromise();
    }

}

import { ObservableDataConsentsApi } from "./ObservableAPI";
import { DataConsentsApiRequestFactory, DataConsentsApiResponseProcessor} from "../apis/DataConsentsApi";

export interface DataConsentsApiV1ConsentsConsentIdAccountsAccountIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdGet
     */
    consentId: string
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdGet
     */
    accountId: string
}

export interface DataConsentsApiV1ConsentsConsentIdAccountsAccountIdInsightsGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdInsightsGet
     */
    consentId: string
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdInsightsGet
     */
    accountId: string
}

export interface DataConsentsApiV1ConsentsConsentIdAccountsAccountIdTransactionsGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdTransactionsGet
     */
    consentId: string
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdTransactionsGet
     */
    accountId: string
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdTransactionsGet
     */
    filters?: string
    /**
     * 
     * @type Date
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdTransactionsGet
     */
    fromDate?: Date
    /**
     * 
     * @type Date
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsAccountIdTransactionsGet
     */
    toDate?: Date
}

export interface DataConsentsApiV1ConsentsConsentIdAccountsGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdAccountsGet
     */
    consentId: string
}

export interface DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdAnalysisGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdDocumentsDocumentIdAnalysisGet
     */
    consentId: string
    /**
     * Document Id.
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdDocumentsDocumentIdAnalysisGet
     */
    documentId: string
}

export interface DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdDownloadGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdDocumentsDocumentIdDownloadGet
     */
    consentId: string
    /**
     * Document Id.
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdDocumentsDocumentIdDownloadGet
     */
    documentId: string
}

export interface DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdDocumentsDocumentIdGet
     */
    consentId: string
    /**
     * Document Id.
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdDocumentsDocumentIdGet
     */
    documentId: string
}

export interface DataConsentsApiV1ConsentsConsentIdDocumentsGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdDocumentsGet
     */
    consentId: string
}

export interface DataConsentsApiV1ConsentsConsentIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DataConsentsApiv1ConsentsConsentIdGet
     */
    consentId: string
}

export interface DataConsentsApiV1ConsentsGetRequest {
    /**
     * MyDataMyConsent.Domain.Entities.ConsentAggregate.Enums.DataConsentStatus.
     * @type DataConsentStatus
     * @memberof DataConsentsApiv1ConsentsGet
     */
    status?: DataConsentStatus
    /**
     * System.DateTime.
     * @type Date
     * @memberof DataConsentsApiv1ConsentsGet
     */
    startDate?: Date
    /**
     * till dateSystem.DateTime.
     * @type Date
     * @memberof DataConsentsApiv1ConsentsGet
     */
    endDate?: Date
}

export class ObjectDataConsentsApi {
    private api: ObservableDataConsentsApi

    public constructor(configuration: Configuration, requestFactory?: DataConsentsApiRequestFactory, responseProcessor?: DataConsentsApiResponseProcessor) {
        this.api = new ObservableDataConsentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get consented financial account details.
     * @param param the request object
     */
    public v1ConsentsConsentIdAccountsAccountIdGet(param: DataConsentsApiV1ConsentsConsentIdAccountsAccountIdGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdAccountsAccountIdGet(param.consentId, param.accountId,  options).toPromise();
    }

    /**
     * Get consented financial account insights.
     * @param param the request object
     */
    public v1ConsentsConsentIdAccountsAccountIdInsightsGet(param: DataConsentsApiV1ConsentsConsentIdAccountsAccountIdInsightsGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdAccountsAccountIdInsightsGet(param.consentId, param.accountId,  options).toPromise();
    }

    /**
     * Get consented financial account transactions.
     * @param param the request object
     */
    public v1ConsentsConsentIdAccountsAccountIdTransactionsGet(param: DataConsentsApiV1ConsentsConsentIdAccountsAccountIdTransactionsGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdAccountsAccountIdTransactionsGet(param.consentId, param.accountId, param.filters, param.fromDate, param.toDate,  options).toPromise();
    }

    /**
     * Get all accounts in a consent.
     * @param param the request object
     */
    public v1ConsentsConsentIdAccountsGet(param: DataConsentsApiV1ConsentsConsentIdAccountsGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdAccountsGet(param.consentId,  options).toPromise();
    }

    /**
     * Get analysis of a consented document.
     * @param param the request object
     */
    public v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(param: DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdAnalysisGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(param.consentId, param.documentId,  options).toPromise();
    }

    /**
     * Download a consented document.
     * @param param the request object
     */
    public v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(param: DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdDownloadGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(param.consentId, param.documentId,  options).toPromise();
    }

    /**
     * Get consented document details.
     * @param param the request object
     */
    public v1ConsentsConsentIdDocumentsDocumentIdGet(param: DataConsentsApiV1ConsentsConsentIdDocumentsDocumentIdGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdDocumentsDocumentIdGet(param.consentId, param.documentId,  options).toPromise();
    }

    /**
     * Get all documents in a consent.
     * @param param the request object
     */
    public v1ConsentsConsentIdDocumentsGet(param: DataConsentsApiV1ConsentsConsentIdDocumentsGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdDocumentsGet(param.consentId,  options).toPromise();
    }

    /**
     * Get consent details by consent id.
     * @param param the request object
     */
    public v1ConsentsConsentIdGet(param: DataConsentsApiV1ConsentsConsentIdGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsConsentIdGet(param.consentId,  options).toPromise();
    }

    /**
     * Get all consents filtered by status and time.
     * @param param the request object
     */
    public v1ConsentsGet(param: DataConsentsApiV1ConsentsGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1ConsentsGet(param.status, param.startDate, param.endDate,  options).toPromise();
    }

}

import { ObservableDataProcessingAgreementsApi } from "./ObservableAPI";
import { DataProcessingAgreementsApiRequestFactory, DataProcessingAgreementsApiResponseProcessor} from "../apis/DataProcessingAgreementsApi";

export interface DataProcessingAgreementsApiV1DataAgreementsGetRequest {
    /**
     * Page number.
     * @type number
     * @memberof DataProcessingAgreementsApiv1DataAgreementsGet
     */
    pageNo?: number
    /**
     * Number of items to return.
     * @type number
     * @memberof DataProcessingAgreementsApiv1DataAgreementsGet
     */
    pageSize?: number
}

export interface DataProcessingAgreementsApiV1DataAgreementsIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof DataProcessingAgreementsApiv1DataAgreementsIdDelete
     */
    id: string
}

export interface DataProcessingAgreementsApiV1DataAgreementsIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DataProcessingAgreementsApiv1DataAgreementsIdGet
     */
    id: string
}

export interface DataProcessingAgreementsApiV1DataAgreementsIdPutRequest {
    /**
     * 
     * @type string
     * @memberof DataProcessingAgreementsApiv1DataAgreementsIdPut
     */
    id: string
    /**
     * 
     * @type DataProcessingAgreement
     * @memberof DataProcessingAgreementsApiv1DataAgreementsIdPut
     */
    dataProcessingAgreement?: DataProcessingAgreement
}

export interface DataProcessingAgreementsApiV1DataAgreementsIdTerminatePutRequest {
    /**
     * 
     * @type string
     * @memberof DataProcessingAgreementsApiv1DataAgreementsIdTerminatePut
     */
    id: string
}

export interface DataProcessingAgreementsApiV1DataAgreementsPostRequest {
    /**
     * 
     * @type DataProcessingAgreement
     * @memberof DataProcessingAgreementsApiv1DataAgreementsPost
     */
    dataProcessingAgreement?: DataProcessingAgreement
}

export class ObjectDataProcessingAgreementsApi {
    private api: ObservableDataProcessingAgreementsApi

    public constructor(configuration: Configuration, requestFactory?: DataProcessingAgreementsApiRequestFactory, responseProcessor?: DataProcessingAgreementsApiResponseProcessor) {
        this.api = new ObservableDataProcessingAgreementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all data processing agreements.
     * @param param the request object
     */
    public v1DataAgreementsGet(param: DataProcessingAgreementsApiV1DataAgreementsGetRequest, options?: Configuration): Promise<DataProcessingAgreementPaginatedList> {
        return this.api.v1DataAgreementsGet(param.pageNo, param.pageSize,  options).toPromise();
    }

    /**
     * Delete a data processing agreement. This will not delete a published or a agreement in use with consents.
     * @param param the request object
     */
    public v1DataAgreementsIdDelete(param: DataProcessingAgreementsApiV1DataAgreementsIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.v1DataAgreementsIdDelete(param.id,  options).toPromise();
    }

    /**
     * Get data processing agreement by Id.
     * @param param the request object
     */
    public v1DataAgreementsIdGet(param: DataProcessingAgreementsApiV1DataAgreementsIdGetRequest, options?: Configuration): Promise<DataProcessingAgreement> {
        return this.api.v1DataAgreementsIdGet(param.id,  options).toPromise();
    }

    /**
     * Update a data processing agreement.
     * @param param the request object
     */
    public v1DataAgreementsIdPut(param: DataProcessingAgreementsApiV1DataAgreementsIdPutRequest, options?: Configuration): Promise<DataProcessingAgreement> {
        return this.api.v1DataAgreementsIdPut(param.id, param.dataProcessingAgreement,  options).toPromise();
    }

    /**
     * Terminate a data processing agreement.
     * @param param the request object
     */
    public v1DataAgreementsIdTerminatePut(param: DataProcessingAgreementsApiV1DataAgreementsIdTerminatePutRequest, options?: Configuration): Promise<void> {
        return this.api.v1DataAgreementsIdTerminatePut(param.id,  options).toPromise();
    }

    /**
     * Create a data processing agreement.
     * @param param the request object
     */
    public v1DataAgreementsPost(param: DataProcessingAgreementsApiV1DataAgreementsPostRequest, options?: Configuration): Promise<DataProcessingAgreement> {
        return this.api.v1DataAgreementsPost(param.dataProcessingAgreement,  options).toPromise();
    }

}

import { ObservableDataProviderDiscoveryApi } from "./ObservableAPI";
import { DataProviderDiscoveryApiRequestFactory, DataProviderDiscoveryApiResponseProcessor} from "../apis/DataProviderDiscoveryApi";

export interface DataProviderDiscoveryApiV1DataProvidersGetRequest {
    /**
     * Account type.
     * @type string
     * @memberof DataProviderDiscoveryApiv1DataProvidersGet
     */
    accountType?: string
    /**
     * Document type.
     * @type string
     * @memberof DataProviderDiscoveryApiv1DataProvidersGet
     */
    documentType?: string
    /**
     * Organization category.
     * @type string
     * @memberof DataProviderDiscoveryApiv1DataProvidersGet
     */
    organizationCategory?: string
    /**
     * Page number.
     * @type number
     * @memberof DataProviderDiscoveryApiv1DataProvidersGet
     */
    pageNo?: number
    /**
     * Page size.
     * @type number
     * @memberof DataProviderDiscoveryApiv1DataProvidersGet
     */
    pageSize?: number
    /**
     * ISO2 Country code.
     * @type string
     * @memberof DataProviderDiscoveryApiv1DataProvidersGet
     */
    country?: string
}

export interface DataProviderDiscoveryApiV1DataProvidersProviderIdGetRequest {
    /**
     * Provider Id.
     * @type string
     * @memberof DataProviderDiscoveryApiv1DataProvidersProviderIdGet
     */
    providerId: string
}

export class ObjectDataProviderDiscoveryApi {
    private api: ObservableDataProviderDiscoveryApi

    public constructor(configuration: Configuration, requestFactory?: DataProviderDiscoveryApiRequestFactory, responseProcessor?: DataProviderDiscoveryApiResponseProcessor) {
        this.api = new ObservableDataProviderDiscoveryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * .
     * Discover all data providers in My Data My Consent by country and filters.
     * @param param the request object
     */
    public v1DataProvidersGet(param: DataProviderDiscoveryApiV1DataProvidersGetRequest, options?: Configuration): Promise<DataProviderPaginatedList> {
        return this.api.v1DataProvidersGet(param.accountType, param.documentType, param.organizationCategory, param.pageNo, param.pageSize, param.country,  options).toPromise();
    }

    /**
     * .
     * Get a Data Provider details.
     * @param param the request object
     */
    public v1DataProvidersProviderIdGet(param: DataProviderDiscoveryApiV1DataProvidersProviderIdGetRequest, options?: Configuration): Promise<DataProvider> {
        return this.api.v1DataProvidersProviderIdGet(param.providerId,  options).toPromise();
    }

}

import { ObservableDigiLockerCompatIssuerApi } from "./ObservableAPI";
import { DigiLockerCompatIssuerApiRequestFactory, DigiLockerCompatIssuerApiResponseProcessor} from "../apis/DigiLockerCompatIssuerApi";

export interface DigiLockerCompatIssuerApiIssuerIssuedoc1XmlPostRequest {
    /**
     * 
     * @type PushUriRequest
     * @memberof DigiLockerCompatIssuerApiissuerIssuedoc1XmlPost
     */
    pushUriRequest?: PushUriRequest
}

export class ObjectDigiLockerCompatIssuerApi {
    private api: ObservableDigiLockerCompatIssuerApi

    public constructor(configuration: Configuration, requestFactory?: DigiLockerCompatIssuerApiRequestFactory, responseProcessor?: DigiLockerCompatIssuerApiResponseProcessor) {
        this.api = new ObservableDigiLockerCompatIssuerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Digilocker Compatible endpoint to Issue Documents.
     * @param param the request object
     */
    public issuerIssuedoc1XmlPost(param: DigiLockerCompatIssuerApiIssuerIssuedoc1XmlPostRequest, options?: Configuration): Promise<PushUriResponse> {
        return this.api.issuerIssuedoc1XmlPost(param.pushUriRequest,  options).toPromise();
    }

}

import { ObservableDocumentsApi } from "./ObservableAPI";
import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";

export interface DocumentsApiIssueDocumentRequest {
    /**
     * 
     * @type DocumentIssueRequest
     * @memberof DocumentsApiissueDocument
     */
    documentIssueRequest?: DocumentIssueRequest
}

export interface DocumentsApiV1DocumentsIssuedDocumentIdGetRequest {
    /**
     * Document id.
     * @type string
     * @memberof DocumentsApiv1DocumentsIssuedDocumentIdGet
     */
    documentId: string
}

export interface DocumentsApiV1DocumentsIssuedGetRequest {
    /**
     * 
     * @type string
     * @memberof DocumentsApiv1DocumentsIssuedGet
     */
    documentTypeId?: string
    /**
     * 
     * @type Date
     * @memberof DocumentsApiv1DocumentsIssuedGet
     */
    fromDateTime?: Date
    /**
     * 
     * @type Date
     * @memberof DocumentsApiv1DocumentsIssuedGet
     */
    toDateTime?: Date
    /**
     * 
     * @type number
     * @memberof DocumentsApiv1DocumentsIssuedGet
     */
    pageSize?: number
    /**
     * 
     * @type number
     * @memberof DocumentsApiv1DocumentsIssuedGet
     */
    pageNo?: number
}

export interface DocumentsApiV1DocumentsTypesGetRequest {
    /**
     * 
     * @type number
     * @memberof DocumentsApiv1DocumentsTypesGet
     */
    pageSize?: number
    /**
     * 
     * @type number
     * @memberof DocumentsApiv1DocumentsTypesGet
     */
    pageNo?: number
}

export class ObjectDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(configuration: Configuration, requestFactory?: DocumentsApiRequestFactory, responseProcessor?: DocumentsApiResponseProcessor) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Issue a new document.
     * @param param the request object
     */
    public issueDocument(param: DocumentsApiIssueDocumentRequest, options?: Configuration): Promise<boolean> {
        return this.api.issueDocument(param.documentIssueRequest,  options).toPromise();
    }

    /**
     * Get issued document.
     * @param param the request object
     */
    public v1DocumentsIssuedDocumentIdGet(param: DocumentsApiV1DocumentsIssuedDocumentIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1DocumentsIssuedDocumentIdGet(param.documentId,  options).toPromise();
    }

    /**
     * Get issued documents.
     * @param param the request object
     */
    public v1DocumentsIssuedGet(param: DocumentsApiV1DocumentsIssuedGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1DocumentsIssuedGet(param.documentTypeId, param.fromDateTime, param.toDateTime, param.pageSize, param.pageNo,  options).toPromise();
    }

    /**
     * Get registered document types.
     * @param param the request object
     */
    public v1DocumentsTypesGet(param: DocumentsApiV1DocumentsTypesGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1DocumentsTypesGet(param.pageSize, param.pageNo,  options).toPromise();
    }

}
