<?php

/*
 * 
 */
if (!defined('ABSPATH')) {
    exit; //Exit if accessed directly
}

class CloderiaUserAPI {

    /**
     * 
     */
    public static function create_shadow_user($user_data) {
        // Validate the passed in data
        if(CloderiaUserAPI::validate_user_data($user_data)) {
            // create the party record 
            // 1. Create the party
            $party_data = CloderiaUserAPI::create_party($user_data);
            if(!$party_data['has_errors']) {
                // 2. Create the profile for the user
                // 4. Create the default buisness unit for the party
                // 3. Create the default party role
                // 5. Send the user successully created email
                $person_data = CloderiaUserAPI::create_party_person($user_data, $party_data);
                $partyprofile_data = CloderiaUserAPI::create_party_profile($user_data, $party_data);
                $businessunit_data = CloderiaUserAPI::create_default_party_businessunit($party_data);
                $partyrole_data = CloderiaUserAPI::create_default_party_role($businessunit_data);
                $chartofaccounts_data = CloderiaUserAPI::create_default_party_chartofaccounts($party_data, $partyrole_data);

                //CloderiaUserAPI::send_user_created_email($user_data, $party_data);
            }
        }
    }

    /**
     * This creates the party for the current user
     */
    public static function create_party($user_data) {
        $entity_data = array();
        $party_type = PartyTypeAPI::get_by_code(get_option('cp_default_partytype'));

        if(isset($party_type['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['party_type'] = $party_type['id'];
            $entity_data['user_name'] = $user_data['user_login'];
            $entity_data['password'] = $user_data['user_pass'];
            $entity_data['description'] = $user_data['description'];
            $entity_data['name'] = $user_data['first_name'] . ' ' . $user_data['last_name'];
            // Create the party and return the results of the process
            $entity_data = PartyAPI::do_create_entity($entity_data);
        }
        return $entity_data;
    }

    /**
     * Only a person can sign up within the system. This creates the person
     * entity for the party
     */
    public static function create_party_person($user_data, $party_data) {
        $entity_data = array();
        if(isset($party_type['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['party'] = $party_data['id'];
            $entity_data['name'] = $party_data['name'];
            $entity_data['first_name'] = $user_data['first_name'];
            $entity_data['last_name'] = $user_data['last_name'];
            $entity_data['gender'] = 'X';
            $entity_data['id_number'] = '0000000000';
            $entity_data['date_of_birth'] = date("Y-m-d H:i:s");

            $entity_data = PersonAPI::do_create_entity($entity_data);
        }
        return $entity_data;
    }

    /**
     * Each party has a party profile that holds profile related information 
     * for the user. This is stuff like profile picture, display name, status etc.
     */
    public static function create_party_profile($user_data, $party_data) {
        $entity_data = array();
        if(isset($party_data['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['party'] = $party_data['id'];
            $entity_data['name'] = $user_data['display_name'];
            $entity_data['display_name'] = $user_data['display_name']; 
            $entity_data['date_created'] = date("Y-m-d H:i:s");
            $entity_data = PartyProfileAPI::do_create_entity($entity_data);
        }
        return $entity_data;
    }

    /**
     * Each party has a default business unit irrespective of party type.
     * 
     */
    public static function create_default_party_businessunit($party_data) {
        $entity_data = array();
        if(isset($party_data['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['party'] = $party_data['id'];
            $entity_data['name'] = $party_data['name'];
            $entity_data['address_1'] = '0000000000'; 
            $entity_data['address_1'] = '0000000000'; 
            $entity_data['description'] = $party_data['name'];
            $entity_data = BusinessUnitAPI::do_create_entity($entity_data);
        }
        return $entity_data;
    }

    /**
     * Upon signup, a business unit is created for the new party. Since this
     * is the business unit of the new user, we create a new party role of role
     * type 'BUSINESS_OWNER' for the new user.
     */
    public static function create_default_party_role($businessunit_data) {
        $entity_data = array();
        $owner_role_data = RoleTypeAPI::get_by_code('BUSINESS_OWNER');
        if(isset($businessunit_data['id']) && isset($owner_role_data['id'])) {
            $entity_data['edit_mode'] = true;
            $entity_data['party'] = $businessunit_data['party'];
            $entity_data['role'] = $owner_role_data['id'];
            $entity_data['business_unit'] = $businessunit_data['id'];
            $entity_data['name'] = $owner_role_data['name'];
            $entity_data['description'] = $owner_role_data['description'];
            $entity_data = PartyRoleAPI::do_create_entity($entity_data);
        }
        return $entity_data;

    }

    /**
     * Create the chart of accounts for a specific party role. Each role type has a mapping to
     * account structure which is used to specify the structure of the chart of account for 
     * the said role type.
     */
    public static function create_default_party_chartofaccounts($party_data, $partyrole_data) {
        $entity_data = array();
        if(isset($partyrole_data['id']) && isset($party_data['id'])) {
            // 1. Use the mapping of party role to account structure to
            // the appropriate account structure to use for the COA we care creating
            $role_type_data = RoleTypeAPI::get_by_code($partyrole_data['role']);
            if(isset($role_type_data['id'])) {
                $role_mapping_data = RoleTypeAccountStructureAPI::get_by_meta('role');
                if(isset($role_mapping_data['id'])) {
                    $entity_data['edit_mode'] = true;
                    $entity_data['role'] = $partyrole_data['id'];
                    $entity_data['structure'] = $role_mapping_data['id'];
                    $entity_data['name'] = $party_data['name'] . ':' . $partyrole_data['name'];
                    $entity_data['description'] = 'Chart of accounts for ' . $coa_name;
                    $entity_data = ChartOfAccountAPI::do_create_entity($entity_data);
                }
            }
        }
        return $entity_data;
    }

    /**
     * 
     */
    public static function validate_user_data($user_data) {
        /*if(!isset($user_data['first_name']) || !isset($user_data['last_name'])) {
            return false;
        }
        if(!isset($user_data['user_login']) || !isset($user_data['user_pass'])) {
            return false;
        }
        if(!isset($user_data['display_name'])) {
            return false;
        }*/
        return true;
    }

    /**
     * 
     */
    public static function send_user_created_email($user_name) 
    {   
        // Find the user
        $user = get_user_by('login', $user_name );
        if($user) {
            // Get the user data context {username, password etc}
            $data_context = CloderiaUserAPI::get_user_data_context($user);
            //update_user_meta($user->ID, 'userDataContext', implode("|", $data_context));
            // 2. Send mail to user,
            CloderiaUserAPI::send_email($data_context, $user->user_login, 'account-created-subject.tpl', 'account-created-message.tpl', array());
            // 3 Send mail to the admin
            CloderiaUserAPI::send_email($data_context, get_option('cp_notify_accounts'), 'account-created-subject.tpl', 'account-created-message.tpl', array());
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
        $msg_templ = CloderiaUserAPI::parse($msg_templ, $data_context);
        $msg_sub_templ = CloderiaUserAPI::parse($msg_sub_templ, $data_context);
        // Send the email
        wp_mail($address, $msg_sub_templ, $msg_templ, '', $attachment);
    }

    /**
     * 
     */
    public static function get_user_data_context($user)
    {
        $data_context = array('user_name' => $user->user_login, 'password' => $user->user_pass,
            'first_name' => $user->first_name, 'last_name' => $user->last_name);
        $data_context['email'] = $user->user_login;
        $data_context['display_name'] = get_user_meta($user->ID, 'display_name', true);
        $data_context['site_url'] = get_site_url();
        $data_context['site_name'] = get_bloginfo('name');
        $data_context['site_descriptions'] = get_bloginfo('descriptions');
        $data_context['site_email'] = get_option('cp_notify_loans');
        $data_context['site_domain'] = get_option('cp_site_domain');
        $data_context['site_stylesheet_uri'] = get_stylesheet_directory_uri();
        return $data_context;
    }

    /*------------------------------------------------------------------------------
    SYNOPSIS: a simple parsing function for basic templating.
    INPUT:
        $tpl (str): a string containing [+placeholders+]
        $hash (array): an associative array('key' => 'value');
    OUTPUT
        string; placeholders corresponding to the keys of the hash will be replaced
        with the values and the string will be returned.
    ------------------------------------------------------------------------------*/
    public static function parse($tpl, $hash) {
        foreach ($hash as $key => $value) {
            if($key != 'attachments') {
                $tpl = str_replace('[+'.$key.'+]', $value, $tpl);
            }
        }
        return $tpl;
    }


}
