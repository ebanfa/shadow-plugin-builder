<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateInventoryView extends MultiEntityCreateView {


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
        return array(
            'inventoryitems' => array(
                'tab_type' => 'multi-create',
                'description' => 'Inventory Items',
                'model' => EntityAPI::get_model('inventoryitem'),
                'artifact_name' => 'inventoryitem',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>