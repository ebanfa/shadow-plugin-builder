<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PropertyAPI {

    
    /**
     *
     */
    public static function do_create_entity($entity_data){
        // 1. Create the property
        $entity_data = self::do_create_property($entity_data);
        // 2. Create the buildings
        $buildings_list = self::do_create_buildings($entity_data);
        // 3. Create the facilities
        $facilities_list = self::do_create_property_facilities($entity_data);
        // 4. Send notification
        $notification_data = self::do_create_property_notification($entity_data);
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
    public static function do_create_property($entity_data){
        if(isset($_REQUEST['category'])) {
            $property_category = sanitize_text_field($_REQUEST['category']);
            $property_type = EntityAPI::get_by_code('propertytype', strtoupper($property_category));
            if(isset($property_type['id'])) {
                $entity_data['p_type'] = $property_type['id'];
            }
        }
        $party_data = self::create_property_party($entity_data);
        if(isset($party_data['id'])) $entity_data['party'] = $party_data['id'];
        $property_data = EntityAPI::do_create_entity($entity_data);
        return $property_data;
    }

    /**
     *
     */
    public static function create_property_party($entity_data) {

        $party_data = EntityAPIUtils::init_entity_data('party');

        if($entity_data['edit_mode']) {
            $party_data['edit_mode'] = true;
            $party_type = EntityAPI::get_by_code('partytype', 'ORGANIZATION');
            $party_data['party_type'] = $party_type['id'];
            //$party_data['business_unit'] = $entity_data['business_unit'];
        }
        else {
            // First we need to load the entity from the db
            // So we can retrieve the id of the parent party
            if(isset($entity_data['id'])) {
                $saved_entity_data = EntityAPI::get_by_id('property', $entity_data['id']);
                $parent_party_data = EntityAPI::get_by_id('party', $saved_entity_data['party']);
                $parent_party_data['edit_mode'] = false;
                $party_data = array_merge($parent_party_data, $party_data);
                $entity_data['business_unit'] = $saved_entity_data['business_unit'];
            }
        }
        // Set the name on the part and on the entity
        $party_data['name'] = $entity_data['name'];
        $party_data['description'] = $entity_data['name'];
        $party_data['business_unit'] = $entity_data['business_unit'];
        $party_data = EntityAPI::create_entity($party_data);

        $party_role = self::create_default_party_role($party_data);
        return $party_data;
    }

    /**
     *
     */
    public static function create_default_party_role($party_data) {
        $entity_data = EntityAPIUtils::init_entity_data('partyrole');
        $owner_role_data = EntityAPI::get_by_code('roletype', 'PROPERTY');

        if(isset($owner_role_data['id']) && isset($party_data['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['name'] = $party_data['name'];
            $entity_data['role'] = $owner_role_data['id'];
            $entity_data['party'] = $party_data['id'];
            $entity_data['parent_unit'] = $party_data['business_unit'];
            $entity_data['business_unit'] = $party_data['business_unit'];
            $entity_data['description'] = 'Default role ' . $owner_role_data['name'] . ' for party ' . $party_data['name'];
            $entity_data = EntityAPI::create_entity($entity_data);
        }
        return $entity_data;

    }

    /**
     *
     */
    public static function do_create_buildings($entity_data){
        $buildings_list = array();
        // 1. Check for the buildings request param
        if(isset($_POST['building'])) {
            // 2. Loop through the array of building objects (JSON encoded)
            $buildings = $_POST['building'];
            $building_count = 1;
            foreach ($buildings as $building) {
                $building = json_decode(stripslashes($building), true);
                $building_data = EntityAPIUtils::init_entity_data('building');

                $building_data['edit_mode'] = true;
                $building_data['name'] = $building['name'];
                $building_data['b_property'] = $entity_data['id'];
                $building_data['description'] = $building['description'];
                $building_data['b_buildingtype'] = $building['b_buildingtype'];
                $building_data['no_of_flrs'] = $building['no_of_flrs'];
                $building_data['b_unitalloc'] = $building['b_unitalloc'];
                $building_data['units_in_flr'] = $building['units_in_flr'];
                $building_data['has_basement'] = $building['has_basement'];
                $building_data['basement_count'] = $building['basement_count'];

                $building_data = BuildingAPI::do_create_entity($building_data);
                // add to the list
                array_push($buildings_list, $building_data);
            }
        }
        return $buildings_list;
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

                for ($i=0; $i < $floor_data['unit_count']; $i++) { 
                    self::create_floor_unit($building_data, $floor_data, $i);
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
    public static function do_create_property_facilities($entity_data){
        $facilities_list = array();
        // 1. Check for the buildings request param
        if(isset($_POST['facility'])) {
            // 2. Loop through the array of building objects (JSON encoded)
            $facilities = $_POST['facility'];
            foreach ($facilities as $facility) {
                $facility = json_decode(stripslashes($facility), true);
                $facility_data = EntityAPIUtils::init_entity_data('facility');

                $facility_data['edit_mode'] = true;
                $facility_data['name'] = $facility['name'];
                $facility_data['f_type'] = $facility['f_type'];
                $facility_data['f_property'] = $facility['f_property'];
                $facility_data['description'] = $facility['description'];
                //$facility_data['number_of_floors'] = $facility['number_of_floors'];
                $facility_data = EntityAPI::do_create_entity($facility_data);
                // add to the list
                array_push($facilities_list, $facility_data);
            }
        }
        return $facilities_list;
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
    public static function do_create_property_notification($entity_data){
        if(!$entity_data['has_errors']) {
            $notification_data = array();
            $notification_data['data'] = $entity_data;
            $notification_data['code'] = $entity_data['entity_code'];
            $notification_data['name'] = $entity_data['name'];

            $business_unit = EntityAPI::get_by_id('businessunit', $entity_data['business_unit']);
            if(isset($business_unit['id'])) {
                $notification_data['business_unit'] = $business_unit['name'];
            }
            $notification_data['n_type'] = NotificationAPI::$property_created;
            // Set the creator
            $current_user_party = PartyAPI::get_current_user_party();
            $notification_data['n_owner'] = $current_user_party['id'];
            $notification_data['log_level'] = NotificationAPI::$info;

            NotificationAPI::do_notification($notification_data);
        }
        return $notification_data;
    }


}?>