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
    public static function do_create_entity($entity_data){

        echo "callling>>>>>>>>>>>>>>>>>>>>>>>>>>>.";

        $entity_data['has_errors'] = false;
        echo '>>>>>>>>>>>>>>>>>><<<<<<<<<<<<' . $entity_data['first_name'];

        if ($entity_data['edit_mode']) {
            // Create the order
            if(isset($entity_data['entity_code'])){
                if(EntityStringUtils::is_invalid_string($entity_data['entity_code'])) {
                    $entity_data['entity_code'] = EntityStringUtils::get_token(8);
                }
            }

            echo '>>>>>>>>>>>>>>>>>><<<<<<<<<<<<' . $entity_data['last_name'];
            $entity_data = self::create_party($entity_data);
            $entity_data = self::create_party_role($entity_data);
            $entity_data = EntityPersistenceAPI::do_create_entity($entity_data);

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

    /**
     *
     */
    public static function create_party($entity_data) {

        $party_data = EntityAPIUtils::init_entity_data('party');

        if($entity_data['edit_mode']) {
            $party_data['edit_mode'] = true;
            $party_type = self::get_by_code('partytype', 'INDIVIDUAL');
            $party_data['party_type'] = $party_type['id'];
            //$party_data['business_unit'] = $entity_data['business_unit'];
        }
        else {
            // First we need to load the entity from the db
            // So we can retrieve the id of the parent party
            if(isset($entity_data['id'])) {
                $saved_entity_data = self::get_by_id('person', $entity_data['id']);
                $parent_party_data = self::get_by_id('party', $saved_entity_data['party']);
                $parent_party_data['edit_mode'] = false;
                $party_data = array_merge($parent_party_data, $party_data);
            }
        }
        // Set the name on the part and on the entity
        $party_name = $entity_data['first_name'] . ' ' . $entity_data['last_name'];
        $party_data['name'] = $party_name;
        $entity_data['name'] = $party_name;
        $party_data['description'] = $party_name;

        //$party_data = CloderiaAPIUtils::validate_entity_data($party_data);
        $party_data = self::do_create_entity($party_data);

        if(isset($party_data['id'])){ 
            $entity_data['party'] = $party_data['id']; 
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function create_party_role($entity_data) {

        if($entity_data['edit_mode']) {
            $party_role_data = EntityAPIUtils::init_entity_data('partyrole');
            $role_type = self::get_by_code('roletype', strtoupper($entity_data['role']));

            $party_role_data['edit_mode'] = true;
            $party_role_data['role'] = $role_type['id'];
            $party_role_data['party'] = $entity_data['party'];
            $party_role_data['parent_unit'] = $entity_data['business_unit'];
            $party_role_data['business_unit'] = $entity_data['business_unit'];
            $party_role_data['name'] = $entity_data['name'];
            $party_role_data['description'] = $entity_data['name'];

            //$party_role_data = CloderiaAPIUtils::validate_entity_data($party_role_data);
            $party_role_data = self::do_create_entity($party_role_data);
        }
        return $entity_data;
    }

}
