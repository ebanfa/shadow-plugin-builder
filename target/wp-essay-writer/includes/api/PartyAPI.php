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
    public static function do_create_individual($entity_data){
        return PartyCreateAPI::do_create_individual($entity_data);
    }

    /**
     * 
     */
    public static function do_create_organization($entity_data){
        return PartyCreateAPI::do_create_organization($entity_data);
    }

    /**
     * 
     */
    public static function do_edit_individual($entity_data, $party_data){
        return PartyEditAPI::do_edit_individual($entity_data, $party_data);
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

    /**
     * Just a helper method to reduce amount of ugly typing
     */
    public static function get_by_email($user_name){
        return EntityAPI::get_by_field('party', 'user_name', $user_name);
    }

}

