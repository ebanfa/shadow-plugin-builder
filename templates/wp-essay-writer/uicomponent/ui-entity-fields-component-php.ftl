<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ${uiComponent.className} extends UIComponent { 

    public $template = '${uiComponent.name}.php';

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new ${uiComponent.className}Model($this);
    }
}
?>