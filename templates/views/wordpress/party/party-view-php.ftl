<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PartyView extends ViewController {


    /**
     *
     */
    public static function init_hooks() {
        $hook_name = 'shadowbanker_list_party_form_fields';
        add_filter('shadowbanker_list_party_form_fields', array('PartyView', 'filter_form_fields'), 10, 1);
    }

    /**
     *
     */
    public static function filter_form_fields($form_fields) {
        $form_fields = parent::filter_form_fields($form_fields);
        $form_fields['role'] = array('name' => 'role', 'value' => 'tenant');
        return $form_fields
    }

}

?>