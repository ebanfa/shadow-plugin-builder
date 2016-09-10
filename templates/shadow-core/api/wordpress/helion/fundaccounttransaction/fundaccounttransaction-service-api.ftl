<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class FundAccountTransactionAPI  {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        // 1. Create the account structure type
        $entity_data['txn_date'] = date("Y-m-d H:i:s");
        $entity_data['name'] = 'Initial funding of account '. $entity_data['account'];
        $entity_data = EntityAPI::do_create_entity($entity_data);
        // 2. Create the segments
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function do_delete_entity($entity_data) {
        return EntityAPI::do_delete_entity($entity_data);
    }

    /**
     *
     */
    public static function do_create_pay_application($entity_data){
        //return ReceiptAPI::do_create_pay_application($entity_data);
    }

}
