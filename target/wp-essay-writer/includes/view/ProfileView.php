<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ProfileView extends ArtifactView {
    

    /**
     *
     */
    function __construct() {
        $this->set_up();
    }

   
    /**
     * Render this view
     */
    public function render() {
        $party_data = UserPartyAPI::get_current_user_party();
        if(!isset($party_data['id'])) $redirect_url = get_site_url();
        // If the current user is tutor
        if(PartyRoleAPI::has_role($party_data['id'], PartyRoleAPI::$tutor_role_type_code))
            $redirect_url = ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=tutordisplay'.'&id='.$party_data['id'].'&page_action=view';
        // If the current user is student
        if(PartyRoleAPI::has_role($party_data['id'], PartyRoleAPI::$student_role_type_code))
            $redirect_url = ArtficatAjaxRequestProcessorUtils::get_base_url() . 'artifact=studentdisplay'.'&id='.$party_data['id'].'&page_action=view';

        echo '<script>window.location="' . $redirect_url . '"</script>';
    }

}

?>