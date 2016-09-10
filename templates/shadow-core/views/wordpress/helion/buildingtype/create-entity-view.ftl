<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateBuildingTypeView extends MultiEntityCreateView {


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
            'propertytypes' => array(
                'tab_type' => 'multi-create',
                'description' => 'Property Type Mapping',
                'model' => EntityAPI::get_model('buildingtypepropertytype'),
                'artifact_name' => 'buildingtypepropertytype',
                'type_instances' => array(),
            ),
        );
    }


}

?>