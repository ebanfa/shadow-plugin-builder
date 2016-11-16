<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PortalMenuMain extends UIComponent { 

    public $template = 'portal-menu-main.php';

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new PortalMenuMainModel($this);
    }
}
?>