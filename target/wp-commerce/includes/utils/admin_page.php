<div class="wrap">
	<?php screen_icon(); ?>
	<h2>WP Commerce Admin Settings</h2>
	<?php if(isset($msg)) print $msg; ?>
	<h3><label for="shortcode_name">Admin Credentials</label></h3>
	<form action="" method="post" id="essay_orders_form">
	    <table class="form-table"> 
			<tr>
				<th scope="row">
					<label for="cp_paypal">PayPal URL</label>
				</th>
				<td>
					<input id="cp_paypal" name="cp_paypal" type="text" size="50" value="<?php echo get_option('cp_paypal_url');?>" />
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
					<label for="cp_notify_orders">Notify Email Orders</label>		
				</th>
				<td>
					<input id="cp_notify_orders" name="cp_notify_orders" type="text" size="50" value="<?php echo get_option('cp_notify_orders');?>" />
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_notify_accounts">Notify Email Accounts</label>		
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
					<label for="cp_currency_symbol">Default Currency</label>	
				</th>
				<td>
					<input id="cp_default_currency" name="cp_default_currency" type="text" size="50" value="<?php echo get_option('cp_default_currency');?>" />
				</td>
			</tr>	
			<tr>
				<th scope="row">
					<label for="cp_default_partytype">Default Party Type</label>	
				</th>
				<td>	
					<input id="cp_default_partytype" name="cp_default_partytype" type="text" size="50" value="<?php echo get_option('cp_default_partytype');?>" />
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
