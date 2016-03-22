<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EntityAPIUtils {


    /**
     *
     */
    public static function entity_to_data($entity_data, $entity, $load_deps) {
        $entity_data['id'] = $entity->ID;
        //Process entity fields
    	foreach ($entity_data['entity_fields'] as $field_data) {
    		if(!$field_data['is_relationship_field']) {
    			$entity_data[$field_data['name']] = get_post_meta($entity->ID, $field_data['name'], true);
    		}
            
    		if($field_data['is_relationship_field']) {
    			$related_entity_id = get_post_meta($entity->ID, $field_data['name'], true);
                // Get the related post
                $related_entity = get_post($related_entity_id);
		        if($related_entity) {
                    $entity_data[$field_data['name']] = $related_entity_id;
			        $entity_data[$field_data['name'] . '_txt'] = get_post_meta($related_entity->ID, 'name', true);
			        $entity_data[$field_data['name'] . '_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
		        }
    		}
    	}
        // Check if we are dealing with a virtual entity
        if ($entity_data['is_virtual_entity']) {
            // Get the parent id 
            $parent_id = $entity_data['parent_id'];
            $parent_entity_data = EntityAPIUtils::init_entity_data($entity_data['parent_artifact_name']);
            // Find the parent instance
            $parent_entity_data = EntityPersistenceAPI::get_entity_by_id($parent_entity_data, $parent_id);
            // Copy the values of each parent field to the virtual entity instance
            foreach ($parent_entity_data['entity_fields'] as $field_data) {
                if(!$field_data['is_relationship_field'] && isset($parent_entity_data[$field_data['name']])) {
                    // Make sure we do not over write fields that are already defined in the virtual entity
                    if($field_data['name'] != 'id' || $field_data['name'] != 'entity_code') {
                        $entity_data[$field_data['name']] = $parent_entity_data[$field_data['name']];
                    }
                }
                if($field_data['is_relationship_field']) {
                    $entity_data[$field_data['name']] = $parent_entity_data[$field_data['name']];
                    $entity_data[$field_data['name'] . '_txt'] = $parent_entity_data[$field_data['name'] . '_txt'];
                    $entity_data[$field_data['name'] . '_code'] = $parent_entity_data[$field_data['name'] . '_code'];
                }
            }
        }
        return $entity_data;
    }

	/**
     *
     */
    public static function validate_entity_data($entity_data) {
       $entity_data['error_fields'] = array();
       $entity_data['has_errors'] = false;
       if($entity_data['edit_mode']) {
            //Process entity create form fields
            foreach ($entity_data['entity_fields'] as $field_data) {
                if($field_data['is_required'] && $field_data['is_create_field']) {    
                    // Process status field
                    if($field_data['name'] === 'status'){
                        if(!isset($entity_data['status'])) {
                            $status = EntityPersistenceAPI::get_status_by_code($field_data['data_type'], 'PENDING');
                            $entity_data['status'] = $status['id'];
                        }
                    }
                    self::validate_entity_field($field_data, $entity_data);
                }
            }
        }
        else { 
            //Process entity edit form fields
            foreach ($entity_data['entity_fields'] as $field_data) {
                if($field_data['is_required'] && $field_data['is_edit_field']) {
                    self::validate_entity_field($field_data, $entity_data);
                }
            }
        }
        if(isset($entity_data['has_errors'])){
            $entity_data['error_message'] = 'The following fields are required: '.implode(', ', $entity_data['error_fields']);
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function validate_entity_field($field_data, $entity_data) {
        // If the field is not present we flag an error
        if(empty($entity_data[$field_data['name']])){
            $entity_data['has_errors'] = true; 
            array_push($entity_data['error_fields'], $field_data['name']);
        }
    }

    /**
     *
     */
    public static function init_entity_data($artifact_name) {
        $entity_data = array();
        $entity_data['has_errors'] = false;
        //$artifact_name = EntityRequestUtils::get_artifact_name();
        // Get the requested artifact name
        if(EntityStringUtils::is_invalid_string($artifact_name)) {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = 'Artifact name must be specified';
            return $entity_data;

        }
        // Check if artifact to entity name mapping exists
        if (!isset(ArtifactUtils::$artifacts[$artifact_name])) {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = 'Artifact not found';
            return $entity_data;
        }
        // Check the type of the artifact
        $artifact_type = ArtifactUtils::$artifacts[$artifact_name]['artifact_type'];
        if ($artifact_type != 'entity') {
            $entity_data['has_errors'] = true;
            $entity_data['error_message'] = 'Artifact is not an entity';
            return $entity_data;
        }
        // Use reflection to get the post name and entity fields from
        // the model class
        $entity_name = ArtifactUtils::$artifacts[$artifact_name]['name'] . 'CPT';
        $entity_class = new ReflectionClass($entity_name);
        $post_name = $entity_class->getStaticPropertyValue('post_name');
        // Check the ajax request
        $entity_data['entity_post_name'] = $post_name;
        $entity_data['entity_artifact_name'] = $artifact_name;
        $entity_data['entity_name'] = ArtifactUtils::$artifacts[$artifact_name]['name'];
        $entity_data['entity_description'] = ArtifactUtils::$artifacts[$artifact_name]['description'];
        $entity_data['entity_fields'] = $entity_class->getStaticPropertyValue('entity_fields');
        $entity_data['related_child_entities'] = $entity_class->getStaticPropertyValue('related_child_entities');
        $entity_data['is_global_entity'] = $entity_class->getStaticPropertyValue('is_global_entity');
        $entity_data['is_virtual_entity'] = $entity_class->getStaticPropertyValue('is_virtual_entity');

        if($entity_data['is_virtual_entity']) {
            $parent_artifact_name = $entity_class->getStaticPropertyValue('parent_name');
            $parent_entity_name = ArtifactUtils::$artifacts[$parent_artifact_name]['name'] . 'CPT';
            $parent_entity_class = new ReflectionClass($parent_entity_name);
            $parent_fields = $parent_entity_class->getStaticPropertyValue('entity_fields');
            // For now we only use related child entities from the parent
            $entity_data['related_child_entities'] = $parent_entity_class->getStaticPropertyValue('related_child_entities');
            // Add the parent's fields and the parent's related child entities to the current virtual entity
            // Note that it is possible that a field will appear in the virtual as well as the parent entity.
            // In such a case the field in the virtual entity will override the field defined in the parent

            // First we add all fields into a new array while removing duplicates
            $all_fields = array();
            // First we add all fields from the parent that are not in the virtual entity
            foreach ($parent_fields as $key => $value) {
                if(!array_key_exists($key, $entity_data['entity_fields'])) {
                    $all_fields[$key] = $value;
                }
            }
            // Second we add all the virtual entity's field
            foreach ($entity_data['entity_fields'] as $key => $value) {
                $all_fields[$key] = $value;
            }
            $entity_data['entity_fields'] = $all_fields;
            $entity_data['parent_artifact_name'] = $parent_artifact_name;
        }
        return $entity_data;
    }
}

?>