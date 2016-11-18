<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class View${entity.name}PageModel extends ViewEntityPageModel { 

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
        $this->model['id'] = EntityStringUtils::decode_id($this->model['id']);
        $this->model = TutorAPI::load_profile_data($this->model);
        $this->model['id'] = EntityStringUtils::encode_id($this->model['id']);
    }

    /**
     * 
     */
    public function can_edit_profile() {
        $party_data = UserPartyAPI::get_current_user_party();
        if(!isset($party_data['id'])) return false;
        $id = EntityStringUtils::decode_id($this->model['id']);
        if($id == $party_data['id'] || UserPartyAPI::is_portal_admin($party_data)) return true;
        return false;
    }

    /**
     * 
     */
    public function can_rate_tutor() {
        $party_data = UserPartyAPI::get_current_user_party();
        if(!isset($party_data['id'])) return true;
        if(PartyRoleAPI::has_role($party_data['id'], 'student') || UserPartyAPI::is_portal_admin($party_data)) return true;
        return false;
    }

    /**
     * 
     */
    public function can_deactive_account() {
        if(UserPartyAPI::is_current_user_portal_admin()) return true;
        return false;
    }
}
?>