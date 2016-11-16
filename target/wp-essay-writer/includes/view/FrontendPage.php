<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class FrontendPage extends AbstractPage { 

    public static $page_type = 'portal';

    /**
     *
     */
    function __construct() {
        parent::__construct();
        $this->set_up();
    }

    /**
     * Set up view
     */
    public function set_up() {
        parent::set_up();
    }
    
    /**
     */
    public function render(){
        do_action('shadowbanker_do_frontend_header');
        do_action('shadowbanker_do_frontend_content'); 
        do_action('shadowbanker_do_frontend_footer');
    }
}
?>