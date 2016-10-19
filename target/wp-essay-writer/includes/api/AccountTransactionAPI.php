<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class AccountTransactionAPI {


    public static $txn_status_pending = 'PENDING';
    public static $txn_status_completed = 'COMPLETED';
    public static $txn_client_payment = 'CLIENT_PAYMENT';

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
        $artifact_name = $entity_data['entity_artifact_name'];
        $current_user_party = UserPartyAPI::get_current_user_party();
        // If the we are dealing with a non admin user
        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code)) {
            // Get the billing account for the party
            $billing_account = EntityAPI::get_by_field('billingaccount', 'b_account_party', $current_user_party['id']);
            if(!isset($billing_account['id'])) return array();
            // Return all the transactions for the given billing account
            return EntityAPI::find_by_criteria($artifact_name, array('billing_account' => $billing_account['id']));
        }
        return EntityAPI::do_find_entity($entity_data);
    }



}
