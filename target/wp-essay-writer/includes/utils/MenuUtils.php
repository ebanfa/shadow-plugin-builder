<?php
class MenuUtils {

	// Used to uniquely identify this plugin's menu page in the WP manager
	const admin_menu_slug = 'wp-essay-writer';

	/**
	 * Create Content Port plugin admin menu
	 */
	public static function create_admin_menu()
	{
	 	add_menu_page('WP Essay Writer', 'WP Essay Writer', 'manage_options',	self::admin_menu_slug, 'MenuUtils::get_admin_page');
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
       remove_menu_page( 'edit.php?post_type=sb_country');
       remove_menu_page( 'edit.php?post_type=sb_business');
       remove_menu_page( 'edit.php?post_type=sb_partycat');
       remove_menu_page( 'edit.php?post_type=sb_partytype');
       remove_menu_page( 'edit.php?post_type=sb_roletype');
       remove_menu_page( 'edit.php?post_type=sb_party');
       remove_menu_page( 'edit.php?post_type=sb_partyrole');
       remove_menu_page( 'edit.php?post_type=sb_partygroup');
       remove_menu_page( 'edit.php?post_type=sb_person');
       remove_menu_page( 'edit.php?post_type=sb_partyprofile');
       remove_menu_page( 'edit.php?post_type=sb_billaccount');
       remove_menu_page( 'edit.php?post_type=sb_partyimage');
       remove_menu_page( 'edit.php?post_type=sb_partyfile');
       remove_menu_page( 'edit.php?post_type=sb_socmediaccttype');
       remove_menu_page( 'edit.php?post_type=sb_socmediaacct');
       remove_menu_page( 'edit.php?post_type=sb_contactreq');
       remove_menu_page( 'edit.php?post_type=sb_qualtype');
       remove_menu_page( 'edit.php?post_type=sb_partyqual');
       remove_menu_page( 'edit.php?post_type=sb_academiclevel');
       remove_menu_page( 'edit.php?post_type=sb_documenttype');
       remove_menu_page( 'edit.php?post_type=sb_noofpages');
       remove_menu_page( 'edit.php?post_type=sb_urgency');
       remove_menu_page( 'edit.php?post_type=sb_subjectarea');
       remove_menu_page( 'edit.php?post_type=sb_subject');
       remove_menu_page( 'edit.php?post_type=sb_partysubarea');
       remove_menu_page( 'edit.php?post_type=sb_writingstyle');
       remove_menu_page( 'edit.php?post_type=sb_partyreview');
       remove_menu_page( 'edit.php?post_type=sb_classtype');
       remove_menu_page( 'edit.php?post_type=sb_classification');
       remove_menu_page( 'edit.php?post_type=sb_contentcat');
       remove_menu_page( 'edit.php?post_type=sb_contenttype');
       remove_menu_page( 'edit.php?post_type=sb_content');
       remove_menu_page( 'edit.php?post_type=sb_contentfile');
       remove_menu_page( 'edit.php?post_type=sb_contentclass');
       remove_menu_page( 'edit.php?post_type=sb_cordertype');
       remove_menu_page( 'edit.php?post_type=sb_corderstatus');
       remove_menu_page( 'edit.php?post_type=sb_paymentstatus');
       remove_menu_page( 'edit.php?post_type=sb_contentorder');
       remove_menu_page( 'edit.php?post_type=sb_corderfile');
       remove_menu_page( 'edit.php?post_type=sb_accttxntype');
       remove_menu_page( 'edit.php?post_type=sb_accttxnstatus');
       remove_menu_page( 'edit.php?post_type=sb_accttransaction');
       remove_menu_page( 'edit.php?post_type=sb_disputtype');
       remove_menu_page( 'edit.php?post_type=sb_disputestatus');
       remove_menu_page( 'edit.php?post_type=sb_dispute');
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
			update_option( 'cp_price_factor', stripslashes($_POST['cp_price_factor']) );
			update_option( 'cp_notify_orders', stripslashes($_POST['cp_notify_orders']) );
			update_option( 'cp_notify_accounts', stripslashes($_POST['cp_notify_accounts']) );
			update_option( 'cp_site_domain', stripslashes($_POST['cp_site_domain']) );
			/*
			update_option( 'cp_default_currency', stripslashes($_POST['cp_default_currency']) );*/
			update_option( 'cp_default_portal_home_url', stripslashes($_POST['cp_default_portal_home_url']) );
			update_option( 'cp_default_portal_header_color', stripslashes($_POST['cp_default_portal_header_color']) );
			update_option( 'cp_default_portal_menu_image', stripslashes($_POST['cp_default_portal_menu_image']) );
			update_option( 'cp_default_guest_user_name', stripslashes($_POST['cp_default_guest_user_name']) );
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
	public static function render_sb_country()
	{
		$url = admin_url().'edit.php?post_type=sb_country';
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
	public static function render_sb_partyimage()
	{
		$url = admin_url().'edit.php?post_type=sb_partyimage';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyfile()
	{
		$url = admin_url().'edit.php?post_type=sb_partyfile';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_socmediaccttype()
	{
		$url = admin_url().'edit.php?post_type=sb_socmediaccttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_socmediaacct()
	{
		$url = admin_url().'edit.php?post_type=sb_socmediaacct';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contactreq()
	{
		$url = admin_url().'edit.php?post_type=sb_contactreq';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_qualtype()
	{
		$url = admin_url().'edit.php?post_type=sb_qualtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyqual()
	{
		$url = admin_url().'edit.php?post_type=sb_partyqual';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_academiclevel()
	{
		$url = admin_url().'edit.php?post_type=sb_academiclevel';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_documenttype()
	{
		$url = admin_url().'edit.php?post_type=sb_documenttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_noofpages()
	{
		$url = admin_url().'edit.php?post_type=sb_noofpages';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_urgency()
	{
		$url = admin_url().'edit.php?post_type=sb_urgency';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_subjectarea()
	{
		$url = admin_url().'edit.php?post_type=sb_subjectarea';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_subject()
	{
		$url = admin_url().'edit.php?post_type=sb_subject';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partysubarea()
	{
		$url = admin_url().'edit.php?post_type=sb_partysubarea';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_writingstyle()
	{
		$url = admin_url().'edit.php?post_type=sb_writingstyle';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyreview()
	{
		$url = admin_url().'edit.php?post_type=sb_partyreview';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_classtype()
	{
		$url = admin_url().'edit.php?post_type=sb_classtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_classification()
	{
		$url = admin_url().'edit.php?post_type=sb_classification';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contentcat()
	{
		$url = admin_url().'edit.php?post_type=sb_contentcat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contenttype()
	{
		$url = admin_url().'edit.php?post_type=sb_contenttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_content()
	{
		$url = admin_url().'edit.php?post_type=sb_content';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contentfile()
	{
		$url = admin_url().'edit.php?post_type=sb_contentfile';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contentclass()
	{
		$url = admin_url().'edit.php?post_type=sb_contentclass';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_cordertype()
	{
		$url = admin_url().'edit.php?post_type=sb_cordertype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_corderstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_corderstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_paymentstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_paymentstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_contentorder()
	{
		$url = admin_url().'edit.php?post_type=sb_contentorder';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_corderfile()
	{
		$url = admin_url().'edit.php?post_type=sb_corderfile';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_accttxntype()
	{
		$url = admin_url().'edit.php?post_type=sb_accttxntype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_accttxnstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_accttxnstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_accttransaction()
	{
		$url = admin_url().'edit.php?post_type=sb_accttransaction';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_disputtype()
	{
		$url = admin_url().'edit.php?post_type=sb_disputtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_disputestatus()
	{
		$url = admin_url().'edit.php?post_type=sb_disputestatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_dispute()
	{
		$url = admin_url().'edit.php?post_type=sb_dispute';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
}
?>
