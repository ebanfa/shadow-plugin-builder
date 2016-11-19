<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PortalErrorPage extends AbstractPage { 

    public $message;
    public $template = 'page/portal-error-page.php';

    /**
     *
     */
    function __construct($message = '') {
        $this->message = $message;
    }

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new PortalPageModel($this);
    }

    /**
     * 
     */
    public function get_message(){
        return $this->message;
    }
}
?>