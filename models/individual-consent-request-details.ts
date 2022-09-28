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
import { DataConsentStatus } from './data-consent-status';

/**
 * IndividualConsentRequestDetails : Individual consent request details.
 * @export
 * @interface IndividualConsentRequestDetails
 */
export interface IndividualConsentRequestDetails {
    /**
     * Name of request receiver individual.
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'receiver': string;
    /**
     * Consent request id
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'id': string;
    /**
     * Consent request template id
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'templateId'?: string;
    /**
     * Consent id
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'consentId'?: string;
    /**
     * Consent request title.
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'title': string;
    /**
     * Consent request description.
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'description': string;
    /**
     * Consent request purpose.
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'purpose'?: string;
    /**
     * 
     * @type {DataConsentStatus}
     * @memberof IndividualConsentRequestDetails
     */
    'status': DataConsentStatus;
    /**
     * Transaction id
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'transactionId'?: string;
    /**
     * Request creation datetime in UTC timezone
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'createdAtUtc': string;
    /**
     * Request expiration datetime in UTC timezone
     * @type {string}
     * @memberof IndividualConsentRequestDetails
     */
    'expiresAtUtc': string;
}

