<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyProfilesAPI {

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
    public static function do_find_entity($entity_data) {
        $artifact_name = $entity_data['entity_artifact_name'];
        $current_user_party = UserPartyAPI::get_current_user_party();

        if(!PartyRoleAPI::has_role($current_user_party['id'], PartyRoleAPI::$biz_user_role_type_code))
            return EntityAPI::find_by_criteria($artifact_name, array('profile_party' => $current_user_party['id']));

        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     * Each party has a party profile that holds profile related information 
     * for the user. This is stuff like profile picture, display name, status etc.
     * Each profile has a default business unit which dictates the data that the
     * current user is allowed to access. The second business unit parameter is
     * business unit in which this profile is defined
     */
    public static function do_create_party_profile($party_data) {
        $entity_data = EntityAPIUtils::init_entity_data('partyprofile');
        if(!isset($party_data['id'])) 
            return EntityAPIUtils::init_error($party_data, 'Profile creation requires a valid party');

        $entity_data['edit_mode'] = true;
        $entity_data['party'] = $party_data['id'];
        $entity_data['name'] = $party_data['name'];
        $entity_data['display_name'] = $party_data['name']; 
        $entity_data['date_created'] = date("Y-m-d H:i:s");
        $entity_data = self::do_create_entity($entity_data);
        return $entity_data;
    }

}