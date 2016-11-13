<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class ${uiComponent.className}Model extends UIComponentModel { 

	protected $view;

    /**
     * Process the model
     */
    public function process_model(){
    	$this->view = $this->ui_component->get_view();
    	$this->do_entity_form_fields();
    }

	public function do_entity_form_fields() {
        $model = $this->view->get_model();
        foreach ($this->view->get_artifact_fields() as $field) {

            $this->do_entity_form_field($model, $field);
        }
    }

    public function do_entity_form_field($model, $field) {
        $field_filter = 'shadowbanker_filter_form_field';
        if (has_filter($field_filter)) {
            $field = apply_filters($field_filter, $this->view, $field);
        }

        if(!$field['is_relationship_field']) { 

            if($field['data_type'] == 'name') include(locate_plugin_template(array('uicomponent/ui-input-field-name.php')));
            if($field['data_type'] == 'email') include(locate_plugin_template(array('uicomponent/ui-input-field-email.php')));
            if($field['data_type'] == 'password') include(locate_plugin_template(array('uicomponent/ui-input-field-password.php')));
            if($field['data_type'] == 'text-lg') include(locate_plugin_template(array('uicomponent/ui-input-field-text-lg.php')));
            if($field['data_type'] == 'text') include(locate_plugin_template(array('uicomponent/ui-input-field-text.php')));
            if($field['data_type'] == 'alphanumeric') include(locate_plugin_template(array('uicomponent/ui-input-field-alphanumeric.php')));
            if($field['data_type'] == 'phone') include(locate_plugin_template(array('uicomponent/ui-input-field-phone.php')));
            if($field['data_type'] == 'number') include(locate_plugin_template(array('uicomponent/ui-input-field-number.php')));
            if($field['data_type'] == 'money') include(locate_plugin_template(array('uicomponent/ui-input-field-money.php')));
            if($field['data_type'] == 'flag') include(locate_plugin_template(array('uicomponent/ui-input-field-flag.php')));
            if($field['data_type'] == 'option') include(locate_plugin_template(array('uicomponent/ui-input-field-option.php')));
            if($field['data_type'] == 'date') include(locate_plugin_template(array('uicomponent/ui-input-field-date.php')));
            if($field['data_type'] == 'datetime') include(locate_plugin_template(array('uicomponent/ui-input-field-datetime.php')));
            if($field['data_type'] == 'hidden') include(locate_plugin_template(array('uicomponent/ui-input-field-hidden.php')));
        }
        else {
            if(isset($_REQUEST['parent_artifact'])  && strtolower($field['entity_name']) === sanitize_text_field($_REQUEST['parent_artifact'])) {
                $field['value'] = sanitize_text_field($_REQUEST['parent_id']);
                include(locate_plugin_template(array('uicomponent/ui-input-field-hidden.php')));
            }
            else include(locate_plugin_template(array('uicomponent/ui-input-field-relationship.php')));

        }
    }

    public function do_name_field($model, $field) {

    }
}
?>