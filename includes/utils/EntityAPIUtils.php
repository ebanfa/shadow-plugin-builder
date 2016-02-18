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
        //Process entity create form fields
    	foreach ($entity_data['entity_fields'] as $field_data) {
    		if(!$field_data['is_relationship_field']) {
    			$entity_data[$field_data['name']] = get_post_meta($entity->ID, $field_data['name'], true);
    		}
    		if($field_data['is_relationship_field']) {
    			$related_entity_id = get_post_meta($entity->ID, $field_data['name'], true);
		        $entity_data[$field_data['name']] = $related_entity_id;
		        // Get the related post
		        $related_entity = get_post($related_entity_id);
		        if($related_entity) {
			        $entity_data[$field_data['name'] . '_txt'] = get_post_meta($related_entity->ID, 'name', true);
			        $entity_data[$field_data['name'] . '_code'] = get_post_meta($related_entity->ID, 'entity_code', true);
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
        $entity_data['is_global_entity'] = $entity_class->getStaticPropertyValue('is_global_entity');
        return $entity_data;
    }
}

?>