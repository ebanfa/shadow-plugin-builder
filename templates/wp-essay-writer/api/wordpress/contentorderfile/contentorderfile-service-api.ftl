<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentOrderFileAPI  {

    /**
     *
     */
    public static function upload_contentorder_files_ajax($entity_data, $files_param){
        $entity_data = EntityAPI::get_by_id('contentorder', $entity_data['id']);
        if(isset($entity_data['id'])) {
            return $entity_data = FileAPI::do_files_upload($entity_data, $files_param);
        }
        return array();
    }

}
