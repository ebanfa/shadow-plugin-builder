<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreatePersonView extends MultiEntityCreateView {


    /**
     *
     */
    function __construct() {
        parent::__construct();
    }

    /**
     *
     */
    function get_tabs() {
        if(isset($_REQUEST['role'])) {
            $role = sanitize_text_field($_REQUEST['role']);
            if($role == 'customer') return self::get_customer_tabs();
            if($role == 'supplier') return self::get_supplier_tabs();
            if($role == 'employee') return self::get_employee_tabs();
        }
        else {
            return array(
                'address' => array(
                    'tab_type' => 'multi-create',
                    'description' => 'Address',
                    'model' => EntityAPI::get_model('contactmechanism'),
                    'artifact_name' => 'contactmechanism',
                    'type_instances' => array(),
                ),
            );
        }
    }

    /**
     *
     */
    function get_customer_tabs() {
        $default_tabs = self::get_default_tabs();
        return $default_tabs;
    }
    
    /**
     *
     */
    function get_supplier_tabs() {
        $default_tabs = self::get_default_tabs();
        return $default_tabs;
    }
    
    /**
     *
     */
    function get_employee_tabs() {
        $default_tabs = self::get_default_tabs();
        return $default_tabs;
    }

    /**
     *
     */
    function get_default_tabs() {
        return array(
            'address' => array(
                'tab_type' => 'multi-create',
                'description' => 'Address',
                'model' => EntityAPI::get_model('contactmechanism'),
                'artifact_name' => 'contactmechanism',
                'type_instances' => array(),
            ),
            /*'images' => array(
                'tab_type' => 'multi-create',
                'description' => 'Images & Files',
                'model' => EntityAPI::get_model('partyfiles'),
                'artifact_name' => 'partyfiles',
                'type_instances' => array(),
            ),*/
        );
    }


}

?>