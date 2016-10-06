<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class DepositTrackingAPI {

    /**
     *
     */
    public static function load_deposit_details($tracking_code) {
        return  EntityAPI::get_by_code('deposit', $tracking_code); 
    }
}
