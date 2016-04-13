<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PersonViewFilter extends ViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_person_form_fields', array('PersonViewFilter', 'filter_form_fields'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);
        if($page_action == 'create' || $page_action == 'edit') {
            foreach ($form_fields as $key => $field) {
                if($field['name'] == 'gender'){
                    $field['has_options'] = true;
                    $field['options'] = array();
                    array_push($field['options'], array('name' => 'Male', 'value' => 'M'));
                    array_push($field['options'], array('name' => 'Female', 'value' => 'F'));
                    $form_fields[$key] = $field;
                }
            }
            
            if(isset($_REQUEST['role'])) {

                $role_field = array();
                $role_field['name'] = 'role';
                $role_field['data_type'] = 'hidden';
                $role_field['is_relationship_field'] = false;
                $role_field['value'] = sanitize_text_field($_REQUEST['role']);
                $form_fields['role'] = $role_field;
            }

        }
        return $form_fields;
    }

}

?>