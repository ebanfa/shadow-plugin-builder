<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class AdminDashboardService {


    public static function get_admin_dashboard_stats(){
        $dashboard_stats = array();

        $customer_count = self::get_customer_count();
        $product_count =  self::get_product_count();
        $orders_count = self::get_orders_count();
        $inventory_count = self::get_inventory_count();

        $dashboard_stats['customer_count'] =  $customer_count;
        $dashboard_stats['product_count'] =  $product_count;
        $dashboard_stats['orders_count'] = $orders_count;
        $dashboard_stats['inventory_count'] = $inventory_count;
        return $dashboard_stats;
    }

    public static function get_customer_count(){
        $customer_count = 0;
        $customer_role = EntityAPI::get_by_code('roletype', 'CUSTOMER');
        if(isset($customer_role['id'])) {
            $search_results = EntityAPI::find_by_criteria('partyrole', array('role' => $customer_role['id']));
            $customer_count =  count($search_results);
        }
        return $customer_count;
    }


    public static function get_product_count(){
        return count(EntityAPI::find_by_criteria('product', array()));;
    }

    public static function get_orders_count(){
        $orders_count = 0;
        $sales_order_type = EntityAPI::get_by_code('productordertype', 'SALES_ORDER');
        if(isset($sales_order_type['id'])) {
            $search_results = EntityAPI::find_by_criteria('productorder', array('prod_order_type' => $sales_order_type['id']));
            $orders_count =  count($search_results);
        }
        return $orders_count;
    }


    public static function get_inventory_count(){
        $inventory_count = 0;
        $inventory_items = EntityAPI::find_by_criteria('inventoryitem', array());
        foreach ($inventory_items as $key => $inventory_item) {
            $inventory_count = $inventory_count + intval($inventory_item['quantity']);
        }
        return $inventory_count;
    }
}
?>