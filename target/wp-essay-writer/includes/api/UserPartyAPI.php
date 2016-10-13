<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class UserPartyAPI {

    /**
     * Get the WP_User object of the party with the provided id
     */
    public static function get_party_user($party_id){
        $user_data = array();
        $party_data = EntityAPI::get_by_id('party', $party_id); 
      
        if(isset($party_data['id'])){       
            $user = get_user_by('login', $party_data['user_name']); 
            if($user){
                $user_data['id'] = $user->ID;
                $user_data['user_name'] = $user->user_login;
            }
        }
       return $user_data;
    }

    /**
     * Get the party of the user with the provided id
     */
    public static function get_user_party($user_id){
        $user_party = array();
        $user = get_user_by('id', $user_id);
        if($user)
            $user_party = EntityAPI::get_by_field('party', 'user_name', $user->user_login);
        return $user_party;
    }

    /**
     * Get the party of the user with the provided id
     */
    public static function is_portal_admin($party_data){
        if($party_data['entity_code'] == 'ADMINISTRATOR') return true;
        return false;
    }

    /**
     * Get the party of the user with the provided id
     */
    public static function is_current_user_portal_admin() {
        if(!is_user_logged_in()) return false;
        return self::is_portal_admin(self::get_current_user_party());
    }

    /**
     * Get the party of the currently logged in user
     */
    public static function get_current_user_party(){
        $user_party = array();
        $current_user = wp_get_current_user();
        if ($current_user) {
           $user_party = self::get_user_party($current_user->ID);
        }
        return $user_party;
    }

    /**
     * Does the party with the specified user name exist?
     */
    public static function does_party_exist($user_name){
        $party_data = EntityAPI::get_by_field('party', 'user_name', $user_name);
        if(isset($party_data['id'])) return true;
        return false;
    }

}

