<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentOrderFileAjaxRequestProcessor {

    /**
     * 
     */
    public static function edit_entity_ajax($entity_data) {
        // Change the entity name in order to fool the File API
        // The fact that we have to do this is a testiment to bad design
        $entity_data['entity_artifact_name'] = 'contentorder';
        $entity_data = ContentOrderFileAPI::upload_contentorder_files_ajax($entity_data, 'contentorder_files');
        return $entity_data;
    }

}

?>