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
        // Check for a party role
        if(isset($_POST['role'])) $entity_data['role'] = sanitize_text_field($_POST['role']);
        if(isset($_POST['email'])) $entity_data['email'] = sanitize_text_field($_POST['email']);

        if ($entity_data['edit_mode']) $entity_data = self::do_create_party_group($entity_data);
        else  $entity_data = self::do_edit_party_group($entity_data);

        if(isset($_POST['role'])) {
            $entity_data['extra_url_params'] = array(
                'role' => EntityRequestUtils::get_query_string_field('role')
            );
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_create_party_group($entity_data) 
    {
        $entity_data = PartyAPI::do_create_non_individual($entity_data);
        if($entity_data['has_errors']) 
            $entity_data = EntityAPIUtils::init_error($entity_data, $entity_data['message']);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_edit_party_group($entity_data) 
    {

        if(isset($entity_data['id'])) {
            // Get the saved data
            $saved_data = EntityAPI::get_by_id('partygroup', $entity_data['id']);
            $parent_data = EntityAPI::get_by_id('party', $saved_data['partygroup_party']);

            $party_data = array_merge($parent_data, EntityAPIUtils::init_entity_data('party'));

            $parent_data['edit_mode'] = false;
            $entity_data['edit_mode'] = false;
            $party_data['name'] = $entity_data['name'];
            $party_data['description'] = $entity_data['description'];
            $party_data = EntityAPI::do_create_entity($party_data);
            $entity_data = EntityAPI::do_create_entity($entity_data);
        }
        return $party_data;
    }

}
