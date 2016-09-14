<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class FormFieldFilter extends ViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_filter_form_field', array('FormFieldFilter', 'default_filter_form_field'), 10, 2);
    }

    /**
     *
     */
    public static function default_filter_form_field($view, $field) {
        if(isset($_REQUEST['criteria_name'])) {
            $criteria_data = array(
                'criteria_name' => EntityRequestUtils::get_request_param('criteria_name'),
                'criteria_value' => EntityRequestUtils::get_request_param('criteria_value'),
            );
            $field['options_criteria'] = array(
                $criteria_data['criteria_name'] => $criteria_data['criteria_value']
            );
        }

        if($field['data_type'] != 'hidden') {
            if($field['size'] == 'small') {
                $field['col_size'] = 'col-xs-4';
            }

            if($field['size'] == 'medium') {
                $field['col_size'] = 'col-xs-6';
            }
            
            if($field['size'] == 'large') {
                $field['col_size'] = 'col-xs-12';
            }
        }
        return $field;
    }

}

?>