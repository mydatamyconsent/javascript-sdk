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
 * Identifier details.
 * @export
 * @interface Identifier
 */
export interface Identifier {
    /**
     * Identifier key. EMAIL, MOBILE_NUMBER, etc.
     * @type {string}
     * @memberof Identifier
     */
    'key': string;
    /**
     * Identifier name. Email, Mobile Number, etc.
     * @type {string}
     * @memberof Identifier
     */
    'name': string;
    /**
     * Identifier description. User\'s email, User\'s mobile number, etc.
     * @type {string}
     * @memberof Identifier
     */
    'description': string;
    /**
     * Example value. example@email.com, +919090909090, etc.
     * @type {string}
     * @memberof Identifier
     */
    'example_value': string;
}

