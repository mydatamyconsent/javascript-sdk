/**
 * My Data My Consent - Developer API
 * Unleashing the power of data consent by establishing trust. The Platform Core Developer API defines a set of capabilities that can be used to request, issue, manage and update data, documents and credentials by organizations. The API can be used to request, manage and update Decentralised Identifiers, Financial Data, Health Data issue Documents, Credentials directly or using OpenID Connect flows, and verify Messages signed with DIDs and much more.
 *
 * OpenAPI spec version: v1
 * Contact: support@mydatamyconsent.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationUser } from './ApplicationUser';
import { DataConsentIdentifier } from './DataConsentIdentifier';
import { DataConsentRequestedDocument } from './DataConsentRequestedDocument';
import { DataConsentRequestedFinancialAccount } from './DataConsentRequestedFinancialAccount';
import { DataConsentStatus } from './DataConsentStatus';
import { DataFetchFrequencyUnit } from './DataFetchFrequencyUnit';
import { DataFetchType } from './DataFetchType';
import { DataLifeUnit } from './DataLifeUnit';
import { DataProcessingAgreement } from './DataProcessingAgreement';
import { IdentityClaim } from './IdentityClaim';
import { Organization } from './Organization';
import { HttpFile } from '../http/http';

export class DataConsent {
    'id'?: string;
    'userId'?: string;
    'organizationId'?: string;
    'requestedByOrgId'?: string;
    'transactionId'?: string;
    'startDateTime'?: Date;
    'expiryDateTime'?: Date;
    'description'?: string;
    'purposeCode'?: string;
    'purposeLink'?: string;
    'location'?: string;
    'agreementId'?: string;
    'dataLifeUnit'?: DataLifeUnit;
    'dataLifeValue'?: number;
    'dataFetchFrequencyUnit'?: DataFetchFrequencyUnit;
    'dataFetchFrequencyUnitValue'?: number;
    'dataFetchType'?: DataFetchType;
    'status'?: DataConsentStatus;
    'createdAtUtc'?: Date;
    'approvedAtUtc'?: Date;
    'rejectedAtUtc'?: Date;
    'user'?: ApplicationUser;
    'organization'?: Organization;
    'requestedByOrg'?: Organization;
    'agreement'?: DataProcessingAgreement;
    'identityClaims'?: Array<IdentityClaim>;
    'identifiers'?: Array<DataConsentIdentifier>;
    'requestedFinancialAccounts'?: Array<DataConsentRequestedFinancialAccount>;
    'requestedDocuments'?: Array<DataConsentRequestedDocument>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "organizationId",
            "baseName": "organizationId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "requestedByOrgId",
            "baseName": "requestedByOrgId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expiryDateTime",
            "baseName": "expiryDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "purposeCode",
            "baseName": "purposeCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "purposeLink",
            "baseName": "purposeLink",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "agreementId",
            "baseName": "agreementId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "dataLifeUnit",
            "baseName": "dataLifeUnit",
            "type": "DataLifeUnit",
            "format": ""
        },
        {
            "name": "dataLifeValue",
            "baseName": "dataLifeValue",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "dataFetchFrequencyUnit",
            "baseName": "dataFetchFrequencyUnit",
            "type": "DataFetchFrequencyUnit",
            "format": ""
        },
        {
            "name": "dataFetchFrequencyUnitValue",
            "baseName": "dataFetchFrequencyUnitValue",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "dataFetchType",
            "baseName": "dataFetchType",
            "type": "DataFetchType",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DataConsentStatus",
            "format": ""
        },
        {
            "name": "createdAtUtc",
            "baseName": "createdAtUtc",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "approvedAtUtc",
            "baseName": "approvedAtUtc",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "rejectedAtUtc",
            "baseName": "rejectedAtUtc",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "ApplicationUser",
            "format": ""
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "Organization",
            "format": ""
        },
        {
            "name": "requestedByOrg",
            "baseName": "requestedByOrg",
            "type": "Organization",
            "format": ""
        },
        {
            "name": "agreement",
            "baseName": "agreement",
            "type": "DataProcessingAgreement",
            "format": ""
        },
        {
            "name": "identityClaims",
            "baseName": "identityClaims",
            "type": "Array<IdentityClaim>",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Array<DataConsentIdentifier>",
            "format": ""
        },
        {
            "name": "requestedFinancialAccounts",
            "baseName": "requestedFinancialAccounts",
            "type": "Array<DataConsentRequestedFinancialAccount>",
            "format": ""
        },
        {
            "name": "requestedDocuments",
            "baseName": "requestedDocuments",
            "type": "Array<DataConsentRequestedDocument>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataConsent.attributeTypeMap;
    }
    
    public constructor() {
    }
}

