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



/**
 * 
 * @export
 * @interface UriDetails
 */
export interface UriDetails {
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'aadhaar': string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'uri': string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'docType': string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'docName': string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'docId': string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'issuedOn': string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'validFrom': string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'validTo'?: string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'timestamp'?: string;
    /**
     * 
     * @type {string}
     * @memberof UriDetails
     */
    'action'?: string;
}

