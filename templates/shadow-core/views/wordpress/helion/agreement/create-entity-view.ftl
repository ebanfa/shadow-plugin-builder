<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Create${entity.name}View extends MultiEntityCreateView {


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
            'properties' => array(
                'tab_type' => 'multi-select',
                'description' => 'Properties',
                'model' => EntityAPI::get_model('property'),
                'artifact_name' => 'property',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>