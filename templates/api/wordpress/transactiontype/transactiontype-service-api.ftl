<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class TransactionTypeAPI  {

    /**
     *
     */
    public static function do_create_entity($entity_data){

        // 1. Create the account structure type
        $entity_data = EntityAPI::do_create_entity($entity_data);
        // 2. Create the segments
        $segments_list = self::do_create_acct_mapping($entity_data);
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
    public static function do_create_acct_mapping($entity_data){
        $txntypeaccounts_list = array();
        // 1. Check for the segments request param
        if(isset($_POST['txntypeaccount'])) {
            // 2. Loop through the array of segments objects (JSON encoded)
            $txntypeaccounts = $_POST['txntypeaccount'];
            $txntypeaccounts_count = 1;
            // Sort the segments according to segment sequence
            foreach ($txntypeaccounts as $txntypeaccount) {
                $txntypeaccount = json_decode(stripslashes($txntypeaccount), true);
                $txntypeaccount_data = EntityAPIUtils::init_entity_data('txntypeaccount');

                $txntypeaccount_data['edit_mode'] = true;
                $txntypeaccount_data['name'] = $txntypeaccount['name'];
                $txntypeaccount_data['tta_txn_type'] = $entity_data['id'];
                $txntypeaccount_data['db_cr_fg'] = $txntypeaccount['db_cr_fg'];
                $txntypeaccount_data['tta_account'] = $txntypeaccount['tta_account'];
                $txntypeaccount_data['description'] = $txntypeaccount['description'];
                $txntypeaccount_data = EntityAPI::do_create_entity($feventtxntype_data);

                $txntypeaccounts_count++;
                // add to the list
                array_push($txntypeaccounts_list, $txntypeaccount_data);
            }
        }
        return $txntypeaccounts_list;
    }

}
