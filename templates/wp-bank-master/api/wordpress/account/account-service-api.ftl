<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class AccountAPI {


    /**
     *
     */
    public static function do_create_entity($entity_data){
        return EntityAPI::do_create_entity($entity_data);
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $current_user_party = PartyAPI::get_current_user_party();

        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code))
            return EntityAPI::find_by_criteria($artifact_name, array('account_party' => $current_user_party['id']));

        return EntityAPI::do_find_entity($entity_data);
    }
}
