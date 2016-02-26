<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PropertyAPI extends EntityAPI {

    
    /**
     *
     */
    public static function do_create_entity($entity_data){

        $entity_data['has_errors'] = false;
        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
                if(EntityStringUtils::is_invalid_string($entity_data['entity_code'])) {
                    $entity_data['entity_code'] = EntityStringUtils::get_token(8);
                }
            }
            if(isset($_POST['building'])) {
                $buildings = $_POST['building'];
                foreach ($buildings as $building) {
                    $building = json_decode(stripslashes($building));
                    var_dump($building);
                }
            }
            
            EntityRequestUtils::copy_fields_to_post($entity_data);
            $entity_data = EntityPersistenceAPI::create_entity($entity_data);
        } else {
            EntityRequestUtils::copy_fields_to_post($entity_data);
            // Edit mode dont need redirect...for now
            $entity_data['requires_redirect'] = false;
            $entity_data = EntityPersistenceAPI::update_entity($entity_data);
        }
        if(is_wp_error($entity_data['id'])) {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = $post_id->get_error_message();
        }
        return $entity_data;
    }

}
