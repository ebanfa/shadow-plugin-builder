<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${entity.name}ViewFilter extends ViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        /*add_filter('shadowbanker_${entity.name?lower_case}_form_fields', array('${entity.name}ViewFilter', 'filter_form_fields'), 10, 2);*/
        add_filter('shadowbanker_${entity.name?lower_case}_action_links', array('${entity.name}ViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_view_action_links($view, $action_links) {
        return ViewUtils::get_create_entity_action_links($view->get_page_action(), $view->get_artifact_name());
    
    }

}

?>