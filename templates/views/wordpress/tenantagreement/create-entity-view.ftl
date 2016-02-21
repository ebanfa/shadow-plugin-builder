<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TenantAgreementCreateView extends MultiEntityCreateView {


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
                'description' => 'Units',
                'model' => EntityAPI::get_model('unit'),
                'artifact_name' => '',
                'type_instances' => EntityAPI::find_by_criteria('unittype', array()),
                ) 
            );
    }


}

?>