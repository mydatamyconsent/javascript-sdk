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
import { ConsentRequestTemplateStatus } from './consent-request-template-status';
// May contain unused imports in some cases
// @ts-ignore
import { DocumentField } from './document-field';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountField } from './financial-account-field';
// May contain unused imports in some cases
// @ts-ignore
import { IdentityField } from './identity-field';
// May contain unused imports in some cases
// @ts-ignore
import { IndividualConsentRequestTemplateDetailsDataFrequency } from './individual-consent-request-template-details-data-frequency';
// May contain unused imports in some cases
// @ts-ignore
import { IndividualConsentRequestTemplateDetailsDataLife } from './individual-consent-request-template-details-data-life';
// May contain unused imports in some cases
// @ts-ignore
import { IndividualConsentRequestTemplateDetailsRequestLife } from './individual-consent-request-template-details-request-life';

/**
 * OrganizationConsentRequestTemplateDetails : Organization consent request template details.
 * @export
 * @interface OrganizationConsentRequestTemplateDetails
 */
export interface OrganizationConsentRequestTemplateDetails {
    /**
     * Consent request template id.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'id': string;
    /**
     * Consent request template title.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'title': string;
    /**
     * Consent request template description.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'description': string;
    /**
     * Consent request template purpose.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'purpose'?: string;
    /**
     * Consent request template short Id.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'shortId': string;
    /**
     * 
     * @type {ConsentRequestTemplateStatus}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'status': ConsentRequestTemplateStatus;
    /**
     * 
     * @type {IndividualConsentRequestTemplateDetailsDataLife}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'dataLife'?: IndividualConsentRequestTemplateDetailsDataLife;
    /**
     * 
     * @type {IndividualConsentRequestTemplateDetailsRequestLife}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'requestLife'?: IndividualConsentRequestTemplateDetailsRequestLife;
    /**
     * 
     * @type {IndividualConsentRequestTemplateDetailsDataFrequency}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'dataFrequency'?: IndividualConsentRequestTemplateDetailsDataFrequency;
    /**
     * Consent request template identity fields.
     * @type {Array<IdentityField>}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'identifiers'?: Array<IdentityField>;
    /**
     * Consent request template document fields.
     * @type {Array<DocumentField>}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'documents'?: Array<DocumentField>;
    /**
     * Consent request template financial account fields.
     * @type {Array<FinancialAccountField>}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'financialAccounts'?: Array<FinancialAccountField>;
    /**
     * Consent request template created by user.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'createdBy': string;
    /**
     * Consent request template created datetime in UTC timezone.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'createdAtUtc': string;
    /**
     * Consent request template approval datetime in UTC timezone.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'approvedAtUtc'?: string;
    /**
     * Consent request template published datetime in UTC timezone.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'publishedAtUtc'?: string;
    /**
     * Consent request template rejection datetime in UTC timezone.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'rejectedAtUtc'?: string;
    /**
     * Consent request template rejection reason.
     * @type {string}
     * @memberof OrganizationConsentRequestTemplateDetails
     */
    'rejectionReason'?: string;
}
