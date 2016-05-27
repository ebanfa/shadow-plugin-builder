<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateWorkEffortView extends MultiEntityCreateView {


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
            'buildings' => array(
                'tab_type' => 'multi-select',
                'description' => 'Buildings',
                'model' => EntityAPI::get_model('building'),
                'artifact_name' => 'building',
                'type_instances' => EntityAPI::find_by_criteria('buildingtype', array()),
            ),
            'facility' => array(
                'tab_type' => 'multi-select',
                'description' => 'Facilities',
                'model' => EntityAPI::get_model('facility'),
                'artifact_name' => 'facility',
                'type_instances' => EntityAPI::find_by_criteria('facilitytype', array()),
            ) ,
            'units' => array(
                'tab_type' => 'multi-select',
                'description' => 'Units',
                'model' => EntityAPI::get_model('unit'),
                'artifact_name' => 'unit',
                'type_instances' => EntityAPI::find_by_criteria('unittype', array()),
            ) ,
        );
    }


}

?>