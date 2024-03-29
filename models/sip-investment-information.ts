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
 * @interface SipInvestmentInformation
 */
export interface SipInvestmentInformation {
    /**
     * 
     * @type {number}
     * @memberof SipInvestmentInformation
     */
    'instalment_amount': number;
    /**
     * 
     * @type {string}
     * @memberof SipInvestmentInformation
     */
    'frequency': string;
    /**
     * 
     * @type {number}
     * @memberof SipInvestmentInformation
     */
    'completed_instalments': number;
    /**
     * 
     * @type {number}
     * @memberof SipInvestmentInformation
     */
    'investment_value': number;
    /**
     * 
     * @type {string}
     * @memberof SipInvestmentInformation
     */
    'last_instalment_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof SipInvestmentInformation
     */
    'next_instalment_date'?: string;
}

