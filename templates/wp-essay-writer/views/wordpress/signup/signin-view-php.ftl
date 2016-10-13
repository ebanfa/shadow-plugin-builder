<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SigninView extends ArtifactView {

    /**
     *
     */
    function __construct() {
        $this->set_up();
    }

    /**
     * Render this view
     */
    public function render() {
        UIDisplayAPI::display_page($_REQUEST['page_info']);
    }

}

?>