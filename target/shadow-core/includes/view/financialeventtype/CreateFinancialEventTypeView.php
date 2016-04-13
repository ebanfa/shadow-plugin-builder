<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateFinancialEventTypeView extends MultiEntityCreateView {


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
            'transactiontypes' => array(
                'tab_type' => 'multi-create',
                'description' => 'Transaction Types',
                'model' => EntityAPI::get_model('feventtxntype'),
                'artifact_name' => 'feventtxntype',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>