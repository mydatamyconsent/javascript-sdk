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

import { HttpFile } from '../http/http';

export class SuggestedAccountDto {
    'issuerId'?: string;
    'accountId'?: string;
    'issuerName'?: string;
    'accountLogoUrl'?: string;
    'accountNumber'?: string;
    'accountCategory'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "issuerId",
            "baseName": "issuerId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "issuerName",
            "baseName": "issuerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountLogoUrl",
            "baseName": "accountLogoUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountNumber",
            "baseName": "accountNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountCategory",
            "baseName": "accountCategory",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SuggestedAccountDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}

