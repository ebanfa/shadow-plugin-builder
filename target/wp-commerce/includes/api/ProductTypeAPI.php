<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProductTypeAPI {

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
    public static function load_product_types($category_code){
        $product_category = EntityAPI::get_by_code('productcategory', $category_code);
        if(isset($product_category['id'])) 
            $product_type_data_list = EntityAPI::find_by_criteria('producttype', array('prod_cat' => $product_category['id']));
            foreach ($product_type_data_list as $key => $product_type_data) {
                if(isset($product_type_data['id'])) {
                    $product_type_data['product_ty_images'] = 
                        EntityAPI::find_by_criteria('producttypeimage', array('prod_ty_image' => $product_type_data['id']));
                    $product_type_data_list[$key] = $product_type_data;
                }
            }
            return $product_type_data_list;
        return array();
    }

}
