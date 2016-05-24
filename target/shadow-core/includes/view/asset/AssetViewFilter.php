<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class AssetViewFilter extends CategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_asset_form_fields', array('AssetViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_asset_action_links', array('AssetViewFilter', 'filter_view_action_links'), 10, 2);
    }

}

?>