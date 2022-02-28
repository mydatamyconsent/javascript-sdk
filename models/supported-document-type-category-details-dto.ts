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


import { SupportedDocumentDetailsDto } from './supported-document-details-dto';
import { SupportedDocumentProviderDetailsDto } from './supported-document-provider-details-dto';

/**
 * 
 * @export
 * @interface SupportedDocumentTypeCategoryDetailsDto
 */
export interface SupportedDocumentTypeCategoryDetailsDto {
    /**
     * 
     * @type {string}
     * @memberof SupportedDocumentTypeCategoryDetailsDto
     */
    documentTypeCategoryId: string;
    /**
     * 
     * @type {string}
     * @memberof SupportedDocumentTypeCategoryDetailsDto
     */
    documentTypeCategoryName: string;
    /**
     * 
     * @type {Array<SupportedDocumentDetailsDto>}
     * @memberof SupportedDocumentTypeCategoryDetailsDto
     */
    supportedDocuments: Array<SupportedDocumentDetailsDto>;
    /**
     * 
     * @type {Array<SupportedDocumentProviderDetailsDto>}
     * @memberof SupportedDocumentTypeCategoryDetailsDto
     */
    supportedDocumentProviderDetails: Array<SupportedDocumentProviderDetailsDto>;
}


