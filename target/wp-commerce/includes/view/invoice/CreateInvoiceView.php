<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateInvoiceView extends MultiEntityCreateView {


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
            'invoiceitems' => array(
                'tab_type' => 'multi-create',
                'description' => 'Invoice Items',
                'model' => EntityAPI::get_model('invoiceitem'),
                'artifact_name' => 'invoiceitem',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>