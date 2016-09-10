<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${entity.name}ViewFilter extends CategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_${entity.name?lower_case}_form_fields', array('${entity.name}ViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_${entity.name?lower_case}_action_links', array('${entity.name}ViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $model = $view->get_model();
        $business_category_data = array();
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);

        if(isset($_REQUEST['bcat'])) 
        {
            $business_category = sanitize_text_field($_REQUEST['bcat']);
            $roletype_data = EntityAPI::get_by_code(
                'roletype', array('entity_code' => strtoupper($business_category)));

            if(isset($roletype_data['id'])) {
                foreach ($form_fields as $key => $field) {
                    if($field['name'] == 'owner_role'){
                        $field['options_criteria'] = array('role' => $roletype_data['id']);
                        $form_fields[$key] = $field;
                    }
                }

            }
        }
        return $form_fields;
    }

}

?>