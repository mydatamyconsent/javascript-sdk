// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { DataProvider } from '../models/DataProvider';
import { DataProviderPaginatedList } from '../models/DataProviderPaginatedList';

/**
 * no description
 */
export class DataProviderDiscoveryApiRequestFactory extends BaseAPIRequestFactory {

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
    public async v1DataProvidersGet(accountType?: string, documentType?: string, organizationCategory?: string, pageNo?: number, pageSize?: number, country?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/v1/data-providers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accountType !== undefined) {
            requestContext.setQueryParam("accountType", ObjectSerializer.serialize(accountType, "string", ""));
        }
        if (documentType !== undefined) {
            requestContext.setQueryParam("documentType", ObjectSerializer.serialize(documentType, "string", ""));
        }
        if (organizationCategory !== undefined) {
            requestContext.setQueryParam("organizationCategory", ObjectSerializer.serialize(organizationCategory, "string", ""));
        }
        if (pageNo !== undefined) {
            requestContext.setQueryParam("pageNo", ObjectSerializer.serialize(pageNo, "number", "int32"));
        }
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }
        if (country !== undefined) {
            requestContext.setQueryParam("country", ObjectSerializer.serialize(country, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * .
     * Get a Data Provider details.
     * @param providerId Provider Id.
     */
    public async v1DataProvidersProviderIdGet(providerId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'providerId' is not null or undefined
        if (providerId === null || providerId === undefined) {
            throw new RequiredError('Required parameter providerId was null or undefined when calling v1DataProvidersProviderIdGet.');
        }


        // Path Params
        const localVarPath = '/v1/data-providers/{providerId}'
            .replace('{' + 'providerId' + '}', encodeURIComponent(String(providerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        // Apply auth methods

        return requestContext;
    }

}

export class DataProviderDiscoveryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1DataProvidersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1DataProvidersGet(response: ResponseContext): Promise<DataProviderPaginatedList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataProviderPaginatedList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataProviderPaginatedList", ""
            ) as DataProviderPaginatedList;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized.");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataProviderPaginatedList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataProviderPaginatedList", ""
            ) as DataProviderPaginatedList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1DataProvidersProviderIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1DataProvidersProviderIdGet(response: ResponseContext): Promise<DataProvider > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DataProvider = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataProvider", ""
            ) as DataProvider;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized.");
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Internal Server Error.");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DataProvider = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DataProvider", ""
            ) as DataProvider;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
