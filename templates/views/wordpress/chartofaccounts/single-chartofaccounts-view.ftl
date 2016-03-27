<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class SingleChartOfAccountsView extends SingleEntityView { 

	/**
     *
     */
    function __construct() {
        parent::__construct();
    }

    /**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
        
        
    }

    /**
     *
     */
    function get_tabs() {
        $tabs = array();
        /*foreach ($this->model['related_child_entities'] as $related_child_entity) { 
            $tab = array(
                'tab_type' => 'entity-list',
                'name' => $related_child_entity['name'],
                'description' => $related_child_entity['entity_description'],
                'model' => EntityAPI::get_model(strtolower($related_child_entity['entity_name'])),
                'artifact_name' => strtolower($related_child_entity['entity_name']),
                'type_instances' =>  array(),
            );
            array_push($tabs, $tab);
         }*/
         return $tabs;
    }

    /**
     *
     */
    function is_pending() {
        $model = $this->get_model();
        $published_status_data = EntityAPI::get_by_code('coastatus', 'PUBLISHED');
        if(isset($published_status_data['id'])) {
            if($model['status'] == $published_status_data['id'])
                return false;
        }
        return true;
    }
}

?>