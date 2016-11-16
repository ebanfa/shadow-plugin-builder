<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyImageAPI {

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
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }

    /**
     *
     */
    public static function do_upload_images($entity_data, $images_param){
        $entity_data = EntityAPI::get_by_id('party', $entity_data['id']);
        if(isset($entity_data['id'])) {
            // We delete all the images for this party
            $existing_images = EntityAPI::find_by_criteria('partyimage', array('file_party' => $entity_data['id']));
            foreach ($existing_images as $party_image) {
                EntityAPI::do_delete_entity_impl($party_image, $party_image['id']) ;    
            }
            return $entity_data = ContentFileAPI::do_files_upload($entity_data, $images_param);
        }
        return array();
    }


}
