<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class InventoryViewFilter extends CategorizedViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_inventory_form_fields', array('InventoryViewFilter', 'filter_form_fields'), 10, 2);
        add_filter('shadowbanker_inventory_action_links', array('InventoryViewFilter', 'filter_view_action_links'), 10, 2);
    }

}

?>