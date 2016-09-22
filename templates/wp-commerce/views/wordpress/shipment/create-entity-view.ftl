<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateShipmentView extends MultiEntityCreateView {


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
        return self::get_default_tabs();
    }

    /**
     *
     */
    function get_default_tabs() {
        return array(
            'address' => array(
                'tab_type' => 'multi-create',
                'description' => 'Shipment Items',
                'model' => EntityAPI::get_model('shipmentitem'),
                'artifact_name' => 'shipmentitem',
                'type_instances' => array(),
            ),
        );
    }


}

?>