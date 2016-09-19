<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class InvoiceAPI {

    public static $sales_invoice_type_code = 'SALES_INVOICE';
    public static $purchase_invoice_type_code = 'PURCHASE_INVOICE';
    public static $outstanding_invoice_status_code = 'OUTSTANDING';

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
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $current_user_party = PartyAPI::get_current_user_party();

        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code)){
            $billing_acct_data = BillingAccountAPI::get_party_billing_account($current_user_party);
            return EntityAPI::find_by_criteria($artifact_name, array('bill_acct' => $billing_acct_data['id']));
        }
        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function do_create_entity_from_product_order($order_entity_data) {
        // 1. Resolve the type of invoice we are creating from the order type
        $invoice_type_data = self::resolve_invoice_type($order_entity_data);
        // 2. Invoices will be created with a status of PENDING
        $invoice_status_data = EntityAPI::get_by_code('invoicestatus', self::$outstanding_invoice_status_code);
        if(!isset($invoice_type_data['id']) || !isset($invoice_status_data['id']))
            return EntityAPIUtils::init_error($order_entity_data, 'Invoice type and invoice status is required');
        // 3. Get the appropriate role for the owner
        $owner_party = self::resolve_invoice_owner_role($order_entity_data);
        if(!isset($owner_party['id'])) return EntityAPIUtils::init_error($order_entity_data, 'No owner party found');
        // 4. Get the billing account that this invoice will be applied to
        $bill_to_party = EntityAPI::get_by_id('party', $order_entity_data['placed_by_party']);
        $billing_acct_data = BillingAccountAPI::get_party_billing_account($bill_to_party);
        if(!isset($billing_acct_data['id'])) return EntityAPIUtils::init_error($order_entity_data, 'No billing account found');
        // 5. Create the invoice
        $entity_data = self::do_create_invoice_entity($order_entity_data, 
            $invoice_type_data, $invoice_status_data, $owner_party, $billing_acct_data);
        // 6. Create the invoice items
        if(!isset($entity_data['id'])) return EntityAPIUtils::init_error($entity_data, 'Could not create invoice');
        $entity_data = self::create_invoice_items($entity_data, $order_entity_data);
        // 7. Notify interested parties that the invoice has been created
        do_action('cloderia_wp_commerce_invoice_created', $entity_data);
        return $entity_data; 
    }

    /**
     *
     */
    public static function do_create_invoice_entity($order_entity_data, 
        $invoice_type_data, $invoice_status_data, $owner_party, $billing_acct_data) {
        $entity_data = EntityAPIUtils::init_entity_data('invoice');
        $entity_data['edit_mode'] = true;
        $entity_data['invoice_owner'] = $owner_party['id'];
        $entity_data['status'] = $invoice_status_data['id'];
        $entity_data['bill_acct'] = $billing_acct_data['id'];
        $entity_data['invoice_type'] = $invoice_type_data['id'];
        // 5. Set the invoice date
        $entity_data['name'] = $order_entity_data['name'];
        $entity_data['invoice_date'] = date("Y-m-d H:i:s");
        $entity_data['total'] = $order_entity_data['total'];
        $entity_data['discount'] = $order_entity_data['discount'];
        $entity_data['sub_total'] = $order_entity_data['sub_total'];
        $entity_data['message'] = $order_entity_data['description'];
        $entity_data['business_unit'] = $owner_party['business_unit'];
        $entity_data['description'] = $order_entity_data['description'];
        return self::do_create_entity($entity_data);
    }

    /**
     *
     */
    public static function resolve_invoice_type($order_entity_data) {
        if(!isset($order_entity_data['prod_order_type'])) return array();
        $prod_order_type = EntityAPI::get_by_id('productordertype', $order_entity_data['prod_order_type']);
        if(!isset($prod_order_type['id'])) return array();
        if($prod_order_type['entity_code'] == ProductOrderAPI::$sales_order_type_code) 
            return EntityAPI::get_by_code('invoicetype', self::$sales_invoice_type_code);
        else 
            return EntityAPI::get_by_code('invoicetype', self::$purchase_invoice_type_code);
    }

    /**
     *
     */
    public static function resolve_invoice_owner_role($order_entity_data) {
        if(!isset($order_entity_data['taken_by_party'])) return array();
        // Crook method
        //return array('id' => $order_entity_data['taken_by_party']);
        return EntityAPI::get_by_id('party', $order_entity_data['taken_by_party']);
    }

    /**
     *
     */
    public static function create_invoice_items($invoice_data, $order_entity_data) {
        return InvoiceItemAPI::do_create_invoice_items($invoice_data, $order_entity_data);
    }

}