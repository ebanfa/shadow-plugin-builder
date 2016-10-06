<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyRoleAPI {

    public static $tutor_role_type_code = 'TUTOR';
    public static $student_role_type_code = 'STUDENT';
    public static $biz_user_role_type_code = 'BUSINESS_USER';

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
    public static function has_role($party_id, $role_type_code){
        $role_type_data =  EntityAPI::get_by_code('roletype', $role_type_code);
        if(!isset($role_type_data['id'])) return false;

        $party_roles = EntityAPI::find_by_criteria('partyrole', array('party' => $party_id, 'role' => $role_type_data['id']));
        if(empty($party_roles)) return false;
        return true;
    }

    /**
     * Get all parties with a given roles
     */
    public static function find_by_role($role) {

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
                $results = EntityAPI::find_by_ids('party', $party_ids);
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
     * 
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


}
