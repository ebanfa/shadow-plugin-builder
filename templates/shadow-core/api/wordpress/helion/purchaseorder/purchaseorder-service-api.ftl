<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PurchaseOrderAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){
        if(isset($_POST['type']) && isset($_POST['business_category'])) {
            $entity_data =  EntityAPI::do_create_entity($entity_data);
            $invoice_items_list = self::do_create_order_items($entity_data);
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
    public static function do_create_order_items($entity_data){
        $order_items_list = array();
        // 1. Check for the buildings request param
        if(isset($_POST['purchaseorderitem'])) {
            // 2. Loop through the array of orderitem objects (JSON encoded)
            $order_items = $_POST['purchaseorderitem'];
            $order_item_count = 1;
            foreach ($order_items as $order_item) {
                $order_item = json_decode(stripslashes($order_item), true);
                $order_item_data = EntityAPIUtils::init_entity_data('purchaseorderitem');

                $order_item_data['edit_mode'] = true;
                $order_item_data['name'] = $order_item['name'];
                $order_item_data['pi_porder'] = $entity_data['id'];
                $order_item_data['description'] = $order_item['description'];
                $order_item_data['item_type'] = $order_item['item_type'];
                $order_item_data['quantity'] = $order_item['quantity'];
                $order_item_data['unit_price'] = $order_item['unit_price'];
                $order_item_data['business_unit'] = $entity_data['business_unit'];

                $order_item_data = BuildingAPI::do_create_entity($order_item_data);
                // add to the list
                array_push($order_items_list, $order_item_data);
            }
        }
        return $order_items_list;
    }




}