<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
if (is_user_logged_in()) {
        $current_user = wp_get_current_user();
        $current_user_party = PartyAPI::get_current_user_party();

        $menu_groups = array(
        	'dashboard' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=dashboard&page_action=view',
	        	'is_admin' => true,
	        	'display_name' => 'Dashboard',
	        	'css_class' => 'zmdi zmdi-home',
        		'items' => array(
        		),
        	),
        	'peoples' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'People & Organizations',
	        	'css_class' => 'zmdi zmdi-accounts-alt',
        		'items' => array(
        			'customers' => array(
		        		'target' => '/wordpress/page?artifact=party&page_action=list&role=customer',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Customers',
        			),
        			'suppliers' => array(
		        		'target' => '/wordpress/page?artifact=party&page_action=list&role=supplier',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Suppliers',
        			),
        			'employees' => array(
		        		'target' => '/wordpress/page?artifact=party&page_action=list&role=employee',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Employees',
        			),
        		),
        	),
        	'products' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Products',
	        	'css_class' => 'zmdi zmdi-shopping-cart-plus',
        		'items' => array(
        			'categories' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=productcategory',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Product Categories',
        			),
        			'producttypes' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=producttype',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Product Types',
        			),
        			'templates' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=producttemplate',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Product Templates',
        			),
        			'products' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=product',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Products',
        			),
        			'productfeatures' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=productfeature',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Product Features',
        			),
        			'unitofmeasure' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=uom',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Units Of Measure',
        			),
        		),
        	),
        	'inventory' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Inventory Management',
	        	'css_class' => 'zmdi zmdi-store',
        		'items' => array(
        			'facilities' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=facility',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Facilities',
        			),
        			'containers' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=container',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Containers',
        			),
        			'lots' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=lot',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Lots',
        			),
        			'inventoryitems' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=inventoryitem',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Inventory Items',
        			),
        		),
        	),
        	'productorders' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Orders',
	        	'css_class' => 'zmdi zmdi-truck',
        		'items' => array(
        			'salesorders' => array(
		        		'target' => '
					/wordpress/page?artifact=productorder&page_action=list&criteria_name=type&criteria_value=sales_order
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Sales Orders',
        			),
        			'purchaseorders' => array(
		        		'target' => '
					/wordpress/page?artifact=productorder&page_action=list&criteria_name=type&criteria_value=purchase_order
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Purchase Orders',
        			),
        			'customerinvoice' => array(
		        		'target' => '
					/wordpress/page?artifact=invoice&page_action=list&criteria_name=type&criteria_value=sales_invoice
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Customer Invoices',
        			),
        			'supplierinvoice' => array(
		        		'target' => '
					/wordpress/page?artifact=invoice&page_action=list&criteria_name=type&criteria_value=purchase_invoice
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Supplier Invoices',
        			),
        		),
        	),
        	'accounting' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Accounting',
	        	'css_class' => 'zmdi zmdi-balance',
        		'items' => array(
        			'sales' => array(
		        		'target' => '
					/wordpress/page?artifact=accounttransaction&page_action=list&criteria_name=type&criteria_value=sale
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Sales',
        			),
        			'expenses' => array(
		        		'target' => '
					/wordpress/page?artifact=accounttransaction&page_action=list&criteria_name=type&criteria_value=purchase
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Expenses',
        			),
        		),
        	),
        	'reports' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Reports',
	        	'css_class' => 'zmdi zmdi-chart',
        		'items' => array(
        			'general' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=businessdata',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Orders',
        			),
        			'trialbalance' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=businessdata',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Trial Balance',
        			),
        			'incomestatement' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=incomestatement',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Income Statement',
        			),
        			'balancesheet' => array(
		        		'target' => '/wordpress/page?page_action=list&artifact=balancesheet',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Balance Sheet',
        			),
        		),
        	),
        	'businesssettings' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Business Settings',
	        	'css_class' => 'zmdi zmdi-settings',
        		'items' => array(
        			'general' => array(
		        		'target' => '/wordpress/page?artifact=business&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'General Settings',
        			),
        			'departments' => array(
		        		'target' => '/wordpress/page?artifact=businessunit&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Departments',
        			),
        			'socialmedia' => array(
		        		'target' => '/wordpress/page?artifact=socialmediaaccount&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Social Media',
        			),
        		),
        	),
        	'userorders' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => false,
	        	'display_name' => 'Orders',
	        	'css_class' => 'zmdi zmdi-truck',
        		'items' => array(
        			'salesorders' => array(
		        		'target' => '
					/wordpress/page?artifact=productorder&page_action=list&criteria_name=type&criteria_value=sales_order
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Orders',
        			),
        			'customerinvoice' => array(
		        		'target' => '
					/wordpress/page?artifact=invoice&page_action=list&criteria_name=type&criteria_value=sales_invoice
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Invoices',
        			),
        			'mypayments' => array(
		        		'target' => '
					/wordpress/page?artifact=payment&page_action=list&criteria_name=type&criteria_value=receipt
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Payments',
        			),
        			'myaccount' => array(
		        		'target' => '
					/wordpress/page?artifact=billingaccount&page_action=list
				',
		        		'css_class' => 'md-person',
		        		'display_name' => 'My Account',
        			),
        		),
        	),
        	'signout' => array(
	        	'type' => 'menu',
	        	'target' => 'wp_logout_url(home_url())',
	        	'is_admin' => false,
	        	'display_name' => 'Sign Out',
	        	'css_class' => 'zmdi zmdi-sign-in',
        		'items' => array(
        		),
        	),
        );

        foreach ($menu_groups as $key => $group) {
        	if($group['is_admin']  && !PartyAPI::is_portal_admin($current_user_party))
        		unset($menu_groups[$key]);

        	if(!$group['is_admin']  && PartyAPI::is_portal_admin($current_user_party))
        		unset($menu_groups[$key]);
        }
?>

<?php do_action('shadowbanker_before_app_menu'); ?>

	<ul class="main-menu">
	<?php
		foreach ($menu_groups as $key => $group) {
			if ($group['type'] == 'menu') { 
	?>
		<li>
			<a href="<?php if($key == 'signout')  echo wp_logout_url(home_url()); else echo $group['target']; ?>">
				<i class="md <?php echo $group['css_class'];?>"></i> <?php echo $group['display_name'];?>
			</a>
		</li>
	<?php	} else { ?>
		<li class="sub-menu">
            <a href="">
            	<i class="md <?php echo $group['css_class'];?>"></i> <?php echo $group['display_name'];?>
            </a>
            <ul>
            <?php	foreach ($group['items'] as $key => $item) { ?>
				<li class="active">
					<a href="<?php echo $item['target'];?>">
						<i class="md <?php echo $item['css_class']?>"></i> <?php echo $item['display_name'];?>
					</a>
				</li>
			<?php } ?>
            </ul>
        </li>

	<?php	}
		}
	?>
	</ul>

<?php do_action('shadowbanker_after_app_menu'); ?>

<?php } ?>