<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class EntityFormFieldsPanel extends UIComponent { 

    public $template = 'entity/entity-form-fields-panel.php';

    /**
     * Initialize the model for this component
     */
    public function init_model(){
        return new EntityFormFieldsPanelModel($this);
    }
}
?>