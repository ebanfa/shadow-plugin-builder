<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${uiComponent.className}Model extends UIComponentModel { 

    /**
     * Process the model
     */
    public function process_model(){
    	$current_user = UserPartyAPI::get_current_user_party();
    	if(!isset($current_user['id'])) ArtifactRequestProcessor::do_artifact_request_error('Invalid user');
    	
    	if(UserPartyAPI::is_portal_admin($current_user)) 
        	$this->model = BusinessSummaryAPI::do_business_summary_data();
        else 
        	$this->model = BusinessSummaryAPI::do_user_summary_data($current_user['id']);
    }
}
?>