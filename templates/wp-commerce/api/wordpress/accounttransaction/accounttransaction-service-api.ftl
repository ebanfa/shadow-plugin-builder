<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class AccountTransactionAPI {

    public static $debit_transaction_fg = 'DEBIT';
    public static $sale_on_invoice = 'SALE_ON_INVOICE';
    public static $completed_transaction = 'COMPLETED';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }

    /**
     *
     */
    public static function do_invoice_created($invoice_data) {
        // Get the billing account
        $billing_account_data = EntityAPI::get_by_id('billingaccount', $invoice_data['bill_acct']);
        // Get account transaction type and status
        $account_transaction_type = EntityAPI::get_by_code('accounttransactiontype', self::$sale_on_invoice);
        $account_transaction_status = EntityAPI::get_by_code('accounttransactionstatus', self::$completed_transaction); 
        // Create an appropriate account transaction for the amount and account
        if(isset($account_transaction_type['id']) && isset($account_transaction_status['id']) && isset($billing_account_data['id'])){
            $transaction_data = EntityAPIUtils::init_entity_data('accounttransaction');
            $transaction_data['edit_mode'] = true;
            $transaction_data['name'] = $invoice_data['name'];
            $transaction_data['txn_date'] = date("Y-m-d H:i:s");
            $transaction_data['amount'] = $invoice_data['total'];
            $transaction_data['account'] = $billing_account_data['id'];
            $transaction_data['db_cr_fg'] = self::$debit_transaction_fg;
            $transaction_data['description'] = $invoice_data['description'];
            $transaction_data['business_unit'] = $invoice_data['business_unit'];
            $transaction_data['acct_txn_type'] = $account_transaction_type['id'];
            $transaction_data['transaction_status'] = $account_transaction_status['id'];
            $transaction_data = EntityAPI::do_create_entity($transaction_data);
            // Debit the billing account of the customer
            $billing_account_data['edit_mode'] = false;
            $billing_account_data['balance'] = doubleval(
                $billing_account_data['balance']) - doubleval($transaction_data['amount']);
            EntityAPI::do_create_entity($billing_account_data);
        }
    }



}
