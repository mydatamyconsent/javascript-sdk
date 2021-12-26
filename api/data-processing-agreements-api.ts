/* tslint:disable */
/* eslint-disable */
/**
 * My Data My Consent - Developer API
 * Unleashing the power of data consent by establishing trust. The Platform Core Developer API defines a set of capabilities that can be used to request, issue, manage and update data, documents and credentials by organizations. The API can be used to request, manage and update Decentralised Identifiers, Financial Data, Health Data issue Documents, Credentials directly or using OpenID Connect flows, and verify Messages signed with DIDs and much more.
 *
 * The version of the OpenAPI document: v1
 * Contact: support@mydatamyconsent.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DataProcessingAgreement } from '../models';
// @ts-ignore
import { DataProcessingAgreementPaginatedList } from '../models';
// @ts-ignore
import { ProblemDetails } from '../models';
/**
 * DataProcessingAgreementsApi - axios parameter creator
 * @export
 */
export const DataProcessingAgreementsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all data processing agreements.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsGet: async (pageNo?: number, pageSize?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/data-agreements`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageNo !== undefined) {
                localVarQueryParameter['pageNo'] = pageNo;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a data processing agreement. This will not delete a published or a agreement in use with consents.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdDelete: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('v1DataAgreementsIdDelete', 'id', id)
            const localVarPath = `/v1/data-agreements/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get data processing agreement by Id.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdGet: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('v1DataAgreementsIdGet', 'id', id)
            const localVarPath = `/v1/data-agreements/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a data processing agreement.
         * @param {string} id 
         * @param {DataProcessingAgreement} [dataProcessingAgreement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdPut: async (id: string, dataProcessingAgreement?: DataProcessingAgreement, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('v1DataAgreementsIdPut', 'id', id)
            const localVarPath = `/v1/data-agreements/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(dataProcessingAgreement, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Terminate a data processing agreement.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdTerminatePut: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('v1DataAgreementsIdTerminatePut', 'id', id)
            const localVarPath = `/v1/data-agreements/{id}/terminate`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a data processing agreement.
         * @param {DataProcessingAgreement} [dataProcessingAgreement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsPost: async (dataProcessingAgreement?: DataProcessingAgreement, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/data-agreements`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(dataProcessingAgreement, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataProcessingAgreementsApi - functional programming interface
 * @export
 */
export const DataProcessingAgreementsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataProcessingAgreementsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get all data processing agreements.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataAgreementsGet(pageNo?: number, pageSize?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataProcessingAgreementPaginatedList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataAgreementsGet(pageNo, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a data processing agreement. This will not delete a published or a agreement in use with consents.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataAgreementsIdDelete(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataAgreementsIdDelete(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get data processing agreement by Id.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataAgreementsIdGet(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataProcessingAgreement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataAgreementsIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a data processing agreement.
         * @param {string} id 
         * @param {DataProcessingAgreement} [dataProcessingAgreement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataAgreementsIdPut(id: string, dataProcessingAgreement?: DataProcessingAgreement, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataProcessingAgreement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataAgreementsIdPut(id, dataProcessingAgreement, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Terminate a data processing agreement.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataAgreementsIdTerminatePut(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataAgreementsIdTerminatePut(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a data processing agreement.
         * @param {DataProcessingAgreement} [dataProcessingAgreement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataAgreementsPost(dataProcessingAgreement?: DataProcessingAgreement, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataProcessingAgreement>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataAgreementsPost(dataProcessingAgreement, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataProcessingAgreementsApi - factory interface
 * @export
 */
export const DataProcessingAgreementsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataProcessingAgreementsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get all data processing agreements.
         * @param {number} [pageNo] Page number.
         * @param {number} [pageSize] Number of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsGet(pageNo?: number, pageSize?: number, options?: any): AxiosPromise<DataProcessingAgreementPaginatedList> {
            return localVarFp.v1DataAgreementsGet(pageNo, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a data processing agreement. This will not delete a published or a agreement in use with consents.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdDelete(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.v1DataAgreementsIdDelete(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get data processing agreement by Id.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdGet(id: string, options?: any): AxiosPromise<DataProcessingAgreement> {
            return localVarFp.v1DataAgreementsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a data processing agreement.
         * @param {string} id 
         * @param {DataProcessingAgreement} [dataProcessingAgreement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdPut(id: string, dataProcessingAgreement?: DataProcessingAgreement, options?: any): AxiosPromise<DataProcessingAgreement> {
            return localVarFp.v1DataAgreementsIdPut(id, dataProcessingAgreement, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Terminate a data processing agreement.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsIdTerminatePut(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.v1DataAgreementsIdTerminatePut(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a data processing agreement.
         * @param {DataProcessingAgreement} [dataProcessingAgreement] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataAgreementsPost(dataProcessingAgreement?: DataProcessingAgreement, options?: any): AxiosPromise<DataProcessingAgreement> {
            return localVarFp.v1DataAgreementsPost(dataProcessingAgreement, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataProcessingAgreementsApi - object-oriented interface
 * @export
 * @class DataProcessingAgreementsApi
 * @extends {BaseAPI}
 */
export class DataProcessingAgreementsApi extends BaseAPI {
    /**
     * 
     * @summary Get all data processing agreements.
     * @param {number} [pageNo] Page number.
     * @param {number} [pageSize] Number of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProcessingAgreementsApi
     */
    public v1DataAgreementsGet(pageNo?: number, pageSize?: number, options?: any) {
        return DataProcessingAgreementsApiFp(this.configuration).v1DataAgreementsGet(pageNo, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a data processing agreement. This will not delete a published or a agreement in use with consents.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProcessingAgreementsApi
     */
    public v1DataAgreementsIdDelete(id: string, options?: any) {
        return DataProcessingAgreementsApiFp(this.configuration).v1DataAgreementsIdDelete(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get data processing agreement by Id.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProcessingAgreementsApi
     */
    public v1DataAgreementsIdGet(id: string, options?: any) {
        return DataProcessingAgreementsApiFp(this.configuration).v1DataAgreementsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a data processing agreement.
     * @param {string} id 
     * @param {DataProcessingAgreement} [dataProcessingAgreement] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProcessingAgreementsApi
     */
    public v1DataAgreementsIdPut(id: string, dataProcessingAgreement?: DataProcessingAgreement, options?: any) {
        return DataProcessingAgreementsApiFp(this.configuration).v1DataAgreementsIdPut(id, dataProcessingAgreement, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Terminate a data processing agreement.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProcessingAgreementsApi
     */
    public v1DataAgreementsIdTerminatePut(id: string, options?: any) {
        return DataProcessingAgreementsApiFp(this.configuration).v1DataAgreementsIdTerminatePut(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a data processing agreement.
     * @param {DataProcessingAgreement} [dataProcessingAgreement] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProcessingAgreementsApi
     */
    public v1DataAgreementsPost(dataProcessingAgreement?: DataProcessingAgreement, options?: any) {
        return DataProcessingAgreementsApiFp(this.configuration).v1DataAgreementsPost(dataProcessingAgreement, options).then((request) => request(this.axios, this.basePath));
    }
}
