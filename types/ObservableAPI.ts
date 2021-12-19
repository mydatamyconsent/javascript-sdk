import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DataConsentRequestsApiRequestFactory, DataConsentRequestsApiResponseProcessor} from "../apis/DataConsentRequestsApi";
export class ObservableDataConsentRequestsApi {
    private requestFactory: DataConsentRequestsApiRequestFactory;
    private responseProcessor: DataConsentRequestsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataConsentRequestsApiRequestFactory,
        responseProcessor?: DataConsentRequestsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataConsentRequestsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataConsentRequestsApiResponseProcessor();
    }

    /**
     * .
     * Cancel a Consent Request by ID.
     * @param requestId consent request id.
     */
    public cancelConsentRequest(requestId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.cancelConsentRequest(requestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelConsentRequest(rsp)));
            }));
    }
 
    /**
     * Create a consent request.
     * @param dataConsentRequestModel MyDataMyConsent.Models.Consents.DataConsentRequestModel.
     */
    public createRequest(dataConsentRequestModel?: DataConsentRequestModel, _options?: Configuration): Observable<DataConsent> {
        const requestContextPromise = this.requestFactory.createRequest(dataConsentRequestModel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRequest(rsp)));
            }));
    }
 
    /**
     * Get all Consent Requests.
     * @param status 
     */
    public getAllConsentRequests(status?: DataConsentStatus, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getAllConsentRequests(status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllConsentRequests(rsp)));
            }));
    }
 
    /**
     * Get a Consent Request by ID.
     * @param requestId 
     */
    public getConsentRequestById(requestId: string, _options?: Configuration): Observable<DataConsentDetailsDto> {
        const requestContextPromise = this.requestFactory.getConsentRequestById(requestId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConsentRequestById(rsp)));
            }));
    }
 
}

import { DataConsentsApiRequestFactory, DataConsentsApiResponseProcessor} from "../apis/DataConsentsApi";
export class ObservableDataConsentsApi {
    private requestFactory: DataConsentsApiRequestFactory;
    private responseProcessor: DataConsentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataConsentsApiRequestFactory,
        responseProcessor?: DataConsentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataConsentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataConsentsApiResponseProcessor();
    }

    /**
     * Get consented financial account details.
     * @param consentId 
     * @param accountId 
     */
    public v1ConsentsConsentIdAccountsAccountIdGet(consentId: string, accountId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdAccountsAccountIdGet(consentId, accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdAccountsAccountIdGet(rsp)));
            }));
    }
 
    /**
     * Get consented financial account insights.
     * @param consentId 
     * @param accountId 
     */
    public v1ConsentsConsentIdAccountsAccountIdInsightsGet(consentId: string, accountId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdAccountsAccountIdInsightsGet(consentId, accountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdAccountsAccountIdInsightsGet(rsp)));
            }));
    }
 
    /**
     * Get consented financial account transactions.
     * @param consentId 
     * @param accountId 
     * @param filters 
     * @param fromDate 
     * @param toDate 
     */
    public v1ConsentsConsentIdAccountsAccountIdTransactionsGet(consentId: string, accountId: string, filters?: string, fromDate?: Date, toDate?: Date, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdAccountsAccountIdTransactionsGet(consentId, accountId, filters, fromDate, toDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdAccountsAccountIdTransactionsGet(rsp)));
            }));
    }
 
    /**
     * Get all accounts in a consent.
     * @param consentId 
     */
    public v1ConsentsConsentIdAccountsGet(consentId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdAccountsGet(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdAccountsGet(rsp)));
            }));
    }
 
    /**
     * Get analysis of a consented document.
     * @param consentId 
     * @param documentId Document Id.
     */
    public v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(consentId: string, documentId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(consentId, documentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdDocumentsDocumentIdAnalysisGet(rsp)));
            }));
    }
 
    /**
     * Download a consented document.
     * @param consentId 
     * @param documentId Document Id.
     */
    public v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(consentId: string, documentId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(consentId, documentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdDocumentsDocumentIdDownloadGet(rsp)));
            }));
    }
 
    /**
     * Get consented document details.
     * @param consentId 
     * @param documentId Document Id.
     */
    public v1ConsentsConsentIdDocumentsDocumentIdGet(consentId: string, documentId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdDocumentsDocumentIdGet(consentId, documentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdDocumentsDocumentIdGet(rsp)));
            }));
    }
 
    /**
     * Get all documents in a consent.
     * @param consentId 
     */
    public v1ConsentsConsentIdDocumentsGet(consentId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdDocumentsGet(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdDocumentsGet(rsp)));
            }));
    }
 
    /**
     * Get consent details by consent id.
     * @param consentId 
     */
    public v1ConsentsConsentIdGet(consentId: string, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsConsentIdGet(consentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsConsentIdGet(rsp)));
            }));
    }
 
    /**
     * Get all consents filtered by status and time.
     * @param status MyDataMyConsent.Domain.Entities.ConsentAggregate.Enums.DataConsentStatus.
     * @param startDate System.DateTime.
     * @param endDate till dateSystem.DateTime.
     */
    public v1ConsentsGet(status?: DataConsentStatus, startDate?: Date, endDate?: Date, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.v1ConsentsGet(status, startDate, endDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ConsentsGet(rsp)));
            }));
    }
 
}

import { DataProcessingAgreementsApiRequestFactory, DataProcessingAgreementsApiResponseProcessor} from "../apis/DataProcessingAgreementsApi";
export class ObservableDataProcessingAgreementsApi {
    private requestFactory: DataProcessingAgreementsApiRequestFactory;
    private responseProcessor: DataProcessingAgreementsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataProcessingAgreementsApiRequestFactory,
        responseProcessor?: DataProcessingAgreementsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataProcessingAgreementsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataProcessingAgreementsApiResponseProcessor();
    }

    /**
     * Get all data processing agreements.
     * @param pageNo Page number.
     * @param pageSize Number of items to return.
     */
    public v1DataAgreementsGet(pageNo?: number, pageSize?: number, _options?: Configuration): Observable<DataProcessingAgreementPaginatedList> {
        const requestContextPromise = this.requestFactory.v1DataAgreementsGet(pageNo, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataAgreementsGet(rsp)));
            }));
    }
 
    /**
     * Delete a data processing agreement. This will not delete a published or a agreement in use with consents.
     * @param id 
     */
    public v1DataAgreementsIdDelete(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DataAgreementsIdDelete(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataAgreementsIdDelete(rsp)));
            }));
    }
 
    /**
     * Get data processing agreement by Id.
     * @param id 
     */
    public v1DataAgreementsIdGet(id: string, _options?: Configuration): Observable<DataProcessingAgreement> {
        const requestContextPromise = this.requestFactory.v1DataAgreementsIdGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataAgreementsIdGet(rsp)));
            }));
    }
 
    /**
     * Update a data processing agreement.
     * @param id 
     * @param dataProcessingAgreement 
     */
    public v1DataAgreementsIdPut(id: string, dataProcessingAgreement?: DataProcessingAgreement, _options?: Configuration): Observable<DataProcessingAgreement> {
        const requestContextPromise = this.requestFactory.v1DataAgreementsIdPut(id, dataProcessingAgreement, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataAgreementsIdPut(rsp)));
            }));
    }
 
    /**
     * Terminate a data processing agreement.
     * @param id 
     */
    public v1DataAgreementsIdTerminatePut(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DataAgreementsIdTerminatePut(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataAgreementsIdTerminatePut(rsp)));
            }));
    }
 
    /**
     * Create a data processing agreement.
     * @param dataProcessingAgreement 
     */
    public v1DataAgreementsPost(dataProcessingAgreement?: DataProcessingAgreement, _options?: Configuration): Observable<DataProcessingAgreement> {
        const requestContextPromise = this.requestFactory.v1DataAgreementsPost(dataProcessingAgreement, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataAgreementsPost(rsp)));
            }));
    }
 
}

import { DataProviderDiscoveryApiRequestFactory, DataProviderDiscoveryApiResponseProcessor} from "../apis/DataProviderDiscoveryApi";
export class ObservableDataProviderDiscoveryApi {
    private requestFactory: DataProviderDiscoveryApiRequestFactory;
    private responseProcessor: DataProviderDiscoveryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataProviderDiscoveryApiRequestFactory,
        responseProcessor?: DataProviderDiscoveryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataProviderDiscoveryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataProviderDiscoveryApiResponseProcessor();
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
    public v1DataProvidersGet(accountType?: string, documentType?: string, organizationCategory?: string, pageNo?: number, pageSize?: number, country?: string, _options?: Configuration): Observable<DataProviderPaginatedList> {
        const requestContextPromise = this.requestFactory.v1DataProvidersGet(accountType, documentType, organizationCategory, pageNo, pageSize, country, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataProvidersGet(rsp)));
            }));
    }
 
    /**
     * .
     * Get a Data Provider details.
     * @param providerId Provider Id.
     */
    public v1DataProvidersProviderIdGet(providerId: string, _options?: Configuration): Observable<DataProvider> {
        const requestContextPromise = this.requestFactory.v1DataProvidersProviderIdGet(providerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DataProvidersProviderIdGet(rsp)));
            }));
    }
 
}

import { DigiLockerCompatIssuerApiRequestFactory, DigiLockerCompatIssuerApiResponseProcessor} from "../apis/DigiLockerCompatIssuerApi";
export class ObservableDigiLockerCompatIssuerApi {
    private requestFactory: DigiLockerCompatIssuerApiRequestFactory;
    private responseProcessor: DigiLockerCompatIssuerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DigiLockerCompatIssuerApiRequestFactory,
        responseProcessor?: DigiLockerCompatIssuerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DigiLockerCompatIssuerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DigiLockerCompatIssuerApiResponseProcessor();
    }

    /**
     * Digilocker Compatible endpoint to Issue Documents.
     * @param pushUriRequest 
     */
    public issuerIssuedoc1XmlPost(pushUriRequest?: PushUriRequest, _options?: Configuration): Observable<PushUriResponse> {
        const requestContextPromise = this.requestFactory.issuerIssuedoc1XmlPost(pushUriRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.issuerIssuedoc1XmlPost(rsp)));
            }));
    }
 
}

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class ObservableDocumentsApi {
    private requestFactory: DocumentsApiRequestFactory;
    private responseProcessor: DocumentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DocumentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DocumentsApiResponseProcessor();
    }

    /**
     * Issue a new document.
     * @param documentIssueRequest 
     */
    public issueDocument(documentIssueRequest?: DocumentIssueRequest, _options?: Configuration): Observable<boolean> {
        const requestContextPromise = this.requestFactory.issueDocument(documentIssueRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.issueDocument(rsp)));
            }));
    }
 
    /**
     * Get issued document.
     * @param documentId Document id.
     */
    public v1DocumentsIssuedDocumentIdGet(documentId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DocumentsIssuedDocumentIdGet(documentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DocumentsIssuedDocumentIdGet(rsp)));
            }));
    }
 
    /**
     * Get issued documents.
     * @param documentTypeId 
     * @param fromDateTime 
     * @param toDateTime 
     * @param pageSize 
     * @param pageNo 
     */
    public v1DocumentsIssuedGet(documentTypeId?: string, fromDateTime?: Date, toDateTime?: Date, pageSize?: number, pageNo?: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DocumentsIssuedGet(documentTypeId, fromDateTime, toDateTime, pageSize, pageNo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DocumentsIssuedGet(rsp)));
            }));
    }
 
    /**
     * Get registered document types.
     * @param pageSize 
     * @param pageNo 
     */
    public v1DocumentsTypesGet(pageSize?: number, pageNo?: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.v1DocumentsTypesGet(pageSize, pageNo, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DocumentsTypesGet(rsp)));
            }));
    }
 
}
