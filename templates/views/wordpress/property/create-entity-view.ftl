<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreatePropertyView extends MultiEntityCreateView {


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
                'tab_type' => 'multi-create',
                'description' => 'Buildings',
                'model' => EntityAPI::get_model('building'),
                'artifact_name' => 'building',
                'type_instances' => array(),
                ) ,
            'parkingfacility' => array(
                'tab_type' => 'multi-create',
                'description' => 'Parking Facility',
                'model' => EntityAPI::get_model('parkingfacility'),
                'artifact_name' => 'parkingfacility',
                'type_instances' => array(),
                ) ,
            );
    }


}

?>