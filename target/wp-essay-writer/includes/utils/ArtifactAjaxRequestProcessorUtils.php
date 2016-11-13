<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
class ArtficatAjaxRequestProcessorUtils {

    

    /**
     *
     */
    public static function get_base_url() {
        return ArtifactRequestProcessor::get_base_portal_url();
    }
    
    /**
     *
     */
    public static function do_before_ajax_edit() {
        // Ensure we have a valid form
        if(!EntityRequestUtils::is_valid_form() || !isset($_POST['edit_mode'])) {
            wp_send_json_error(array('message' => "Invalid artifact operation!"));
        }
        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        if($entity_data['artifact_type'] != 'entity') return $entity_data;
        $entity_data = EntityRequestUtils::build_entity_data_from_post($entity_data);
        $entity_data = EntityAPIUtils::validate_entity_data($entity_data);
        return $entity_data;
    }
    
    /**
     *
     */
    public static function do_after_ajax_edit($entity_data) {
        // Process the results of the order creation
        if(!$entity_data['has_errors']) {

            if(isset($entity_data['redirect_url'])) {
                $redirect_url = $entity_data['redirect_url'];
            } else {
                if(isset($entity_data['entity_artifact_name']) && isset($entity_data['id'])) {
                    $redirect_url =  ArtifactRequestProcessorUtils::get_view_artifact_url($entity_data['entity_artifact_name']) . $entity_data['id'];
                }
            }
            if(isset($entity_data['extra_url_params'])) {
                foreach ($entity_data['extra_url_params'] as $key => $value) {
                    $redirect_url = $redirect_url . '&' . $key . '=' . $value;
                }
               
            }
            // Process the parent id, if any
            if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact']) && isset($_REQUEST['parent_field'])) 
            {
                $redirect_url = $redirect_url . '&parent_id=' . sanitize_text_field($_REQUEST['parent_id']);
                $redirect_url = $redirect_url . '&parent_artifact=' . sanitize_text_field($_REQUEST['parent_artifact']);
                $redirect_url = $redirect_url . '&parent_field=' . sanitize_text_field($_REQUEST['parent_field']);
                if(isset($_REQUEST['parent_param'])) $redirect_url = $redirect_url . '&parent_param=' .  $_REQUEST['parent_param'];
            }
            if(!isset($redirect_url)) $redirect_url = '';
            wp_send_json_success(array('message' => $redirect_url));
        } else {
            wp_send_json_error(array('message' => $entity_data['message']));
        }
    }


    /**
     *
     */
    public static function do_before_ajax_find() {
        $artifact_name = EntityRequestUtils::get_artifact_name();
        if(!$artifact_name) $artifact_name = EntityRequestUtils::get_query_form_field('artifact');
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        // This is to check if we are using the criteria name parameter to
        // restrict the search
        if(isset($_REQUEST['criteria_name'])) {
            $criteria_data = array(
                'criteria_name' => EntityRequestUtils::get_request_param('criteria_name'),
                'criteria_value' => EntityRequestUtils::get_request_param('criteria_value'),
            );
            $entity_data['criteria_data'] = $criteria_data;
        }
        return $entity_data;
    }

    /**
     *
     */
    public static function do_after_ajax_find($entity_data, $search_results) {
        $json_data = array(
            "draw"            => intval(sanitize_text_field($_REQUEST['draw'])),   
            "recordsTotal"    => intval(count($search_results)),  
            "recordsFiltered" => intval(count($search_results)),
            "data"            => $search_results  // total data array
        ); 
        wp_send_json($json_data);
    }

    /**
     *
     */
    public static function do_before_ajax_delete() {
        // Ensure we have a valid form
        if (!isset($_POST['submitted']) && 
            !isset($_POST['post_nonce_field']) && 
            !wp_verify_nonce($_POST['post_nonce_field'], 'post_nonce')) {
            // Nounce field did not validate
            wp_send_json_error(array('message' => "Invalid form operation!"));
        }
        // Ensure we have a valid ID
        if (!isset($_POST['id']) ) wp_send_json_error(array('message' => "Entity identifier missing"));

        $artifact_name = EntityRequestUtils::get_artifact_name();
        $entity_data = EntityAPIUtils::init_entity_data($artifact_name);
        return $entity_data;
    }

    /**
     *
     */
    public static function do_after_ajax_delete($entity_data) {
        if (!$entity_data['has_errors']) {
            $redirect_url = self::get_base_url() . 'artifact='. $entity_data['entity_artifact_name'] .'&page_action=list';
            wp_send_json_success(array('message' => "<script type='text/javascript'>window.location='" . $redirect_url . "'</script>"));
        } else {
            wp_send_json_error(array('message' => 'Error deleting entity'));
        }
    }

    /*
     * Custom redirect url processing for content orders
     **/
    public static function process_login_redirect($order_data) 
    {
        
        $order_data['requires_redirect'] = true;
        $login_page_url = get_site_url() . '/signin?redirect_to=';
        $invoice_page_url = get_site_url() . '/order-review?order=' . $order_data['entity_code'];

        if (is_user_logged_in()) 
        { 
            $order_data['redirect_url'] = $invoice_page_url;  
        }
        else {
            $order_data['redirect_url'] = $login_page_url . $invoice_page_url;
        }
        return $order_data;
    }

}