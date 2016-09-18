<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyAPI {

    public static $role_type_code = 'CUSTOMER';
    public static $individual_party_type = 'INDIVIDUAL';
    public static $non_individual_party_type = 'ORGANIZATION';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        // First check if the user exists
        if($entity_data['edit_mode']) {
            $party_data = EntityAPI::get_by_field('party', 'user_name', $entity_data['user_name']);
            if(isset($party_data['id'])) 
                return EntityAPIUtils::init_error($party_data, 'Party with the specified user name already exists');
        }
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        $billingaccount_data = self::create_billing_account($entity_data);
        return $entity_data;
    }

    /**
     * This method only deals with the creation of new customers
     */
    public static function do_create_individual($entity_data){
        // We do this because it may not be a party entity data that is passed in
        $party_data = EntityAPIUtils::init_entity_data('party');
        $party_data['edit_mode'] = true;
        $party_data['name'] = $entity_data['name'];
        $party_data['user_name'] = $entity_data['email'];
        $party_data['description'] = $entity_data['name'];
        
        $business_unit = BusinessUnitAPI::get_default_business_unit();
        $party_type = EntityAPI::get_by_code('partytype', self::$individual_party_type);
        //$business_unit = EntityAPI::get_by_code('businessunit', BusinessunitAPI::$default_business_unit);
        // Validate the required relationship fields
        if(!isset($business_unit['id']) || !isset($party_type['id'])) {
            $party_data['has_errors'] = true;
            $party_data['message'] = 'Party type and business unit required';
            return $party_data;
        }
        $party_data['party_type'] = $party_type['id'];
        $party_data['business_unit'] = $business_unit['id'];
        // Create the party role
        $party_data =  self::do_create_entity($party_data);
        if($party_data['has_errors']) return $party_data;

        $entity_data = self::do_create_person($party_data, $entity_data);
        $profile_data = self::do_create_party_profile($party_data);
        $party_role_data = self::add_role_to_party($party_data, $entity_data['role']);
        return $entity_data;
    }

    /**
     * This method only deals with the creation of new customers
     */
    public static function do_create_non_individual($entity_data){
        // We do this because it may not be a party entity data that is passed in
        $party_data = EntityAPIUtils::init_entity_data('party');
        $party_data['edit_mode'] = true;
        $party_data['name'] = $entity_data['name'];
        $party_data['user_name'] = $entity_data['email'];
        $party_data['description'] = $entity_data['description'];
        
        $business_unit = BusinessUnitAPI::get_default_business_unit();
        $party_type = EntityAPI::get_by_code('partytype', self::$non_individual_party_type);
        // Validate the required relationship fields
        if(!isset($business_unit['id']) || !isset($party_type['id'])) {
            $party_data['has_errors'] = true;
            $party_data['message'] = 'Party type and business unit required';
            return $party_data;
        }
        $party_data['party_type'] = $party_type['id'];
        $party_data['business_unit'] = $business_unit['id'];
        // Create the party role
        $party_data =  self::do_create_entity($party_data);
        if($party_data['has_errors']) return $party_data;
        // Create the party role
        $entity_data = self::do_create_party_group($party_data, $entity_data);
        $profile_data = self::do_create_party_profile($party_data);
        $party_role_data = self::add_role_to_party($party_data, $entity_data['role']);
        return $party_data;
    }

    /**
     * 
     */
    public static function do_create_person($party_data, $person_data) {

        if(isset($party_data['id'])) {
            $person_data['edit_mode'] = true;
            $person_data['person_party'] = $party_data['id'];
            $person_data['business_unit'] = $party_data['business_unit'];
            $person_data = EntityAPI::do_create_entity($person_data);
            if(!isset($person_data['id']))
                return EntityAPIUtils::init_error($person_data, 'Could not create person');
        }
        return $person_data;
    }

    /**
     * 
     */
    public static function do_create_party_group($party_data, $party_group_data) {

        if(isset($party_data['id'])) {
            $party_group_data['edit_mode'] = true;
            $party_group_data['partygroup_party'] = $party_data['id'];
            $party_group_data['business_unit'] = $party_data['business_unit'];
            $party_group_data = EntityAPI::do_create_entity($party_group_data);
            if(!isset($party_group_data['id']))
                return EntityAPIUtils::init_error($party_group_data, 'Could not create organization');
        }
        return $party_group_data;
    }

    /**
     * Each party has a party profile that holds profile related information 
     * for the user. This is stuff like profile picture, display name, status etc.
     * Each profile has a default business unit which dictates the data that the
     * current user is allowed to access. The second business unit parameter is
     * business unit in which this profile is defined
     */
    public static function do_create_party_profile($party_data) {
        $entity_data = EntityAPIUtils::init_entity_data('partyprofile');

        if(isset($party_data['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['party'] = $party_data['id'];
            $entity_data['name'] = $party_data['name'];
            $entity_data['display_name'] = $party_data['name']; 
            $entity_data['date_created'] = date("Y-m-d H:i:s");
            $entity_data['default_unit'] = $party_data['business_unit'];
            $entity_data['business_unit'] = $party_data['business_unit'];
            $entity_data = EntityAPI::create_entity($entity_data);
        }
        return $entity_data;
    }

    /**
     * Upon signup, a business unit is created for the new party. Since this
     * is the business unit of the new user, we create a new party role of role
     * type 'BUSINESS_OWNER' for the new user.
     */
    public static function add_role_to_party($party_data, $role_type_code) {
        $entity_data = EntityAPIUtils::init_entity_data('partyrole');
        $owner_role_data = EntityAPI::get_by_code('roletype', strtoupper($role_type_code));

        if(isset($owner_role_data['id']) && isset($party_data['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['name'] = $party_data['name'];
            $entity_data['role'] = $owner_role_data['id'];
            $entity_data['party'] = $party_data['id'];
            $entity_data['parent_unit'] = $party_data['business_unit'];
            $entity_data['business_unit'] = $party_data['business_unit'];
            $entity_data['description'] = 'Default role ' . $owner_role_data['name'] . ' for party ' . $party_data['name'];
            $entity_data = EntityAPI::create_entity($entity_data);
        }
        return $entity_data;

    }


    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $role_type = EntityRequestUtils::get_query_string_field('role');
        if($role_type) return  self::find_by_role($entity_data, $role_type); 
        return  EntityAPI::do_find_entity($entity_data); 
    }

    /**
     * Get all parties with a given roles
     */
    public static function find_by_role($entity_data, $role) {

        $search_results = array();
        // Get the role 
        $role_type = EntityAPI::get_by_code('roletype', strtoupper($role));
        // Process only if we got a valid response from the call above
        if(isset($role_type['id']) && isset($role_type['entity_code'])) {
            if($role === 'user_organization') {
                $search_results = self::find_user_organizations();
            } else {
                $party_ids = array();
                // Search for all the party role type associations with the given role
                $party_roles = EntityAPI::find_by_criteria('partyrole', array('role' => $role_type['id']));
                // Loop throug all the return party roles 
                // and push the party id into list of parties
                foreach ($party_roles as $party_role) {
                    array_push($party_ids, $party_role['party']);
                }
                // Doing all this shit cause I am not good at SQL :-(
                if(!empty($party_ids)) {
                    $results = EntityAPI::find_by_ids_and_criteria('party', $party_ids);
                    foreach ($results as $key => $party_data) {
                        foreach ($party_roles as $party_role) {
                            if($party_data['id'] == $party_role['party'])
                                array_push($search_results, $party_data);
                        }
                    }
                }
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
                $user_organization_role = EntityAPI::get_by_code('roletype', 'USER_ORGANIZATION');
                if(isset($user_organization_role['id'])) {
                    $party_role = EntityAPI::find_by_criteria('partyrole', array('party' => $organization_id, 'role' => $user_organization_role['id']));
                    if(isset($party_role['id'])) {
                        array_push($search_results, $organization_id);
                    }
                }
            }
            return EntityAPI::find_by_ids('party', $search_results, array());
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
            $party_roles = EntityAPI::find_by_criteria('partyrole', array('party' => $party_id));
            // Get the ids of all the business units of the party roles
            $business_unit_ids = array();
            foreach ($party_roles as $party_role) {
                array_push($business_unit_ids, $party_role['business_unit']);
            }
            // Get the business units 
            $business_unit_ids = array_unique($business_unit_ids);
            return EntityAPI::find_by_ids('businessunit', $business_unit_ids, array());
        }
        return $search_results;
    }

    /**
     * Get the WP_User object of the party witht the provided id
     */
    public static function get_party_user($party_id){
        $user_data = array();
        $party_data = EntityAPI::get_by_id('party', $party_id); 
      
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
        $user_party = array();
        $user = get_user_by('id', $user_id);
        if($user)
            $user_party = EntityAPI::get_by_field('party', 'user_name', $user->user_login);
        return $user_party;
    }

    /**
     * Get the party of the user with the provided id
     */
    public static function is_portal_admin($party_data){
        if($party_data['user_name'] == 'admin@africanfabricanddesigns.com')
            return true;
        return false;
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

    /**
     *
     */
    public static function create_billing_account($party_data) {
        $billingaccount_data = EntityAPIUtils::init_entity_data('billingaccount');
        if(!isset($party_data['id'])) 
            return EntityAPIUtils::init_error($party_data, 'Billing account creation requires valid party');
        $billingaccount_data['balance'] = 0;
        $billingaccount_data['edit_mode'] = true;
        $billingaccount_data['party'] = $party_data['id'];
        $billingaccount_data['name'] = $party_data['name'];
        $billingaccount_data['date_created'] = date("Y-m-d H:i:s");
        $billingaccount_data['description'] = $party_data['description'];
        $billingaccount_data['business_unit'] = $party_data['business_unit'];
        $billingaccount_data =  EntityAPI::create_entity($billingaccount_data); 
        return $billingaccount_data;
    }

    /**
     *
     */
    public static function do_notification($entity_data) {

        if(!$entity_data['has_errors']&& $entity_data['edit_mode']) {
            $notification_data = array();
            $notification_data['data'] = $entity_data;
            $notification_data['code'] = $entity_data['entity_code'];
            $notification_data['name'] = $entity_data['name'];

            $business_unit = EntityAPI::get_by_id('businessunit', $entity_data['business_unit']);
            if(isset($business_unit['id'])) {
                $notification_data['business_unit'] = $business_unit['name'];
            }
            
            /*$notification_data['n_type'] = NotificationAPI::$party_created;
            if(isset($_REQUEST['role'])) {
                $role = sanitize_text_field($_REQUEST['role']);
                $role_type = EntityAPI::get_by_code('roletype', strtoupper($role));
                if(isset($role_type['id'])) {
                    $notification_data['role'] = $role_type['name'];
                }
            } 
            // Set the creator
            $current_user_party = self::get_current_user_party();
            if(isset($current_user_party['id'])) {
                $notification_data['n_owner'] = $current_user_party['id'];
            }
            else { $notification_data['n_owner'] = $entity_data['id']; }
            $notification_data['log_level'] = NotificationAPI::$info;
            NotificationAPI::do_notification($notification_data);*/
        }
    }


}
