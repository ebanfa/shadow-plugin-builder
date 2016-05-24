<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class WorkEffortViewFilter extends ParamCategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_workeffort_form_fields', array('WorkEffortViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_workeffort_action_links', array('WorkEffortViewFilter', 'filter_view_action_links'), 10, 2);
    }

}

?>