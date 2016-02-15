
<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class DashboardService {


    public static function get_party_dashboard_stats($party_id){
        $party_dashboard_stats = array();
        $party_data = PartyAPI::get_by_id($party_id);

        $property_count = DashboardService::get_property_count();
        $tenants_count =  DashboardService::get_tenants_count();
        $lease_agreements_value = DashboardService::get_lease_agreements_value($party_data['id']);
        $current_monthly_rent_income = DashboardService::get_current_monthly_rent_income($party_data['id']);
        

        $party_dashboard_stats['property_count'] =  $property_count;
        $party_dashboard_stats['tenants_count'] =  $tenants_count;
        $party_dashboard_stats['lease_agreements_value'] = $lease_agreements_value;
        $party_dashboard_stats['current_monthly_rent_income'] = $current_monthly_rent_income;
        return $party_dashboard_stats;
    }

    public static function get_property_count(){
        $itemQueryArgs = array('numberposts' => -1, 'post_status' => 'publish', 'post_type' => 'sb_property');
        $itemQuery = new WP_Query($itemQueryArgs);
        return $itemQuery->found_posts;
    }


    public static function get_tenants_count(){
        $tenants_count = 0;
        $tenant_role = RoleTypeAPI::get_by_code('TENANT');

        if(isset($tenant_role['id'])) {
            $search_results = PartyRoleAPI::find_by_criteria(array('role' => $tenant_role['id']));
            $tenants_count =  count($search_results);
        }
        return $tenants_count;
    }

    public static function get_lease_agreements_value(){
        $total_agreements_value = 0;
        $agreements_list = AgreementAPI::find_by_criteria(array());

        foreach ($agreements_list as $agreement) {
            $total_agreements_value = $total_agreements_value + $agreement['amount'];
        }
       return $total_agreements_value;
    }


    public static function get_current_monthly_rent_income(){
        $total_rent_value = 0;
        $status = RentStatusAPI::get_by_code('DUE');

        if(isset($status['id'])) {
            $agreements_list = AgreementAPI::find_by_criteria(array('status' => $status['id']));
            foreach ($agreements_list as $agreement) {
                $total_rent_value = $total_rent_value + $agreement['amount'];
            }
        }
        return $total_rent_value;
    }
}
?>
