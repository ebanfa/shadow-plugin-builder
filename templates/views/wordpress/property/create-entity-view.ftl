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
            ),
            'facility' => array(
                'tab_type' => 'multi-create',
                'description' => 'Facilities',
                'model' => EntityAPI::get_model('facility'),
                'artifact_name' => 'facility',
                'type_instances' => array(),
            ) ,
            'utilities' => array(
                'tab_type' => 'multi-select',
                'description' => 'Utilities',
                'model' => EntityAPI::get_model('utility'),
                'artifact_name' => 'utility',
                'type_instances' => array(),
            ) ,
            /*'zonedata' => array(
                'tab_type' => 'multi-create',
                'description' => 'Zoning',
                'model' => EntityAPI::get_model('zonedata'),
                'artifact_name' => 'zonedata',
                'type_instances' => array(),
            ) ,*/
            'improvements' => array(
                'tab_type' => 'multi-create',
                'description' => 'Improvements',
                'model' => EntityAPI::get_model('improvement'),
                'artifact_name' => 'improvement',
                'type_instances' => array(),
            ) ,
            'mortgages' => array(
                'tab_type' => 'multi-create',
                'description' => 'Mortgage Data',
                'model' => EntityAPI::get_model('mortgage'),
                'artifact_name' => 'mortgage',
                'type_instances' => array(),
            ) ,
            'files' => array(
                'tab_type' => 'multi-create',
                'description' => 'Documents & Images',
                'model' => EntityAPI::get_model('propertyfiles'),
                'artifact_name' => 'propertyfiles',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>