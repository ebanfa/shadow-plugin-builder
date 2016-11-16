<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ViewActionsController { 

    public static $defaut_ui_component_class = 'UIComponent';

    /**
     * Set up view
     */
    public static function init_hooks() {

        add_action('shadowbanker_do_render_template', 'ViewActionsController::do_render_template', 10, 1);
        add_action('shadowbanker_do_render_component', 'ViewActionsController::do_render_component', 10, 1);
        add_filter('shadowbanker_filter_form_field', array('ViewActionsController', 'default_filter_form_field'), 10, 2);
    }

    /**
     */
    public static function do_render_template($template) {
        UIDisplayAPI::sb_get_template($template);
    }

    /**
     */
    public static function do_render_component($component_name) {
        $view = $_REQUEST['page_info']['view'];
        $ui_component_data = UIComponentRegistry::$data[$component_name];
        $ui_component_class = $ui_component_data['className'];
        // Check if we have a valid class to instantiate from
        if(!class_exists($ui_component_class)) 
            $ui_component_class = self::$defaut_ui_component_class;
        // Instantiate instance
        $ui_component_instance = new $ui_component_class($view);
        $ui_component_instance->set_name($component_name);
        // If we are dealing with the default class we have to
        // set the template here.
        if($ui_component_class === self::$defaut_ui_component_class) 
            $ui_component_instance->set_template($ui_component_data['template']);
        // This is a crude way to pass data from page to component
        $ui_component_instance->render();
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