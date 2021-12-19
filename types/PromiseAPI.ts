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
import { ObservableDataConsentRequestsApi } from './ObservableAPI';

import { DataConsentRequestsApiRequestFactory, DataConsentRequestsApiResponseProcessor} from "../apis/DataConsentRequestsApi";
export class PromiseDataConsentRequestsApi {
    private api: ObservableDataConsentRequestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataConsentRequestsApiRequestFactory,
        responseProcessor?: DataConsentRequestsApiResponseProcessor
    ) {
        this.api = new ObservableDataConsentRequestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * .
     * Cancel a Consent Request by ID.
     * @param requestId consent request id.
     */
    public cancelConsentRequest(requestId: string, _options?: Configuration): Promise<void> {
        const result = this.api.cancelConsentRequest(requestId, _options);
        return result.toPromise();
    }

    /**
     * Create a consent request.
     * @param dataConsentRequestModel MyDataMyConsent.Models.Consents.DataConsentRequestModel.
     */
    public createRequest(dataConsentRequestModel?: DataConsentRequestModel, _options?: Configuration): Promise<DataConsent> {
        const result = this.api.createRequest(dataConsentRequestModel, _options);
        return result.toPromise();
    }

    /**
     * Get all Consent Requests.
     * @param status 
     */
    public getAllConsentRequests(status?: DataConsentStatus, _options?: Configuration): Promise<any> {
        const result = this.api.getAllConsentRequests(status, _options);
        return result.toPromise();
    }

    /**
     * Get a Consent Request by ID.
     * @param requestId 
     */
    public getConsentRequestById(requestId: string, _options?: Configuration): Promise<DataConsentDetailsDto> {
        const result = this.api.getConsentRequestById(requestId, _options);
        return result.toPromise();
    }


}



import { ObservableDataConsentsApi } from './ObservableAPI';

import { DataConsentsApiRequestFactory, DataConsentsApiResponseProcessor} from "../apis/DataConsentsApi";
export class PromiseDataConsentsApi {
    private api: ObservableDataConsentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataConsentsApiRequestFactory,
        responseProcessor?: DataConsentsApiResponseProcessor
    ) {
        this.api = new ObservableDataConsentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get consented financial account details.
     * @param consentId 
     * @param accountId 
     */
    public v1ConsentsConsentIdAccountsAccountIdGet(consentId: string, accountId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdAccountsAccountIdGet(consentId, accountId, _options);
        return result.toPromise();
    }

    /**
     * Get consented financial account insights.
     * @param consentId 
     * @param accountId 
     */
    public v1ConsentsConsentIdAccountsAccountIdInsightsGet(consentId: string, accountId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdAccountsAccountIdInsightsGet(consentId, accountId, _options);
        return result.toPromise();
    }

    /**
     * Get consented financial account transactions.
     * @param consentId 
     * @param accountId 
     * @param filters 
     * @param fromDate 
     * @param toDate 
     */
    public v1ConsentsConsentIdAccountsAccountIdTransactionsGet(consentId: string, accountId: string, filters?: string, fromDate?: Date, toDate?: Date, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdAccountsAccountIdTransactionsGet(consentId, accountId, filters, fromDate, toDate, _options);
        return result.toPromise();
    }

    /**
     * Get all accounts in a consent.
     * @param consentId 
     */
    public v1ConsentsConsentIdAccountsGet(consentId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdAccountsGet(consentId, _options);
        return result.toPromise();
    }

    /**
     * Get analysis of a consented document.
     * @param consentId 
     * @param documentId Document Id.
     */
    public v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(consentId: string, documentId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(consentId, documentId, _options);
        return result.toPromise();
    }

    /**
     * Download a consented document.
     * @param consentId 
     * @param documentId Document Id.
     */
    public v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(consentId: string, documentId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(consentId, documentId, _options);
        return result.toPromise();
    }

    /**
     * Get consented document details.
     * @param consentId 
     * @param documentId Document Id.
     */
    public v1ConsentsConsentIdDocumentsDocumentIdGet(consentId: string, documentId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdDocumentsDocumentIdGet(consentId, documentId, _options);
        return result.toPromise();
    }

    /**
     * Get all documents in a consent.
     * @param consentId 
     */
    public v1ConsentsConsentIdDocumentsGet(consentId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdDocumentsGet(consentId, _options);
        return result.toPromise();
    }

    /**
     * Get consent details by consent id.
     * @param consentId 
     */
    public v1ConsentsConsentIdGet(consentId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsConsentIdGet(consentId, _options);
        return result.toPromise();
    }

    /**
     * Get all consents filtered by status and time.
     * @param status MyDataMyConsent.Domain.Entities.ConsentAggregate.Enums.DataConsentStatus.
     * @param startDate System.DateTime.
     * @param endDate till dateSystem.DateTime.
     */
    public v1ConsentsGet(status?: DataConsentStatus, startDate?: Date, endDate?: Date, _options?: Configuration): Promise<any> {
        const result = this.api.v1ConsentsGet(status, startDate, endDate, _options);
        return result.toPromise();
    }


}



import { ObservableDataProcessingAgreementsApi } from './ObservableAPI';

import { DataProcessingAgreementsApiRequestFactory, DataProcessingAgreementsApiResponseProcessor} from "../apis/DataProcessingAgreementsApi";
export class PromiseDataProcessingAgreementsApi {
    private api: ObservableDataProcessingAgreementsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataProcessingAgreementsApiRequestFactory,
        responseProcessor?: DataProcessingAgreementsApiResponseProcessor
    ) {
        this.api = new ObservableDataProcessingAgreementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all data processing agreements.
     * @param pageNo Page number.
     * @param pageSize Number of items to return.
     */
    public v1DataAgreementsGet(pageNo?: number, pageSize?: number, _options?: Configuration): Promise<DataProcessingAgreementPaginatedList> {
        const result = this.api.v1DataAgreementsGet(pageNo, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Delete a data processing agreement. This will not delete a published or a agreement in use with consents.
     * @param id 
     */
    public v1DataAgreementsIdDelete(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DataAgreementsIdDelete(id, _options);
        return result.toPromise();
    }

    /**
     * Get data processing agreement by Id.
     * @param id 
     */
    public v1DataAgreementsIdGet(id: string, _options?: Configuration): Promise<DataProcessingAgreement> {
        const result = this.api.v1DataAgreementsIdGet(id, _options);
        return result.toPromise();
    }

    /**
     * Update a data processing agreement.
     * @param id 
     * @param dataProcessingAgreement 
     */
    public v1DataAgreementsIdPut(id: string, dataProcessingAgreement?: DataProcessingAgreement, _options?: Configuration): Promise<DataProcessingAgreement> {
        const result = this.api.v1DataAgreementsIdPut(id, dataProcessingAgreement, _options);
        return result.toPromise();
    }

    /**
     * Terminate a data processing agreement.
     * @param id 
     */
    public v1DataAgreementsIdTerminatePut(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DataAgreementsIdTerminatePut(id, _options);
        return result.toPromise();
    }

    /**
     * Create a data processing agreement.
     * @param dataProcessingAgreement 
     */
    public v1DataAgreementsPost(dataProcessingAgreement?: DataProcessingAgreement, _options?: Configuration): Promise<DataProcessingAgreement> {
        const result = this.api.v1DataAgreementsPost(dataProcessingAgreement, _options);
        return result.toPromise();
    }


}



import { ObservableDataProviderDiscoveryApi } from './ObservableAPI';

import { DataProviderDiscoveryApiRequestFactory, DataProviderDiscoveryApiResponseProcessor} from "../apis/DataProviderDiscoveryApi";
export class PromiseDataProviderDiscoveryApi {
    private api: ObservableDataProviderDiscoveryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataProviderDiscoveryApiRequestFactory,
        responseProcessor?: DataProviderDiscoveryApiResponseProcessor
    ) {
        this.api = new ObservableDataProviderDiscoveryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * .
     * Discover all data providers in My Data My Consent by country and filters.
     * @param accountType Account type.
     * @param documentType Document type.
     * @param organizationCategory Organization category.
     * @param pageNo Page number.
     * @param pageSize Page size.
     * @param country ISO2 Country code.
     */
    public v1DataProvidersGet(accountType?: string, documentType?: string, organizationCategory?: string, pageNo?: number, pageSize?: number, country?: string, _options?: Configuration): Promise<DataProviderPaginatedList> {
        const result = this.api.v1DataProvidersGet(accountType, documentType, organizationCategory, pageNo, pageSize, country, _options);
        return result.toPromise();
    }

    /**
     * .
     * Get a Data Provider details.
     * @param providerId Provider Id.
     */
    public v1DataProvidersProviderIdGet(providerId: string, _options?: Configuration): Promise<DataProvider> {
        const result = this.api.v1DataProvidersProviderIdGet(providerId, _options);
        return result.toPromise();
    }


}



import { ObservableDigiLockerCompatIssuerApi } from './ObservableAPI';

import { DigiLockerCompatIssuerApiRequestFactory, DigiLockerCompatIssuerApiResponseProcessor} from "../apis/DigiLockerCompatIssuerApi";
export class PromiseDigiLockerCompatIssuerApi {
    private api: ObservableDigiLockerCompatIssuerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DigiLockerCompatIssuerApiRequestFactory,
        responseProcessor?: DigiLockerCompatIssuerApiResponseProcessor
    ) {
        this.api = new ObservableDigiLockerCompatIssuerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Digilocker Compatible endpoint to Issue Documents.
     * @param pushUriRequest 
     */
    public issuerIssuedoc1XmlPost(pushUriRequest?: PushUriRequest, _options?: Configuration): Promise<PushUriResponse> {
        const result = this.api.issuerIssuedoc1XmlPost(pushUriRequest, _options);
        return result.toPromise();
    }


}



import { ObservableDocumentsApi } from './ObservableAPI';

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class PromiseDocumentsApi {
    private api: ObservableDocumentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.api = new ObservableDocumentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Issue a new document.
     * @param documentIssueRequest 
     */
    public issueDocument(documentIssueRequest?: DocumentIssueRequest, _options?: Configuration): Promise<boolean> {
        const result = this.api.issueDocument(documentIssueRequest, _options);
        return result.toPromise();
    }

    /**
     * Get issued document.
     * @param documentId Document id.
     */
    public v1DocumentsIssuedDocumentIdGet(documentId: string, _options?: Configuration): Promise<void> {
        const result = this.api.v1DocumentsIssuedDocumentIdGet(documentId, _options);
        return result.toPromise();
    }

    /**
     * Get issued documents.
     * @param documentTypeId 
     * @param fromDateTime 
     * @param toDateTime 
     * @param pageSize 
     * @param pageNo 
     */
    public v1DocumentsIssuedGet(documentTypeId?: string, fromDateTime?: Date, toDateTime?: Date, pageSize?: number, pageNo?: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1DocumentsIssuedGet(documentTypeId, fromDateTime, toDateTime, pageSize, pageNo, _options);
        return result.toPromise();
    }

    /**
     * Get registered document types.
     * @param pageSize 
     * @param pageNo 
     */
    public v1DocumentsTypesGet(pageSize?: number, pageNo?: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1DocumentsTypesGet(pageSize, pageNo, _options);
        return result.toPromise();
    }


}



