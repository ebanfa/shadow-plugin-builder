<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class StudentEditorView extends ArtifactEditorView {
    
    public $student_data;
    

    /**
     *
     */
    function __construct() {
        $this->set_up();
        $this->student_data = $this->get_student();
        //LogUtils::shadow_log($this->student_data);
    }

    /**
     * Render this view
     */
    public function get_student() {
        $student_data = array();
        if(!isset($_REQUEST['id'])) return EntityAPIUtils::init_error($student_data, 'Invalid student identifier specified');

        $student_data = StudentAPI::get_by_id(sanitize_text_field($_REQUEST['id']));
        if(!isset($student_data['id'])) return EntityAPIUtils::init_error($student_data, 'student not found');
        // Load the profile image
        $student_data['image_url'] =  WPEssayWriter::plugin_url() . '/images/user.png';
        $student_image = EntityAPI::get_by_field('partyimage', 'file_party', $student_data['id']);
        if(isset($student_image['id'])) $student_data['image_url'] = $student_image['file_url'];
        return $student_data;
    }
}

?>