<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}
//if (is_user_logged_in()) {
   //     $current_user = wp_get_current_user();
?>

<?php do_action('shadowbanker_before_app_menu') ?>

	<ul class="main-menu">
	<#list menuBar.menuGroups as group>
		<#if group.type == "menu">
			<#if group.active == "Y">
		<li class="active"><a href="${group.target}"><i class="md ${group.cssClass}"></i> ${group.displayName}</a></li>
			<#else>
		<li><a href="${group.target}"><i class="md ${group.cssClass}"></i> ${group.displayName}</a></li>
			</#if> 
		</#if> 
		<#if group.type == "group">
		<li class="sub-menu">
            <a href=""><i class="md ${group.cssClass}"></i> ${group.displayName}</a>
            <ul>
        	<#list group.menus as menu>
				<#if menu.active == "Y">
				<li class="active"><a href="${menu.target}"><i class="md ${menu.cssClass}"></i> ${menu.displayName}</a></li>
				<#else>
				<li><a href="${menu.target}"><i class="md ${menu.cssClass}"></i> ${menu.displayName}</a></li>
				</#if> 
			</#list>
            </ul>
        </li>
		</#if>
	</#list>
	</ul>

<?php do_action('shadowbanker_after_app_menu') ?>

<?php //} ?>