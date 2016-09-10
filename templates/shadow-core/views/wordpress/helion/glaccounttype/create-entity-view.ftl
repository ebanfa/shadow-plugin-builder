<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateGLAccountTypeView extends MultiEntityCreateView {


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
            'glaccounts' => array(
                'tab_type' => 'multi-create',
                'description' => 'GL Accounts',
                'model' => EntityAPI::get_model('glaccount'),
                'artifact_name' => 'glaccount',
                'type_instances' => array(),
            ) 
        );
    }


}

?>