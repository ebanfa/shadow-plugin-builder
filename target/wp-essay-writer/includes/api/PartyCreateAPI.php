<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class PartyCreateAPI {


    /**
     * 
     */
    public static function do_create_individual($entity_data){

        $party_type = EntityAPI::get_by_code('partytype', PartyAPI::$individual_party_type);
        if(!isset($party_type['id'])) return EntityAPIUtils::init_error($entity_data, 'Party type is required');
        
        $entity_data['name'] = $entity_data['first_name'] . ' ' . $entity_data['last_name'];
        // Create the party
        $party_data =  self::do_create_party($entity_data, $party_type);
        if($party_data['has_errors']) return $party_data;

        $person_data = PersonAPI::do_create_person($entity_data, $party_data);
        if(!isset($person_data['id'])) return EntityAPIUtils::init_error($party_data, 'Person creation failed');
        return $party_data;
    }

    /**
     * 
     */
    public static function do_create_organization($entity_data){

        $party_type = EntityAPI::get_by_code('partytype', PartyAPI::$non_individual_party_type);
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
    public static function do_create_party($entity_data, $party_type){
        $party_data = EntityAPIUtils::init_entity_data('party');
        $party_data['edit_mode'] = true;
        $party_data['role'] = $entity_data['role'];
        $party_data['name'] = $entity_data['name'];
        $party_data['party_type'] = $party_type['id'];
        $party_data['user_name'] = $entity_data['email'];
        // Process the display
        if(isset($entity_data['display_name'])) 
            $party_data['display_name'] = $entity_data['display_name'];
        else
            $party_data['display_name'] = $entity_data['name'];
        // If the description is not available the we form
        // one from the name
        if(!isset($entity_data['description']))
            $party_data['description'] = $entity_data['name'];
        else $party_data['description'] = $entity_data['description'];
        return self::do_create_entity($party_data);
    }


    /**
     *
     */
    public static function do_create_entity($entity_data){
        // First check if the user exists
        if($entity_data['edit_mode']) {
            if(UserPartyAPI::does_party_exist($entity_data['user_name'])) 
                return EntityAPIUtils::init_error($entity_data, 'Party with the specified user name already exists');
        }
        $party_role = $entity_data['role'];
        $display_name = $entity_data['display_name'];
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        if(isset($entity_data['id'])) {
            $entity_data['display_name'] = $display_name;
            PartyProfileAPI::do_create_party_profile($entity_data);
            BillingAccountAPI::do_create_billing_account($entity_data);
            PartyRoleAPI::add_role_to_party($entity_data, $party_role);
        }
        return $entity_data;
    }
}

