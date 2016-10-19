<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

if (is_user_logged_in()) {

        $current_user_party = UserPartyAPI::get_current_user_party();

        $menu_groups = array(
        	'dashboard' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=businesssummary&page_action=list',
	        	'is_admin' => true,
	        	'display_name' => 'Dashboard',
	        	'css_class' => 'zmdi zmdi-trending-up',
        		'items' => array(
        		),
        	),
        	'peoples' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'People',
	        	'css_class' => 'zmdi zmdi-accounts-alt',
        		'items' => array(
        			'students' => array(
		        		'target' => '/wordpress/page?artifact=studentlist&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Students',
        			),
        			'tutors' => array(
		        		'target' => '/wordpress/page?artifact=tutorlist&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Tutors',
        			),
        		),
        	),
        	'business' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Business',
	        	'css_class' => 'zmdi zmdi-balance',
        		'items' => array(
        			'contentorders' => array(
		        		'target' => '/wordpress/page?artifact=contentorder&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Orders',
        			),
        			'transactions' => array(
		        		'target' => '/wordpress/page?artifact=accounttransaction&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Transactions',
        			),
        			'disputes' => array(
		        		'target' => '/wordpress/page?artifact=dispute&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Disputes',
        			),
        		),
        	),
        	'content' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=subjectarea&page_action=list',
	        	'is_admin' => true,
	        	'display_name' => 'Content',
	        	'css_class' => 'zmdi zmdi-collection-text',
        		'items' => array(
        		),
        	),
        	'reference' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Reference Data',
	        	'css_class' => 'zmdi zmdi-library',
        		'items' => array(
        			'academiclevels' => array(
		        		'target' => '/wordpress/page?artifact=academiclevel&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Academic Levels',
        			),
        			'documenttypes' => array(
		        		'target' => '/wordpress/page?artifact=documenttype&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Document Types',
        			),
        			'numberofpages' => array(
		        		'target' => '/wordpress/page?artifact=noofpages&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'No of Pages',
        			),
        			'subjectareas' => array(
		        		'target' => '/wordpress/page?artifact=subjectarea&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Subject Areas',
        			),
        			'urgencies' => array(
		        		'target' => '/wordpress/page?artifact=urgency&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Writing Schedule',
        			),
        			'writingstyles' => array(
		        		'target' => '/wordpress/page?artifact=writingstyle&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Writing Styles',
        			),
        		),
        	),
        	'businesssettings' => array(
	        	'type' => 'group',
	        	
	        	'is_admin' => true,
	        	'display_name' => 'Business Settings',
	        	'css_class' => 'zmdi zmdi-settings',
        		'items' => array(
        			'business' => array(
		        		'target' => '/wordpress/page?artifact=business&page_action=list',
		        		'css_class' => 'md-person',
		        		'display_name' => 'Business',
        			),
        		),
        	),
        	'accountsummary' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=accountsummary&page_action=list',
	        	'is_admin' => false,
	        	'display_name' => 'Account Summary',
	        	'css_class' => 'zmdi zmdi-accounts-alt',
        		'items' => array(
        		),
        	),
        	'myorders' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=contentorder&page_action=list',
	        	'is_admin' => false,
	        	'display_name' => 'Orders',
	        	'css_class' => 'zmdi zmdi-folder-outline',
        		'items' => array(
        		),
        	),
        	'mytransactions' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=accounttransaction&page_action=list',
	        	'is_admin' => false,
	        	'display_name' => 'Transactions',
	        	'css_class' => 'zmdi zmdi-money-box',
        		'items' => array(
        		),
        	),
        	'blog' => array(
	        	'type' => 'menu',
	        	'target' => '/blog',
	        	'is_admin' => false,
	        	'display_name' => 'Blog',
	        	'css_class' => 'zmdi zmdi-collection-text',
        		'items' => array(
        		),
        	),
        	'mytutors' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=tutorlist&page_action=list',
	        	'is_admin' => false,
	        	'display_name' => 'Tutors',
	        	'css_class' => 'zmdi zmdi-graduation-cap',
        		'items' => array(
        		),
        	),
        	'disputes' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=dispute&page_action=list',
	        	'is_admin' => false,
	        	'display_name' => 'Disputes',
	        	'css_class' => 'zmdi zmdi-close-circle',
        		'items' => array(
        		),
        	),
        	'profile' => array(
	        	'type' => 'menu',
	        	'target' => '/wordpress/page?artifact=profile&page_action=list',
	        	'is_admin' => false,
	        	'display_name' => 'My Profile',
	        	'css_class' => 'zmdi zmdi-settings',
        		'items' => array(
        		),
        	),
        );
        foreach ($menu_groups as $key => $group) {
        	if($group['is_admin']  && !UserPartyAPI::is_portal_admin($current_user_party))
        		unset($menu_groups[$key]);

        	if(!$group['is_admin']  && UserPartyAPI::is_portal_admin($current_user_party))
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

<?php 
		do_action('shadowbanker_after_app_menu'); 

	} else { 

		do_action('shadowbanker_before_app_menu'); 
?>
<div class="card" style="margin-bottom: 10px;">
    <div class="card-header">
        <h2>How it works</h2>
    </div>

    <div class="list-group">
        <a class="list-group-item media" href="#">
            <div class="media-body">
                <div class="lgi-heading">Post a question.</div>
            </div>
        </a>
        <a class="list-group-item media" href="#">
            <div class="media-body">
                <div class="lgi-heading">Make a 50% down payment.</div>
            </div>
        </a>
        <a class="list-group-item media" href="#">
            <div class="media-body">
                <div class="lgi-heading">Get a tutors help on your question.</div>
            </div>
        </a>
        <a class="list-group-item media" href="#">
            <div class="media-body">
                <div class="lgi-heading">Complete the payment to get your answer delivered.</div>
            </div>
        </a>
    </div>
</div>


<div class="card" style="margin-bottom: 10px;">
    <div class="card-body card-padding">
        <a class="btn btn-primary btn-lg btn-block" href="<?php echo get_site_url();?>/signin">Sign In/Sign Up</a>
    </div>
</div>

<div class="card">
    <div class="card-header">
        <h2>Need quick tutor help?</h2>
    </div>

    <div class="list-group">
    
        <a class="list-group-item media" href="mailto:orders@premiumacademicessays.com">
            <div class="media-body">
                <div class="lgi-heading">Send the details of your question to:</div>
                <small class="lgi-text">orders@premiumacademicessays.com</small>
            </div>
        </a>
    
        <a class="list-group-item media" href="mailto:support@premiumacademicessays.com">
            <div class="media-body">
                <div class="lgi-heading">Or contact us through:</div>
                <small class="lgi-text">support@premiumacademicessays.com</small>
            </div>
        </a>
    </div>
</div>
<?php 
		do_action('shadowbanker_after_app_menu'); } 
?>