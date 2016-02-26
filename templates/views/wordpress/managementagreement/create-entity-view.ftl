<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateManagementAgreementView extends MultiEntityCreateView {


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
            'buildings' => array(
                'tab_type' => 'multi-select',
                'description' => 'Buildings',
                'model' => EntityAPI::get_model('building'),
                'artifact_name' => 'building',
                'type_instances' => EntityAPI::find_by_criteria('buildingtype', array()),
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