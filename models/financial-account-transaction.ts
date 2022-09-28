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
import { CreditCardTransactionType } from './credit-card-transaction-type';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountAifTransaction } from './financial-account-aif-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountBillPaymentTransaction } from './financial-account-bill-payment-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountBondTransaction } from './financial-account-bond-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCISTransaction } from './financial-account-cistransaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCertificateOfDepositTransaction } from './financial-account-certificate-of-deposit-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCommercialPaperTransaction } from './financial-account-commercial-paper-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountCreditCardTransaction } from './financial-account-credit-card-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountDebentureTransaction } from './financial-account-debenture-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountDepositTransaction } from './financial-account-deposit-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountEpfTransaction } from './financial-account-epf-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountEquityTransaction } from './financial-account-equity-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountEtfTransaction } from './financial-account-etf-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountGovtSecurityTransaction } from './financial-account-govt-security-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountIdrTransaction } from './financial-account-idr-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountInsurancePolicyTransaction } from './financial-account-insurance-policy-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountInvitTransaction } from './financial-account-invit-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountLoanTransaction } from './financial-account-loan-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountMutualFundTransaction } from './financial-account-mutual-fund-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountNpsTransaction } from './financial-account-nps-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountPpfTransaction } from './financial-account-ppf-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountRecurringDepositTransaction } from './financial-account-recurring-deposit-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountReitTransaction } from './financial-account-reit-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountSipTransaction } from './financial-account-sip-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountTermDepositTransaction } from './financial-account-term-deposit-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { FinancialAccountUlipTransaction } from './financial-account-ulip-transaction';
// May contain unused imports in some cases
// @ts-ignore
import { MutualFundFundType } from './mutual-fund-fund-type';
// May contain unused imports in some cases
// @ts-ignore
import { MutualFundHoldingMode } from './mutual-fund-holding-mode';
// May contain unused imports in some cases
// @ts-ignore
import { MutualFundSchemeCategory } from './mutual-fund-scheme-category';
// May contain unused imports in some cases
// @ts-ignore
import { MutualFundSchemeOption } from './mutual-fund-scheme-option';
// May contain unused imports in some cases
// @ts-ignore
import { MutualFundSchemePlan } from './mutual-fund-scheme-plan';
// May contain unused imports in some cases
// @ts-ignore
import { MutualFundSchemeType } from './mutual-fund-scheme-type';

/**
 * 
 * @export
 * @interface FinancialAccountTransaction
 */
export interface FinancialAccountTransaction {
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'id': string;
    /**
     * 
     * @type {CreditCardTransactionType}
     * @memberof FinancialAccountTransaction
     */
    'txn_type': CreditCardTransactionType;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'txn_date': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'amount': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'value_date': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'narration': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'statement_date': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'mcc': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'masked_card_number': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'amc': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'registrar': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'scheme_code': string;
    /**
     * 
     * @type {MutualFundSchemePlan}
     * @memberof FinancialAccountTransaction
     */
    'scheme_plan': MutualFundSchemePlan;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'isin': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'amfi_code': string;
    /**
     * 
     * @type {MutualFundFundType}
     * @memberof FinancialAccountTransaction
     */
    'fund_type': MutualFundFundType;
    /**
     * 
     * @type {MutualFundSchemeOption}
     * @memberof FinancialAccountTransaction
     */
    'scheme_option': MutualFundSchemeOption;
    /**
     * 
     * @type {MutualFundSchemeType}
     * @memberof FinancialAccountTransaction
     */
    'scheme_types': MutualFundSchemeType;
    /**
     * 
     * @type {MutualFundSchemeCategory}
     * @memberof FinancialAccountTransaction
     */
    'scheme_category': MutualFundSchemeCategory;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'ucc': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'closing_units': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'lien_units': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'nav': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'nav_date': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'order_date': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'execution_date': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'lockin_flag': string;
    /**
     * 
     * @type {string}
     * @memberof FinancialAccountTransaction
     */
    'lockin_days': string;
    /**
     * 
     * @type {MutualFundHoldingMode}
     * @memberof FinancialAccountTransaction
     */
    'mode': MutualFundHoldingMode;
}

