<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContactRequestAPI {

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        $data_context = array();
        $data_context['email'] = $entity_data['email'];
        $data_context['subject'] = $entity_data['name'];
        $data_context['message'] = $entity_data['description'];
        MailAPI::do_send_contact_request_received_email($data_context); 

        return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return  EntityAPI::do_find_entity($entity_data); 
    }



}
