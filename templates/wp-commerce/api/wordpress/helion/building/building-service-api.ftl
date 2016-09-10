<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BuildingAPI {

    
    /**
     *
     */
    public static function do_create_entity($entity_data){
        // 1. Create the property
        $building_data = EntityAPI::do_create_entity($entity_data);
        if(isset($building_data['b_unitalloc'])) {
            $unit_allocation = EntityAPI::get_by_id('allocationunit', $building_data['b_unitalloc']);
            // If the unit allocation specified is of tyoe building, we will create
            // the unit for the building here
            if(isset($unit_allocation['id'])) {
                $building_data['b_unitalloc_code'] = $unit_allocation['entity_code'];
                if($building_data['b_unitalloc_code'] == 'BUILDING'){
                    self::create_building_unit($building_data, 1);
                }
            }
        }
        // Create the floors
        self::do_create_building_floors($building_data);
        //self::do_create_building_notification($entity_data);
        return $building_data;
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
    public static function do_create_building($building_data){
        return EntityAPI::do_create_entity($entity_data);
    }

    /**
     *
     */
    public static function do_create_building_floors($building_data){
        $floors_list = array();
        $no_of_floors = intval($building_data['no_of_flrs']);
        for ($i=0; $i < $no_of_floors; $i++) { 
            $floor_data = EntityAPIUtils::init_entity_data('floor');

            $floor_data['edit_mode'] = true;
            $floor_name = $building_data['name'] . ' Floor ' . $i; 
            $floor_data['name'] = $floor_name;
            $floor_data['description'] = $floor_name;

            // Consult the unit allocation to figure out what type of floor should
            // be created
            $floor_type = array();
            $floor_alloc = array();

            if(isset($building_data['b_unitalloc_code'])) {
                if($building_data['b_unitalloc_code'] == 'FLOOR_SPACE') {
                    $floor_type = EntityAPI::get_by_code('floortype', 'OFFICE_FLOOR');
                    $floor_alloc = EntityAPI::get_by_code('allocationunit', 'FLOOR_SPACE');
                } 
                else if($building_data['b_unitalloc_code'] == 'APARTMENT') {
                    $floor_type = EntityAPI::get_by_code('floortype', 'APARTMENT_FLOOR');
                    $floor_alloc = EntityAPI::get_by_code('allocationunit', 'APARTMENT');
                }
            }

            // Create the floor
            if(isset($floor_type['id']) && isset($floor_alloc['id'])) {
                $floor_data['flr_type'] = $floor_type['id'];
                $floor_data['flr_allocation'] = $floor_alloc['id'];
                $floor_data['flr_allocation_code'] = $floor_alloc['entity_code'];
                $floor_data['flr_building'] = $building_data['id'];
                $floor_data['floor_number'] = $i;
                $floor_data['unit_count'] = $building_data['units_in_flr'];
                $floor_data = EntityAPI::do_create_entity($floor_data);

                for ($k=0; $k < $floor_data['unit_count']; $k++) { 
                    self::create_floor_unit($building_data, $floor_data, $k);
                }
                // add to the list
                array_push($floors_list, $floor_data);
            }
        }
        
        return $floors_list;
    }

    

    /**
     *
     */
    public static function create_building_unit($building, $unit_no){
        
        $unit_data = EntityAPIUtils::init_entity_data('unit');
        $unit_type_data = EntityAPI::get_by_code('unittype', 'BUILDING');
        if(isset($unit_type_data['id'])) {
            $unit_data['u_type'] = $unit_type_data['id'];
        }
        $unit_data['edit_mode'] = true;
        $unit_data['unit_count'] = $unit_no;
        $unit_data['u_building'] = $building['id'];
        $unit_data['name'] = 'Building Unit' . $unit_no;
        $unit_data['description'] = $unit_data['name'] ;
        $unit_data['u_property'] = $building['b_property'];
        $unit_data = EntityAPI::create_entity($unit_data);
    }

    /**
     *
     */
    public static function create_floor_unit($building_data, $floor_data, $unit_no) {
        $unit_data = EntityAPIUtils::init_entity_data('unit');
        // The type of the unit depends on the unit allocation 
        if($floor_data['flr_allocation_code'] == 'FLOOR_SPACE') {
            $unit_type_data = EntityAPI::get_by_code('unittype', 'GENERIC_FLOOR_SPACE');
            if(isset($unit_type_data['id'])) {
                $unit_data['u_type'] = $unit_type_data['id'];
            }
        }
        
        if($floor_data['flr_allocation_code'] == 'APARTMENT') {
            $unit_type_data = EntityAPI::get_by_code('unittype', 'GENERIC_APARTMENT');
            if(isset($unit_type_data['id'])) {
                $unit_data['u_type'] = $unit_type_data['id'];
            }
        }
        $unit_data['unit_count'] = $unit_no;
        $unit_data['edit_mode'] = true;
        $unit_data['u_floor'] = $floor_data['id'];
        $unit_data['u_building'] = $building_data['id'];
        $unit_data['u_property'] = $building_data['b_property'];
        $unit_data['name'] = 'Unit ' . $unit_no . '. Building ' . $building_data['name'];
        $unit_data['description'] = $unit_data['name'] ;
        $unit_data = EntityAPI::create_entity($unit_data);
    }

    /**
     *
     */
    public static function do_create_building_notification($entity_data){
        if(!$entity_data['has_errors']) {
            $notification_data = array();
            $notification_data['data'] = $entity_data;
            $notification_data['code'] = $entity_data['entity_code'];
            $notification_data['name'] = $entity_data['name'];

            $business_unit = EntityAPI::get_by_id('businessunit', $entity_data['business_unit']);
            if(isset($business_unit['id'])) {
                $notification_data['business_unit'] = $business_unit['name'];
            }
            $notification_data['n_type'] = NotificationAPI::$building_created;
            // Set the creator
            $current_user_party = PartyAPI::get_current_user_party();
            $notification_data['n_owner'] = $current_user_party['id'];
            $notification_data['log_level'] = NotificationAPI::$info;

            NotificationAPI::do_notification($notification_data);
        }
        return $notification_data;
    }

    /**
     * 
     */
    public static function get_model($artifact_name) {
        if(isset($_REQUEST['category'])) {

            $category = sanitize_text_field($_REQUEST['category']);

            if($category == 'residential')
                return self::get_residential_model($artifact_name);
            elseif($category == 'industrial')
                return self::get_industrial_model($artifact_name);
            elseif($category == 'retail')
                return self::get_retail_model($artifact_name);
            elseif($category == 'office')
                return self::get_office_model($artifact_name);
            else {
                return EntityAPIUtils::init_entity_data($artifact_name);
            }
        }
        else {
            return EntityAPIUtils::init_entity_data($artifact_name);
        }
    }



    /**
     * 
     */
    public static function get_residential_model($artifact_name) {
        return self::get_model_by_type($artifact_name, 'RESIDENTIAL');
    }
     /**
     * 
     */
    public static function get_industrial_model($artifact_name) {
        return self::get_model_by_type($artifact_name, 'INDUSTRIAL');
    }
     /**
     * 
     */
    public static function get_retail_model($artifact_name) {
        return self::get_model_by_type($artifact_name, 'RETAIL');
    }
     /**
     * 
     */
    public static function get_office_model($artifact_name) {
        return self::get_model_by_type($artifact_name, 'OFFICE');
    }

    /**
     * 
     */
    public static function get_model_by_type($artifact_name, $property_type_code) {
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        foreach ($entity_data['entity_fields'] as $field_key => $field_data) {
            if($field_data['name'] == 'b_buildingtype') {

                $prop_type = EntityAPI::get_by_code('propertytype', $property_type_code);
                if(isset($prop_type['id']))  {
                    $building_type_mappings = EntityAPI::find_by_criteria('buildingtypepropertytype', array(
                        'btpt_propertytype' => $prop_type['id'],));
                    $entity_data = self::filter_field_options($entity_data, $field_data, $field_key, $building_type_mappings);
                }
            }
        }
        return $entity_data;
    }

    public static function filter_field_options($entity_data, $field_data, $field_key, $building_type_mappings) {
        
        //var_dump(count($building_type_mappings));
        if(!empty($building_type_mappings)) {
            $field_data['options'] = array();
            $field_data['has_options'] = true;
            foreach ($building_type_mappings as $key => $mapping_data) {
                array_push($field_data['options'], 
                    array('name' => $mapping_data['name'], 'value' => $mapping_data['id']));
            }
            $entity_data['entity_fields'][$field_key] = $field_data;
        }
        return $entity_data;
    }
}?>