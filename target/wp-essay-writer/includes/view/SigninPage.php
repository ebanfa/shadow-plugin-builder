<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class SigninPage extends AbstractPage { 
    public $name = 'Signin';
    public $description = 'Signin';
    public $template = 'page/signin-page.php';

    /**
     * 
     */
    public function get_artifact(){
    	return 'signin';
    }

    /**
     * 
     */
    public function get_artifact_url(){
        return ArtifactRequestProcessorUtils::get_artifact_url('signin');
    }
}
?>