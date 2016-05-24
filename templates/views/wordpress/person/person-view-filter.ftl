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
        add_filter('shadowbanker_person_view_title', array('PersonViewFilter', 'filter_view_title'), 10, 2);
        add_filter('shadowbanker_person_form_fields', array('PersonViewFilter', 'filter_form_fields'), 10, 2);
    }

     /**
     *
     */
    public static function filter_view_title($view, $title) {
        $title = parent::filter_view_title($view, $title);
        if(isset($_REQUEST['role'])) {
            $role = sanitize_text_field($_REQUEST['role']);
            $role_type_data = EntityAPI::get_by_code('roletype', array('entity_code' => strtoupper($role)));
            if(isset($role_type_data['id']))
                $title = $role_type_data['name'];
        }
        return $title;
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
            // Inject an email field
            $email_field = array();
            $email_field['name'] = 'user_email';
            $email_field['data_type'] = 'email';
            $email_field['is_relationship_field'] = false;
            $email_field['is_visible'] = true;
            $email_field['is_required'] = true;
            $email_field['is_create_field'] = true;
            $email_field['col_size'] = 'col-xs-12';
            $email_field['description'] = 'Email';
            //$email_field['value'] = sanitize_text_field($_REQUEST['category']);
            $form_fields['email'] = $email_field;
            
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