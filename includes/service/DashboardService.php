
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

    	$property_count = DashboardService::get_property_count();
    	$tenants_count =  DashboardService::get_tenants_count($party_data['id']);
    	/*$lease_agreements_value = DashboardService::get_lease_agreements_value($party_data['id']);
    	$current_monthly_rent_income = DashboardService::get_current_monthly_rent_income($party_data['id']);
    	$party_dashboard_stats = array();*/

    	$party_dashboard_stats['property_count'] =  $property_count;
    	$party_dashboard_stats['tenants_count'] =  $tenants_count;
    	//$party_dashboard_stats['lease_agreements_value'] = $lease_agreements_value;
    	//$party_dashboard_stats['current_monthly_rent_income'] = 0;//$current_monthly_rent_income;
    	return $party_dashboard_stats;
    }

    public static function get_property_count(){
        $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_property');
        $itemQuery = new WP_Query($itemQueryArgs);
	return $itemQuery->found_posts;
    }


    public static function get_tenants_count(){
        $tenant_role = RoleTypeAPI::get_by_code('TENANT');
        $tenants_count = 0;
        if(isset($tenant_role['id'])) {
            $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_partyrole',
    	    'meta_query' => array(array('key' => 'type', 'value' => $tenant_role['id'] )));
            $itemQuery = new WP_Query($itemQueryArgs);
            $tenants_count =  $itemQuery->found_posts;
        }
        return $tenants_count;
    }

    public static function get_lease_agreements_value(){
	    $total_agreements_value = 0;
        $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_agreement');
        $itemQuery = new WP_Query($itemQueryArgs);
        while ($itemQuery->have_posts()) : $itemQuery->the_post();
            $entity = $itemQuery->post; 
            $total_agreements_value = $total_agreements_value + get_post_meta($entity->ID, 'amount', true);
        endwhile;
	   return $total_agreements_value;
    }


    public static function get_current_monthly_rent_income(){
        $total_rent_value = 0;
        $status = RentStatusAPI::get_by_code('DUE');
        if(isset($status['id'])) { 
            $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_rent',
            'meta_query' => array(array('key' => 'status', 'value' => $status['id'])));
            $itemQuery = new WP_Query($itemQueryArgs);
            while ($itemQuery->have_posts()) : $itemQuery->the_post();
                $entity = $itemQuery->post; 
                $total_rent_value = $total_rent_value + get_post_meta($entity->ID, 'amount', true);
            endwhile;
        }
        return $total_rent_value;
    }
}
?>
