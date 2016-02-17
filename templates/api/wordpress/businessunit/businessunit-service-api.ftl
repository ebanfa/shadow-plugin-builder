<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BusinessUnitAPI extends EntityAPI {

    /**
     * Get current user business role
     */
    public static function get_current_user_business_unit(){
        $business_unit = array();
        // Get the party of the current user
        $current_user_party = PartyAPI::get_current_user_party();
        if(isset($current_user_party['id'])){ 

            // Get the party profile of the current user
            $current_user_party_role = self::get_by_field('partyprofile', 'party', $current_user_party['id']);
            // The current business is gotten from the business unit set as default business unit
            // for the party profile of the current user
            if(isset($current_user_party_role['id']) && isset($current_user_party_role['default_unit'])) {
                $business_unit = self::get_by_id('businessunit', $current_user_party_role['default_unit']);
            }
        }
        return $business_unit;
    }


}
