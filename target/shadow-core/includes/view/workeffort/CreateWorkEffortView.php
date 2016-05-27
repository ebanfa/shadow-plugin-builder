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
            'people' => array(
                'tab_type' => 'multi-create',
                'description' => 'People',
                'model' => EntityAPI::get_model('workeffortpartyassignment'),
                'artifact_name' => 'workeffortpartyassignment',
                'type_instances' => array(),
            ),
            'inventory' => array(
                'tab_type' => 'multi-create',
                'description' => 'Inventory Items',
                'model' => EntityAPI::get_model('workeffortinventoryassignment'),
                'artifact_name' => 'workeffortinventoryassignment',
                'type_instances' => array(),
            ) ,
            'assets' => array(
                'tab_type' => 'multi-create',
                'description' => 'Assets',
                'model' => EntityAPI::get_model('workeffortassetassignment'),
                'artifact_name' => 'workeffortassetassignment',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>