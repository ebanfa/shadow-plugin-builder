<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class MailAPI {

    /**
     *  Sends an email notifying the user and the site admin of a new content
     *  user account being created. Additional data to be used to fill the templates
     *  can be passin via the data context parameter.
     */
    public static function do_send_user_created_email($content_user_data, $data_context) {
        // Send an email to the user and to admin
        $context = self::get_email_data_context($content_user_data, $data_context);
        self::send_email($context, $content_user_data['user_login'], 'account-created-subject.tpl', 'account-created-message.tpl', array());
        self::send_email($context, get_option('cp_notify_accounts'), 'account-created-subject.tpl', 'account-created-message.tpl', array());
    }

    /**
     *  Sends an email notifying the user and the site admin of an
     *  account password reset. Additional data to be used to fill the templates
     *  can be passin via the data context parameter.
     */
    public static function do_send_user_password_email($content_user_data, $data_context) {
        // Send an email to the user and to admin 
        $context = self::get_email_data_context($content_user_data, $data_context);
        self::send_email($context, $content_user_data['user_login'], 'password-reset-subject.tpl', 'password-reset-message.tpl', array());
        self::send_email($context, get_option('cp_notify_accounts'), 'password-reset-subject.tpl', 'password-reset-message.tpl', array());
    }

    /**
     * 
     */
    public static function do_send_order_created_email($content_order_data, $data_context) 
    {   
        $context = self::get_order_data_context($entity_data, $data_context);
        self::send_email($context, $context['user_name'], 'order-created-subject.tpl', 'order-created-message.tpl', array());
        self::send_email($context, get_option('cp_notify_orders'), 'order-created-subject.tpl', 'order-created-message.tpl', array());
    }

    /**
     * 
     */
    public static function do_send_order_edited_email($content_order_data, $data_context) 
    {   
        $context = self::get_order_data_context($entity_data, $data_context);
        self::send_email($context, $context['user_name'], 'order-edited-subject.tpl', 'order-edited-message.tpl', array());
        self::send_email($context, get_option('cp_notify_orders'), 'order-edited-subject.tpl', 'order-edited-message.tpl', array());
    }

    /**
     * 
     */
    public static function do_send_client_payment_received_email($content_order_data, $transaction_data)
    {   
        $context = self::get_order_data_context($content_order_data, array());
        self::send_email($context, $context['user_name'], 'client-payment-subject.tpl', 'client-payment-message.tpl', array());
        self::send_email($context, get_option('cp_notify_orders'), 'client-payment-subject.tpl', 'client-payment-message.tpl', array());
    }

    /**
     * Responsible for sending the actual email
     */
    public static function send_email($data_context, $address, $subject_tmpl_file, $message_tmpl_file, $attachment) 
    {
        // Load the subject and message templates
        $message_tmpl = file_get_contents(dirname(dirname(dirname(__FILE__))) . '/email_templates/' . $message_tmpl_file);
        $subject_tmpl = file_get_contents(dirname(dirname(dirname(__FILE__))) . '/email_templates/' . $subject_tmpl_file);
        // Fill the templates
        $message_tmpl = EntityStringUtils::parse($message_tmpl, $data_context);
        $subject_tmpl = EntityStringUtils::parse($subject_tmpl, $data_context);
        
        LogUtils::shadow_log($data_context);
        LogUtils::shadow_log('Sending mail to ' . $address . ' with subject ' . $subject_tmpl);
        // Send the email
        wp_mail($address, $subject_tmpl, $message_tmpl, '', $attachment);
    }

    /**
     * 
     */
    public static function get_email_data_context($user_data, $additonal_context_data)
    {
        $data_context = array('user_name' => $user_data['user_login'], 'password' => $user_data['user_pass'],
            'first_name' => $user_data['first_name'], 'last_name' => $user_data['last_name']);
        $data_context['email'] = $user_data['user_login'];
        $data_context['display_name'] = $user_data['display_name'];
        $data_context['site_url'] = get_site_url();
        $data_context['site_name'] = get_bloginfo('name');
        $data_context['site_descriptions'] = get_bloginfo('descriptions');
        $data_context['site_email'] = get_option('cp_notify_accounts');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        $data_context = array_merge($data_context, $additonal_context_data);
        return $data_context;
    }

    /**
     * 
     */
    public static function get_order_data_context($entity_data, $additonal_context_data) {
        $content_user_data = UserPartyAPI::get_party_user($entity_data['order_party']);
        $data_context = self::get_email_data_context($content_user_data, $additonal_context_data);

        $data_context['order_discount'] = 0.00;
        $data_context['order_date'] = date("Y-m-d H:i:s");
        $data_context['order_topic'] = $entity_data['name'];
        $data_context['order_total'] = $entity_data['total'];
        $data_context['order_no'] = $entity_data['entity_code'];
        $data_context['order_subtotal'] = $entity_data['total'];
        $data_context['order_term'] = $entity_data['urgency_txt']; 
        $data_context['order_pages'] = $entity_data['numpages_txt'];
        $data_context['order_type'] = $entity_data['document_type_txt'];
        $data_context['order_subject'] = $entity_data['subject_area_txt'];
        $data_context['order_level'] = $entity_data['academic_level_txt'];
        return $data_context;
    }


    

}

