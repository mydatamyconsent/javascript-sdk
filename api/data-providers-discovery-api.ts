/* tslint:disable */
/* eslint-disable */
/**
 * My Data My Consent - Developer API
 * Unleashing the power of consent by establishing trust. The Platform Core Developer API defines a set of capabilities that can be used to request, issue, manage and update data, documents and credentials by organizations. The API can be used to request, manage and update Decentralised Identifiers, Financial Data, Health Data issue Documents, Credentials directly or using OpenID Connect flows, and verify Messages signed with DIDs and much more.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@mydatamyconsent.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DataProviderDetails } from '../models';
// @ts-ignore
import { PaginatedListOfDataProviders } from '../models';
/**
 * DataProvidersDiscoveryApi - axios parameter creator
 * @export
 */
export const DataProvidersDiscoveryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Discover all data providers in my data my consent by country and filters.
         * @param {string} countryIso2Code 
         * @param {number} [pageNo] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataProvidersGet: async (countryIso2Code: string, pageNo?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countryIso2Code' is not null or undefined
            assertParamExists('v1DataProvidersGet', 'countryIso2Code', countryIso2Code)
            const localVarPath = `/v1/data-providers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2ClientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2ClientCredentials", ["DataProviders:Read"], configuration)

            if (countryIso2Code !== undefined) {
                localVarQueryParameter['country_iso2_code'] = countryIso2Code;
            }

            if (pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a data provider details by provider id.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataProvidersIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('v1DataProvidersIdGet', 'id', id)
            const localVarPath = `/v1/data-providers/{id}`
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

            // authentication OAuth2ClientCredentials required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2ClientCredentials", ["DataProviders:Read"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataProvidersDiscoveryApi - functional programming interface
 * @export
 */
export const DataProvidersDiscoveryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataProvidersDiscoveryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Discover all data providers in my data my consent by country and filters.
         * @param {string} countryIso2Code 
         * @param {number} [pageNo] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataProvidersGet(countryIso2Code: string, pageNo?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedListOfDataProviders>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataProvidersGet(countryIso2Code, pageNo, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a data provider details by provider id.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1DataProvidersIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DataProviderDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1DataProvidersIdGet(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataProvidersDiscoveryApi - factory interface
 * @export
 */
export const DataProvidersDiscoveryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataProvidersDiscoveryApiFp(configuration)
    return {
        /**
         * 
         * @summary Discover all data providers in my data my consent by country and filters.
         * @param {string} countryIso2Code 
         * @param {number} [pageNo] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataProvidersGet(countryIso2Code: string, pageNo?: number, pageSize?: number, options?: any): AxiosPromise<PaginatedListOfDataProviders> {
            return localVarFp.v1DataProvidersGet(countryIso2Code, pageNo, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a data provider details by provider id.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1DataProvidersIdGet(id: string, options?: any): AxiosPromise<DataProviderDetails> {
            return localVarFp.v1DataProvidersIdGet(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataProvidersDiscoveryApi - object-oriented interface
 * @export
 * @class DataProvidersDiscoveryApi
 * @extends {BaseAPI}
 */
export class DataProvidersDiscoveryApi extends BaseAPI {
    /**
     * 
     * @summary Discover all data providers in my data my consent by country and filters.
     * @param {string} countryIso2Code 
     * @param {number} [pageNo] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProvidersDiscoveryApi
     */
    public v1DataProvidersGet(countryIso2Code: string, pageNo?: number, pageSize?: number, options?: AxiosRequestConfig) {
        return DataProvidersDiscoveryApiFp(this.configuration).v1DataProvidersGet(countryIso2Code, pageNo, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a data provider details by provider id.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataProvidersDiscoveryApi
     */
    public v1DataProvidersIdGet(id: string, options?: AxiosRequestConfig) {
        return DataProvidersDiscoveryApiFp(this.configuration).v1DataProvidersIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
}