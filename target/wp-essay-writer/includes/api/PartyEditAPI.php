<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class PartyEditAPI {

    /**
     * 
     */
    public static function do_edit_individual($entity_data, $party_data){
        $entity_data['name'] = $entity_data['first_name'] . ' ' . $entity_data['last_name'];
        $party_data =  self::do_edit_party($entity_data, $party_data);
        if($party_data['has_errors']) return $party_data;

        $person_data = PersonAPI::do_edit_person($entity_data, $party_data);
        if(!isset($person_data['id'])) return EntityAPIUtils::init_error($party_data, 'Person creation failed');
        return $party_data;
    }

    /**
     *
     */
    public static function do_edit_party($entity_data, $party_data){
        $party_data['edit_mode'] = false;    
        $party_data['name'] = $entity_data['name'];    
        $party_data['description'] = $entity_data['description'];
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
        return self::do_edit_entity($party_data);
    }

    /**
     *
     */
    public static function do_edit_entity($entity_data){
        // First check if the user exists
        $display_name = $entity_data['display_name'];
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        if(!isset($entity_data['id'])) return EntityAPIUtils::init_error($entity_data, 'Could not update party');
        $entity_data['display_name'] = $display_name;
        PartyProfileAPI::do_edit_party_profile($entity_data);
        BillingAccountAPI::do_edit_billing_account($entity_data);
        return $entity_data;
    }


}

