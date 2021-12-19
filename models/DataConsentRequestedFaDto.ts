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

import { DataConsentRfaFilterDto } from './DataConsentRfaFilterDto';
import { FinancialAccountTypes } from './FinancialAccountTypes';
import { HttpFile } from '../http/http';

export class DataConsentRequestedFaDto {
    'drn'?: string;
    'fromDatetime'?: Date;
    'toDatetime'?: Date;
    'providerId'?: string;
    'accountType'?: FinancialAccountTypes;
    'accountIdentifier'?: string;
    'filters'?: Array<DataConsentRfaFilterDto>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "drn",
            "baseName": "drn",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromDatetime",
            "baseName": "fromDatetime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "toDatetime",
            "baseName": "toDatetime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "providerId",
            "baseName": "providerId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "FinancialAccountTypes",
            "format": ""
        },
        {
            "name": "accountIdentifier",
            "baseName": "accountIdentifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<DataConsentRfaFilterDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataConsentRequestedFaDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

