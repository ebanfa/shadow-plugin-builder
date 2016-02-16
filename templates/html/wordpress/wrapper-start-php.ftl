<?php

	/*
	 *
	 */
	if (!defined('ABSPATH')) {
	    exit; // Exit if accessed directly
	}
	$page_info = $_REQUEST['page_info'];
	$page_name = sanitize_text_field($page_info['artifact_display_name']);
//	$page_action = sanitize_text_field($page_info['page_action']);
?>
<section id="content">
	<div class="container">
		<div class="block-header">
			<h2><?php echo $page_name; ?></h2>

			<ul class="actions ">
				<li>
					<a href="index.html"> <i class="md md-trending-up"></i></a>
				</li>
				<li>
					<a href="index.html"> <i class="md md-done-all"></i></a></li>
				<li class="dropdown">
					<a href="index.html" data-toggle="dropdown"><i class="md md-more-vert"></i></a>
					<ul class="dropdown-menu dropdown-menu-right">
						<li><a href="index.html">Refresh</a></li>
						<li><a href="index.html">Manage Widgets</a></li>
						<li><a href="index.html">Widgets Settings</a></li>
					</ul>
				</li>
			</ul>
		</div>
			
