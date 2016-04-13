<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateMaintenanceView extends MultiEntityCreateView {


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
            'property' => array(
                'tab_type' => 'multi-select',
                'description' => 'Property',
                'model' => EntityAPI::get_model('property'),
                'artifact_name' => 'property',
                'type_instances' => EntityAPI::find_by_criteria('propertytype', array()),
            ) ,
            'building' => array(
                'tab_type' => 'multi-select',
                'description' => 'Buildings',
                'model' => EntityAPI::get_model('building'),
                'artifact_name' => 'building',
                'type_instances' => EntityAPI::find_by_criteria('buildingtype', array()),
            ) ,
            'unit' => array(
                'tab_type' => 'multi-select',
                'description' => 'Units',
                'model' => EntityAPI::get_model('unit'),
                'artifact_name' => 'unit',
                'type_instances' => EntityAPI::find_by_criteria('unittype', array()),
            )  ,
            'fixedasset' => array(
                'tab_type' => 'multi-select',
                'description' => 'Fixed Assets',
                'model' => EntityAPI::get_model('fixedasset'),
                'artifact_name' => 'fixedasset',
                'type_instances' => EntityAPI::find_by_criteria('fixedassettype', array()),
            )  
        );
    }


}

?>