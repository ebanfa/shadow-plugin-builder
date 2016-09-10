<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateAssessmentView extends MultiEntityCreateView {


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
            'salesdata' => array(
                'tab_type' => 'multi-create',
                'description' => 'Sales Comparison Data',
                'model' => EntityAPI::get_model('salesdata'),
                'artifact_name' => 'salesdata',
                'type_instances' => array(),
            ) ,
            'incomedata' => array(
                'tab_type' => 'multi-create',
                'description' => 'Income Data',
                'model' => EntityAPI::get_model('incomedata'),
                'artifact_name' => 'incomedata',
                'type_instances' => array(),
            ) ,
            'costdata' => array(
                'tab_type' => 'multi-create',
                'description' => 'Cost Data',
                'model' => EntityAPI::get_model('costdata'),
                'artifact_name' => 'costdate',
                'type_instances' => array(),
            )  
        );
    }


}

?>