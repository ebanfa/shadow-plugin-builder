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
            
        }
        
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }



}