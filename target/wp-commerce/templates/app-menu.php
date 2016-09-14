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
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=employee"><i class="md md-person"></i> Employees</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-shopping-cart-plus"></i> Products</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=productcategory"><i class="md md-person"></i> Product Categories</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=producttype"><i class="md md-person"></i> Product Types</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=product"><i class="md md-person"></i> Products</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=productfeature"><i class="md md-person"></i> Product Features</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=uom"><i class="md md-person"></i> Units Of Measure</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-store"></i> Inventory Management</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=facility"><i class="md md-person"></i> Facilities</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=container"><i class="md md-person"></i> Containers</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=lot"><i class="md md-person"></i> Lots</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=inventoryitem"><i class="md md-person"></i> Inventory Items</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-truck"></i> Orders</a>
            <ul>
				<li><a href="
					/wordpress/page?artifact=productorder&page_action=list&criteria_name=type&criteria_value=sales_order
				"><i class="md md-person"></i> Sales Orders</a></li>
				<li><a href="
					/wordpress/page?artifact=productorder&page_action=list&criteria_name=type&criteria_value=purchase_order
				"><i class="md md-person"></i> Purchase Orders</a></li>
				<li><a href="
					/wordpress/page?artifact=payment&page_action=list&criteria_name=type&criteria_value=receipt
				"><i class="md md-person"></i> Receipts</a></li>
				<li><a href="
					/wordpress/page?artifact=payment&page_action=list&criteria_name=type&criteria_value=disbursement
				"><i class="md md-person"></i> Disbursements</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-balance"></i> Accounting</a>
            <ul>
				<li><a href="
					/wordpress/page?artifact=accounttransaction&page_action=list&criteria_name=type&criteria_value=sale
				"><i class="md md-person"></i> Sales</a></li>
				<li><a href="
					/wordpress/page?artifact=accounttransaction&page_action=list&criteria_name=type&criteria_value=purchase
				"><i class="md md-person"></i> Expenses</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-chart"></i> Reports</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=businessdata"><i class="md md-person"></i> Orders</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=businessdata"><i class="md md-person"></i> Trial Balance</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=incomestatement"><i class="md md-person"></i> Income Statement</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=balancesheet"><i class="md md-person"></i> Balance Sheet</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md zmdi zmdi-settings"></i> Business Settings</a>
            <ul>
				<li><a href="/wordpress/page?artifact=business&page_action=list"><i class="md md-person"></i> General Settings</a></li>
				<li><a href="/wordpress/page?artifact=businessunit&page_action=list"><i class="md md-person"></i> Departments</a></li>
				<li><a href="/wordpress/page?artifact=socialmediaaccount&page_action=list"><i class="md md-person"></i> Social Media</a></li>
            </ul>
        </li>
		<li><a href="<?php echo wp_logout_url(home_url()); ?>"><i class="md zmdi zmdi-sign-in"></i> Sign Out</a></li>
	</ul>

<?php do_action('shadowbanker_after_app_menu'); ?>

<?php } ?>