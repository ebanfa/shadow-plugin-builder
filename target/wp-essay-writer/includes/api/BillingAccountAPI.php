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
        $current_user_party = UserPartyAPI::get_current_user_party();

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

    /**
     *
     */
    public static function do_create_billing_account($party_data) {
        $billingaccount_data = EntityAPIUtils::init_entity_data('billingaccount');
        if(!isset($party_data['id'])) 
            return EntityAPIUtils::init_error($party_data, 'Billing account creation requires a valid party');
        $billingaccount_data['balance'] = 0;
        $billingaccount_data['edit_mode'] = true;
        $billingaccount_data['name'] = $party_data['name'];
        $billingaccount_data['date_created'] = date("Y-m-d H:i:s");
        $billingaccount_data['b_account_party'] = $party_data['id'];
        $billingaccount_data['description'] = $party_data['description'];
        return self::do_create_entity($billingaccount_data);
    }

    /**
     *
     */
    public static function do_edit_billing_account($party_data) {
        $billingaccount_data = EntityAPI::get_by_field('billingaccount', 'b_account_party', $party_data['id']);
        if(!isset($billingaccount_data['id'])) 
            return EntityAPIUtils::init_error($party_data, 'Could not find billing account');
        $billingaccount_data['edit_mode'] = false;
        $billingaccount_data['name'] = $party_data['name'];
        $billingaccount_data['description'] = $party_data['description'];
        return self::do_create_entity($billingaccount_data);
    }

}