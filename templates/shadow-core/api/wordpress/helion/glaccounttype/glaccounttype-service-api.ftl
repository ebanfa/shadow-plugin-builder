<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class GLAccountTypeAPI  {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        // 1. Create the segment type
        $entity_data = EntityAPI::do_create_entity($entity_data);
        // 2. Create the segment type values
        $glaccounts_list = self::do_create_glaccounts($entity_data);
       return $entity_data;
    }

    /**
     *
     */
    public static function do_find_entity($entity_data) {
        return EntityAPI::do_find_entity($entity_data);
    }

    /**
     *
     */
    public static function do_delete_entity($entity_data) {
        return EntityAPI::do_delete_entity($entity_data);
    }

    /**
     *
     */
    public static function do_create_glaccounts($entity_data){
        $glaccounts_list = array();
        // 1. Check for the segment type value request param
        if(isset($_POST['glaccount'])) {
            // 2. Loop through the array of segment type value objects (JSON encoded)
            $glaccounts = $_POST['glaccount'];
            $glaccounts_count = 1;
            foreach ($glaccounts as $glaccount) {
                $glaccount = json_decode(stripslashes($glaccount), true);
                $glaccount_data = EntityAPIUtils::init_entity_data('glaccount');

                $glaccount_data['edit_mode'] = true;
                $glaccount_data['entity_data'] = $glaccount['entity_code'];
                $glaccount_data['name'] = $glaccount['name'];
                $glaccount_data['account_no'] = $glaccount['account_no'];
                $glaccount_data['glacct_type'] = $entity_data['id'];
                $glaccount_data['description'] = $glaccount['description'];

                $glaccount_data = EntityAPI::do_create_entity($glaccount_data);
                
                $glaccounts_count++;
                // add to the list
                array_push($glaccounts_list, $glaccount_data);
            }
        }
        return $glaccounts_list;
    }

}
