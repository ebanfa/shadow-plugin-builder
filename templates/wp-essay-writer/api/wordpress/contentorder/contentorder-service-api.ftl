<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentOrderAPI  {

    public static $order_status_pending = 'PENDING';
    public static $order_status_completed = 'COMPLETED';
    public static $order_status_in_progress = 'IN_PROGRESS';

    public static $pay_status_refunded = 'REFUNDED';
    public static $pay_status_not_paid = 'NOT_PAID';
    public static $pay_status_completed = 'COMPLETED';
    public static $pay_status_partial = 'PARTIAL_PAYMENT';

    public static $academic_paper_order = 'ACADEMIC_PAPER_ORDER';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $party_data = EntityAPI::get_by_field('party', 'user_name', $entity_data['email']);
        if(!isset($party_data['id'])) { 
            // Create the user and signin
            if(isset($entity_data['email'])) {
                //$user_data = self::prepare_signup_data($entity_data);
                $entity_data['role'] = PartyRoleAPI::$student_role_type_code;
                $party_data = CloderiaUserAPI::do_create_content_user($entity_data);
                // Sign the user in
                if(!isset($party_data['user_data'])) 
                    return EntityAPIUtils::init_error($entity_data, 'Failed to signin, user data not provided');

                $user_data = $party_data['user_data'];
                $signin_results = ContentUserLoginAPI::do_signin_user($user_data['user_login'], $user_data['user_pass']);
                if($signin_results['has_errors']) return EntityAPIUtils::init_error($entity_data, $signin_results['message']);
                    
            }
        }
        // Create the content order
        if(isset($party_data['id'])) {
            $status_data = EntityAPI::get_by_code('contentorderstatus', self::$order_status_pending);
            $order_type_data = EntityAPI::get_by_code('contentordertype', self::$academic_paper_order);
            $payment_status_data = EntityAPI::get_by_code('paymentstatus', self::$pay_status_not_paid);
            // Ensure the we have the order status and order type
            if(!isset($status_data['id']) || !isset($order_type_data['id']) || !isset($payment_status_data['id'])) 
                return EntityAPIUtils::init_error($entity_data, 'Order status, order type and payment status are required');
            
            $entity_data['order_party'] = $party_data['id'];
            $entity_data['order_date'] = date("Y-m-d H:i:s");
            $entity_data['order_status'] = $status_data['id'];
            $entity_data['order_type'] = $order_type_data['id'];
            $entity_data['payment_status'] = $payment_status_data['id'];
            // Keep a reference to the email because after the create call the
            // email value in the entity_data array will be lost
            $email = $entity_data['email'];
            $entity_data = self::do_create_content_order($entity_data);
            $entity_data = ContentFileAPI::do_files_upload($entity_data, 'order_attachment');
            // Send out the order created email
            $entity_data['email'] = $email;
            self::send_order_created_email($entity_data);
        }
        return $entity_data;
        
    }

    /**
     * Updates the status of an order
     */
    public static function do_update_contentorder_status($entity_data){
        // Save the status in a temporary variable
        $order_status = $entity_data['order_status'];
        // Now we load the entity we want to edit using the supplied id
        if(isset($entity_data['id'])) $entity_data = EntityAPI::get_by_id('contentorder', $entity_data['id']);

        if(isset($entity_data['id'])) {
            $entity_data['edit_mode'] = false;
            $entity_data['order_status'] = $order_status;
            $entity_data = EntityAPI::do_create_entity($entity_data);
        }
        return $entity_data;
    }

    /**
     * Handles file uploads for files uploaded via the portal page
     */
    public static function do_upload_content_order_file($entity_data, $file_param){
        // Now we load the entity we want to edit using the supplied id
        if(isset($entity_data['id'])) $entity_data = EntityAPI::get_by_id('contentorder', $entity_data['id']);
        $entity_data = ContentFileAPI::do_files_upload($entity_data, $file_param);
        return $entity_data;
    }


    /**
     * 
     */
    public static function do_create_content_order($entity_data) 
    {   
        if(isset($entity_data['document_type'])) {
            $doc_data = EntityAPI::get_by_code('documenttype', $entity_data['document_type']);
            if(isset($doc_data['id'])) $entity_data['document_type'] = $doc_data['id'];
        }
        if(isset($entity_data['urgency'])) {
            $urgency = EntityAPI::get_by_code('urgency', $entity_data['urgency']);
            if(isset($urgency['id'])) $entity_data['urgency'] = $urgency['id'];
        }
        if(isset($entity_data['numpages'])) {
            $numpages = EntityAPI::get_by_code('noofpages', $entity_data['numpages']);
            if(isset($numpages['id'])) $entity_data['numpages'] = $numpages['id'];
        }
        if(isset($entity_data['subject_area'])) {
            $subject_area = EntityAPI::get_by_code('subjectarea', $entity_data['subject_area']);
            if(isset($subject_area['id'])) $entity_data['subject_area'] = $subject_area['id'];
        }
        if(isset($entity_data['academic_level'])) {
            $academic_level = EntityAPI::get_by_code('academiclevel', $entity_data['academic_level']);
            if(isset($academic_level['id'])) $entity_data['academic_level'] = $academic_level['id'];
        }
        if(isset($entity_data['writing_style'])) {
            $writing_style = EntityAPI::get_by_code('writingstyle', $entity_data['writing_style']);
            if(isset($writing_style['id'])) $entity_data['writing_style'] = $urgency['id'];
        }
        $entity_data = EntityAPI::do_create_entity($entity_data);
        if(isset($entity_data['id'])) $entity_data = EntityAPI::get_by_id('contentorder', $entity_data['id']);

        return $entity_data;
    }

    /**
     * 
     */
    public static function send_order_created_email($entity_data) 
    {   
        // Find the user
        $user = get_user_by('login', $entity_data['email'] );
        if($user) {
            // Get the user data context {username, password etc}
            $data_context = self::get_order_data_context($entity_data);

            //update_user_meta($user->ID, 'userDataContext', implode("|", $data_context));
            // 2. Send mail to user,
            CloderiaUserAPI::send_email($data_context, $user->user_login, 'order-created-subject.tpl', 'order-created-message.tpl', array());
            // 3 Send mail to the admin
            CloderiaUserAPI::send_email($data_context, get_option('cp_notify_orders'), 'order-created-subject.tpl', 'order-created-message.tpl', array());
        }
    }

    public static function get_order_data_context($entity_data) {
        $dataContext = array();
        $dataContext['display_name'] = $entity_data['email'];
        $dataContext['order_no'] = $entity_data['entity_code'];
        $dataContext['order_subtotal'] = $entity_data['total'];
        $dataContext['order_discount'] = 0.00;
        $dataContext['order_total'] = $entity_data['total'];
        //$date_now = new DateTime();
        //$dataContext['date_now'] = $date_now->format(ContentPort::$date_format);
        $dataContext['order_date'] = date("Y-m-d H:i:s");
        $dataContext['order_topic'] = $entity_data['name'];
        $dataContext['site_url'] = get_site_url();
        $dataContext['site_name'] = get_bloginfo('name');
        $dataContext['site_descriptions'] = get_bloginfo('descriptions');
        $dataContext['site_email'] = get_option('cp_notify_loans');
        $dataContext['site_domain'] = get_option('cp_site_domain');
        $dataContext['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        $dataContext['order_subject'] = $entity_data['subject_area_txt'];
        $dataContext['order_level'] = $entity_data['academic_level_txt'];
        $dataContext['order_pages'] = $entity_data['numpages_txt'];
        $dataContext['order_type'] = $entity_data['document_type_txt'];
        $dataContext['order_term'] =$entity_data['urgency_txt']; 
        
        return $dataContext;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $current_user_party = PartyAPI::get_current_user_party();

        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code)) 
            return EntityAPI::find_by_criteria($artifact_name, array('order_party' => $current_user_party['id']));

        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function do_delete_entity($entity_data) {
        return EntityAPI::do_delete_entity($entity_data);
    }

    

    /*
     *
     **/
    public static function do_signin_user($username, $password) {
        $login_data = array();
        $login_data['user_login'] = $username;
        $login_data['user_password'] = $password;

        $user_verify = wp_signon($login_data, true);

        if (is_wp_error($user_verify)) {
            return array('hasErrors' => true,
                'message' => "Invalid username or password. Please try again.");
        } else {
            wp_set_current_user($user_verify->ID);
            wp_set_auth_cookie($user_verify->ID);
            // Build the return
            $content_user = array('user_login' => $username, 'user_password' => $password);
            // Process redirect
            if (isset($_POST['redirect_to'])) {
                $content_user['redirect_url'] = $_POST['redirect_to'];
            } else {
                    $content_user['redirect_url'] = site_url() . '/page?page_action=list&artifact=contentorder';
            }
            return array('hasErrors' => false, 'content_user' => $content_user);
        }
    }

    /*
     * 
     **/
    public static function do_create_content_user($user_data) {
        $user_id = wp_insert_user($user_data);
        if (is_wp_error($user_id)) {
            return array('hasErrors' => true, 'message' => $user_id->get_error_message());
        }
        update_new_user_meta($user_id, $user_data);;
        $user_data['hasErrors'] = false;
        return $user_data;
    }

    /*
     * 
     **/
    public static function prepare_signup_data($entity_data) {

        $user_name = $entity_data['email'];
        $password = EntityStringUtils::get_token(8);
        // Split the username at the @ sign
        $account_name = $user_name;
        $split_username = explode('@', $account_name);
        if (!empty($split_username)) {
            $account_name = ucfirst($split_username[0]);
        }
        $user_data = array();
        $user_data['description'] = '';
        $user_data['role'] = $user_type;
        $user_data['user_pass'] = $password;
        $user_data['user_login'] = $user_name;
        $user_data['user_email'] = $user_name;
        $user_data['last_name'] = $account_name;
        $user_data['first_name'] = $account_name;
        $user_data['display_name'] = $account_name;
        $user_data['business_name'] = $account_name;
        return $user_data;
    }

}
