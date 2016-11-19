<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ArtifactRequestProcessorUtils {

    /**
     * 
     */
    public static function get_create_artifact_url($artifact){
        return self::get_artifact_url($artifact) . trailingslashit('create');
    }

    /**
     * 
     */
    public static function get_edit_artifact_url($artifact){
        return self::get_artifact_url($artifact) . trailingslashit('edit');
    }

    /**
     * 
     */
    public static function get_view_artifact_url($artifact){
        return self::get_artifact_url($artifact) . trailingslashit('view');
    }

    /**
     * 
     */
    public static function get_list_artifact_url($artifact){
        return self::get_artifact_url($artifact) . trailingslashit('list');
    }


    /**
     * Get the fields associated with the current artifact
     */
    public static function get_artifact_url($artifact) {
        $artifact_url = self::get_base_portal_url();
        return $artifact_url . trailingslashit($artifact);
    }

    /**
     *
     */
    public static function get_base_portal_url() {
        return trailingslashit(get_site_url() . '/portal');
    }
}
// End Class
?>