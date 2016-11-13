<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PostQuestionAjaxRequestProcessor {

    /**
     * 
     */
    public static function create_entity_ajax() {
    	$question_data = array();
    	// 1. Validate the provided data
        if( !isset($_POST['title']) || !isset($_POST['subject']) || 
        	!isset($_POST['email']) || !isset($_POST['details'])) 
            return EntityAPIUtils::init_error($question_data, 'Invalid question data provided');
    	// 2. Build the content user data
    	LogUtils::shadow_log('Posting question>>>>>>>>>>>>>>>>>>>>>>>>>>');
    	return $question_data;
    }

}

?>