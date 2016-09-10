<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BuildingTypeAPI {

    
    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data = EntityAPI::do_create_entity($entity_data);
        $mapping_list = self::do_create_typemap($entity_data);
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
    public static function do_create_typemap($entity_data){
        $mappings_list = array();
        // 1. Check for the buildings request param
        if(isset($_POST['buildingtypepropertytype'])) {
            // 2. Loop through the array of building objects (JSON encoded)
            $type_mappings = $_POST['buildingtypepropertytype'];
            $mapping_count_count = 1;
            foreach ($type_mappings as $type_mapping) {
                $type_mapping = json_decode(stripslashes($type_mapping), true);
                $mapping_data = EntityAPIUtils::init_entity_data('buildingtypepropertytype');

                $mapping_data['edit_mode'] = true;
                $mapping_data['name'] = $type_mapping['name'];
                $mapping_data['btpt_buildingtype'] = $entity_data['id'];
                $mapping_data['btpt_propertytype'] = $type_mapping['btpt_propertytype'];
                $mapping_data['description'] = $type_mapping['description'];
                $mapping_data = BuildingAPI::do_create_entity($mapping_data);
                // add to the list
                array_push($mappings_list, $mapping_data);
            }
        }
        return $mappings_list;
    }


}?>