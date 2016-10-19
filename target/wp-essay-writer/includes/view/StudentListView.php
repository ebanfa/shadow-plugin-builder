<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class StudentListView extends ArtifactListView {
    

    /**
     *
     */
    function __construct() {
        $this->set_up();
    }
   
    /**
     * Get the list of students
     */
    public function get_students() { 
        $students = StudentAPI::find_all(); 

        foreach ($students as $key => $student) { 
            $student['image_url'] =  WPEssayWriter::plugin_url() . '/images/user.png';
            $student_image = EntityAPI::get_by_field('partyimage', 'file_party', $student['id']);
            if(isset($student_image['id'])) $student['image_url'] = $student_image['file_url'];
            $students[$key] = $student;
        }
        return $students;
    }
}

?>