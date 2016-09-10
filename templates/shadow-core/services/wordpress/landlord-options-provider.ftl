
<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class LandlordOptionsProvider {

    public static function get_options(){
        return PartyAPI::find_by_role('landlord');
        
    }

    public static function get_options_criteria(){
       return array('role' => 'landlord');
    }    
}
?>