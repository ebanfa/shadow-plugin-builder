<div class="wrap">
	<?php screen_icon(); ?>
	<h2>Admin Settings</h2>
	<?php if(isset($msg)) print $msg; ?>
	<h3><label for="shortcode_name">Admin Credentials</label></h3>
	<form action="" method="post" id="essay_orders_form">
	    <table class="form-table"> 
			<tr>
				<th scope="row">
					<label for="cp_paypal">PayPal URL</label>
				</th>
				<td>
					<select id="cp_paypal" name="cp_paypal" >
						<?php $selected_url = get_option('cp_paypal_url');?>
						<option value="https://www.paypal.com/cgi-bin/webscr" <?php if ($selected_url == "https://www.paypal.com/cgi-bin/webscr") echo "selected='selected'";?>>
							PayPal Live
						</option>
						<option value="https://www.sandbox.paypal.com/cgi-bin/webscr" <?php if ($selected_url == "https://www.sandbox.paypal.com/cgi-bin/webscr") echo "selected='selected'";?>>
							PayPal Sandbox
						</option>
					</select>
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_paypal_id">PayPal Business ID</label>
				</th>
				<td>
					<input id="cp_paypal_id" name="cp_paypal_id" type="text" size="50" value="<?php echo get_option('cp_paypal_id');?>" />
				</td>
			</tr>
			<tr>
				<th scope="row">
					<label for="cp_notify_orders">Orders Notification Email</label>
				</th>
				<td>
					<input id="cp_notify_orders" name="cp_notify_orders" type="text" size="50" value="<?php echo get_option('cp_notify_orders');?>" />
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_notify_accounts">New Accounts Notification Email</label>
				</th>
				<td>
					<input id="cp_notify_accounts" name="cp_notify_accounts" type="text" size="50" value="<?php echo get_option('cp_notify_accounts');?>" />
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_site_domain">Domain</label>
				</th>
				<td>
					<input id="cp_site_domain" name="cp_site_domain" type="text" size="50" value="<?php echo get_option('cp_site_domain');?>" />
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_default_portal_header_color">Portal Header Color</label>	
				</th>
				<td>	
					<input id="cp_default_portal_header_color" name="cp_default_portal_header_color" type="text" size="50" value="<?php echo get_option('cp_default_portal_header_color');?>" />
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_default_portal_menu_image">Portal Menu Image Url</label>	
				</th>
				<td>	
					<input id="cp_default_portal_menu_image" name="cp_default_portal_menu_image" type="text" size="50" value="<?php echo get_option('cp_default_portal_menu_image');?>" />
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_default_guest_user_name">Guest User Name</label>	
				</th>
				<td>	
					<input id="cp_default_guest_user_name" name="cp_default_guest_user_name" type="text" size="50" value="<?php echo get_option('cp_default_guest_user_name');?>" />
				</td>
			</tr>	
			<tr>
				<td>
					<input type="submit" name="submit" value="Update" />
				</td>
			</tr>		
			<?php wp_nonce_field('cp_port_options_update','cp_port_admin_nonce'); ?>
		</table>
	</form>	
</div>
