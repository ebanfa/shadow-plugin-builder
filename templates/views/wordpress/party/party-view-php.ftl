<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PartyView extends ViewController {

    public static $view_title_map = array('client' => 'Client',
        'tenant' => 'Tenant',
        'prospective_tenant' => 'Prospective Tenant',
        'service_provider' => 'Service Provider',);
    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_party_view_title', array('PartyView', 'filter_view_title'), 10, 2);
        add_filter('shadowbanker_party_form_fields', array('PartyView', 'filter_form_fields'), 10, 2);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);
        if(isset($_REQUEST['role']) && $page_action == 'list') {
            $form_fields['role'] = array('name' => 'role', 'value' => sanitize_text_field($_REQUEST['role']));
        }
        
        return $form_fields;
    }

    /**
     *
     */
    public static function filter_view_title($view, $title) {
        $title = parent::filter_view_title($view, $title);
        if(isset($_REQUEST['role'])) {
            $role = sanitize_text_field($_REQUEST['role']);
            if(isset(self::$view_title_map[$role]))
                $title = sanitize_text_field($_REQUEST['role']);
        }
        return $title;
    }

}

?>