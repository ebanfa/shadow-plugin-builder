<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateServiceAgreementView extends MultiEntityCreateView {


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
            'properties' => array(
                'tab_type' => 'multi-select',
                'description' => 'Properties',
                'model' => EntityAPI::get_model('property'),
                'artifact_name' => 'property',
                'type_instances' => EntityAPI::find_by_criteria('propertytype', array()),
            ) ,
            'services' => array(
                'tab_type' => 'multi-select',
                'description' => 'Services',
                'model' => EntityAPI::get_model('service'),
                'artifact_name' => 'service',
                'type_instances' => EntityAPI::find_by_criteria('servicetype', array()),
            ),
            'charges' => array(
                'tab_type' => 'multi-select',
                'description' => 'Charges',
                'model' => EntityAPI::get_model('charge'),
                'artifact_name' => 'charge',
                'type_instances' => EntityAPI::find_by_criteria('chargetype', array()),
            ),
            'terms' => array(
                'tab_type' => 'multi-select',
                'description' => 'Terms',
                'model' => EntityAPI::get_model('term'),
                'artifact_name' => 'term',
                'type_instances' => EntityAPI::find_by_criteria('termtype', array()),
            ) 
        );
    }


}

?>