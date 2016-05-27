<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class InventoryAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){
        if(isset($_POST['type']) && isset($_POST['business_category'])) {
            $entity_data =  EntityAPI::do_create_entity($entity_data);
            $invoice_items_list = self::do_create_inventory_items($entity_data);
        }
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
    public static function do_create_inventory_items($entity_data){
        $inventory_items_list = array();
        // 1. Check for the buildings request param
        if(isset($_POST['inventoryitem'])) {
            // 2. Loop through the array of inventoryitem objects (JSON encoded)
            $inventory_items = $_POST['inventoryitem'];
            $inventory_item_count = 1;
            foreach ($inventory_items as $inventory_item) {
                $inventory_item = json_decode(stripslashes($inventory_item), true);
                $inventory_item_data = EntityAPIUtils::init_entity_data('inventoryitem');

                $inventory_item_data['edit_mode'] = true;
                $inventory_item_data['name'] = $inventory_item['name'];
                $inventory_item_data['i_inventory'] = $entity_data['id'];
                $inventory_item_data['i_asset'] = $inventory_item['i_asset'];
                $inventory_item_data['quantity'] = $inventory_item['quantity'];
                $inventory_item_data['i_itemtype'] = $inventory_item['i_itemtype'];
                $inventory_item_data['description'] = $inventory_item['description'];
                $inventory_item_data['business_unit'] = $entity_data['business_unit'];

                $inventory_item_data = BuildingAPI::do_create_entity($inventory_item_data);
                // add to the list
                array_push($inventory_items_list, $inventory_item_data);
            }
        }
        return $inventory_items_list;
    }




}