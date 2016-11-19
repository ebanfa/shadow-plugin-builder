<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class StudentListPageModel extends ListPartyPageModel { 
    
    /**
     * 
     */
    public function get_role(){
        return 'student';
    }
    
    /**
     * 
     */
    public function is_entity($artifact_name) {
        return true;
    }
}
?>