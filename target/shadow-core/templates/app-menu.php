<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
if (is_user_logged_in()) {
        $current_user = wp_get_current_user();
?>

<?php do_action('shadowbanker_before_app_menu'); ?>

	<ul class="main-menu">
			<li><a href="/wordpress/page?artifact=dashboard&page_action=view"><i class="md zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Dashboard</a></li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-account-add zmdi-hc-fw"></i> People</a>
            <ul>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=landlord"><i class="md zmdi zmdi-account-circle zmdi-hc-fw"></i> Clients</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=tenant"><i class="md zmdi zmdi-account-box-o zmdi-hc-fw"></i> Tenants</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=prospective_tenant"><i class="md zmdi zmdi-accounts-outline zmdi-hc-fw"></i> Prospective Tenants</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=property_personnel"><i class="md zmdi zmdi-accounts-alt zmdi-hc-fw"></i> Property Personnel</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=service_provider"><i class="md zmdi zmdi-accounts-list zmdi-hc-fw"></i> Service Providers</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=utility_company"><i class="md zmdi zmdi-account-box-phone zmdi-hc-fw"></i> Utility Companies</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-city-alt zmdi-hc-fw"></i> Property</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=property"><i class="md md-mail"></i> Properties</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=invoice&bcat=property"><i class="md md-mail"></i> Invoices</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=purchaseorder&bcat=property"><i class="md md-mail"></i> Purchase Orders</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=receipt&bcat=property"><i class="md md-mail"></i> Receipts</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=disbursement&bcat=property"><i class="md md-mail"></i> Disbursements</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=asset&bcat=property"><i class="md md-mail"></i> Assets</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=inventory&bcat=property"><i class="md md-mail"></i> Inventory</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=liability&bcat=property"><i class="md md-mail"></i> Liabilities</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=workeffort&bcat=property&cat=inspection"><i class="md md-mail"></i> Inspections</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=workeffort&bcat=property&cat=maintenance"><i class="md md-mail"></i> Maintenance & Repairs</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=workeffort&bcat=property&cat=improvement"><i class="md md-mail"></i> Improvements</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-case-check zmdi-hc-fw"></i> Agreements</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=agreement&bcat=property&cat=management"><i class="md md-mail"></i> Clients</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=agreement&bcat=property&cat=rent"><i class="md md-mail"></i> Tenants</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=agreement&bcat=property&cat=supplier"><i class="md md-mail"></i> Suppliers</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=agreement&bcat=property&cat=service"><i class="md md-mail"></i> Service Providers</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=charge&bcat=business"><i class="md md-mail"></i> Charges</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=term&bcat=business"><i class="md md-mail"></i> Terms</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-labels zmdi-hc-fw"></i> Business</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=invoice&bcat=business"><i class="md md-mail"></i> Invoices</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=purchaseorder&bcat=business"><i class="md md-mail"></i> Purchase Orders</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=receipt&bcat=business"><i class="md md-mail"></i> Receipts</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=disbursement&bcat=business"><i class="md md-mail"></i> Disbursements</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=asset&bcat=business"><i class="md md-mail"></i> Assets</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=inventory&bcat=business"><i class="md md-mail"></i> Inventory</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=liability&bcat=business"><i class="md md-mail"></i> Liabilities</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-labels zmdi-hc-fw"></i> Business Settings</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=currency"><i class="md zmdi zmdi-money-box zmdi-hc-fw"></i> Currencies</a></li>
				<li><a href="/wordpress/page?artifact=business&page_action=list"><i class="md zmdi zmdi-account-circle zmdi-hc-fw"></i> Business Information</a></li>
				<li><a href="/wordpress/page?artifact=businessunit&page_action=list"><i class="md zmdi zmdi-account-circle zmdi-hc-fw"></i> Business Units</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=business_user"><i class="md zmdi zmdi-account-box-o zmdi-hc-fw"></i> Business Users</a></li>
				<li><a href="/wordpress/page?artifact=userinvite&page_action=list"><i class="md zmdi zmdi-account-circle zmdi-hc-fw"></i> User Invites</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-settings zmdi-hc-fw"></i> My Settings</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=partyprofile"><i class="md md-person"></i> Profile</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=workeffort&bcat=business&cat=workflow"><i class="md md-mail"></i> Tasks</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=conversation"><i class="md md-person"></i> Inbox</a></li>
				<li><a href="<?php echo wp_logout_url(home_url()); ?>"><i class="md md-input"></i> Sign Out</a></li>
            </ul>
        </li>
	</ul>

<?php do_action('shadowbanker_after_app_menu'); ?>

<?php } ?>