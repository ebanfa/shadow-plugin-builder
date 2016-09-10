<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateCOAAccountSegmentTypeView extends MultiEntityCreateView {


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
            'coaaccountsegmenttypevalue' => array(
                'tab_type' => 'multi-create',
                'description' => 'Segment Type Values',
                'model' => EntityAPI::get_model('coaaccountsegmenttypevalue'),
                'artifact_name' => 'coaaccountsegmenttypevalue',
                'type_instances' => array(),
            ) 
        );
    }


}

?>