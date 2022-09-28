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


// May contain unused imports in some cases
// @ts-ignore
import { EquitySummary } from './equity-summary';
// May contain unused imports in some cases
// @ts-ignore
import { Profile } from './profile';

/**
 * 
 * @export
 * @interface Equity
 */
export interface Equity {
    /**
     * 
     * @type {string}
     * @memberof Equity
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Equity
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Equity
     */
    'identifier': string;
    /**
     * 
     * @type {number}
     * @memberof Equity
     */
    'balance': number;
    /**
     * 
     * @type {Profile}
     * @memberof Equity
     */
    'profile': Profile;
    /**
     * 
     * @type {EquitySummary}
     * @memberof Equity
     */
    'summary': EquitySummary;
    /**
     * 
     * @type {string}
     * @memberof Equity
     */
    'masked_account_number': string;
    /**
     * 
     * @type {string}
     * @memberof Equity
     */
    'linked_account_ref': string;
    /**
     * 
     * @type {number}
     * @memberof Equity
     */
    'version': number;
}
