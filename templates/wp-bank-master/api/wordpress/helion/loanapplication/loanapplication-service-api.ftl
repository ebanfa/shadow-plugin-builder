<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class LoanApplicationAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        $data_context = array();
        $data_context['name'] = $entity_data['name'];
        $data_context['email'] = $entity_data['email'];
        $data_context['b_name'] = $entity_data['b_name'];
        $data_context['b_phone'] = $entity_data['b_phone'];
        $data_context['industry'] = $entity_data['industry'];
        $data_context['country'] = $entity_data['country'];
        $data_context['ln_amt'] = $entity_data['ln_amt'];
        $data_context['description'] = $entity_data['description'];
        CloderiaUserAPI::send_email($data_context, get_option('cp_notify_accounts'), 
            'loan-created-subject.tpl', 'loan-created-message.tpl', array());
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $current_user = wp_get_current_user();
        return  EntityPersistenceAPI::find_by_criteria($entity_data, array('email' => $current_user->user_login));
    }



}
