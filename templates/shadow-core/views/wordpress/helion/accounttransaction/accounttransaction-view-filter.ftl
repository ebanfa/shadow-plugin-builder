<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class AccountTransactionViewFilter extends ViewFilter {


    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_accounttransaction_form_fields', array('AccountTransactionViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_accounttransaction_action_links', array('AccountTransactionViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);


        if($page_action == 'create') {
            /*// Try to filter the property type list by category
            $property_category = array();
            if(isset($_REQUEST['category'])) {
                //$category = sanitize_text_field($_REQUEST['category']);
                //$property_category = EntityAPI::get_by_code('propertycategory', array('entity_code' => strtoupper($category)));
            }

            foreach ($form_fields as $key => $field) {
                if($field['name'] == 'p_party'){
                    $field['options_criteria'] = array('name' => 'role', 'value' => 'client');
                    $form_fields[$key] = $field;
                }
                if($field['name'] == 'p_type' && isset($property_category['id'])){
                    $field['options_criteria'] = array('name' => 'category', 'value' => $property_category['id']);
                    $form_fields[$key] = $field;
                }
            }*/
        }
        return $form_fields;
    }

    /**
     *
     */
    public static function filter_view_action_links($view, $action_links) {
        $page_action = $view->get_page_action();
        
        $action_links = array();
        if (current_user_can('administrator')) {
            if($page_action == 'list') {
                $action_links['create_accounttransaction_link'] = array('name' => 'Add New', 
                    'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact=accounttransaction');
            }
            else {
                $action_links['list_accounttransaction_link'] = array('name' => 'View All', 
                    'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact=accounttransaction');
            }
        }
        
    
        return $action_links;
    }

}

?>