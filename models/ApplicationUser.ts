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

import { Country } from './Country';
import { Gender } from './Gender';
import { RefreshToken } from './RefreshToken';
import { Theme } from './Theme';
import { HttpFile } from '../http/http';

export class ApplicationUser {
    'id'?: string;
    'userName'?: string;
    'normalizedUserName'?: string;
    'email'?: string;
    'normalizedEmail'?: string;
    'emailConfirmed'?: boolean;
    'passwordHash'?: string;
    'securityStamp'?: string;
    'concurrencyStamp'?: string;
    'phoneNumber'?: string;
    'phoneNumberConfirmed'?: boolean;
    'twoFactorEnabled'?: boolean;
    'lockoutEnd'?: Date;
    'lockoutEnabled'?: boolean;
    'accessFailedCount'?: number;
    'firstName'?: string;
    'middleName'?: string;
    'lastName'?: string;
    'fullName'?: string;
    'gender'?: Gender;
    'dateOfBirth'?: Date;
    'countryId'?: string;
    'postCode'?: string;
    'referredBy'?: string;
    'language'?: string;
    'theme'?: Theme;
    'designation'?: string;
    'isMarkedForDeletion'?: boolean;
    'hardDeleteDate'?: Date;
    'securityPin'?: string;
    'photoUrl'?: string;
    'referralCode'?: string;
    'recoveryToken'?: string;
    'digiLockerLastSyncDate'?: Date;
    'refreshTokens'?: Array<RefreshToken>;
    'country'?: Country;
    'referredByUser'?: ApplicationUser;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "normalizedUserName",
            "baseName": "normalizedUserName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "normalizedEmail",
            "baseName": "normalizedEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailConfirmed",
            "baseName": "emailConfirmed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "passwordHash",
            "baseName": "passwordHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "securityStamp",
            "baseName": "securityStamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "concurrencyStamp",
            "baseName": "concurrencyStamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumberConfirmed",
            "baseName": "phoneNumberConfirmed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "twoFactorEnabled",
            "baseName": "twoFactorEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lockoutEnd",
            "baseName": "lockoutEnd",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lockoutEnabled",
            "baseName": "lockoutEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accessFailedCount",
            "baseName": "accessFailedCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "Gender",
            "format": ""
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "countryId",
            "baseName": "countryId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "postCode",
            "baseName": "postCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "referredBy",
            "baseName": "referredBy",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "theme",
            "baseName": "theme",
            "type": "Theme",
            "format": ""
        },
        {
            "name": "designation",
            "baseName": "designation",
            "type": "string",
            "format": ""
        },
        {
            "name": "isMarkedForDeletion",
            "baseName": "isMarkedForDeletion",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hardDeleteDate",
            "baseName": "hardDeleteDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "securityPin",
            "baseName": "securityPin",
            "type": "string",
            "format": ""
        },
        {
            "name": "photoUrl",
            "baseName": "photoUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "referralCode",
            "baseName": "referralCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "recoveryToken",
            "baseName": "recoveryToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "digiLockerLastSyncDate",
            "baseName": "digiLockerLastSyncDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "refreshTokens",
            "baseName": "refreshTokens",
            "type": "Array<RefreshToken>",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "Country",
            "format": ""
        },
        {
            "name": "referredByUser",
            "baseName": "referredByUser",
            "type": "ApplicationUser",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationUser.attributeTypeMap;
    }
    
    public constructor() {
    }
}

