<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateCOAAccountStructureView extends MultiEntityCreateView {


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
            'coaaccountsegment' => array(
                'tab_type' => 'multi-create',
                'description' => 'Segments',
                'model' => EntityAPI::get_model('coaaccountsegment'),
                'artifact_name' => 'coaaccountsegment',
                'type_instances' => array(),
            ) 
        );
    }


}

?>