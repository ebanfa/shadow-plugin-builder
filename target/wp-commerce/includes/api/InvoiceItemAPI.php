<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class InvoiceItemAPI {

    public static $sales_invoice_item_type_code = 'SALES_INVOICE_ITEM';
    public static $outstanding_invoice_item_status_code = 'OUTSTANDING';
    public static $purchase_invoice_item_type_code = 'PURCHASE_INVOICE_ITEM';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }
    
    /**
     *
     */
    public static function do_create_invoice_items($invoice_data, $order_entity_data) {
        if(!isset($invoice_data['id']) || !isset($order_entity_data['id']))
            return EntityAPIUtils::init_error($invoice_data, 'Invoice and order data mismatch');
        // 1. Load all the order items associated with the product order
        $order_items = array();
        if(isset($order_entity_data['items'])) 
            $order_items = $order_entity_data['items'];
        else
            $order_items = EntityAPI::find_by_criteria(
                'productorderitem', array('item_order' => $order_entity_data['id']));
        // 2. for each item create an invoice item of status pending and type
        $invoice_item_type = self::resolve_invoice_item_type($invoice_data);
        $invoice_item_status = EntityAPI::get_by_code('invoiceitemstatus', self::$outstanding_invoice_item_status_code);
        // Verify the return item type and status
        if(!isset($invoice_item_type['id']) || !isset($invoice_item_status['id']))
            return EntityAPIUtils::init_error($invoice_data, 'Invoice item type and invoice item status is required');

        foreach ($order_items as $key => $order_item) {
            $entity_data = EntityAPIUtils::init_entity_data('invoiceitem');
            $entity_data['edit_mode'] = true;
            $entity_data['name'] = $order_item['name'];
            $entity_data['ii_invoice'] = $invoice_data['id'];
            $entity_data['quantity'] = $order_item['quantity'];
            $entity_data['ii_type'] = $invoice_item_type['id'];
            $entity_data['ii_status'] = $invoice_item_status['id'];
            $entity_data['total'] = $order_item['order_item_total'];
            $entity_data['description'] = $order_item['description'];
            $entity_data['unit_price'] = $order_item['order_item_price'];
            $entity_data['business_unit'] = $invoice_data['business_unit'];
            $entity_data = self::do_create_entity($entity_data);
        }
        return $invoice_data;
    }

    /**
     *
     */
    public static function resolve_invoice_item_type($invoice_data) {
        if(!isset($invoice_data['invoice_type'])) return array();
        $invoice_type = EntityAPI::get_by_id('invoicetype', $invoice_data['invoice_type']);

        if(!isset($invoice_type['id'])) return array();

        if($invoice_type['entity_code'] == InvoiceAPI::$sales_invoice_type_code) 
            return EntityAPI::get_by_code('invoiceitemtype', self::$sales_invoice_item_type_code);
        else 
            return EntityAPI::get_by_code('invoiceitemtype', self::$purchase_invoice_item_type_code);
    }

}