<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class InvoiceAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        if(isset($_POST['type']) && isset($_POST['business_category'])) {
            $entity_data =  EntityAPI::do_create_entity($entity_data);
            $invoice_items_list = self::do_create_invoice_items($entity_data);
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
    public static function do_create_invoice_items($entity_data){
        $invoice_items_list = array();
        // 1. Check for the buildings request param
        if(isset($_POST['invoiceitem'])) {
            // 2. Loop through the array of invoiceitem objects (JSON encoded)
            $invoice_items = $_POST['invoiceitem'];
            $invoice_item_count = 1;
            foreach ($invoice_items as $invoice_item) {
                $invoice_item = json_decode(stripslashes($invoice_item), true);
                $invoice_item_data = EntityAPIUtils::init_entity_data('invoiceitem');

                $invoice_item_data['edit_mode'] = true;
                $invoice_item_data['name'] = $invoice_item['name'];
                $invoice_item_data['ii_invoice'] = $entity_data['id'];
                $invoice_item_data['description'] = $invoice_item['description'];
                $invoice_item_data['item_type'] = $invoice_item['item_type'];
                $invoice_item_data['quantity'] = $invoice_item['quantity'];
                $invoice_item_data['unit_price'] = $invoice_item['unit_price'];
                $invoice_item_data['business_unit'] = $entity_data['business_unit'];

                $invoice_item_data = BuildingAPI::do_create_entity($invoice_item_data);
                // add to the list
                array_push($invoice_items_list, $invoice_item_data);
            }
        }
        return $invoice_items_list;
    }



}