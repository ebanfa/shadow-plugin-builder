<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateTransactionTypeView extends MultiEntityCreateView {


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
            'accouts' => array(
                'tab_type' => 'multi-create',
                'description' => 'Accounts',
                'model' => EntityAPI::get_model('txntypeaccount'),
                'artifact_name' => 'txntypeaccount',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>