<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyRoleAPI {

    public static $cust_role_type_code = 'CUSTOMER';
    public static $biz_user_role_type_code = 'BUSINESS_USER';

    /**
     *
     */
    public static function do_create_entity($entity_data){
        $entity_data =  EntityAPI::do_create_entity($entity_data);
        return $entity_data;
    }

    /**
     *
     */
    public static function has_role($party_id, $role_type_code){
        $role_type_data =  EntityAPI::get_by_code('roletype', $role_type_code);
        if(!isset($role_type_data['id'])) return false;

        $party_roles = EntityAPI::find_by_criteria('partyrole', array('party' => $party_id, 'role' => $role_type_data['id']));
        CloderiaLogUtils::shadow_log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
        CloderiaLogUtils::shadow_log(count($party_roles));
        if(empty($party_roles)) return false;
        return true;
    }


}
