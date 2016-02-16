<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class EntityPersistenceAPI {
   
    /**
     *
     */
    public static function create_entity($entity_data){
        // Post information
        $post_information = array('post_title' => $entity_data['name'], 
            'post_content' => esc_attr($entity_data['name']), 
            'post_type' => $entity_data['entity_post_name'], 
            'post_status' => 'publish');
        // Insert the entity into the database
        $entity_data['id'] = wp_insert_post($post_information, true);
        return $entity_data;
    }

    /**
     *
     */
    public static function update_entity($entity_data){
        $post_information = array('ID' => $entity_data['id'], 
            'post_title' => $entity_data['name'],
            'post_content' => esc_attr($entity_data['name']), 
            'post_type' => $entity_data['entity_post_name'], 
            'post_status' => 'publish');
        // Update the entity
        $entity_data['id'] = wp_update_post($post_information, true);
        return $entity_data;
    }

    /**
     *
     */
    public static function find_entity($entity_data, $criteria_data) {
        $search_results = array();
        return $search_results;
    }

    /**
     *
     */
    public static function get_entity_by_id($entity_data, $id){
        return EntityAPIUtils::entity_to_data($entity_data, get_post($id), false);
    }

    /**
     *
     */
    public static function get_entity_by_code($entity_data, $entity_code){
        return self::get_entity_by_meta($entity_data, 'entity_code', $entity_code);
    }

    /**
     *
     */
    public static function get_entity_by_meta($entity_data, $meta_key, $meta_value){
        // Load the entity
        $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => $entity_data['entity_post_name'],
            'meta_query' => array(array('key' => $meta_key, 'value' => $meta_value)));
        $entityQuery = new WP_Query($entityQueryArgs);
        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            $entity_data = EntityAPIUtils::entity_to_data($entity_data, $entity, false);
        endwhile;
        return $entity_data;
    }

    /**
     *
     */
    public static function get_status_by_code($status_type, $status_code){
        // Load the status
        $status_data = array();
        $statusQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => $status_type,
            'meta_query' => array(array('key' => 'entity_code', 'value' => $status_code)));
        $statusQuery = new WP_Query($statusQueryArgs);
        while ($statusQuery->have_posts()) : $statusQuery->the_post();
            $status = $statusQuery->post;
            $status_data['id'] = $status->ID;
            $status_data['entity_code'] = get_post_meta($status->ID, 'entity_code', true);
            $status_data['name'] = get_post_meta($status->ID, 'name', true);
        endwhile;
        return $status_data;
    }

    /**
     * Get all parts with id's in the list provided
     */
    public static function find_by_ids($entity_data, $party_ids) {
        $search_results = array();
        if($party_ids){
            $query_args = array('post_type' => $entity_data['entity_post_name'], 'post__in' => $party_ids);
            $entity_query = new WP_Query($query_args);
            
            while ($entity_query->have_posts()) : $entity_query->the_post();
                $entity = $entity_query->post;
                array_push($search_results, EntityControllerUtils::entity_to_data($entity_data, $entity, false));
            endwhile;
            wp_reset_postdata();
        }
        
        return $search_results;
    }

    /**
     * 
     */
    public static function find_by_criteria($entity_data, $criteria_data) {
        $search_results = array();
        $query_args = self::build_query_from_criteria($entity_data, $criteria_data);
        $entity_query = new WP_Query($query_args);
        
        while ($entity_query->have_posts()) : $entity_query->the_post();
            $entity = $entity_query->post;
            array_push($search_results, EntityControllerUtils::entity_to_data($entity_data, $entity, false));
        endwhile;
        wp_reset_postdata();
        
        return $search_results;
    }

    /**
     *
     */
    public static function build_query_from_criteria($entity_data, $criteria_data) {
        $meta_array = array();
        foreach($criteria_data as $field_name => $field_value){
          if(array_key_exists($field_name, $entity_data['entity_fields'])){
              $field_array = array();
              $field_array['key'] = $field_name;
              $field_array['value'] = $field_value;
              array_push($meta_array, $field_array);
          }
        }
        $queryArgs = array('numberposts' => -1, 'posts_per_page' => -1,
            'post_status' => 'any', 'post_type' => $entity_data['entity_post_name'], 'meta_query' => $meta_array);

        if ($entity_data['is_global_entity'] === 'N' && !current_user_can('administrator')) {
            // Filter the results for non admin users
            $business_unit = BusinessUnitAPI::get_current_user_business_unit();
            if(isset($business_unit['id'])) {
                $user_query_param = array('key' => 'business_unit', 'value' => $business_unit['id']);
                array_push($queryArgs['meta_query'], $user_query_param); 
            }
        }
        return $queryArgs;
    }

    

}
