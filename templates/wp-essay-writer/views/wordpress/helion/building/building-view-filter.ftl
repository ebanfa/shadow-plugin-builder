<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class BuildingViewFilter extends ViewFilter {


    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_building_form_fields', array('BuildingViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_building_action_links', array('BuildingViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);


        if($page_action == 'create') {
            // Try to filter the property type list by category
            $property_category = array();
            if(isset($_REQUEST['category'])) {
                //$category = sanitize_text_field($_REQUEST['category']);
                //$property_category = EntityAPI::get_by_code('propertycategory', array('entity_code' => strtoupper($category)));
                $category_field = array();
                $category_field['name'] = 'category';
                $category_field['data_type'] = 'hidden';
                $category_field['is_relationship_field'] = false;
                $category_field['value'] = sanitize_text_field($_REQUEST['category']);
                $form_fields['category'] = $category_field;
            }

            foreach ($form_fields as $key => $field) {
                if($field['name'] == 'p_party'){
                    $field['options_criteria'] = array('role' => 'client');
                    $form_fields[$key] = $field;
                }
                if($field['name'] == 'p_type' && isset($property_category['id'])){
                    $field['options_criteria'] = array('category' => $property_category['id']);
                    $form_fields[$key] = $field;
                }
            }
        }
        return $form_fields;
    }

    /**
     *
     */
    public static function filter_view_action_links($view, $action_links) {
        $page_action = $view->get_page_action();
        
        $action_links = array();
        
        if($page_action == 'list') {
            // Get all property categories
            $entity_data = EntityAPIUtils::init_entity_data('propertytype');
            $property_types = EntityAPI::find_all($entity_data);
            // for each create a link
            foreach ($property_types as $key => $type) {
                $action_links[$key] = array('name' => 'New '. $type['name'], 
                'link' => EntityActionProcessor::get_base_url() . 
                'page_action=create&artifact=property&category=' . strtolower($type['entity_code']));
            }
        }
        else {
            $action_links['list_property_link'] = array('name' => 'View All', 
                'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact=property');
        }
    
        return $action_links;
    }

}

?>