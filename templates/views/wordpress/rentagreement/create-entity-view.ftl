<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateRentAgreementView extends MultiEntityCreateView {


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
            'units' => array(
                'tab_type' => 'multi-select',
                'description' => 'Units',
                'model' => EntityAPI::get_model('unit'),
                'artifact_name' => 'unit',
                'type_instances' => EntityAPI::find_by_criteria('unittype', array()),
                ) ,
            'charges' => array(
                'tab_type' => 'multi-select',
                'description' => 'Charges',
                'model' => EntityAPI::get_model('charge'),
                'artifact_name' => 'charge',
                'type_instances' => EntityAPI::find_by_criteria('chargetype', array()),
                ) 
            );
    }


}

?>