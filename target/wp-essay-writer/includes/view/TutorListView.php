<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TutorListView extends ArtifactListView {
    

    /**
     *
     */
    function __construct() {
        $this->set_up();
    }
   
    /**
     * Get the list of tutors
     */
    public function get_tutors() { 
        $tutors = TutorAPI::find_all(); 

        foreach ($tutors as $key => $tutor) { 
            $tutor['image_url'] =  WPEssayWriter::plugin_url() . '/images/user.png';
            $tutor_image = EntityAPI::get_by_field('partyimage', 'file_party', $tutor['id']);
            if(isset($tutor_image['id'])) $tutor['image_url'] = $tutor_image['file_url'];
            $tutors[$key] = $tutor;
        }
        return $tutors;
    }
}

?>