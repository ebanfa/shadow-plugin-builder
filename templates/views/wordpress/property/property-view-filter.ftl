<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PropertyViewFilter extends ViewFilter {


    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_property_form_fields', array('PropertyViewFilter', 'filter_form_fields'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);
        if($page_action == 'create') {
            foreach ($form_fields as $key => $field) {
                if($field['name'] == 'p_party'){
                    $field['options_criteria'] = array('name' => 'role', 'value' => 'client');
                    $form_fields[$key] = $field;
                }
            }
        }
        return $form_fields;
    }

}

?>