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
 * ConsentedIdentifier : Consented identifier details.
 * @export
 * @interface ConsentedIdentifier
 */
export interface ConsentedIdentifier {
    /**
     * Identifier name.
     * @type {string}
     * @memberof ConsentedIdentifier
     */
    'name': string;
    /**
     * Identifier key.
     * @type {string}
     * @memberof ConsentedIdentifier
     */
    'key': string;
    /**
     * Identifier value type.
     * @type {string}
     * @memberof ConsentedIdentifier
     */
    'valueType': string;
    /**
     * Identifier value.
     * @type {string}
     * @memberof ConsentedIdentifier
     */
    'value': string;
}

