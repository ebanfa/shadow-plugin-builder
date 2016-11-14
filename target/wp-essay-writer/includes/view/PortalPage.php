<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PortalPage extends AbstractPage { 

	protected $artifact;
    protected $page_action;
    public static $page_type = 'portal';
    public $template = 'page/portal-page.php';

    /**
     *
     */
    function __construct($artifact, $page_action) {
        if(!is_user_logged_in()) wp_redirect(get_site_url());
        $this->context = array();
    	$this->artifact = $artifact;
        $this->page_action = $page_action;
        $this->page_name = ArtifactUtils::$artifacts[$artifact]['description'];
        $this->page_description = PageUtils::get_page_description($page_action, $this->page_name);
        $this->ui_model = $this->init_model();
    }

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new PortalPageModel($this);
    }

    /**
     * Get the artifact
     */
    public function get_artifact(){
    	return $this->artifact;
    }

    /**
     * Get the page action
     */
    public function get_page_action(){
        return $this->page_action;
    }
    
    /**
     * Get the fields associated with the current artifact
     */
    public function get_artifact_fields() {
        return $this->ui_model->get_artifact_fields();
    }

    /**
     * Get the action links for this page
     */
    public function get_edit_artifact_url(){
        return ArtifactRequestProcessorUtils::get_edit_artifact_url($this->artifact);
    }

    /**
     * Get the action links for this page
     */
    public function get_view_artifact_url(){
        return ArtifactRequestProcessorUtils::get_view_artifact_url($this->artifact);
    }

    /**
     * Get the action links for this page
     */
    public function get_action_links(){
        return PageUtils::get_action_links($this->page_action, $this->artifact);
    }
}
?>