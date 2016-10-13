<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class PartyAPI {

    public static $individual_party_type = 'INDIVIDUAL';
    public static $biz_user_role_type_code = 'BUSINESS_USER';
    public static $non_individual_party_type = 'ORGANIZATION';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        // First check if the user exists
        if($entity_data['edit_mode']) {
            if(UserPartyAPI::does_party_exist($entity_data['user_name'])) 
                return EntityAPIUtils::init_error($entity_data, 'Party with the specified user name already exists');
        }
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        if(isset($entity_data['id'])) {
            PartyProfileAPI::do_create_party_profile($entity_data);
            BillingAccountAPI::create_billing_account($entity_data);
            PartyRoleAPI::add_role_to_party($entity_data, $entity_data['role']);
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_create_party($entity_data, $party_type){
        $party_data = EntityAPIUtils::init_entity_data('party');
        $party_data['edit_mode'] = true;
        $party_data['name'] = $entity_data['name'];
        $party_data['party_type'] = $party_type['id'];
        $party_data['user_name'] = $entity_data['email'];
        $party_data['description'] = $entity_data['description'];
        return self::do_create_entity($party_data);
    }

    /**
     * This method only deals with the creation of new customers
     */
    public static function do_create_individual($entity_data){

        $party_type = EntityAPI::get_by_code('partytype', self::$individual_party_type);
        if(!isset($party_type['id'])) return EntityAPIUtils::init_error($entity_data, 'Party type is required');
        // Create the party
        $party_data =  self::do_create_party($party_data, $party_type);
        if($party_data['has_errors']) return $party_data;

        $person_data = PersonAPI::do_create_person($party_data, $entity_data);
        if(!isset($person_data['id'])) return EntityAPIUtils::init_error($party_data, 'Person creation failed');
        return $party_data;
    }

    /**
     * This method only deals with the creation of new customers
     */
    public static function do_create_organization($entity_data){

        $party_type = EntityAPI::get_by_code('partytype', self::$non_individual_party_type);
        if(!isset($party_type['id'])) return EntityAPIUtils::init_error($entity_data, 'Party type is required');
        // Create the party role
        $party_data =  self::do_create_party($party_data, $party_type);
        if($party_data['has_errors']) return $party_data;
        
        $organization_data = PartyGroupAPI::do_create_party_group($party_data, $entity_data);
        if(!isset($organization_data['id'])) return EntityAPIUtils::init_error($party_data, 'Organization creation failed');
        return $party_data;
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
        return $search_results;
    }

}

