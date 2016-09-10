<?php

/**
 * 
 */
if (!defined('ABSPATH')) {
    exit; //Exit if accessed directly
}

class ContentFileAPI {

    /**
     * 
     */
    public static function do_files_upload($entity_data, $file_upload_param) {
        $count = 0;
        $entity_data['files_uploaded'] = array();
        $current_user = wp_get_current_user();

        $validation_errors = ContentFileUploadValidatorAPI::validate_file_upload($file_upload_param);
        if(!empty($validation_errors)) {
            $entity_data['has_errors'] = true;
            foreach ($validation_errors['file_upload_error_msg'] as $key => $value) {
              $entity_data['message'] = $value;
            }
            return $entity_data;
        }

        if (!empty($_FILES)) {

            foreach ($_FILES[$file_upload_param]['name'] as $filename) {
                if ($_FILES[$file_upload_param]['tmp_name'][$count] != '') {
                    // Use the WordPress API to upload the file
                    $upload = wp_upload_bits($_FILES[$file_upload_param]['name'][$count], null, file_get_contents($_FILES[$file_upload_param]['tmp_name'][$count]));
                    if (isset($upload['error']) && $upload['error'] != 0) {
                        wp_die('There was an error uploading your file. The error is: ' . $upload['error']);
                    } else {

                        $file_size = $_FILES[$file_upload_param]["size"][$count];
                        $file_size = $file_size / 1024;
                        $file_size = number_format((float) $file_size, 2, '.', '');
                        $date_obj = new DateTime();
                        $file_obj = array(
                            'file_name' => $_FILES[$file_upload_param]['name'][$count],
                            'file_code' => $entity_data['entity_code'],
                            'file_url' => $upload['url'],
                            'file_size' => $file_size,
                            'file_owner' => $entity_data['id'],
                            'file_created_date' => $date_obj->format('M j, Y, H:i'),
                            'file_type' => 'FILE',
                            'file_mime_type' => '',
                            'file_description' => '',);
                        // Post information
                        $post_information = array('post_title' => $file_obj['file_name'],
                            'post_content' => $file_obj['file_description'], 'post_type' => 'content_file', 'post_status' => 'publish');
                        // Insert the order into the database
                        $post_id = wp_insert_post($post_information);

                        /*update_post_meta($post_id, 'cf_name', $file_obj['file_name']);
                        update_post_meta($post_id, 'cf_file_code', $file_obj['file_code']);
                        update_post_meta($post_id, 'cf_file_url', $file_obj['file_url']);
                        update_post_meta($post_id, 'cf_file_size', $file_obj['file_size']);
                        update_post_meta($post_id, 'cf_user_name', $file_obj['file_owner']);
                        update_post_meta($post_id, 'cf_created_date', $file_obj['file_created_date']);
                        update_post_meta($post_id, 'cf_file_type', $file_obj['file_type']);
                        update_post_meta($post_id, 'cf_mime_type', $file_obj['file_mime_type']);
                        update_post_meta($post_id, 'cf_file_description', $file_obj['file_description']);*/

                        if($entity_data['entity_artifact_name'] == 'productcategory') {
                            $image_entity_data = EntityAPIUtils::init_entity_data('productcategoryimage');
                            $image_entity_data['prod_cat_image'] = $entity_data['id'];
                            self::save_image($entity_data, $image_entity_data, $file_obj);
                        }
                        if($entity_data['entity_artifact_name'] == 'producttype') {
                            $image_entity_data = EntityAPIUtils::init_entity_data('producttypeimage');
                            $image_entity_data['prod_ty_image'] = $entity_data['id'];
                            self::save_image($entity_data, $image_entity_data, $file_obj);
                        }
                        if($entity_data['entity_artifact_name'] == 'product') {
                            $image_entity_data = EntityAPIUtils::init_entity_data('productimage');
                            $image_entity_data['product'] = $entity_data['id'];
                            self::save_image($entity_data, $image_entity_data, $file_obj);
                        }
                        array_push($entity_data['files_uploaded'], $file_obj);
                    } // end 
                }
                $count++;
            }
        }
        return $entity_data;
    }

    public static function save_image($entity_data, $image_entity_data, $file_obj) {
        $image_entity_data['edit_mode'] = true;
        $image_entity_data['name'] = $file_obj['file_name'];
        $image_entity_data['image_url'] = $file_obj['file_url'];
        $image_entity_data['image_size'] = $file_obj['file_size'];
        $image_entity_data['description'] = $file_obj['file_name'];
        EntityAPI::do_create_entity($image_entity_data);
    }

    /**
     * 
     */
    public static function get_content_files($file_code) {
        $content_files = array();
        // ContentFileCPT query
        $fileQueryArgs = array('numberposts' => -1, 'post_status' => 'any', 'post_type' => 'content_file',
            'meta_query' => array(array('key' => 'cf_file_code', 'value' => $file_code)));
        $fileQuery = new WP_Query($fileQueryArgs);
        // While we have results
        while ($fileQuery->have_posts()) : $fileQuery->the_post();
            $content_file = $fileQuery->post;
            $file_obj = array(
                'file_name' => get_post_meta($content_file->ID, 'cf_name', true),
                'file_code' => get_post_meta($content_file->ID, 'cf_file_code', true),
                'file_url' => get_post_meta($content_file->ID, 'cf_file_url', true),
                'file_size' => get_post_meta($content_file->ID, 'cf_file_size', true),
                'file_owner' => get_post_meta($content_file->ID, 'cf_user_name', true),
                'file_created_date' => get_post_meta($content_file->ID, 'cf_created_date', true),
                'file_type' => get_post_meta($content_file->ID, 'cf_file_type', true),
                'file_mime_type' => get_post_meta($content_file->ID, 'cf_mime_type', true),
                'file_description' => get_post_meta($content_file->ID, 'cf_file_description', true),);
            $order_doctype = get_post_meta($content_file->ID, 'doctype_name', true);
            array_push($content_files, $file_obj);
        endwhile;
        wp_reset_postdata();
        return $content_files;
    }

}
