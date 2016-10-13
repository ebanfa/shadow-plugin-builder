<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class MailAPI {

    /**
     * 
     */
    public static function do_send_user_created_email($user_party_data) {
    }



    /**
     * 
     */
    public static function send_user_created_email($user_data) 
    {   
        // Find the user
        $user = get_user_by('login', $user_data['user_login'] );
        if($user) {
            // Get the user data context {username, password etc}
            $data_context = self::get_user_data_context($user_data);
            //update_user_meta($user->ID, 'userDataContext', implode("|", $data_context));
            // 2. Send mail to user,
            self::send_email($data_context, $user_data['user_login'], 'site-account-created-subject.tpl', 'site-account-created-message.tpl', array());
            // 3 Send mail to the admin
            self::send_email($data_context, get_option('cp_notify_accounts'), 'site-account-created-subject.tpl', 'site-account-created-message.tpl', array());
        }
    }

    /**
     * 
     */
    public static function send_email($data_context, $address, $subject_templ, $message_templ, $attachment) 
    {
        // Load the subject and message templates
        $msg_templ = file_get_contents(dirname(dirname(dirname(__FILE__))) .'/email_templates/' . $message_templ);
        $msg_sub_templ = file_get_contents(dirname(dirname(dirname(__FILE__))) .'/email_templates/' . $subject_templ);
        // Fill the templates
        $msg_templ = EntityStringUtils::parse($msg_templ, $data_context);
        $msg_sub_templ = EntityStringUtils::parse($msg_sub_templ, $data_context);

        LogUtils::shadow_log($msg_templ);
        // Send the email
        wp_mail($address, $msg_sub_templ, $msg_templ, '', $attachment);
    }


    /**
     * 
     */
    public static function get_email_data_context($user_data)
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
        return $data_context;
    }

    

}

