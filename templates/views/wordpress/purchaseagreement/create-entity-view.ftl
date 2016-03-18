<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreatePurchaseAgreementView extends MultiEntityCreateView {


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
            'units' => array(
                'tab_type' => 'multi-create',
                'description' => 'Settlement Data',
                'model' => EntityAPI::get_model('settlementdata'),
                'artifact_name' => 'settlementdata',
                'type_instances' => array(),
            ) ,
            'terms' => array(
                'tab_type' => 'multi-create',
                'description' => 'Inspection Data',
                'model' => EntityAPI::get_model('purchaseagreementinspection'),
                'artifact_name' => 'purchaseagreementinspection',
                'type_instances' => array(),
            ) ,
            'charges' => array(
                'tab_type' => 'multi-create',
                'description' => 'Included/Exluded Items',
                'model' => EntityAPI::get_model('agreementitem'),
                'artifact_name' => 'agreementitem',
                'type_instances' => array(),
            )  
        );
    }


}

?>