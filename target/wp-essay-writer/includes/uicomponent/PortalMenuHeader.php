<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PortalMenuHeader extends UIComponent { 

    public $template = 'portal-menu-header.php';

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new PortalMenuHeaderModel($this);
    }
}
?>