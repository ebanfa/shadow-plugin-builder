<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class AgreementViewFilter extends ParamCategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_agreement_form_fields', array('AgreementViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_agreement_action_links', array('AgreementViewFilter', 'filter_view_action_links'), 10, 2);
    }

}

?>