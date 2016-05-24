<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class LiabilityViewFilter extends CategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_liability_form_fields', array('LiabilityViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_liability_action_links', array('LiabilityViewFilter', 'filter_view_action_links'), 10, 2);
    }

}

?>