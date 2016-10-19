<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TutorEditorView extends ArtifactEditorView {
    
    public $tutor_data;
    

    /**
     *
     */
    function __construct() {
        $this->set_up();
        $this->tutor_data = $this->get_tutor();
        LogUtils::shadow_log($this->tutor_data);
    }

    /**
     * Render this view
     */
    public function get_tutor() {
        $tutor_data = array();
        if(!isset($_REQUEST['id'])) return EntityAPIUtils::init_error($tutor_data, 'Invalid tutor identifier specified');

        $tutor_data = TutorAPI::get_by_id(sanitize_text_field($_REQUEST['id']));
        if(!isset($tutor_data['id'])) return EntityAPIUtils::init_error($tutor_data, 'Tutor not found');
        // Load the profile image
        $tutor_data['image_url'] =  ${application.name}::plugin_url() . '/images/user.png';
        $tutor_image = EntityAPI::get_by_field('partyimage', 'file_party', $tutor_data['id']);
        if(isset($tutor_image['id'])) $tutor_data['image_url'] = $tutor_image['file_url'];
        return $tutor_data;
    }
}

?>