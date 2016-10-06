<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BillingAccountAPI {

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
        $current_user_party = PartyAPI::get_current_user_party();

        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code))
            return EntityAPI::find_by_criteria($artifact_name, array('b_account_party' => $current_user_party['id']));

        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function get_party_billing_account($bill_to_party){
        if(!isset($bill_to_party['id'])) 
            return EntityAPIUtils::init_error($bill_to_party, 'Billing account party not provided');
        return EntityAPI::get_by_field('billingaccount', 'party', $bill_to_party['id']);
    }

}
