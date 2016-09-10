<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProductAPI {

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
    public static function load_products($product_type_code){
        $product_type = EntityAPI::get_by_code('producttype', $product_type_code);
        if(isset($product_type['id'])) {
            $product_data_list = EntityAPI::find_by_criteria('product', array('prod_type' => $product_type['id']));
            foreach ($product_data_list as $key => $product_data) {
                if(isset($product_data['id'])) {
                    $product_data['product_images'] = EntityAPI::find_by_criteria('productimage', array('product' => $product_data['id']));
                    $product_data_list[$key] = $product_data;
                }
            }
            return $product_data_list;
        }
        return array();
    }


}
