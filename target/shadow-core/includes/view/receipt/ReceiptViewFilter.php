<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ReceiptViewFilter extends CategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_receipt_form_fields', array('ReceiptViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_receipt_action_links', array('ReceiptViewFilter', 'filter_view_action_links'), 10, 2);
    }

}

?>