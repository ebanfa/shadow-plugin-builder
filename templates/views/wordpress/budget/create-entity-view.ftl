<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateBudgetView extends MultiEntityCreateView {


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
            'budgetitems' => array(
                'tab_type' => 'multi-create',
                'description' => 'Budget Items',
                'model' => EntityAPI::get_model('budgetitem'),
                'artifact_name' => 'budgetitem',
                'type_instances' => array(),
            ) ,
        );
    }


}

?>