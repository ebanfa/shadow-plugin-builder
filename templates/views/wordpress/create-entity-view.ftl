<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CreateEntityView extends ArtifactView {

    /**
     *
     */
    function __construct() {
        parent::__construct();
    }

    /**
     * 
     */
    public function get_form_fields() {
        $form_fields = parent::get_form_fields();
        $create_fields = $this->get_create_form_fields();
        var_dump($create_fields);
        var_dump('>>>>>>>>>>>>>>>>>>>');
        var_dump($form_fields);
        $form_fields = array_unique(array_merge($form_fields, $create_fields));
        return $form_fields; 
    }

    /**
     * 
     */
    public function get_create_form_fields() {
        $create_fields = array();
        foreach ($this->model['entity_fields'] as $field) {

            if ($field['is_create_field'] && $field['is_form_field']) {
                array_push($create_fields, $this->prepare_view_form_field($field));
            }
        }
        return $create_fields; 
    }
}

?>