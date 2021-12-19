export * from './ApplicationUser';
export * from './BankAccountType';
export * from './CategoryIconFontFamily';
export * from './Country';
export * from './CountryState';
export * from './DataConsent';
export * from './DataConsentDetailsDto';
export * from './DataConsentIdentifier';
export * from './DataConsentRequestModel';
export * from './DataConsentRequestedAccountDto';
export * from './DataConsentRequestedDocument';
export * from './DataConsentRequestedDocumentDto';
export * from './DataConsentRequestedFaDto';
export * from './DataConsentRequestedFinancialAccount';
export * from './DataConsentRequesterDto';
export * from './DataConsentRfaFilter';
export * from './DataConsentRfaFilterDto';
export * from './DataConsentStatus';
export * from './DataFetchFrequencyUnit';
export * from './DataFetchType';
export * from './DataLifeUnit';
export * from './DataProcessingAgreement';
export * from './DataProcessingAgreementPaginatedList';
export * from './DataProtectionOfficer';
export * from './DataProvider';
export * from './DataProviderPaginatedList';
export * from './DocumentIssueRequest';
export * from './DocumentProviderCategory';
export * from './FileType';
export * from './FilterType';
export * from './FinancialAccountTypes';
export * from './Gender';
export * from './IdentificationStrategy';
export * from './Identifier';
export * from './IdentifierStringKeyValuePair';
export * from './IdentityClaim';
export * from './JsonSchema';
export * from './Operator';
export * from './Organization';
export * from './OrganizationAddress';
export * from './OrganizationAddressType';
export * from './OrganizationCategory';
export * from './OrganizationFinancialAccount';
export * from './OrganizationKyoDocument';
export * from './OrganizationMetaData';
export * from './OrganizationStatus';
export * from './OrganizationType';
export * from './ProblemDetails';
export * from './ProofDocumentType';
export * from './PushUriRequest';
export * from './PushUriResponse';
export * from './Receiver';
export * from './ReceiverType';
export * from './RefreshToken';
export * from './Rejection';
export * from './SuggestedAccountDto';
export * from './Theme';
export * from './UriDetails';

import { ApplicationUser } from './ApplicationUser';
import { BankAccountType } from './BankAccountType';
import { CategoryIconFontFamily } from './CategoryIconFontFamily';
import { Country } from './Country';
import { CountryState } from './CountryState';
import { DataConsent } from './DataConsent';
import { DataConsentDetailsDto } from './DataConsentDetailsDto';
import { DataConsentIdentifier } from './DataConsentIdentifier';
import { DataConsentRequestModel } from './DataConsentRequestModel';
import { DataConsentRequestedAccountDto } from './DataConsentRequestedAccountDto';
import { DataConsentRequestedDocument } from './DataConsentRequestedDocument';
import { DataConsentRequestedDocumentDto } from './DataConsentRequestedDocumentDto';
import { DataConsentRequestedFaDto } from './DataConsentRequestedFaDto';
import { DataConsentRequestedFinancialAccount } from './DataConsentRequestedFinancialAccount';
import { DataConsentRequesterDto } from './DataConsentRequesterDto';
import { DataConsentRfaFilter } from './DataConsentRfaFilter';
import { DataConsentRfaFilterDto } from './DataConsentRfaFilterDto';
import { DataConsentStatus } from './DataConsentStatus';
import { DataFetchFrequencyUnit } from './DataFetchFrequencyUnit';
import { DataFetchType } from './DataFetchType';
import { DataLifeUnit } from './DataLifeUnit';
import { DataProcessingAgreement } from './DataProcessingAgreement';
import { DataProcessingAgreementPaginatedList } from './DataProcessingAgreementPaginatedList';
import { DataProtectionOfficer } from './DataProtectionOfficer';
import { DataProvider } from './DataProvider';
import { DataProviderPaginatedList } from './DataProviderPaginatedList';
import { DocumentIssueRequest } from './DocumentIssueRequest';
import { DocumentProviderCategory } from './DocumentProviderCategory';
import { FileType } from './FileType';
import { FilterType } from './FilterType';
import { FinancialAccountTypes } from './FinancialAccountTypes';
import { Gender } from './Gender';
import { IdentificationStrategy } from './IdentificationStrategy';
import { Identifier } from './Identifier';
import { IdentifierStringKeyValuePair } from './IdentifierStringKeyValuePair';
import { IdentityClaim } from './IdentityClaim';
import { JsonSchema } from './JsonSchema';
import { Operator } from './Operator';
import { Organization } from './Organization';
import { OrganizationAddress } from './OrganizationAddress';
import { OrganizationAddressType } from './OrganizationAddressType';
import { OrganizationCategory } from './OrganizationCategory';
import { OrganizationFinancialAccount } from './OrganizationFinancialAccount';
import { OrganizationKyoDocument } from './OrganizationKyoDocument';
import { OrganizationMetaData } from './OrganizationMetaData';
import { OrganizationStatus } from './OrganizationStatus';
import { OrganizationType } from './OrganizationType';
import { ProblemDetails } from './ProblemDetails';
import { ProofDocumentType } from './ProofDocumentType';
import { PushUriRequest } from './PushUriRequest';
import { PushUriResponse } from './PushUriResponse';
import { Receiver } from './Receiver';
import { ReceiverType } from './ReceiverType';
import { RefreshToken } from './RefreshToken';
import { Rejection } from './Rejection';
import { SuggestedAccountDto } from './SuggestedAccountDto';
import { Theme } from './Theme';
import { UriDetails } from './UriDetails';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0
}

                 
let enumsMap: Set<string> = new Set<string>([
    "BankAccountType",
    "CategoryIconFontFamily",
    "DataConsentStatus",
    "DataFetchFrequencyUnit",
    "DataFetchType",
    "DataLifeUnit",
    "FileType",
    "FilterType",
    "FinancialAccountTypes",
    "Gender",
    "IdentificationStrategy",
    "Identifier",
    "IdentityClaim",
    "Operator",
    "OrganizationAddressType",
    "OrganizationStatus",
    "ProofDocumentType",
    "ReceiverType",
    "Theme",
]);

let typeMap: {[index: string]: any} = {
    "ApplicationUser": ApplicationUser,
    "Country": Country,
    "CountryState": CountryState,
    "DataConsent": DataConsent,
    "DataConsentDetailsDto": DataConsentDetailsDto,
    "DataConsentIdentifier": DataConsentIdentifier,
    "DataConsentRequestModel": DataConsentRequestModel,
    "DataConsentRequestedAccountDto": DataConsentRequestedAccountDto,
    "DataConsentRequestedDocument": DataConsentRequestedDocument,
    "DataConsentRequestedDocumentDto": DataConsentRequestedDocumentDto,
    "DataConsentRequestedFaDto": DataConsentRequestedFaDto,
    "DataConsentRequestedFinancialAccount": DataConsentRequestedFinancialAccount,
    "DataConsentRequesterDto": DataConsentRequesterDto,
    "DataConsentRfaFilter": DataConsentRfaFilter,
    "DataConsentRfaFilterDto": DataConsentRfaFilterDto,
    "DataProcessingAgreement": DataProcessingAgreement,
    "DataProcessingAgreementPaginatedList": DataProcessingAgreementPaginatedList,
    "DataProtectionOfficer": DataProtectionOfficer,
    "DataProvider": DataProvider,
    "DataProviderPaginatedList": DataProviderPaginatedList,
    "DocumentIssueRequest": DocumentIssueRequest,
    "DocumentProviderCategory": DocumentProviderCategory,
    "IdentifierStringKeyValuePair": IdentifierStringKeyValuePair,
    "JsonSchema": JsonSchema,
    "Organization": Organization,
    "OrganizationAddress": OrganizationAddress,
    "OrganizationCategory": OrganizationCategory,
    "OrganizationFinancialAccount": OrganizationFinancialAccount,
    "OrganizationKyoDocument": OrganizationKyoDocument,
    "OrganizationMetaData": OrganizationMetaData,
    "OrganizationType": OrganizationType,
    "ProblemDetails": ProblemDetails,
    "PushUriRequest": PushUriRequest,
    "PushUriResponse": PushUriResponse,
    "Receiver": Receiver,
    "RefreshToken": RefreshToken,
    "Rejection": Rejection,
    "SuggestedAccountDto": SuggestedAccountDto,
    "UriDetails": UriDetails,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
