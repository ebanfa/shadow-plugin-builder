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
			<li><a href="/wordpress/page?artifact=dashboard&page_action=view"><i class="md zmdi zmdi-home"></i> Dashboard</a></li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-accounts-alt"></i> People & Organizations</a>
            <ul>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=customer"><i class="md md-person"></i> Customers</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=supplier"><i class="md md-person"></i> Suppliers</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-shopping-cart-plus"></i> Products</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=productcategory"><i class="md md-person"></i> Product Categories</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=producttype"><i class="md md-person"></i> Product Types</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=product"><i class="md md-person"></i> Products</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-store"></i> Inventory Management</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=facility"><i class="md md-person"></i> Facilities</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=container"><i class="md md-person"></i> Containers</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=lot"><i class="md md-person"></i> Lots</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=productinventoryitem"><i class="md md-person"></i> Inventory Items</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-truck"></i> Orders</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=productorder"><i class="md md-person"></i> Sales Orders</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=productorder"><i class="md md-person"></i> Purchase Orders</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=invoice&role=customer"><i class="md md-person"></i> Customer Invoices</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=invoice&role=supplier"><i class="md md-person"></i> Supplier Invoices</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-balance"></i> Accounting</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=businessdata"><i class="md md-person"></i> Accounts Payable</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=businessdata"><i class="md md-person"></i> Accounts Receivable</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-chart"></i> Reports</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=businessdata"><i class="md md-person"></i> Orders</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-settings"></i> Business Settings</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=businessdata"><i class="md md-person"></i> General Settings</a></li>
            </ul>
        </li>
		<li><a href="<?php echo wp_logout_url(home_url()); ?>"><i class="md zmdi zmdi-sign-in"></i> Sign Out</a></li>
	</ul>

<?php do_action('shadowbanker_after_app_menu'); ?>

<?php } ?>