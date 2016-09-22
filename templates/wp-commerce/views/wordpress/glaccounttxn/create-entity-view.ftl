<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateGLAccountTxnView extends MultiEntityCreateView {


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
                'description' => 'Transaction Details',
                'model' => EntityAPI::get_model('glaccounttxndetail'),
                'artifact_name' => 'glaccounttxndetail',
                'type_instances' => array(),
            ),
        );
    }


}

?>