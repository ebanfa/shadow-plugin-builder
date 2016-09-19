<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SalesOrderAPI {

    
    public static $item_tmpl = '<tr style="border: 0; font: inherit; font-size: 100%; font-style: inherit; font-weight: inherit;    margin: 0; outline: 0; padding: 0; vertical-align: baseline;">
            <td style="border: 0; font: inherit; font-size: 100%; font-style: inherit; font-weight: inherit;    margin: 0; outline: 0; padding: 0; vertical-align: baseline; border: 1px solid #EAEAEA; padding: 6px 10px;">[+item_name+]</td>
            
            <td style="border: 0; font: inherit; font-size: 100%; font-style: inherit; font-weight: inherit;    margin: 0; outline: 0; padding: 0; vertical-align: baseline; border: 1px solid #EAEAEA; padding: 6px 10px;">[+item_quantity+]</td>

            <td style="border: 0; font: inherit; font-size: 100%; font-style: inherit; font-weight: inherit;    margin: 0; outline: 0; padding: 0; vertical-align: baseline; border: 1px solid #EAEAEA; padding: 6px 10px;">[+item_unit_price+]</td>
            
            <td style="border: 0; font: inherit; font-size: 100%; font-style: inherit; font-weight: inherit;    margin: 0; outline: 0; padding: 0; vertical-align: baseline; border: 1px solid #EAEAEA; padding: 6px 10px;">[+item_total_price+]</td>
        </tr>';


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
    public static function do_create_user_order($user_data){
        $shopping_cart_data = ShoppingCartAPI::do_get_shopping_cart_items();
        if(empty($shopping_cart_data['items'])) return EntityAPIUtils::init_error($user_data, 'Your shopping cart is empty');
        // Create the sales order
        $order_entity_data = self::do_create_sales_order($user_data, $shopping_cart_data);
        if(!isset($order_entity_data['id'])) return $order_entity_data;
        // Create the invoice
        $order_entity_data = InvoiceAPI::do_create_entity_from_product_order($order_entity_data);
        
        // This should be implemented as an action
        $order_entity_data = self::send_sales_order_notifications($user_data, $order_entity_data, $shopping_cart_data);
        return $order_entity_data;
    }

    /**
     *
     */
    public static function do_create_sales_order($user_data, $shopping_cart_data){
        // Get the business entity for the store
        $business_party = EntityAPI::get_by_id('party', 1);
        // Process the order user
        $user_party = self::do_process_sales_order_user($user_data);
        // Check for errors (Suppress this error cause we want to proceed even if the user already exists)
        //if($user_party['has_errors']) return EntityAPIUtils::init_error($shopping_cart_data, $user_party['message']); 
        // Process the order
        if(!isset($business_party['id']) || !isset($user_party['id']))
            return EntityAPIUtils::init_error($shopping_cart_data, 'Business and user parties required');

        return self::do_create_sales_order_entity($business_party, $user_party, $shopping_cart_data);
    }

    /**
     *  Creates the user associated with an order, or returns 
     *  the user's data if the user already exists
     */
    public static function do_process_sales_order_user($user_data)
    {
        $user_data['user_login'] = $user_data['email'];
        $user_data['user_pass'] = EntityStringUtils::get_token(8);
        $user_data['business_name'] = $user_data['first_name'] . ' ' . $user_data['last_name'];
        $user_party = CloderiaUserAPI::do_create_content_user($user_data);
        return $user_party;
    }

    /**
     *  
     */
    public static function do_create_sales_order_entity($business_party, $user_party, $shopping_cart_data)
    {
        $order_entity_data = EntityAPIUtils::init_entity_data('productorder');
        $order_entity_data['taken_by_party'] = $business_party['id'];
        // Get the sales order type
        $order_type_data = EntityAPI::get_by_code('productordertype', ProductOrderAPI::$sales_order_type_code);
        // Get confirmed order status
        $order_status_data = EntityAPI::get_by_code('productorderstatus', ProductOrderAPI::$pending_order_status_code);
        // Create the order entity
        $order_entity_data = ProductOrderAPI::do_create_product_order_entity(
            $order_entity_data, $order_type_data, $order_status_data, $user_party);

        if($order_entity_data['has_errors']) return $order_entity_data;
        
        return self::do_create_sales_items($order_entity_data, $shopping_cart_data);
    }

    /**
     *  
     */
    public static function do_create_sales_items($order_entity_data, $shopping_cart_data)
    {
        // Create an order item entity for each item in the users cart
        $item_count = 0;
        // Get the order item type and status data
        $item_type = EntityAPI::get_by_code('productorderitemtype', ProductOrderAPI::$sales_order_item_type_code);
        $item_status = EntityAPI::get_by_code('productorderitemstatus', ProductOrderAPI::$pending_order_item_status_code);
        // non persistent store of all the order items which may be used used 
        // by other components further down the current execution path to prevent unecessary
        // database looks ups for order items
        $order_entity_data ['items'] = array();
        foreach ($shopping_cart_data['items'] as $key => $cart_item) {
            // Create the order
            $item_count++;
            $cart_item['sequence'] = $item_count;
            $order_item_data = ProductOrderAPI::do_create_order_item_entity(
                $order_entity_data, $item_type, $item_status, $cart_item);

            array_push($order_entity_data ['items'], $order_item_data);
            // Update the totals of the order
            $order_entity_data = ProductOrderAPI::do_update_order_totals($order_entity_data, $order_item_data);
        }
        return $order_entity_data;
    }

    /**
     *  
     */
    public static function send_sales_order_notifications($user_data, $order_entity_data, $shopping_cart_data){
        $order_items_tmpl = '';
        foreach ($shopping_cart_data['items'] as $key => $cart_item) {
            $data_context = array();
            $data_context['item_name'] = $cart_item['name'];
            $data_context['item_quantity'] = $cart_item['quantity'];
            $data_context['item_unit_price'] = $cart_item['price'];
            $data_context['item_total_price'] = $cart_item['total_price'];
            $order_items_tmpl  = $order_items_tmpl . EntityStringUtils::parse(self::$item_tmpl, $data_context);
        }
        $data_context = self::get_user_data_context($user_data, $order_entity_data, $order_items_tmpl, $shopping_cart_data);
        CloderiaUserAPI::send_email($data_context, $user_data['email'], 
            'order-created-subject.tpl', 'order-created-message.tpl', array());
    }
   
    /**
     * 
     */
    public static function get_user_data_context($user_data, $order_entity_data, $order_items_tmpl, $shopping_cart_data)
    {
        $data_context = array();
        $data_context['email'] = $user_data['email'];
        $data_context['display_name'] = $user_data['first_name'] . ' ' . $user_data['last_name'];
        $data_context['site_url'] = get_site_url();
        $data_context['site_name'] = get_bloginfo('name');
        $data_context['site_descriptions'] = get_bloginfo('descriptions');
        $data_context['site_email'] = get_option('cp_notify_accounts');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['order_currency'] = get_option('cp_default_currency');
        $data_context['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        $data_context['order_no'] = $order_entity_data['entity_code'];
        $data_context['order_items_tmpl'] = $order_items_tmpl;
        $data_context['order_discount'] = '0.00';
        $data_context['order_total'] = $shopping_cart_data['sub_total'];
        $data_context['order_subtotal'] = $shopping_cart_data['sub_total'];
        return $data_context;
    }
}