<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class NotificationAPI extends EntityAPI {

     
    /**
     *
     */
    public static function do_notification($notification_data){

        $entity_data = array();
        $entity_data['edit_mode'] = true;
        $entity_data['code'] = $notification_data['code'];
        $entity_data['owner'] = $notification_data['owner'];
         
        $level = self::get_by_code('notificationlevel', $notification_data['log_level']); 
        if(isset($level['id'])){ $entity_data['log_level'] = $level['id'];}
        
        $type = self::get_by_code('notificationtype', $notification_data['type']); 
        if(isset($type['id'])){ 
            $entity_data['type'] = $type['id'];
            $entity_data['name'] = self::fill_template($entity_data, $type['title_template']);
            $entity_data['description'] = self::fill_template($entity_data, $type['message_template']);
        } 
       
        $status = self::get_by_code('notificationstatus', 'PENDING');
        if(isset($status['id'])){ $entity_data['status'] = $status['id']; }
        $entity_data['date'] = date("Y-m-d H:i:s");

        self::create_entity($entity_data);

    }


    /**
     *
     */
    public static function fill_template($entity_data, $template){
        foreach ($entity_data as $key => $value) {
            if($key == 'owner') {
                $user_party = self::get_by_id('party', $value);
                if(isset($user_party['id'])) { 
            $value = $user_party['user_name'];
                }
            }
            $template = str_replace('[+'.$key.'+]', $value, $template);
        }
        return $template;
    }

    /**
     *
     */
    public static function get_notification_items($party_id){
        // Load the entity
        $entities = array();
        $status = self::get_by_code('notificationstatus', 'PENDING');
        $entityQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_notification',
            'meta_query' => array(array('key' => 'owner', 'value' => $party_id), array('key' => 'status', 'value' => $status['id'])));
        $entityQuery = new WP_Query($entityQueryArgs);
        while ($entityQuery->have_posts()) : $entityQuery->the_post();
            $entity = $entityQuery->post;
            $entity_data = EntityAPIUtils::init_entity_data('notification');
            array_push($entities, EntityAPIUtils::entity_to_data($entity_data, $entity, false));
        endwhile;
        return $entities;
    }


}
