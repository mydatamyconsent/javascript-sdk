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
import { CreditCardProfile } from './credit-card-profile';
// May contain unused imports in some cases
// @ts-ignore
import { CreditCardSummary } from './credit-card-summary';

/**
 * 
 * @export
 * @interface CreditCard
 */
export interface CreditCard {
    /**
     * 
     * @type {string}
     * @memberof CreditCard
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof CreditCard
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreditCard
     */
    'identifier': string;
    /**
     * 
     * @type {number}
     * @memberof CreditCard
     */
    'balance': number;
    /**
     * 
     * @type {CreditCardProfile}
     * @memberof CreditCard
     */
    'profile': CreditCardProfile;
    /**
     * 
     * @type {CreditCardSummary}
     * @memberof CreditCard
     */
    'summary': CreditCardSummary;
    /**
     * 
     * @type {string}
     * @memberof CreditCard
     */
    'masked_account_number': string;
    /**
     * 
     * @type {string}
     * @memberof CreditCard
     */
    'linked_account_ref': string;
    /**
     * 
     * @type {number}
     * @memberof CreditCard
     */
    'version': number;
}
