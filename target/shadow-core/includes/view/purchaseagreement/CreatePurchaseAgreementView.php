<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreatePurchaseAgreementView extends MultiEntityCreateView {


    public static $model_description_map = array(
        'purchase' => 'Property Purchase',
        'sale' => 'Property Sale',);

    /**
     *
     */
    function __construct() {
        parent::__construct();
    }

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
        if(isset($_REQUEST['a_type'])) {
            $a_type = sanitize_text_field($_REQUEST['a_type']);
            if(isset(self::$model_description_map[$a_type]))
                 $this->model['entity_description'] = self::$model_description_map[$a_type];
        }
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