<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreatePurchaseOrderView extends MultiEntityCreateView {


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
            'purchaseorderitem' => array(
                'tab_type' => 'multi-create',
                'description' => 'Order Items',
                'model' => EntityAPI::get_model('purchaseorderitem'),
                'artifact_name' => 'purchaseorderitem',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>