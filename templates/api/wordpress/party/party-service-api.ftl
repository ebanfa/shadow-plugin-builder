<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyAPI extends EntityAPI {

    /**
     * Get all parties with a given roles
     */
    public static function find_by_role($role) {

        $search_results = array();
        // Get the role 
        $role_type = self::get_by_code('roletype', strtoupper($role));
        // Process only if we got a valid response from the call above
        if(isset($role_type['id']) && isset($role_type['entity_code'])) {
            // Special treatment is required if the role type is 'user_organization'
            if($role === 'user_organization') {
                $search_results = self::find_user_organizations();
            } else {
                $party_ids = array();
                // Search for all the party role type associations with the given role
                $party_roles = self::find_by_criteria('partyrole', array('role' => $role_type['id']));
                // Loop throug all the return party roles 
                // and push the party id into list of parties
                foreach ($party_roles as $party_role) {
                    array_push($party_ids, $party_role['party']);
                }
                $search_results = self::find_by_ids('party', $party_ids);
            }
        }
        return $search_results;
    }

    /**
     * Get all the role types that a party has
     */
    public static function find_user_organizations() {
        $search_results = array();
        $current_user_party = self::get_current_user_party();

        if(isset($current_user_party['id'])) {
            $organization_ids = array();
            // Get the business units of the user party
            $business_units = self::find_user_business_units($current_user_party['id']);
            foreach ($business_units as $business_unit) {
                array_push($organization_ids, $business_unit['party']);
            }
            $organization_ids = array_unique($organization_ids);
            // Find all the roles of the parent party
            // and find1 those that are of role type user_organization
            foreach ($organization_ids as $organization_id) {
                $user_organization_role = self::get_by_code('roletype', 'USER_ORGANIZATION');
                if(isset($user_organization_role['id'])) {
                    $party_role = self::find_by_criteria('partyrole', array('party' => $organization_id, 'role' => $user_organization_role['id']));
                    if(isset($party_role['id'])) {
                        array_push($search_results, $organization_id);
                    }
                }
            }
            return self::find_by_ids('party', $search_results);
        }
        return $search_results;
    }

    /**
     * Get all the role types that a party has
     */
    public static function find_user_business_units($party_id) {
        $search_results = array();
        if($party_id) {
            // Fins all the party roles of the current user party
            $party_roles = self::find_by_criteria('partyrole', array('party' => $party_id));
            // Get the ids of all the business units of the party roles
            $business_unit_ids = array();
            foreach ($party_roles as $party_role) {
                array_push($business_unit_ids, $party_role['business_unit']);
            }
            // Get the business units 
            $business_unit_ids = array_unique($business_unit_ids);
            return self::find_by_ids('businessunit', $business_unit_ids);
        }
        return $search_results;
    }

    /**
     * Get the WP_User object of the party witht the provided id
     */
    public static function get_party_user($party_id){
        $user_data = array();
        $party_data = self::get_by_id('party', $party_id); 
      
        if(isset($party_data['id'])){       
            $user = get_user_by('login', $party_data['user_name']); 
            if($user){
                $user_data['id'] = $user->ID;
                $user_data['user_name'] = $user->user_login;
            }
        }
       return $user_data;
    }

    /**
     * Get the party of the user with the provided id
     */
    public static function get_user_party($user_id){
        $user = get_user_by('id', $user_id);
        return self::get_by_field('party', 'user_name', $user->user_login);
    }

    /**
     * Get the party of the currently logged in user
     */
    public static function get_current_user_party(){
        $user_party = array();
        $current_user = wp_get_current_user();
        if ($current_user) {
           $user_party = self::get_user_party($current_user->ID);
        }
        return $user_party;
    }


}
