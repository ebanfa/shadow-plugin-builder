<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class CargoTrackingAPI {

    /**
     *
     */
    public static function load_cargo_details($tracking_code) {
        return  EntityAPI::get_by_code('shipment', $tracking_code); 
    }
}
