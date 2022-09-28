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
import { FinancialAccountAif } from './financial-account-aif';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountBillPayment } from './financial-account-bill-payment';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountBond } from './financial-account-bond';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCIS } from './financial-account-cis';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCertificateOfDeposit } from './financial-account-certificate-of-deposit';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCommercialPaper } from './financial-account-commercial-paper';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCreditCard } from './financial-account-credit-card';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountDebenture } from './financial-account-debenture';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountDeposit } from './financial-account-deposit';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountEpf } from './financial-account-epf';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountEquity } from './financial-account-equity';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountEtf } from './financial-account-etf';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountGovtSecurity } from './financial-account-govt-security';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountIdr } from './financial-account-idr';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountInsurancePolicy } from './financial-account-insurance-policy';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountInvit } from './financial-account-invit';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountLoan } from './financial-account-loan';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountMutualFund } from './financial-account-mutual-fund';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountNps } from './financial-account-nps';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountPpf } from './financial-account-ppf';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountRecurringDeposit } from './financial-account-recurring-deposit';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountReit } from './financial-account-reit';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountSip } from './financial-account-sip';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountTermDeposit } from './financial-account-term-deposit';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountUlip } from './financial-account-ulip';
// May contain unused imports in some cases
// @ts-ignore
import { Profile } from './profile';

/**
 * 
 * @export
 * @interface FinancialAccount
 */
export interface FinancialAccount {
    /**
     * 
     * @type {string}
     * @memberof FinancialAccount
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccount
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccount
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccount
     */
    'identifier': string;
    /**
     * 
     * @type {number}
     * @memberof FinancialAccount
     */
    'balance': number;
    /**
     * 
     * @type {Profile}
     * @memberof FinancialAccount
     */
    'profile': Profile;
    /**
     * 
     * @type {EquitySummary}
     * @memberof FinancialAccount
     */
    'summary': EquitySummary;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccount
     */
    'masked_account_number': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccount
     */
    'linked_account_ref': string;
    /**
     * 
     * @type {number}
     * @memberof FinancialAccount
     */
    'version': number;
    /**
     * 
     * @type {number}
     * @memberof FinancialAccount
     */
    'amount': number;
}

