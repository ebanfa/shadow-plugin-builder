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

<?php do_action('shadowbanker_before_app_menu') ?>

	<ul class="main-menu">
			<li><a href="/wordpress/page?artifact=dashboard&page_action=view"><i class="md md-dashboard"></i> Dashboard</a></li>
		<li class="sub-menu">
            <a href=""><i class="md md-account-circle"></i> Party Management</a>
            <ul>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=client"><i class="md md-mail add-client-btn"></i> Clients</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=tenant"><i class="md md-mail add-tenant-btn"></i> Tenants</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=prospective_tenant"><i class="md md-mail add-prospect-btn"></i> Prospective Tenants</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=property_personnel"><i class="md md-mail"></i> Property Personnel</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=service_provider"><i class="md md-mail add-serviceprovider-btn"></i> Service Providers</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=utility_company"><i class="md md-mail add-serviceprovider-btn"></i> Utility Companies</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-location-city"></i> Property Information</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=property"><i class="md md-mail"></i> Properties</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=rent"><i class="md md-mail"></i> Rent</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=invoice"><i class="md md-mail"></i> Invoices</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=purchaseorders"><i class="md md-mail"></i> Purchase Orders</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=inventory"><i class="md md-mail"></i> Inventory</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=inspection"><i class="md md-mail"></i> Inspections</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=maintenance"><i class="md md-mail"></i> Maintenance & Repairs</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=improvement"><i class="md md-mail"></i> Improvements</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=assets&"><i class="md md-mail"></i> Assets</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=expenses"><i class="md md-mail"></i> Expenses</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=liabilities"><i class="md md-mail"></i> Loans & Mortgages</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-description"></i> Agreements</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=managementagreement"><i class="md md-mail"></i> Management Agreements</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=rentagreement"><i class="md md-mail"></i> Rent Agreements</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=serviceagreement"><i class="md md-mail"></i> Service Agreements</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=charge"><i class="md md-mail"></i> Charges</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=term"><i class="md md-mail"></i> Terms</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-account-balance"></i> Accounting & Budgeting</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=accountingperiod"><i class="md md-mail"></i> Accounting Periods</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=coaaccountsegmenttype"><i class="md md-mail"></i> Acccount Segment Types</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=coaaccountstructure"><i class="md md-mail"></i> Acccount Structure</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=chartofaccounts"><i class="md md-mail"></i> Chart Of Accounts</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=glaccount"><i class="md md-mail"></i> General Ledger</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=glaccounttype"><i class="md md-mail"></i> GL Account Types</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=budget"><i class="md md-mail"></i> Budgets</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=budgetreview"><i class="md md-mail"></i> Budget Reviews</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=glbudgetxref"><i class="md md-mail"></i> GL Budget Xref</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-description"></i> Transactions</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=transactiontype"><i class="md md-mail"></i> Transaction Types</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=transaction"><i class="md md-mail"></i> Transactions</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=invoice"><i class="md md-mail"></i> Invoices</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=receipt"><i class="md md-mail"></i> Receipts</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=outpayment"><i class="md md-mail"></i> Disbursements</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=expense"><i class="md md-mail"></i> Expenses</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-work"></i> Financial Reports</a>
            <ul>
				<li><a href="/wordpress/page?artifact=balancesheet"><i class="md md-business"></i> Balance Sheet</a></li>
				<li><a href="/wordpress/page?artifact=balancesheetconsolidated"><i class="md md-business"></i> Balance Sheet Consolidated</a></li>
				<li><a href="/wordpress/page?artifact=generalledger"><i class="md md-business"></i> General Ledger</a></li>
				<li><a href="/wordpress/page?artifact=generalledgerconsolidated"><i class="md md-business"></i> General Ledger Consolidated</a></li>
				<li><a href="/wordpress/page?artifact=incomestatement"><i class="md md-business"></i> Income Statement</a></li>
				<li><a href="/wordpress/page?artifact=incomestatementconsolidated"><i class="md md-business"></i> Income Statement Consolidated</a></li>
				<li><a href="/wordpress/page?artifact=incomestatementdetailed"><i class="md md-business"></i> Income Statement Detailed</a></li>
				<li><a href="/wordpress/page?artifact=rentalownerendingbalance"><i class="md md-business"></i> Rental Owner Ending Balance</a></li>
				<li><a href="/wordpress/page?artifact=rentalownerstatement"><i class="md md-business"></i> Rental Owner Statement</a></li>
				<li><a href="/wordpress/page?artifact=propertystatement"><i class="md md-business"></i> Property Statement</a></li>
				<li><a href="/wordpress/page?artifact=trialbalance"><i class="md md-business"></i> Trial Balance</a></li>
				<li><a href="/wordpress/page?artifact=trialbalanceconsolidated"><i class="md md-business"></i> Trial Balance Consolidated</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-trending-up"></i> Rent Reports</a>
            <ul>
				<li><a href="/wordpress/page?artifact=currenttenants"><i class="md md-business"></i> Current Tenants</a></li>
				<li><a href="/wordpress/page?artifact=delinquenttenants"><i class="md md-business"></i> Delinquent Tenants</a></li>
				<li><a href="/wordpress/page?artifact=rentexpiration"><i class="md md-business"></i> Rent Expiration</a></li>
				<li><a href="/wordpress/page?artifact=rentpaid"><i class="md md-business"></i> Rent Paid</a></li>
				<li><a href="/wordpress/page?artifact=rentreports"><i class="md md-business"></i> Tenant Statement</a></li>
				<li><a href="/wordpress/page?artifact=unitlisting"><i class="md md-business"></i> Unit Listing</a></li>
				<li><a href="/wordpress/page?artifact=occupiedunits"><i class="md md-business"></i> Occupied Units</a></li>
				<li><a href="/wordpress/page?artifact=vacantunits"><i class="md md-business"></i> Vacant Units</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-person"></i> HRM</a>
            <ul>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=user_organization"><i class="md md-mail"></i> Organizations</a></li>
				<li><a href="/wordpress/page?artifact=party&page_action=list&role=staff"><i class="md md-person"></i> Employees</a></li>
				<li><a href="/wordpress/page?artifact=position&page_action=list"><i class="md md-person"></i> Jobs</a></li>
				<li><a href="/wordpress/page?artifact=payroll&page_action=list"><i class="md md-person"></i> Payroll</a></li>
				<li><a href="/wordpress/page?artifact=payhistory&page_action=list"><i class="md md-person"></i> Jobs</a></li>
				<li><a href="/wordpress/page?artifact=performancereview&page_action=list;"><i class="md md-person"></i> Performance Reviews</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-person"></i> Business Settings</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=locationtype"><i class="md md-person"></i> Location Types</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=location"><i class="md md-person"></i> Locations</a></li>
            </ul>
        </li>
		<li class="sub-menu">
            <a href=""><i class="md md-person"></i> Settings</a>
            <ul>
				<li><a href="/wordpress/page?page_action=list&artifact=userprofile"><i class="md md-person"></i> Profile</a></li>
				<li><a href="/wordpress/page?page_action=list&artifact=conversation"><i class="md md-mail"></i> Inbox</a></li>
				<li><a href="<?php echo wp_logout_url(home_url()); ?>"><i class="md md-input"></i> Sign Out</a></li>
            </ul>
        </li>
	</ul>

<?php do_action('shadowbanker_after_app_menu') ?>

<?php } ?>