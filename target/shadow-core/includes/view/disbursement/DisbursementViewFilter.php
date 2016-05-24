<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class DisbursementViewFilter extends CategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_disbursement_form_fields', array('DisbursementViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_disbursement_action_links', array('DisbursementViewFilter', 'filter_view_action_links'), 10, 2);
    }

}

?>