<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class TutorListPageModel extends ListPartyPageModel { 
    
    /**
     * 
     */
    public function get_role(){
        return 'tutor';
    }
    
    /**
     * 
     */
    public function is_entity($artifact_name) {
        return true;
    }
}
?>