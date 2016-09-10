<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class LoanAccountViewFilter extends ViewFilter {


    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_loanaccount_form_fields', array('LoanAccountViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_loanaccount_action_links', array('LoanAccountViewFilter', 'filter_view_action_links'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);


        if($page_action == 'create') {
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
                $action_links['create_loanaccount_link'] = array('name' => 'Add New', 
                    'link' => EntityActionProcessor::get_base_url() . 'page_action=create&artifact=loanaccount');
            }
            else {
                $action_links['list_loanaccount_link'] = array('name' => 'View All', 
                    'link' => EntityActionProcessor::get_base_url() . 'page_action=list&artifact=loanaccount');
            }
        }
        
    
        return $action_links;
    }

}

?>