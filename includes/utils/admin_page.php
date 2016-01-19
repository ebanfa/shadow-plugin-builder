<div class="wrap">
	<?php screen_icon(); ?>
	<h2>Shadow Banker Admin Settings</h2>
	
	<?php //print $msg; ?>

	<h3><label for="shortcode_name">Admin Credentials</label></h3>
	<form action="" method="post" id="essay_orders_form">
            		
		<label for="cp_paypal">PayPal URL</label>		
		<input id="cp_paypal" name="cp_paypal" type="text" size="50" value="<?php echo get_option('cp_paypal_url');?>" /><br><br>

		<label for="cp_paypal_id">PayPal Business ID</label>		
		<input id="cp_paypal_id" name="cp_paypal_id" type="text" size="50" value="<?php echo get_option('cp_paypal_id');?>" /><br><br>

		<label for="cp_notify_loans">Notify Email Loans</label>		
		<input id="cp_notify_loans" name="cp_notify_loans" type="text" size="50" value="<?php echo get_option('cp_notify_loans');?>" /><br><br>

		<label for="cp_notify_accounts">Notify Email Accounts</label>		
		<input id="cp_notify_accounts" name="cp_notify_accounts" type="text" size="50" value="<?php echo get_option('cp_notify_accounts');?>" /><br><br>

		<label for="cp_site_domain">Domain</label>		
		<input id="cp_site_domain" name="cp_site_domain" type="text" size="50" value="<?php echo get_option('cp_site_domain');?>" /><br><br>

		<label for="cp_admin_account">Admin User</label>		
		<input id="cp_admin_account" name="cp_admin_account" type="text" size="50" value="<?php echo get_option('cp_admin_account');?>" /><br><br>



		<label for="cp_currency_symbol">Currency Symbol</label>		
		<input id="cp_currency_symbol" name="cp_currency_symbol" type="text" size="50" value="<?php echo get_option('cp_currency_symbol');?>" /><br>
		<label for="cp_default_partytype">Default Party Type</label>		
		<input id="cp_default_partytype" name="cp_default_partytype" type="text" size="50" value="<?php echo get_option('cp_default_partytype');?>" />
		
		<p class="submit">
			<input type="submit" name="submit" value="Update" />
		</p>
		<?php wp_nonce_field('cp_port_options_update','cp_port_admin_nonce'); ?>
		
	</form>	
</div>
