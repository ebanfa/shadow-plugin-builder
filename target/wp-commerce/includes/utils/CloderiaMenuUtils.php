<?php
class CloderiaMenuUtils {

	// Used to uniquely identify this plugin's menu page in the WP manager
	const admin_menu_slug = 'wp-commerce';

	/**
	 * Create Content Port plugin admin menu
	 */
	public static function create_admin_menu()
	{
	 	add_menu_page('WP Commerce', 'WP Commerce', 'manage_options',	self::admin_menu_slug, 'CloderiaMenuUtils::get_admin_page');
	 	self::add_plugin_admin_submenus();
	 	self::remove_toplevel_cpt_menus();
	}

	/**
	 * Create Content Port plugin admin sub menus
	 */
	public static function add_plugin_admin_submenus() {
		// Add Currency CPT sub menu
	}

	/**
	 * Remove Content Port plugin CPT default menus
	 */
	public static function remove_toplevel_cpt_menus() {
       remove_menu_page( 'edit.php?post_type=sb_currency');
       remove_menu_page( 'edit.php?post_type=sb_loctype');
       remove_menu_page( 'edit.php?post_type=sb_location');
       remove_menu_page( 'edit.php?post_type=sb_business');
       remove_menu_page( 'edit.php?post_type=sb_businessunit');
       remove_menu_page( 'edit.php?post_type=sb_partycat');
       remove_menu_page( 'edit.php?post_type=sb_partytype');
       remove_menu_page( 'edit.php?post_type=sb_roletype');
       remove_menu_page( 'edit.php?post_type=sb_party');
       remove_menu_page( 'edit.php?post_type=sb_partyrole');
       remove_menu_page( 'edit.php?post_type=sb_reltype');
       remove_menu_page( 'edit.php?post_type=sb_relstatus');
       remove_menu_page( 'edit.php?post_type=sb_partyrel');
       remove_menu_page( 'edit.php?post_type=sb_partygroup');
       remove_menu_page( 'edit.php?post_type=sb_person');
       remove_menu_page( 'edit.php?post_type=sb_partyprofile');
       remove_menu_page( 'edit.php?post_type=sb_cmechtype');
       remove_menu_page( 'edit.php?post_type=sb_contactmech');
       remove_menu_page( 'edit.php?post_type=sb_pcmpurposetype');
       remove_menu_page( 'edit.php?post_type=sb_partycmech');
       remove_menu_page( 'edit.php?post_type=sb_pcmpurpose');
       remove_menu_page( 'edit.php?post_type=sb_billaccount');
       remove_menu_page( 'edit.php?post_type=sb_conversation');
       remove_menu_page( 'edit.php?post_type=sb_conuser');
       remove_menu_page( 'edit.php?post_type=sb_message');
       remove_menu_page( 'edit.php?post_type=sb_messagesfiles');
       remove_menu_page( 'edit.php?post_type=sb_notifytype');
       remove_menu_page( 'edit.php?post_type=sb_notifystatus');
       remove_menu_page( 'edit.php?post_type=sb_notifylevel');
       remove_menu_page( 'edit.php?post_type=sb_notification');
       remove_menu_page( 'edit.php?post_type=sb_contactus');
       remove_menu_page( 'edit.php?post_type=sb_uom');
       remove_menu_page( 'edit.php?post_type=sb_uomconversion');
       remove_menu_page( 'edit.php?post_type=sb_prodcat');
       remove_menu_page( 'edit.php?post_type=sb_prodclass');
       remove_menu_page( 'edit.php?post_type=sb_prodtype');
       remove_menu_page( 'edit.php?post_type=sb_product');
       remove_menu_page( 'edit.php?post_type=sb_prodclasslink');
       remove_menu_page( 'edit.php?post_type=sb_prodcatimage');
       remove_menu_page( 'edit.php?post_type=sb_prodtyimage');
       remove_menu_page( 'edit.php?post_type=sb_prodimage');
       remove_menu_page( 'edit.php?post_type=sb_prodfeatcat');
       remove_menu_page( 'edit.php?post_type=sb_prodfeattype');
       remove_menu_page( 'edit.php?post_type=sb_prodfeature');
       remove_menu_page( 'edit.php?post_type=sb_featappltype');
       remove_menu_page( 'edit.php?post_type=sb_featappl');
       remove_menu_page( 'edit.php?post_type=sb_featinttype');
       remove_menu_page( 'edit.php?post_type=sb_featinteraction');
       remove_menu_page( 'edit.php?post_type=sb_pricecomptype');
       remove_menu_page( 'edit.php?post_type=sb_pricecomp');
       remove_menu_page( 'edit.php?post_type=sb_costcomptype');
       remove_menu_page( 'edit.php?post_type=sb_costcomp');
       remove_menu_page( 'edit.php?post_type=sb_supprating');
       remove_menu_page( 'edit.php?post_type=sb_supppref');
       remove_menu_page( 'edit.php?post_type=sb_prodsupplier');
       remove_menu_page( 'edit.php?post_type=sb_facilitytype');
       remove_menu_page( 'edit.php?post_type=sb_facility');
       remove_menu_page( 'edit.php?post_type=sb_containertype');
       remove_menu_page( 'edit.php?post_type=sb_container');
       remove_menu_page( 'edit.php?post_type=sb_lot');
       remove_menu_page( 'edit.php?post_type=sb_invitemtype');
       remove_menu_page( 'edit.php?post_type=sb_invitemstat');
       remove_menu_page( 'edit.php?post_type=sb_inventoryitem');
       remove_menu_page( 'edit.php?post_type=sb_prodordertype');
       remove_menu_page( 'edit.php?post_type=sb_prodorderstatus');
       remove_menu_page( 'edit.php?post_type=sb_prodorder');
       remove_menu_page( 'edit.php?post_type=sb_prodorderitype');
       remove_menu_page( 'edit.php?post_type=sb_prodorderistatus');
       remove_menu_page( 'edit.php?post_type=sb_prodorderitem');
       remove_menu_page( 'edit.php?post_type=sb_invoicetype');
       remove_menu_page( 'edit.php?post_type=sb_invoicestatus');
       remove_menu_page( 'edit.php?post_type=sb_invoice');
       remove_menu_page( 'edit.php?post_type=sb_invoicerole');
       remove_menu_page( 'edit.php?post_type=sb_invoiceitemtype');
       remove_menu_page( 'edit.php?post_type=sb_invoiceitem');
       remove_menu_page( 'edit.php?post_type=sb_invoiceterm');
	}

	/**
	 * Adds a link to the settings directly from the plugins page.  This filter is 
	 * called for each plugin, so we need to make sure we only alter the links that
	 * are displayed for THIS plugin.
	 *
	 * The inputs here come directly from WordPress:
	 * @param	array	$links - a hash in theformat of name => translation e.g.
	 *		array('deactivate' => 'Deactivate') that describes all links available to a plugin.
	 * @param	string	$file 	- the path to plugin's main file (the one with the info header), 
	 *		relative to the plugins directory, e.g. 'content-chunks/index.php'
	 * @return	array 	The $links hash.
	 */
	public static function add_plugin_settings_link($links, $file)
	{
		$settings_link = sprintf('<a href="%s">%s</a>'
			, admin_url( 'options-general.php?page='.self::admin_menu_slug )
			, 'Settings'
		);
		array_unshift( $links, $settings_link );
		return $links;
	}

	/**
 	 * Prints the administration page for this plugin.
	 */
	public static function get_admin_page()
	{
		if ( !empty($_POST) && check_admin_referer('cp_port_options_update','cp_port_admin_nonce') )
		{
			update_option( 'cp_paypal_url', stripslashes($_POST['cp_paypal']) );
			update_option( 'cp_paypal_id', stripslashes($_POST['cp_paypal_id']) );
			update_option( 'cp_notify_orders', stripslashes($_POST['cp_notify_orders']) );
			update_option( 'cp_notify_accounts', stripslashes($_POST['cp_notify_accounts']) );
			update_option( 'cp_site_domain', stripslashes($_POST['cp_site_domain']) );
			update_option( 'cp_default_currency', stripslashes($_POST['cp_default_currency']) );
			update_option( 'cp_default_partytype', stripslashes($_POST['cp_default_partytype']) );
			$msg = '<div class="updated"><p>Your settings have been <strong>updated</strong></p></div>';
		}
		//"Short code here"; //esc_attr( get_option(self::option_key, self::default_shortcode_name) );
		include('admin_page.php');
	}

	
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_currency()
	{
		$url = admin_url().'edit.php?post_type=sb_currency';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_loctype()
	{
		$url = admin_url().'edit.php?post_type=sb_loctype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_location()
	{
		$url = admin_url().'edit.php?post_type=sb_location';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_business()
	{
		$url = admin_url().'edit.php?post_type=sb_business';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_businessunit()
	{
		$url = admin_url().'edit.php?post_type=sb_businessunit';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partycat()
	{
		$url = admin_url().'edit.php?post_type=sb_partycat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partytype()
	{
		$url = admin_url().'edit.php?post_type=sb_partytype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_roletype()
	{
		$url = admin_url().'edit.php?post_type=sb_roletype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_party()
	{
		$url = admin_url().'edit.php?post_type=sb_party';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyrole()
	{
		$url = admin_url().'edit.php?post_type=sb_partyrole';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_reltype()
	{
		$url = admin_url().'edit.php?post_type=sb_reltype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_relstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_relstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyrel()
	{
		$url = admin_url().'edit.php?post_type=sb_partyrel';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partygroup()
	{
		$url = admin_url().'edit.php?post_type=sb_partygroup';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_person()
	{
		$url = admin_url().'edit.php?post_type=sb_person';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyprofile()
	{
		$url = admin_url().'edit.php?post_type=sb_partyprofile';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_cmechtype()
	{
		$url = admin_url().'edit.php?post_type=sb_cmechtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contactmech()
	{
		$url = admin_url().'edit.php?post_type=sb_contactmech';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pcmpurposetype()
	{
		$url = admin_url().'edit.php?post_type=sb_pcmpurposetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partycmech()
	{
		$url = admin_url().'edit.php?post_type=sb_partycmech';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pcmpurpose()
	{
		$url = admin_url().'edit.php?post_type=sb_pcmpurpose';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_billaccount()
	{
		$url = admin_url().'edit.php?post_type=sb_billaccount';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_conversation()
	{
		$url = admin_url().'edit.php?post_type=sb_conversation';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_conuser()
	{
		$url = admin_url().'edit.php?post_type=sb_conuser';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_message()
	{
		$url = admin_url().'edit.php?post_type=sb_message';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_messagesfiles()
	{
		$url = admin_url().'edit.php?post_type=sb_messagesfiles';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_notifytype()
	{
		$url = admin_url().'edit.php?post_type=sb_notifytype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_notifystatus()
	{
		$url = admin_url().'edit.php?post_type=sb_notifystatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_notifylevel()
	{
		$url = admin_url().'edit.php?post_type=sb_notifylevel';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_notification()
	{
		$url = admin_url().'edit.php?post_type=sb_notification';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contactus()
	{
		$url = admin_url().'edit.php?post_type=sb_contactus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_uom()
	{
		$url = admin_url().'edit.php?post_type=sb_uom';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_uomconversion()
	{
		$url = admin_url().'edit.php?post_type=sb_uomconversion';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodcat()
	{
		$url = admin_url().'edit.php?post_type=sb_prodcat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodclass()
	{
		$url = admin_url().'edit.php?post_type=sb_prodclass';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodtype()
	{
		$url = admin_url().'edit.php?post_type=sb_prodtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_product()
	{
		$url = admin_url().'edit.php?post_type=sb_product';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodclasslink()
	{
		$url = admin_url().'edit.php?post_type=sb_prodclasslink';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodcatimage()
	{
		$url = admin_url().'edit.php?post_type=sb_prodcatimage';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodtyimage()
	{
		$url = admin_url().'edit.php?post_type=sb_prodtyimage';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodimage()
	{
		$url = admin_url().'edit.php?post_type=sb_prodimage';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodfeatcat()
	{
		$url = admin_url().'edit.php?post_type=sb_prodfeatcat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodfeattype()
	{
		$url = admin_url().'edit.php?post_type=sb_prodfeattype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodfeature()
	{
		$url = admin_url().'edit.php?post_type=sb_prodfeature';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_featappltype()
	{
		$url = admin_url().'edit.php?post_type=sb_featappltype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_featappl()
	{
		$url = admin_url().'edit.php?post_type=sb_featappl';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_featinttype()
	{
		$url = admin_url().'edit.php?post_type=sb_featinttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_featinteraction()
	{
		$url = admin_url().'edit.php?post_type=sb_featinteraction';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pricecomptype()
	{
		$url = admin_url().'edit.php?post_type=sb_pricecomptype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pricecomp()
	{
		$url = admin_url().'edit.php?post_type=sb_pricecomp';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_costcomptype()
	{
		$url = admin_url().'edit.php?post_type=sb_costcomptype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_costcomp()
	{
		$url = admin_url().'edit.php?post_type=sb_costcomp';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_supprating()
	{
		$url = admin_url().'edit.php?post_type=sb_supprating';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_supppref()
	{
		$url = admin_url().'edit.php?post_type=sb_supppref';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodsupplier()
	{
		$url = admin_url().'edit.php?post_type=sb_prodsupplier';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_facilitytype()
	{
		$url = admin_url().'edit.php?post_type=sb_facilitytype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_facility()
	{
		$url = admin_url().'edit.php?post_type=sb_facility';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_containertype()
	{
		$url = admin_url().'edit.php?post_type=sb_containertype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_container()
	{
		$url = admin_url().'edit.php?post_type=sb_container';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_lot()
	{
		$url = admin_url().'edit.php?post_type=sb_lot';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invitemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_invitemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invitemstat()
	{
		$url = admin_url().'edit.php?post_type=sb_invitemstat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_inventoryitem()
	{
		$url = admin_url().'edit.php?post_type=sb_inventoryitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodordertype()
	{
		$url = admin_url().'edit.php?post_type=sb_prodordertype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodorderstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_prodorderstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodorder()
	{
		$url = admin_url().'edit.php?post_type=sb_prodorder';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodorderitype()
	{
		$url = admin_url().'edit.php?post_type=sb_prodorderitype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodorderistatus()
	{
		$url = admin_url().'edit.php?post_type=sb_prodorderistatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prodorderitem()
	{
		$url = admin_url().'edit.php?post_type=sb_prodorderitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invoicetype()
	{
		$url = admin_url().'edit.php?post_type=sb_invoicetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invoicestatus()
	{
		$url = admin_url().'edit.php?post_type=sb_invoicestatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invoice()
	{
		$url = admin_url().'edit.php?post_type=sb_invoice';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invoicerole()
	{
		$url = admin_url().'edit.php?post_type=sb_invoicerole';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invoiceitemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_invoiceitemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invoiceitem()
	{
		$url = admin_url().'edit.php?post_type=sb_invoiceitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invoiceterm()
	{
		$url = admin_url().'edit.php?post_type=sb_invoiceterm';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
}
?>
