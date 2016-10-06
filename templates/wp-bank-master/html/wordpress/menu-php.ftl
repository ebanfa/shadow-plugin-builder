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

        $menu_groups = array(<#list menuBar.menuGroups as group>
        	'${group.name}' => array(
	        	'type' => '${group.type}',
	        	<#if group.type == "menu">'target' => '${group.target}',</#if>
	        	'is_admin' => <#if group.admin == "Y">true<#else>false</#if>,
	        	'display_name' => '${group.displayName}',
	        	'css_class' => '${group.cssClass}',
        		'items' => array(<#list group.menus as menu>
        			'${menu.name}' => array(
		        		'target' => '${menu.target}',
		        		'css_class' => '${menu.cssClass}',
		        		'display_name' => '${menu.displayName}',
        			),</#list>
        		),
        	),</#list>
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