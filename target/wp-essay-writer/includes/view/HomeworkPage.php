<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class HomeworkPage extends AbstractPage { 
    public $name = 'Homework';
    public $description = 'Order';
    public $template = 'page/homework-page.php';

    /**
     * 
     */
    public function get_artifact(){
    	return 'homework';
    }

    /**
     * 
     */
    public function get_artifact_url(){
        return ArtifactRequestProcessorUtils::get_artifact_url('homework');
    }
}
?>