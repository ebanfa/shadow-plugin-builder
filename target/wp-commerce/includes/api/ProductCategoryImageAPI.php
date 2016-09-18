<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProductCategoryImageAPI {

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
        $entity_data = EntityAPI::get_by_id('productcategory', $entity_data['id']);
        if(isset($entity_data['id'])) {
            return $entity_data = ContentFileAPI::do_files_upload($entity_data, $images_param);
        }
        return array();
    }


}
