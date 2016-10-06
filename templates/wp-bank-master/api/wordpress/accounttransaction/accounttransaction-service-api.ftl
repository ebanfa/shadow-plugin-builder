<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class AccountTransactionAPI {

    public static $debit_transaction_fg = 'DEBIT';
    public static $credit_transaction_fg = 'CREDIT';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        // 1. Process the name and the date
        $transaction_status_data = EntityAPI::get_by_code('accounttransactionstatus')
        $transaction_type_data = EntityAPI::get_by_id('accounttransactiontype', $entity_data['acct_txn_type']);
        // 2. Create the transaction 
        // 3. Debit or credit the account involved
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

}
