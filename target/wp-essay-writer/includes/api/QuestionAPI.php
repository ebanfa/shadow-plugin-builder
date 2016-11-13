<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class QuestionAPI  {

    public static $content_type_question = '39';

    /**
     *
     */
    public static function post_question($question_data){

        $content_type_data = EntityAPI::get_by_code('contenttype', self::$content_type_question);
        if(!isset($content_type_data['id'])) return EntityAPIUtils::init_error($question_data, 'Content type not found');

        $content_data = EntityAPIUtils::init_entity_data('content');  
        $content_data['edit_mode'] = true;
        $content_data['name'] = $question_data['title'];
        $content_data['content_type'] = $content_type_data['id'];
        $content_data['content_party'] = $question_data['owner'];
        $content_data['content_tutor'] = $question_data['tutor'];
        $content_data['content_subject'] = $question_data['subject'];
        $content_data['description'] = $question_data['description'];

        $content_data =  EntityAPI::do_create_entity($content_data);
        if(!isset($content_data['id'])) return EntityAPIUtils::init_error($question_data, 'Could not create content');
        MailAPI::do_send_content_created_email($content_data, array());
        return $content_data;
    }

    /**
     *
     */
    public static function get_recent_questions(){

        $content_type_data = EntityAPI::get_by_code('contenttype', self::$content_type_question);
        if(!isset($content_type_data['id'])) return EntityAPIUtils::init_error($question_data, 'Content type not found');

        $recent_questions = EntityAPI::find_by_criteria('content', array('content_type' => $content_type_data['id']));
        return $recent_questions;
    }
}
