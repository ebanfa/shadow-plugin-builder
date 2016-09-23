<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class BusinessAPI {


    /**
     *
     */
    public static function do_create_entity($entity_data){
        return EntityAPI::do_create_entity($entity_data);
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }

    /**
     * Get the default currency
     */
    public static function get_default_currency(){
       $currency_data = EntityAPI::get_by_id('currency', 1);
       if(!isset($currency_data['id']))
            return EntityAPIUtils::init_error($currency_data, 'Default currency not configured');
        return $currency_data;
    }

    /**
     * Get the default business
     */
    public static function get_default_business(){
       $business_data = EntityAPI::get_by_code('business', 'DEFAULT');
       if(!isset($business_data['id']))
            return EntityAPIUtils::init_error($business_data, 'Default business not configured');
        return $business_data;
    }

}
