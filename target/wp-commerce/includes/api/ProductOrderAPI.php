<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProductOrderAPI {

    public static $sales_order_type_code = 'SALES_ORDER';
    public static $confirmed_order_status_code = 'CONFIRMED';
    public static $sales_order_item_type_code = 'SALES_ORDER_ITEM';
    public static $confirmed_order_item_status_code = 'CONFIRMED';
    
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
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }

    /**
     *
     */
    public static function do_add_to_customer_cart($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }

    /**
     *
     */
    public static function do_confirm_user_order($user_data){
        $shopping_cart_data = ProductAPI::do_get_shopping_cart_items();
        if(empty($shopping_cart_data['items'])) {
            $user_data['has_errors'] = true;
            $user_data['message'] = 'Your shopping cart is empty';
            return $user_data;
        }
        $order_entity_data = self::do_create_sales_order($user_data, $shopping_cart_data);
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
        $order_entity_data = EntityAPIUtils::init_entity_data('productorder');
        // Check for errors
        if($user_party['has_errors']) {
            $order_entity_data['has_errors'] = true;
            $order_entity_data['message'] = $user_party['message'];
            return $order_entity_data;
        }
        // Process the order
        if(isset($business_party['id']) && isset($user_party['id'])) {
            $order_entity_data['taken_by_party'] = $business_party['id'];
            // Get the sales order type
            $order_type_data = EntityAPI::get_by_code('productordertype', self::$sales_order_type_code);
            // Get confirmed order status
            $order_status_data = EntityAPI::get_by_code('productorderstatus', self::$confirmed_order_status_code);
            // Create the order entity
            $order_entity_data = self::do_create_product_order_entity($order_entity_data, $order_type_data, $order_status_data, $user_party);
            if($order_entity_data['has_errors']) return $order_entity_data;
            // Create an order item entity for each item in the users cart
            $item_count = 0;
            // Get the order item type and status data
            $item_type = EntityAPI::get_by_code('productorderitemtype', self::$sales_order_item_type_code);
            $item_status = EntityAPI::get_by_code('productorderitemstatus', self::$confirmed_order_item_status_code);

            foreach ($shopping_cart_data['items'] as $key => $cart_item) {
                // Create the order
                $item_count++;
                $cart_item['sequence'] = $item_count;
                $order_item_data = self::do_create_order_item_entity($order_entity_data, $item_type, $item_status, $cart_item);

            }
        }
        //$entity_data =  EntityAPI::do_create_entity($entity_data);
        return $order_entity_data;
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
     * Creates an order for a given user with the provided type and status
     */
    public static function do_create_product_order_entity($order_entity_data, $order_type, $order_status, $user_party){
        if(!isset($order_type['id']) || !isset($order_status['id'])) {
            $order_entity_data['has_errors'] = true;
            $order_entity_data['message'] = 'Order type and status are required';
            return $order_entity_data;
        }
        $order_entity_data['edit_mode'] = true;
        $order_entity_data['entity_code'] = EntityStringUtils::get_token(8);
        $order_entity_data['place_by_party'] = $user_party['id'];
        $order_entity_data['prod_order_date'] = date("Y-m-d H:i:s");
        $order_entity_data['prod_order_type'] = $order_type['id'];
        $order_entity_data['prod_order_status'] = $order_status['id'];
        $order_entity_data['name'] = 'Sales Order: ' . $order_entity_data['entity_code'] . ' by ' . $user_party['name'];
        $order_entity_data['description'] = $order_entity_data['name'];
        // Set the order name to be customer name and code
        return self::do_create_entity($order_entity_data);
    }

    /**
     * Creates an order for a given user with the provided type and status
     */
    public static function do_create_order_item_entity($order_entity_data, $item_type, $item_status, $cart_item) {

        $order_entityitem_data = EntityAPIUtils::init_entity_data('productorderitem');
        if(!isset($item_type['id']) || !isset($item_status['id'])) {
            $order_entityitem_data['has_errors'] = true;
            $order_entityitem_data['message'] = 'Order item type and status are required';
            return $order_entityitem_data;
        }
        // Set the required relationship fields
        $order_entityitem_data['edit_mode'] = true;
        $order_entityitem_data['item_order'] = $order_entity_data['id'];
        $order_entityitem_data['order_item_type'] = $item_type['id'];
        $order_entityitem_data['order_item_status'] = $item_status['id'];

        $order_entityitem_data['name'] = $cart_item['name'];
        $order_entityitem_data['description'] = $cart_item['name'];
        $order_entityitem_data['order_item_price'] = $cart_item['price'];
        $order_entityitem_data['quantity'] = $cart_item['quantity'];
        $order_entityitem_data['item_sequence'] = $cart_item['sequence'];
        return EntityAPI::create_entity($order_entityitem_data);
    }

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
        $data_context = self::get_user_data_context($user_data, $order_items_tmpl);
        CloderiaUserAPI::send_email($data_context, $user_data['email'], 'order-created-subject.tpl', 'order-created-message.tpl', array());
    }
   
    /**
     * 
     */
    public static function get_user_data_context($user_data, $order_items_tmpl)
    {
        $data_context = array();
        $data_context['email'] = $user_data['email'];
        $data_context['display_name'] = $user_data['first_name'] . '' . $user_data['last_name'];
        $data_context['site_url'] = get_site_url();
        $data_context['site_name'] = get_bloginfo('name');
        $data_context['site_descriptions'] = get_bloginfo('descriptions');
        $data_context['site_email'] = get_option('cp_notify_accounts');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        $data_context['order_items_tmpl'] = $order_items_tmpl;
        return $data_context;
    }
}
