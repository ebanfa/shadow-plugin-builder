<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${entity.name}ViewFilter extends ParamCategorizedViewFilter {

   
    public static $purpose_type_field = 'wep_type';

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_${entity.name?lower_case}_view_title', array('${entity.name}ViewFilter', 'filter_view_title'), 10, 2);
        add_filter('shadowbanker_${entity.name?lower_case}_form_fields', array('${entity.name}ViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_${entity.name?lower_case}_action_links', array('${entity.name}ViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_view_title($view, $title) {
        $title = parent::filter_view_title($view, $title);
        if(isset($_REQUEST['atype'])) {
            $atype = sanitize_text_field($_REQUEST['atype']);
            $atype_data = EntityAPI::get_by_code('workefforttype', array('entity_code' => strtoupper($atype)));
            if(isset($atype_data['id'])){
                $title = $atype_data['name'];
                $view->model['entity_description'] = $atype_data['name'];
            }
        }
        elseif (isset($_REQUEST['cat'])) {
            $category = sanitize_text_field($_REQUEST['cat']);
            $category_data = EntityAPI::get_by_code('workeffortcategory', array('entity_code' => strtoupper($category)));
            if(isset($category_data['id']))
                $title = $category_data['name'];
        }
        return $title;
    }

     /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $form_fields = parent::filter_form_fields($view, $form_fields);
        if(isset($form_fields['category'])) {
            $category_field = $form_fields['category'];
            $options_criteria = $category_field['options_criteria'];

            foreach ($form_fields as $key => $field) {
                if($field['name'] == self::$purpose_type_field) {

                    $field['options_criteria'] = array(
                        'category' => $options_criteria['category'],
                    );
                    $form_fields[$key] = $field;
                }
            }
        }
        
        return $form_fields;
    }
}

?>