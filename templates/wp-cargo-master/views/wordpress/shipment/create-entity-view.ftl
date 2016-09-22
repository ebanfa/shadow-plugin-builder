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
                'description' => 'Path',
                'model' => EntityAPI::get_model('pathsegment'),
                'artifact_name' => 'pathsegment',
                'type_instances' => array(),
            ),
        );
    }


}

?>