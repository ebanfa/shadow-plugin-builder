<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContactUsAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        $data_context = array();
        $data_context['name'] = $entity_data['name'];
        $data_context['email'] = $entity_data['email'];
        $data_context['description'] = $entity_data['description'];
        CloderiaUserAPI::send_email($data_context, get_option('cp_notify_accounts'), 'contact-subject.tpl', 'contact-message.tpl', array());
        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }



}
