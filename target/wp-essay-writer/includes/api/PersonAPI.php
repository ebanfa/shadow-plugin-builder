<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PersonAPI  {

    /**
     *
     */
    public static function do_create_person($entity_data, $party_data) {
    	$entity_data['person_party'] = $party_data['id'];
    	if(!isset($entity_data['name'])) $entity_data['name'] = $party_data['name'];
    	if(!isset($entity_data['description'])) $entity_data['description'] = $party_data['description'];
    	$entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_edit_person($entity_data, $party_data) {
        $entity_data['edit_mode'] = 0;

        if(!isset($entity_data['name'])) $entity_data['name'] = $party_data['name'];
        if(!isset($entity_data['description'])) $entity_data['description'] = $party_data['description'];
        
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

}