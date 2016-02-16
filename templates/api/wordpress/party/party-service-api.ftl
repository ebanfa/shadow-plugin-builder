<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class PartyAPI extends EntityAPI {

    public static function create_entity($entity_data) {
        return self::do_create_entity($entity_data);
    }

    /**
     *
     */
    public static function find_entity($entity_data) {
        return self::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function delete_entity($entity_data) {
        return self::do_delete_entity($entity_data);
    }


}
