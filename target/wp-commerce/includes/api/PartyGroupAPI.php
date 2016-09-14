<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyGroupAPI  {

    /**
     *
     */
    public static function do_create_entity($entity_data){
        // Check if we have an email address for the new party
        if(isset($_POST['user_email'])) $entity_data['email'] = sanitize_text_field($_POST['user_email']);
        // Check for a party role
        if(isset($_POST['role'])) $entity_data['role'] = sanitize_text_field($_POST['role']);
        // Create the party
        $party_data = self::do_create_party($entity_data);
        //CloderiaLogUtils::shadow_log($party_data);
        // Process any errors in creating the party
        if($party_data['has_errors']) {
            $entity_data['has_errors'] = true;
            if(isset($party_data['message'])) $entity_data['message'] = $party_data['message'];
            return $entity_data;
        }
        if ($entity_data['edit_mode']) {
            // Update the required values
            $entity_data['party'] = $party_data['id']; 
            $entity_data['name'] = $party_data['name'];
            $entity_data['description'] = $party_data['description'];
        } else {
            $entity_data['party'] = $party_data['id']; 
            $entity_data['name'] = $party_data['name'];
        }
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        if(isset($_POST['role'])) {
            $party_data['extra_url_params'] = array(
                'role' => EntityRequestUtils::get_query_string_field('role')
            );
        }
        return $party_data;
    }

    /**
     *
     */
    public static function do_create_party($entity_data) {
        // The party name
        /*$last_name = $entity_data['last_name'];
        $first_name = $entity_data['first_name'];
        $entity_data['name'] = $first_name . ' ' . $last_name; */

        if($entity_data['edit_mode']) {
            return PartyAPI::do_create_non_individual($entity_data);
        }
        else {
            // First we need to load the entity from the db
            // So we can retrieve the id of the parent party
            if(isset($entity_data['id'])) {
                $saved_data = EntityAPI::get_by_id('partygroup', $entity_data['id']);
                $parent_data = EntityAPI::get_by_id('party', $saved_data['party']);
                $parent_data['edit_mode'] = false;
                $party_data = EntityAPIUtils::init_entity_data('party');
                $party_data = array_merge($parent_data, $party_data);
                $entity_data['business_unit'] = $saved_data['business_unit'];
                $party_data['name'] = $entity_data['name'];
                $party_data['description'] = $entity_data['description'];
                $party_data = EntityAPI::create_entity($party_data);
                return $party_data;
            }
        }
    }

}
