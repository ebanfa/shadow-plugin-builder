<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${page.name}Page extends AbstractPage { 
    public $name = '${page.name}';
    public $description = '${page.description}';
    public $template = 'page/${page.name?lower_case}-page.php';

    /**
     * 
     */
    public function get_artifact(){
    	return '${page.name?lower_case}';
    }

    /**
     * 
     */
    public function get_artifact_url(){
        return ArtifactRequestProcessorUtils::get_artifact_url('${page.name?lower_case}');
    }
}
?>