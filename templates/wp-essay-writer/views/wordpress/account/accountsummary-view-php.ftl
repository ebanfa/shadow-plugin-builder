<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class AccountSummaryView extends ArtifactView {
    

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
            
        do_action('shadowbanker_before_main_content');
        UIDisplayAPI::display_page($_REQUEST['page_info']);
        do_action('shadowbanker_after_main_content');
    }

    /**
     * 
     */
    public function get_account_summary_data() {
        // 1. Resolve the current user
        $data_user = UserPartyAPI::get_current_user_party();
        return BusinessSummaryAPI::do_user_summary_data($data_user['id']);
    }
}

?>