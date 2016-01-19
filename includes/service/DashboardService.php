
<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class DashboardService {


    public static function get_party_dashboard_stats($party_id){
	$party_data = PartyAPI::get_by_id($party_id);

	$no_of_bids = DashboardService::get_no_of_bids($party_data['id']);
	$no_of_loans =  DashboardService::get_no_of_loans($party_data['id']);
	$account_balance = DashboardService::get_account_balance($party_data['id']);
	$no_of_applications = DashboardService::get_no_of_applications($party_data['id']);
	$party_dashboard_stats = array();

	$party_dashboard_stats['bid_count'] = $no_of_bids;
	$party_dashboard_stats['loan_count'] = $no_of_loans;
	$party_dashboard_stats['application_count'] = $no_of_applications;
	$party_dashboard_stats['account_balance'] = $account_balance;
	return $party_dashboard_stats;
    }

    public static function get_no_of_bids($party_id){
        $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_bid',
	    'meta_query' => array(array('key' => 'owner', 'value' => $party_id )));
        $itemQuery = new WP_Query($itemQueryArgs);
	return $itemQuery->found_posts;
    }


    public static function get_no_of_loans($party_id){
        $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_loan',
	    'meta_query' => array(array('key' => 'owner', 'value' => $party_id )));
        $itemQuery = new WP_Query($itemQueryArgs);
	return $itemQuery->found_posts;
    }

    public static function get_account_balance($party_id){
	$account_balance = 0;
        $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_partyaccount',
	    'meta_query' => array(array('key' => 'owner', 'value' => $party_id )));
        $itemQuery = new WP_Query($itemQueryArgs);
        while ($itemQuery->have_posts()) : $itemQuery->the_post();
            $entity = $itemQuery->post; 
            $account_balance = get_post_meta($entity->ID, 'balance', true);
        endwhile;
	return $account_balance;
    }


    public static function get_no_of_applications($party_id){

        $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_application',
	    'meta_query' => array(array('key' => 'owner', 'value' => $party_id )));
        $itemQuery = new WP_Query($itemQueryArgs);
	return $itemQuery->found_posts;
    }
}
?>
