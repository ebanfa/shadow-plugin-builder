<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ContentOrderUserAPI  {

    /**
     *
     */
    public static function do_get_party($email, $create_user_fg, $signin_fg){
        // 1. Check if the user exists
        $party_data = PartyAPI::get_by_email($email);
        if(isset($party_data['id'])) return $party_data;

        if(!isset($party_data['id']) && !$create_user_fg) 
            return EntityAPIUtils::init_error($party_data, 'Order user not found');
        // 2. Build the content user data
        $content_user_data = array(
            'last_name' => $email,
            'first_name' => $email,
            'user_login' => $email,
            'user_pass' => SecurityAPI::generate_password(),
            'role' => PartyRoleAPI::$student_role_type_code,
        );
        // 3. Create the content user
        $user_party_data = ContentUserAPI::do_create_content_user($content_user_data, true);
        if($user_party_data['has_errors']) return $user_party_data;
        // Automatically sign the user in if required
        if($signin_fg) {
            $signin_data = UserLoginAPI::do_signin_content_user($email, $content_user_data['user_pass']);
            if($signin_data['has_errors']) return $signin_data;
        }
        return $user_party_data;
    }

}
