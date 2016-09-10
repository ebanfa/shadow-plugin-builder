<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreatePayrollView extends MultiEntityCreateView {


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
            'paymentapplication' => array(
                'tab_type' => 'multi-create',
                'description' => 'Payment Application',
                'model' => EntityAPI::get_model('paymentapplication'),
                'artifact_name' => 'paymentapplication',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>