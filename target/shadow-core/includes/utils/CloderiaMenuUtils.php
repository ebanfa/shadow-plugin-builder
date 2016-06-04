<?php
class CloderiaMenuUtils {

	// Used to uniquely identify this plugin's menu page in the WP manager
	const admin_menu_slug = 'shadow-core';

	/**
	 * Create Content Port plugin admin menu
	 */
	public static function create_admin_menu()
	{
	 	add_menu_page('Shadow Banker', 'Shadow Banker', 'manage_options',	self::admin_menu_slug, 'CloderiaMenuUtils::get_admin_page');
	 	self::add_plugin_admin_submenus();
	 	self::remove_toplevel_cpt_menus();
	}

	/**
	 * Create Content Port plugin admin sub menus
	 */
	public static function add_plugin_admin_submenus() {
		// Add Currency CPT sub menu
	 	add_submenu_page( self::admin_menu_slug , 'Currency', 'Currency', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_currency', 'CloderiaMenuUtils::render_sb_currency');
	 	add_submenu_page( self::admin_menu_slug , 'Location Type', 'Location Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_loctype', 'CloderiaMenuUtils::render_sb_loctype');
	 	add_submenu_page( self::admin_menu_slug , 'Location', 'Location', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_location', 'CloderiaMenuUtils::render_sb_location');
	 	add_submenu_page( self::admin_menu_slug , 'Business', 'Business', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_business', 'CloderiaMenuUtils::render_sb_business');
	 	add_submenu_page( self::admin_menu_slug , 'Business Unit', 'Business Unit', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_businessunit', 'CloderiaMenuUtils::render_sb_businessunit');
	 	add_submenu_page( self::admin_menu_slug , 'Party Category', 'Party Category', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partycat', 'CloderiaMenuUtils::render_sb_partycat');
	 	add_submenu_page( self::admin_menu_slug , 'Party Type', 'Party Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partytype', 'CloderiaMenuUtils::render_sb_partytype');
	 	add_submenu_page( self::admin_menu_slug , 'Role Type', 'Role Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_roletype', 'CloderiaMenuUtils::render_sb_roletype');
	 	add_submenu_page( self::admin_menu_slug , 'Party', 'Party', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_party', 'CloderiaMenuUtils::render_sb_party');
	 	add_submenu_page( self::admin_menu_slug , 'Party Role', 'Party Role', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partyrole', 'CloderiaMenuUtils::render_sb_partyrole');
	 	add_submenu_page( self::admin_menu_slug , 'Relationship Type', 'Relationship Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_reltype', 'CloderiaMenuUtils::render_sb_reltype');
	 	add_submenu_page( self::admin_menu_slug , 'Relationship Status', 'Relationship Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_relstatus', 'CloderiaMenuUtils::render_sb_relstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Party Relationship', 'Party Relationship', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partyrel', 'CloderiaMenuUtils::render_sb_partyrel');
	 	add_submenu_page( self::admin_menu_slug , 'Party Group', 'Party Group', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partygroup', 'CloderiaMenuUtils::render_sb_partygroup');
	 	add_submenu_page( self::admin_menu_slug , 'Person', 'Person', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_person', 'CloderiaMenuUtils::render_sb_person');
	 	add_submenu_page( self::admin_menu_slug , 'Party Profile', 'Party Profile', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partyprofile', 'CloderiaMenuUtils::render_sb_partyprofile');
	 	add_submenu_page( self::admin_menu_slug , 'Contact Mechanism Type', 'Contact Mechanism Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_cmechtype', 'CloderiaMenuUtils::render_sb_cmechtype');
	 	add_submenu_page( self::admin_menu_slug , 'Contact Mechanism', 'Contact Mechanism', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_contactmech', 'CloderiaMenuUtils::render_sb_contactmech');
	 	add_submenu_page( self::admin_menu_slug , 'Party Contact Mechanism Purpose Type', 'Party Contact Mechanism Purpose Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pcmpurposetype', 'CloderiaMenuUtils::render_sb_pcmpurposetype');
	 	add_submenu_page( self::admin_menu_slug , 'Party Contact Mechanism', 'Party Contact Mechanism', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partycmech', 'CloderiaMenuUtils::render_sb_partycmech');
	 	add_submenu_page( self::admin_menu_slug , 'Party Contact Mechanism Purpose', 'Party Contact Mechanism Purpose', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pcmpurpose', 'CloderiaMenuUtils::render_sb_pcmpurpose');
	 	add_submenu_page( self::admin_menu_slug , 'Party Files', 'Party Files', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partyfiles', 'CloderiaMenuUtils::render_sb_partyfiles');
	 	add_submenu_page( self::admin_menu_slug , 'User Invite Status', 'User Invite Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invitestatus', 'CloderiaMenuUtils::render_sb_invitestatus');
	 	add_submenu_page( self::admin_menu_slug , 'User Invite', 'User Invite', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_userinvite', 'CloderiaMenuUtils::render_sb_userinvite');
	 	add_submenu_page( self::admin_menu_slug , 'Business Category', 'Business Category', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_businesscat', 'CloderiaMenuUtils::render_sb_businesscat');
	 	add_submenu_page( self::admin_menu_slug , 'Charge Type', 'Charge Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_chargetype', 'CloderiaMenuUtils::render_sb_chargetype');
	 	add_submenu_page( self::admin_menu_slug , 'Charge Frequency', 'Charge Frequency', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_chargefreq', 'CloderiaMenuUtils::render_sb_chargefreq');
	 	add_submenu_page( self::admin_menu_slug , 'Charge', 'Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_charge', 'CloderiaMenuUtils::render_sb_charge');
	 	add_submenu_page( self::admin_menu_slug , 'Expense Type', 'Expense Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_expensetype', 'CloderiaMenuUtils::render_sb_expensetype');
	 	add_submenu_page( self::admin_menu_slug , 'Expense Frequency', 'Expense Frequency', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_expensefreq', 'CloderiaMenuUtils::render_sb_expensefreq');
	 	add_submenu_page( self::admin_menu_slug , 'Expense', 'Expense', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_expense', 'CloderiaMenuUtils::render_sb_expense');
	 	add_submenu_page( self::admin_menu_slug , 'Liability Category', 'Liability Category', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_liabcat', 'CloderiaMenuUtils::render_sb_liabcat');
	 	add_submenu_page( self::admin_menu_slug , 'Liability Type', 'Liability Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_liabtype', 'CloderiaMenuUtils::render_sb_liabtype');
	 	add_submenu_page( self::admin_menu_slug , 'Liability', 'Liability', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_liability', 'CloderiaMenuUtils::render_sb_liability');
	 	add_submenu_page( self::admin_menu_slug , 'Depreciation Method', 'Depreciation Method', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_dmethod', 'CloderiaMenuUtils::render_sb_dmethod');
	 	add_submenu_page( self::admin_menu_slug , 'Unit Of Measure', 'Unit Of Measure', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_uom', 'CloderiaMenuUtils::render_sb_uom');
	 	add_submenu_page( self::admin_menu_slug , 'Utility Type', 'Utility Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_utilitytype', 'CloderiaMenuUtils::render_sb_utilitytype');
	 	add_submenu_page( self::admin_menu_slug , 'Utility', 'Utility', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_utility', 'CloderiaMenuUtils::render_sb_utility');
	 	add_submenu_page( self::admin_menu_slug , 'Facility Category', 'Facility Category', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_facilitycat', 'CloderiaMenuUtils::render_sb_facilitycat');
	 	add_submenu_page( self::admin_menu_slug , 'Facility Type', 'Facility Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_facilitytype', 'CloderiaMenuUtils::render_sb_facilitytype');
	 	add_submenu_page( self::admin_menu_slug , 'Facility', 'Facility', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_facility', 'CloderiaMenuUtils::render_sb_facility');
	 	add_submenu_page( self::admin_menu_slug , 'Facility Role', 'Facility Role', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_facilityrole', 'CloderiaMenuUtils::render_sb_facilityrole');
	 	add_submenu_page( self::admin_menu_slug , 'Facility Charge', 'Facility Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_facharge', 'CloderiaMenuUtils::render_sb_facharge');
	 	add_submenu_page( self::admin_menu_slug , 'Property Type', 'Property Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_proptype', 'CloderiaMenuUtils::render_sb_proptype');
	 	add_submenu_page( self::admin_menu_slug , 'Property Status', 'Property Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_propstatus', 'CloderiaMenuUtils::render_sb_propstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Property', 'Property', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_property', 'CloderiaMenuUtils::render_sb_property');
	 	add_submenu_page( self::admin_menu_slug , 'Zone Type', 'Zone Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_zonetype', 'CloderiaMenuUtils::render_sb_zonetype');
	 	add_submenu_page( self::admin_menu_slug , 'Zoning Data', 'Zoning Data', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_zoningdata', 'CloderiaMenuUtils::render_sb_zoningdata');
	 	add_submenu_page( self::admin_menu_slug , 'Mortgage Type', 'Mortgage Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_mortgagetype', 'CloderiaMenuUtils::render_sb_mortgagetype');
	 	add_submenu_page( self::admin_menu_slug , 'Mortgage', 'Mortgage', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_mortgage', 'CloderiaMenuUtils::render_sb_mortgage');
	 	add_submenu_page( self::admin_menu_slug , 'Land Accessibility', 'Land Accessibility', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_laccessibility', 'CloderiaMenuUtils::render_sb_laccessibility');
	 	add_submenu_page( self::admin_menu_slug , 'Land Topography', 'Land Topography', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_ltopography', 'CloderiaMenuUtils::render_sb_ltopography');
	 	add_submenu_page( self::admin_menu_slug , 'Land Type', 'Land Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_landtype', 'CloderiaMenuUtils::render_sb_landtype');
	 	add_submenu_page( self::admin_menu_slug , 'Soil Type', 'Soil Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_soiltype', 'CloderiaMenuUtils::render_sb_soiltype');
	 	add_submenu_page( self::admin_menu_slug , 'Land Shape', 'Land Shape', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_lshape', 'CloderiaMenuUtils::render_sb_lshape');
	 	add_submenu_page( self::admin_menu_slug , 'Land', 'Land', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_land', 'CloderiaMenuUtils::render_sb_land');
	 	add_submenu_page( self::admin_menu_slug , 'Plot Type', 'Plot Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_plottype', 'CloderiaMenuUtils::render_sb_plottype');
	 	add_submenu_page( self::admin_menu_slug , 'Plot', 'Plot', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_plot', 'CloderiaMenuUtils::render_sb_plot');
	 	add_submenu_page( self::admin_menu_slug , 'Improvement Type', 'Improvement Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_improvetype', 'CloderiaMenuUtils::render_sb_improvetype');
	 	add_submenu_page( self::admin_menu_slug , 'Improvement', 'Improvement', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_improvement', 'CloderiaMenuUtils::render_sb_improvement');
	 	add_submenu_page( self::admin_menu_slug , 'Property Utility', 'Property Utility', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_proputility', 'CloderiaMenuUtils::render_sb_proputility');
	 	add_submenu_page( self::admin_menu_slug , 'Property Charge', 'Property Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pcharge', 'CloderiaMenuUtils::render_sb_pcharge');
	 	add_submenu_page( self::admin_menu_slug , 'Asset Category', 'Asset Category', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_assetcat', 'CloderiaMenuUtils::render_sb_assetcat');
	 	add_submenu_page( self::admin_menu_slug , 'Asset Type', 'Asset Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_assettype', 'CloderiaMenuUtils::render_sb_assettype');
	 	add_submenu_page( self::admin_menu_slug , 'Asset', 'Asset', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_asset', 'CloderiaMenuUtils::render_sb_asset');
	 	add_submenu_page( self::admin_menu_slug , 'Inventory Type', 'Inventory Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_inventype', 'CloderiaMenuUtils::render_sb_inventype');
	 	add_submenu_page( self::admin_menu_slug , 'Inventory', 'Inventory', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_inventory', 'CloderiaMenuUtils::render_sb_inventory');
	 	add_submenu_page( self::admin_menu_slug , 'Inventory Item Type', 'Inventory Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invitemtype', 'CloderiaMenuUtils::render_sb_invitemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Inventory Item', 'Inventory Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_inventoryitem', 'CloderiaMenuUtils::render_sb_inventoryitem');
	 	add_submenu_page( self::admin_menu_slug , 'Property Staff', 'Property Staff', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_propstaff', 'CloderiaMenuUtils::render_sb_propstaff');
	 	add_submenu_page( self::admin_menu_slug , 'Property Files', 'Property Files', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_propfiles', 'CloderiaMenuUtils::render_sb_propfiles');
	 	add_submenu_page( self::admin_menu_slug , 'Building Type', 'Building Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_buildingtype', 'CloderiaMenuUtils::render_sb_buildingtype');
	 	add_submenu_page( self::admin_menu_slug , 'Building Type Property Type', 'Building Type Property Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_buildtypropty', 'CloderiaMenuUtils::render_sb_buildtypropty');
	 	add_submenu_page( self::admin_menu_slug , 'Allocation Unit', 'Allocation Unit', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_allocunit', 'CloderiaMenuUtils::render_sb_allocunit');
	 	add_submenu_page( self::admin_menu_slug , 'Building', 'Building', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_building', 'CloderiaMenuUtils::render_sb_building');
	 	add_submenu_page( self::admin_menu_slug , 'Building Charge', 'Building Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_bcharge', 'CloderiaMenuUtils::render_sb_bcharge');
	 	add_submenu_page( self::admin_menu_slug , 'Building Files', 'Building Files', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_buildfiles', 'CloderiaMenuUtils::render_sb_buildfiles');
	 	add_submenu_page( self::admin_menu_slug , 'Floor Type', 'Floor Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_floortype', 'CloderiaMenuUtils::render_sb_floortype');
	 	add_submenu_page( self::admin_menu_slug , 'Floor', 'Floor', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_floor', 'CloderiaMenuUtils::render_sb_floor');
	 	add_submenu_page( self::admin_menu_slug , 'Floor Charge', 'Floor Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_fcharge', 'CloderiaMenuUtils::render_sb_fcharge');
	 	add_submenu_page( self::admin_menu_slug , 'Unit Type', 'Unit Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_unittype', 'CloderiaMenuUtils::render_sb_unittype');
	 	add_submenu_page( self::admin_menu_slug , 'Unit Type Charge', 'Unit Type Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_utypecharge', 'CloderiaMenuUtils::render_sb_utypecharge');
	 	add_submenu_page( self::admin_menu_slug , 'Unit', 'Unit', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_unit', 'CloderiaMenuUtils::render_sb_unit');
	 	add_submenu_page( self::admin_menu_slug , 'Unit Charge', 'Unit Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_unitcharge', 'CloderiaMenuUtils::render_sb_unitcharge');
	 	add_submenu_page( self::admin_menu_slug , 'Parking Slot Type', 'Parking Slot Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pslottype', 'CloderiaMenuUtils::render_sb_pslottype');
	 	add_submenu_page( self::admin_menu_slug , 'Parking Slot Type Charge', 'Parking Slot Type Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pstypecharge', 'CloderiaMenuUtils::render_sb_pstypecharge');
	 	add_submenu_page( self::admin_menu_slug , 'Parking Slot', 'Parking Slot', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pslot', 'CloderiaMenuUtils::render_sb_pslot');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Category', 'Agreement Category', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreecat', 'CloderiaMenuUtils::render_sb_agreecat');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Type', 'Agreement Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreetype', 'CloderiaMenuUtils::render_sb_agreetype');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Type Charge', 'Agreement Type Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreetypecharge', 'CloderiaMenuUtils::render_sb_agreetypecharge');
	 	add_submenu_page( self::admin_menu_slug , 'Term Type', 'Term Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_termtype', 'CloderiaMenuUtils::render_sb_termtype');
	 	add_submenu_page( self::admin_menu_slug , 'Term', 'Term', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_term', 'CloderiaMenuUtils::render_sb_term');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement', 'Agreement', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreement', 'CloderiaMenuUtils::render_sb_agreement');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Agreement', 'Purchase Agreement', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_purchaseagrmnt', 'CloderiaMenuUtils::render_sb_purchaseagrmnt');
	 	add_submenu_page( self::admin_menu_slug , 'Settlement Data', 'Settlement Data', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_settlementdata', 'CloderiaMenuUtils::render_sb_settlementdata');
	 	add_submenu_page( self::admin_menu_slug , 'Loan Information', 'Loan Information', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_settledataloan', 'CloderiaMenuUtils::render_sb_settledataloan');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Item Type', 'Agreement Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agrmntitemtype', 'CloderiaMenuUtils::render_sb_agrmntitemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Item', 'Agreement Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreementitem', 'CloderiaMenuUtils::render_sb_agreementitem');
	 	add_submenu_page( self::admin_menu_slug , 'Service Type', 'Service Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_servicetype', 'CloderiaMenuUtils::render_sb_servicetype');
	 	add_submenu_page( self::admin_menu_slug , 'Service', 'Service', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_service', 'CloderiaMenuUtils::render_sb_service');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Service', 'Agreement Service', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreeservice', 'CloderiaMenuUtils::render_sb_agreeservice');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Unit', 'Agreement Unit', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreeunit', 'CloderiaMenuUtils::render_sb_agreeunit');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Charge', 'Agreement Charge', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreecharge', 'CloderiaMenuUtils::render_sb_agreecharge');
	 	add_submenu_page( self::admin_menu_slug , 'Agreement Term', 'Agreement Term', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_agreeterm', 'CloderiaMenuUtils::render_sb_agreeterm');
	 	add_submenu_page( self::admin_menu_slug , 'Charge In Agreement', 'Charge In Agreement', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_chargeinagrmt', 'CloderiaMenuUtils::render_sb_chargeinagrmt');
	 	add_submenu_page( self::admin_menu_slug , 'Rent Status', 'Rent Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_rentstatus', 'CloderiaMenuUtils::render_sb_rentstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Rent', 'Rent', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_rent', 'CloderiaMenuUtils::render_sb_rent');
	 	add_submenu_page( self::admin_menu_slug , 'Assessment Type', 'Assessment Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_assmttype', 'CloderiaMenuUtils::render_sb_assmttype');
	 	add_submenu_page( self::admin_menu_slug , 'Assessment', 'Assessment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_assessment', 'CloderiaMenuUtils::render_sb_assessment');
	 	add_submenu_page( self::admin_menu_slug , 'Sales Data Type', 'Sales Data Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_sdtype', 'CloderiaMenuUtils::render_sb_sdtype');
	 	add_submenu_page( self::admin_menu_slug , 'Sales Data', 'Sales Data', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_salesdata', 'CloderiaMenuUtils::render_sb_salesdata');
	 	add_submenu_page( self::admin_menu_slug , 'Sales Data Item Type', 'Sales Data Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_sditemtype', 'CloderiaMenuUtils::render_sb_sditemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Sales Data Item', 'Sales Data Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_salesdataitem', 'CloderiaMenuUtils::render_sb_salesdataitem');
	 	add_submenu_page( self::admin_menu_slug , 'Cost Data Type', 'Cost Data Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_cdtype', 'CloderiaMenuUtils::render_sb_cdtype');
	 	add_submenu_page( self::admin_menu_slug , 'Cost Data', 'Cost Data', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_costdata', 'CloderiaMenuUtils::render_sb_costdata');
	 	add_submenu_page( self::admin_menu_slug , 'Cost Data Item Type', 'Cost Data Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_cditemtype', 'CloderiaMenuUtils::render_sb_cditemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Cost Data Item', 'Cost Data Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_cditemdata', 'CloderiaMenuUtils::render_sb_cditemdata');
	 	add_submenu_page( self::admin_menu_slug , 'Income Data Type', 'Income Data Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_idtype', 'CloderiaMenuUtils::render_sb_idtype');
	 	add_submenu_page( self::admin_menu_slug , 'Income Data', 'Income Data', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_incomedata', 'CloderiaMenuUtils::render_sb_incomedata');
	 	add_submenu_page( self::admin_menu_slug , 'Income Data Expense Type', 'Income Data Expense Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_idetype', 'CloderiaMenuUtils::render_sb_idetype');
	 	add_submenu_page( self::admin_menu_slug , 'Income Data Expense', 'Income Data Expense', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_idexpense', 'CloderiaMenuUtils::render_sb_idexpense');
	 	add_submenu_page( self::admin_menu_slug , 'Billing Account', 'Billing Account', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_billaccount', 'CloderiaMenuUtils::render_sb_billaccount');
	 	add_submenu_page( self::admin_menu_slug , 'Account Transaction Type', 'Account Transaction Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_accttxntype', 'CloderiaMenuUtils::render_sb_accttxntype');
	 	add_submenu_page( self::admin_menu_slug , 'Account Transaction Status', 'Account Transaction Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_accttxnstatus', 'CloderiaMenuUtils::render_sb_accttxnstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Account Transaction', 'Account Transaction', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_accttransaction', 'CloderiaMenuUtils::render_sb_accttransaction');
	 	add_submenu_page( self::admin_menu_slug , 'Funding Method', 'Funding Method', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_fundmeth', 'CloderiaMenuUtils::render_sb_fundmeth');
	 	add_submenu_page( self::admin_menu_slug , 'Template Type', 'Template Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_templatetype', 'CloderiaMenuUtils::render_sb_templatetype');
	 	add_submenu_page( self::admin_menu_slug , 'Template', 'Template', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_template', 'CloderiaMenuUtils::render_sb_template');
	 	add_submenu_page( self::admin_menu_slug , 'Invoice Type', 'Invoice Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invoicetype', 'CloderiaMenuUtils::render_sb_invoicetype');
	 	add_submenu_page( self::admin_menu_slug , 'Invoice Status', 'Invoice Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invoicestatus', 'CloderiaMenuUtils::render_sb_invoicestatus');
	 	add_submenu_page( self::admin_menu_slug , 'Invoice', 'Invoice', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invoice', 'CloderiaMenuUtils::render_sb_invoice');
	 	add_submenu_page( self::admin_menu_slug , 'Invoice Role', 'Invoice Role', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invoicerole', 'CloderiaMenuUtils::render_sb_invoicerole');
	 	add_submenu_page( self::admin_menu_slug , 'Invoice Item Type', 'Invoice Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invoiceitemtype', 'CloderiaMenuUtils::render_sb_invoiceitemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Invoice Item', 'Invoice Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invoiceitem', 'CloderiaMenuUtils::render_sb_invoiceitem');
	 	add_submenu_page( self::admin_menu_slug , 'Invoice Term', 'Invoice Term', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_invoiceterm', 'CloderiaMenuUtils::render_sb_invoiceterm');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Order Type', 'Purchase Order Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pordertype', 'CloderiaMenuUtils::render_sb_pordertype');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Order Status', 'Purchase Order Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_porderstatus', 'CloderiaMenuUtils::render_sb_porderstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Order', 'Purchase Order', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_porder', 'CloderiaMenuUtils::render_sb_porder');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Order Role', 'Purchase Order Role', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_porole', 'CloderiaMenuUtils::render_sb_porole');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Order Item Type', 'Purchase Order Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_poitemtype', 'CloderiaMenuUtils::render_sb_poitemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Order Item', 'Purchase Order Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_porderitem', 'CloderiaMenuUtils::render_sb_porderitem');
	 	add_submenu_page( self::admin_menu_slug , 'Purchase Order Term', 'Purchase Order Term', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_porderterm', 'CloderiaMenuUtils::render_sb_porderterm');
	 	add_submenu_page( self::admin_menu_slug , 'Payment Type', 'Payment Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_paymenttype', 'CloderiaMenuUtils::render_sb_paymenttype');
	 	add_submenu_page( self::admin_menu_slug , 'Payment Method Type', 'Payment Method Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_paymethtype', 'CloderiaMenuUtils::render_sb_paymethtype');
	 	add_submenu_page( self::admin_menu_slug , 'Payment', 'Payment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_payment', 'CloderiaMenuUtils::render_sb_payment');
	 	add_submenu_page( self::admin_menu_slug , 'Payment Application', 'Payment Application', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_payapp', 'CloderiaMenuUtils::render_sb_payapp');
	 	add_submenu_page( self::admin_menu_slug , 'Receipt Type', 'Receipt Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_receipttype', 'CloderiaMenuUtils::render_sb_receipttype');
	 	add_submenu_page( self::admin_menu_slug , 'Disbursement Type', 'Disbursement Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_disbursetype', 'CloderiaMenuUtils::render_sb_disbursetype');
	 	add_submenu_page( self::admin_menu_slug , 'Receipt', 'Receipt', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_receipt', 'CloderiaMenuUtils::render_sb_receipt');
	 	add_submenu_page( self::admin_menu_slug , 'Disbursement', 'Disbursement', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_disbursement', 'CloderiaMenuUtils::render_sb_disbursement');
	 	add_submenu_page( self::admin_menu_slug , 'Period Type', 'Period Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_periodtype', 'CloderiaMenuUtils::render_sb_periodtype');
	 	add_submenu_page( self::admin_menu_slug , 'Accounting Period', 'Accounting Period', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_acctperiod', 'CloderiaMenuUtils::render_sb_acctperiod');
	 	add_submenu_page( self::admin_menu_slug , 'COA Account Structure', 'COA Account Structure', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_coaacctstruct', 'CloderiaMenuUtils::render_sb_coaacctstruct');
	 	add_submenu_page( self::admin_menu_slug , 'COA Account Segement Type', 'COA Account Segement Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_coaacctsegtype', 'CloderiaMenuUtils::render_sb_coaacctsegtype');
	 	add_submenu_page( self::admin_menu_slug , 'COA Account Segment Type Value', 'COA Account Segment Type Value', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_coaasegval', 'CloderiaMenuUtils::render_sb_coaasegval');
	 	add_submenu_page( self::admin_menu_slug , 'COA Account Segment', 'COA Account Segment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_coaacctseg', 'CloderiaMenuUtils::render_sb_coaacctseg');
	 	add_submenu_page( self::admin_menu_slug , 'COA Status', 'COA Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_coastatus', 'CloderiaMenuUtils::render_sb_coastatus');
	 	add_submenu_page( self::admin_menu_slug , 'Chart Of Accounts', 'Chart Of Accounts', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_coa', 'CloderiaMenuUtils::render_sb_coa');
	 	add_submenu_page( self::admin_menu_slug , 'GL Account Type', 'GL Account Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_glaccttype', 'CloderiaMenuUtils::render_sb_glaccttype');
	 	add_submenu_page( self::admin_menu_slug , 'GL Account', 'GL Account', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_glaccount', 'CloderiaMenuUtils::render_sb_glaccount');
	 	add_submenu_page( self::admin_menu_slug , 'Business Unit GL Account', 'Business Unit GL Account', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_buglaccount', 'CloderiaMenuUtils::render_sb_buglaccount');
	 	add_submenu_page( self::admin_menu_slug , 'Business Unit GL Account Balance', 'Business Unit GL Account Balance', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_buglaccountbal', 'CloderiaMenuUtils::render_sb_buglaccountbal');
	 	add_submenu_page( self::admin_menu_slug , 'COA Account Segment Instance', 'COA Account Segment Instance', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_coaaseginst', 'CloderiaMenuUtils::render_sb_coaaseginst');
	 	add_submenu_page( self::admin_menu_slug , 'Financial Event Type', 'Financial Event Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_feventtype', 'CloderiaMenuUtils::render_sb_feventtype');
	 	add_submenu_page( self::admin_menu_slug , 'Financial EVent', 'Financial EVent', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_fevent', 'CloderiaMenuUtils::render_sb_fevent');
	 	add_submenu_page( self::admin_menu_slug , 'Transaction Type', 'Transaction Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_txntype', 'CloderiaMenuUtils::render_sb_txntype');
	 	add_submenu_page( self::admin_menu_slug , 'Transaction', 'Transaction', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_transaction', 'CloderiaMenuUtils::render_sb_transaction');
	 	add_submenu_page( self::admin_menu_slug , 'Transaction Detail', 'Transaction Detail', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_txndetail', 'CloderiaMenuUtils::render_sb_txndetail');
	 	add_submenu_page( self::admin_menu_slug , 'Financial Event Transaction Type', 'Financial Event Transaction Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_feventtxntype', 'CloderiaMenuUtils::render_sb_feventtxntype');
	 	add_submenu_page( self::admin_menu_slug , 'Transaction Type GL Account', 'Transaction Type GL Account', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_txntypeacct', 'CloderiaMenuUtils::render_sb_txntypeacct');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Type', 'Budget Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budgettype', 'CloderiaMenuUtils::render_sb_budgettype');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Status', 'Budget Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budgetstatus', 'CloderiaMenuUtils::render_sb_budgetstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Budget', 'Budget', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budget', 'CloderiaMenuUtils::render_sb_budget');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Item Type', 'Budget Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_bitemtype', 'CloderiaMenuUtils::render_sb_bitemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Item', 'Budget Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budgetitem', 'CloderiaMenuUtils::render_sb_budgetitem');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Role', 'Budget Role', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budgetrole', 'CloderiaMenuUtils::render_sb_budgetrole');
	 	add_submenu_page( self::admin_menu_slug , 'Standard Time Period', 'Standard Time Period', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_stperiod', 'CloderiaMenuUtils::render_sb_stperiod');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Review Result Type', 'Budget Review Result Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_brrtype', 'CloderiaMenuUtils::render_sb_brrtype');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Review', 'Budget Review', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budgetreview', 'CloderiaMenuUtils::render_sb_budgetreview');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Revision', 'Budget Revision', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_brevision', 'CloderiaMenuUtils::render_sb_brevision');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Revision Impact', 'Budget Revision Impact', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budgetrevimpact', 'CloderiaMenuUtils::render_sb_budgetrevimpact');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Scenario', 'Budget Scenario', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_budgetscenario', 'CloderiaMenuUtils::render_sb_budgetscenario');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Scenario Rule', 'Budget Scenario Rule', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_bscenariorule', 'CloderiaMenuUtils::render_sb_bscenariorule');
	 	add_submenu_page( self::admin_menu_slug , 'Budget Scenario Application', 'Budget Scenario Application', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_bscenarioapp', 'CloderiaMenuUtils::render_sb_bscenarioapp');
	 	add_submenu_page( self::admin_menu_slug , 'Payment Budget Allocation', 'Payment Budget Allocation', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pballocation', 'CloderiaMenuUtils::render_sb_pballocation');
	 	add_submenu_page( self::admin_menu_slug , 'GL Budget XREF', 'GL Budget XREF', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_glbudgetxref', 'CloderiaMenuUtils::render_sb_glbudgetxref');
	 	add_submenu_page( self::admin_menu_slug , 'Dispute Type', 'Dispute Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_disputetype', 'CloderiaMenuUtils::render_sb_disputetype');
	 	add_submenu_page( self::admin_menu_slug , 'Dispute Status', 'Dispute Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_disputestatus', 'CloderiaMenuUtils::render_sb_disputestatus');
	 	add_submenu_page( self::admin_menu_slug , 'Dispute', 'Dispute', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_dispute', 'CloderiaMenuUtils::render_sb_dispute');
	 	add_submenu_page( self::admin_menu_slug , 'Dispute Item', 'Dispute Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_disputeitem', 'CloderiaMenuUtils::render_sb_disputeitem');
	 	add_submenu_page( self::admin_menu_slug , 'Conversation', 'Conversation', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_conversation', 'CloderiaMenuUtils::render_sb_conversation');
	 	add_submenu_page( self::admin_menu_slug , 'Conversation User', 'Conversation User', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_conuser', 'CloderiaMenuUtils::render_sb_conuser');
	 	add_submenu_page( self::admin_menu_slug , 'Message', 'Message', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_message', 'CloderiaMenuUtils::render_sb_message');
	 	add_submenu_page( self::admin_menu_slug , 'Message Files', 'Message Files', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_messagesfiles', 'CloderiaMenuUtils::render_sb_messagesfiles');
	 	add_submenu_page( self::admin_menu_slug , 'Notification Type', 'Notification Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_notifytype', 'CloderiaMenuUtils::render_sb_notifytype');
	 	add_submenu_page( self::admin_menu_slug , 'Notification Status', 'Notification Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_notifystatus', 'CloderiaMenuUtils::render_sb_notifystatus');
	 	add_submenu_page( self::admin_menu_slug , 'Notification Level', 'Notification Level', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_notifylevel', 'CloderiaMenuUtils::render_sb_notifylevel');
	 	add_submenu_page( self::admin_menu_slug , 'Notification', 'Notification', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_notification', 'CloderiaMenuUtils::render_sb_notification');
	 	add_submenu_page( self::admin_menu_slug , 'Position Classification Type', 'Position Classification Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pclasstype', 'CloderiaMenuUtils::render_sb_pclasstype');
	 	add_submenu_page( self::admin_menu_slug , 'Position Type Class', 'Position Type Class', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_ptypeclass', 'CloderiaMenuUtils::render_sb_ptypeclass');
	 	add_submenu_page( self::admin_menu_slug , 'Position Type', 'Position Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_positiontype', 'CloderiaMenuUtils::render_sb_positiontype');
	 	add_submenu_page( self::admin_menu_slug , 'Position Status', 'Position Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pstatus', 'CloderiaMenuUtils::render_sb_pstatus');
	 	add_submenu_page( self::admin_menu_slug , 'ResponsibilityType', 'ResponsibilityType', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_resptype', 'CloderiaMenuUtils::render_sb_resptype');
	 	add_submenu_page( self::admin_menu_slug , 'Valid Responsibility', 'Valid Responsibility', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_validresp', 'CloderiaMenuUtils::render_sb_validresp');
	 	add_submenu_page( self::admin_menu_slug , 'Position', 'Position', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_position', 'CloderiaMenuUtils::render_sb_position');
	 	add_submenu_page( self::admin_menu_slug , 'Position Responsibility', 'Position Responsibility', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_posresp', 'CloderiaMenuUtils::render_sb_posresp');
	 	add_submenu_page( self::admin_menu_slug , 'Position Fulfillment', 'Position Fulfillment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_pfulfillment', 'CloderiaMenuUtils::render_sb_pfulfillment');
	 	add_submenu_page( self::admin_menu_slug , 'Position Reporting Structure', 'Position Reporting Structure', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_preportstruct', 'CloderiaMenuUtils::render_sb_preportstruct');
	 	add_submenu_page( self::admin_menu_slug , 'Rate Type', 'Rate Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_ratetype', 'CloderiaMenuUtils::render_sb_ratetype');
	 	add_submenu_page( self::admin_menu_slug , 'Pay Grade', 'Pay Grade', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_paygrade', 'CloderiaMenuUtils::render_sb_paygrade');
	 	add_submenu_page( self::admin_menu_slug , 'Salaray Step', 'Salaray Step', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_salarystep', 'CloderiaMenuUtils::render_sb_salarystep');
	 	add_submenu_page( self::admin_menu_slug , 'Position Type Rate', 'Position Type Rate', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_ptyperate', 'CloderiaMenuUtils::render_sb_ptyperate');
	 	add_submenu_page( self::admin_menu_slug , 'Pay History', 'Pay History', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_payhistory', 'CloderiaMenuUtils::render_sb_payhistory');
	 	add_submenu_page( self::admin_menu_slug , 'Benefit Type', 'Benefit Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_benefittype', 'CloderiaMenuUtils::render_sb_benefittype');
	 	add_submenu_page( self::admin_menu_slug , 'Party Benefit', 'Party Benefit', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partybenefit', 'CloderiaMenuUtils::render_sb_partybenefit');
	 	add_submenu_page( self::admin_menu_slug , 'Deduction Type', 'Deduction Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_deductiontype', 'CloderiaMenuUtils::render_sb_deductiontype');
	 	add_submenu_page( self::admin_menu_slug , 'Deduction', 'Deduction', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_deduction', 'CloderiaMenuUtils::render_sb_deduction');
	 	add_submenu_page( self::admin_menu_slug , 'Payroll Preference', 'Payroll Preference', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_prpreference', 'CloderiaMenuUtils::render_sb_prpreference');
	 	add_submenu_page( self::admin_menu_slug , 'Employment Application Status', 'Employment Application Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_empappstatus', 'CloderiaMenuUtils::render_sb_empappstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Employment Application Source Type', 'Employment Application Source Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_empappsrctype', 'CloderiaMenuUtils::render_sb_empappsrctype');
	 	add_submenu_page( self::admin_menu_slug , 'Employment Application Source Type', 'Employment Application Source Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_empapplication', 'CloderiaMenuUtils::render_sb_empapplication');
	 	add_submenu_page( self::admin_menu_slug , 'Qualification Type', 'Qualification Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_qualtype', 'CloderiaMenuUtils::render_sb_qualtype');
	 	add_submenu_page( self::admin_menu_slug , 'Skill Type', 'Skill Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_skilltype', 'CloderiaMenuUtils::render_sb_skilltype');
	 	add_submenu_page( self::admin_menu_slug , 'Training Class Type', 'Training Class Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_tctype', 'CloderiaMenuUtils::render_sb_tctype');
	 	add_submenu_page( self::admin_menu_slug , 'Person Training', 'Person Training', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_ptraining', 'CloderiaMenuUtils::render_sb_ptraining');
	 	add_submenu_page( self::admin_menu_slug , 'Resume', 'Resume', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_resume', 'CloderiaMenuUtils::render_sb_resume');
	 	add_submenu_page( self::admin_menu_slug , 'Party Skill', 'Party Skill', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partyskill', 'CloderiaMenuUtils::render_sb_partyskill');
	 	add_submenu_page( self::admin_menu_slug , 'Party Qualification', 'Party Qualification', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partyqual', 'CloderiaMenuUtils::render_sb_partyqual');
	 	add_submenu_page( self::admin_menu_slug , 'Performance Note Type', 'Performance Note Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_perfnoteype', 'CloderiaMenuUtils::render_sb_perfnoteype');
	 	add_submenu_page( self::admin_menu_slug , 'Performance Note', 'Performance Note', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_perfnote', 'CloderiaMenuUtils::render_sb_perfnote');
	 	add_submenu_page( self::admin_menu_slug , 'Performance Review', 'Performance Review', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_perfreview', 'CloderiaMenuUtils::render_sb_perfreview');
	 	add_submenu_page( self::admin_menu_slug , 'Rating Type', 'Rating Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_ratingtype', 'CloderiaMenuUtils::render_sb_ratingtype');
	 	add_submenu_page( self::admin_menu_slug , 'Performance Review Item Type', 'Performance Review Item Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_previtemtype', 'CloderiaMenuUtils::render_sb_previtemtype');
	 	add_submenu_page( self::admin_menu_slug , 'Performance Review Item', 'Performance Review Item', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_perfreviewitem', 'CloderiaMenuUtils::render_sb_perfreviewitem');
	 	add_submenu_page( self::admin_menu_slug , 'Termination Type', 'Termination Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_terminationtype', 'CloderiaMenuUtils::render_sb_terminationtype');
	 	add_submenu_page( self::admin_menu_slug , 'Termination Reason', 'Termination Reason', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_termreason', 'CloderiaMenuUtils::render_sb_termreason');
	 	add_submenu_page( self::admin_menu_slug , 'Unemployment Claim Status', 'Unemployment Claim Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_ucstatus', 'CloderiaMenuUtils::render_sb_ucstatus');
	 	add_submenu_page( self::admin_menu_slug , 'Unemployment Claim', 'Unemployment Claim', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_uempclaim', 'CloderiaMenuUtils::render_sb_uempclaim');
	 	add_submenu_page( self::admin_menu_slug , 'Deliverable Type', 'Deliverable Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_delivertype', 'CloderiaMenuUtils::render_sb_delivertype');
	 	add_submenu_page( self::admin_menu_slug , 'Deliverable', 'Deliverable', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_deliverable', 'CloderiaMenuUtils::render_sb_deliverable');
	 	add_submenu_page( self::admin_menu_slug , 'Requirement Type', 'Requirement Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_requiretype', 'CloderiaMenuUtils::render_sb_requiretype');
	 	add_submenu_page( self::admin_menu_slug , 'Requirement', 'Requirement', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_requirement', 'CloderiaMenuUtils::render_sb_requirement');
	 	add_submenu_page( self::admin_menu_slug , 'Require Role', 'Require Role', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_requirerole', 'CloderiaMenuUtils::render_sb_requirerole');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Category', 'Work Effort Category', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wetypecat', 'CloderiaMenuUtils::render_sb_wetypecat');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Type', 'Work Effort Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wetype', 'CloderiaMenuUtils::render_sb_wetype');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Purpose Type', 'Work Effort Purpose Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_weptype', 'CloderiaMenuUtils::render_sb_weptype');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Status', 'Work Effort Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_westatus', 'CloderiaMenuUtils::render_sb_westatus');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort', 'Work Effort', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_workeffort', 'CloderiaMenuUtils::render_sb_workeffort');
	 	add_submenu_page( self::admin_menu_slug , 'Work Requirement Fulfillment', 'Work Requirement Fulfillment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wrfulfillment', 'CloderiaMenuUtils::render_sb_wrfulfillment');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Association Type', 'Work Effort Association Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_weatype', 'CloderiaMenuUtils::render_sb_weatype');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Association', 'Work Effort Association', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_weassociation', 'CloderiaMenuUtils::render_sb_weassociation');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Role Type', 'Work Effort Role Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wertype', 'CloderiaMenuUtils::render_sb_wertype');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Party Assignment', 'Work Effort Party Assignment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wepatyassign', 'CloderiaMenuUtils::render_sb_wepatyassign');
	 	add_submenu_page( self::admin_menu_slug , 'Time Sheet', 'Time Sheet', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_timesheet', 'CloderiaMenuUtils::render_sb_timesheet');
	 	add_submenu_page( self::admin_menu_slug , 'Time Sheet Role Type', 'Time Sheet Role Type', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_tsrtype', 'CloderiaMenuUtils::render_sb_tsrtype');
	 	add_submenu_page( self::admin_menu_slug , 'Time Sheet Role', 'Time Sheet Role', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_tsrole', 'CloderiaMenuUtils::render_sb_tsrole');
	 	add_submenu_page( self::admin_menu_slug , 'Time Entry', 'Time Entry', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_timeentry', 'CloderiaMenuUtils::render_sb_timeentry');
	 	add_submenu_page( self::admin_menu_slug , 'Party Rate', 'Party Rate', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_partyrate', 'CloderiaMenuUtils::render_sb_partyrate');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Assignment Rate', 'Work Effort Assignment Rate', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wearate', 'CloderiaMenuUtils::render_sb_wearate');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Inventory Assignment', 'Work Effort Inventory Assignment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_weiassign', 'CloderiaMenuUtils::render_sb_weiassign');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Asset Assignment Status', 'Work Effort Asset Assignment Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_weaastatus', 'CloderiaMenuUtils::render_sb_weaastatus');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Asset Assignment', 'Work Effort Asset Assignment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_weaassign', 'CloderiaMenuUtils::render_sb_weaassign');
	 	add_submenu_page( self::admin_menu_slug , 'Party Asset Assignment Status', 'Party Asset Assignment Status', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wepastatus', 'CloderiaMenuUtils::render_sb_wepastatus');
	 	add_submenu_page( self::admin_menu_slug , 'Party Asset Assignment', 'Party Asset Assignment', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_paassign', 'CloderiaMenuUtils::render_sb_paassign');
	 	add_submenu_page( self::admin_menu_slug , 'Work Effort Deliverable', 'Work Effort Deliverable', 'manage_options', 
	 		self::admin_menu_slug . '_show_sb_wedeliverable', 'CloderiaMenuUtils::render_sb_wedeliverable');
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
       remove_menu_page( 'edit.php?post_type=sb_partyfiles');
       remove_menu_page( 'edit.php?post_type=sb_invitestatus');
       remove_menu_page( 'edit.php?post_type=sb_userinvite');
       remove_menu_page( 'edit.php?post_type=sb_businesscat');
       remove_menu_page( 'edit.php?post_type=sb_chargetype');
       remove_menu_page( 'edit.php?post_type=sb_chargefreq');
       remove_menu_page( 'edit.php?post_type=sb_charge');
       remove_menu_page( 'edit.php?post_type=sb_expensetype');
       remove_menu_page( 'edit.php?post_type=sb_expensefreq');
       remove_menu_page( 'edit.php?post_type=sb_expense');
       remove_menu_page( 'edit.php?post_type=sb_liabcat');
       remove_menu_page( 'edit.php?post_type=sb_liabtype');
       remove_menu_page( 'edit.php?post_type=sb_liability');
       remove_menu_page( 'edit.php?post_type=sb_dmethod');
       remove_menu_page( 'edit.php?post_type=sb_uom');
       remove_menu_page( 'edit.php?post_type=sb_utilitytype');
       remove_menu_page( 'edit.php?post_type=sb_utility');
       remove_menu_page( 'edit.php?post_type=sb_facilitycat');
       remove_menu_page( 'edit.php?post_type=sb_facilitytype');
       remove_menu_page( 'edit.php?post_type=sb_facility');
       remove_menu_page( 'edit.php?post_type=sb_facilityrole');
       remove_menu_page( 'edit.php?post_type=sb_facharge');
       remove_menu_page( 'edit.php?post_type=sb_proptype');
       remove_menu_page( 'edit.php?post_type=sb_propstatus');
       remove_menu_page( 'edit.php?post_type=sb_property');
       remove_menu_page( 'edit.php?post_type=sb_zonetype');
       remove_menu_page( 'edit.php?post_type=sb_zoningdata');
       remove_menu_page( 'edit.php?post_type=sb_mortgagetype');
       remove_menu_page( 'edit.php?post_type=sb_mortgage');
       remove_menu_page( 'edit.php?post_type=sb_laccessibility');
       remove_menu_page( 'edit.php?post_type=sb_ltopography');
       remove_menu_page( 'edit.php?post_type=sb_landtype');
       remove_menu_page( 'edit.php?post_type=sb_soiltype');
       remove_menu_page( 'edit.php?post_type=sb_lshape');
       remove_menu_page( 'edit.php?post_type=sb_land');
       remove_menu_page( 'edit.php?post_type=sb_plottype');
       remove_menu_page( 'edit.php?post_type=sb_plot');
       remove_menu_page( 'edit.php?post_type=sb_improvetype');
       remove_menu_page( 'edit.php?post_type=sb_improvement');
       remove_menu_page( 'edit.php?post_type=sb_proputility');
       remove_menu_page( 'edit.php?post_type=sb_pcharge');
       remove_menu_page( 'edit.php?post_type=sb_assetcat');
       remove_menu_page( 'edit.php?post_type=sb_assettype');
       remove_menu_page( 'edit.php?post_type=sb_asset');
       remove_menu_page( 'edit.php?post_type=sb_inventype');
       remove_menu_page( 'edit.php?post_type=sb_inventory');
       remove_menu_page( 'edit.php?post_type=sb_invitemtype');
       remove_menu_page( 'edit.php?post_type=sb_inventoryitem');
       remove_menu_page( 'edit.php?post_type=sb_propstaff');
       remove_menu_page( 'edit.php?post_type=sb_propfiles');
       remove_menu_page( 'edit.php?post_type=sb_buildingtype');
       remove_menu_page( 'edit.php?post_type=sb_buildtypropty');
       remove_menu_page( 'edit.php?post_type=sb_allocunit');
       remove_menu_page( 'edit.php?post_type=sb_building');
       remove_menu_page( 'edit.php?post_type=sb_bcharge');
       remove_menu_page( 'edit.php?post_type=sb_buildfiles');
       remove_menu_page( 'edit.php?post_type=sb_floortype');
       remove_menu_page( 'edit.php?post_type=sb_floor');
       remove_menu_page( 'edit.php?post_type=sb_fcharge');
       remove_menu_page( 'edit.php?post_type=sb_unittype');
       remove_menu_page( 'edit.php?post_type=sb_utypecharge');
       remove_menu_page( 'edit.php?post_type=sb_unit');
       remove_menu_page( 'edit.php?post_type=sb_unitcharge');
       remove_menu_page( 'edit.php?post_type=sb_pslottype');
       remove_menu_page( 'edit.php?post_type=sb_pstypecharge');
       remove_menu_page( 'edit.php?post_type=sb_pslot');
       remove_menu_page( 'edit.php?post_type=sb_agreecat');
       remove_menu_page( 'edit.php?post_type=sb_agreetype');
       remove_menu_page( 'edit.php?post_type=sb_agreetypecharge');
       remove_menu_page( 'edit.php?post_type=sb_termtype');
       remove_menu_page( 'edit.php?post_type=sb_term');
       remove_menu_page( 'edit.php?post_type=sb_agreement');
       remove_menu_page( 'edit.php?post_type=sb_purchaseagrmnt');
       remove_menu_page( 'edit.php?post_type=sb_settlementdata');
       remove_menu_page( 'edit.php?post_type=sb_settledataloan');
       remove_menu_page( 'edit.php?post_type=sb_agrmntitemtype');
       remove_menu_page( 'edit.php?post_type=sb_agreementitem');
       remove_menu_page( 'edit.php?post_type=sb_servicetype');
       remove_menu_page( 'edit.php?post_type=sb_service');
       remove_menu_page( 'edit.php?post_type=sb_agreeservice');
       remove_menu_page( 'edit.php?post_type=sb_agreeunit');
       remove_menu_page( 'edit.php?post_type=sb_agreecharge');
       remove_menu_page( 'edit.php?post_type=sb_agreeterm');
       remove_menu_page( 'edit.php?post_type=sb_chargeinagrmt');
       remove_menu_page( 'edit.php?post_type=sb_rentstatus');
       remove_menu_page( 'edit.php?post_type=sb_rent');
       remove_menu_page( 'edit.php?post_type=sb_assmttype');
       remove_menu_page( 'edit.php?post_type=sb_assessment');
       remove_menu_page( 'edit.php?post_type=sb_sdtype');
       remove_menu_page( 'edit.php?post_type=sb_salesdata');
       remove_menu_page( 'edit.php?post_type=sb_sditemtype');
       remove_menu_page( 'edit.php?post_type=sb_salesdataitem');
       remove_menu_page( 'edit.php?post_type=sb_cdtype');
       remove_menu_page( 'edit.php?post_type=sb_costdata');
       remove_menu_page( 'edit.php?post_type=sb_cditemtype');
       remove_menu_page( 'edit.php?post_type=sb_cditemdata');
       remove_menu_page( 'edit.php?post_type=sb_idtype');
       remove_menu_page( 'edit.php?post_type=sb_incomedata');
       remove_menu_page( 'edit.php?post_type=sb_idetype');
       remove_menu_page( 'edit.php?post_type=sb_idexpense');
       remove_menu_page( 'edit.php?post_type=sb_billaccount');
       remove_menu_page( 'edit.php?post_type=sb_accttxntype');
       remove_menu_page( 'edit.php?post_type=sb_accttxnstatus');
       remove_menu_page( 'edit.php?post_type=sb_accttransaction');
       remove_menu_page( 'edit.php?post_type=sb_fundmeth');
       remove_menu_page( 'edit.php?post_type=sb_templatetype');
       remove_menu_page( 'edit.php?post_type=sb_template');
       remove_menu_page( 'edit.php?post_type=sb_invoicetype');
       remove_menu_page( 'edit.php?post_type=sb_invoicestatus');
       remove_menu_page( 'edit.php?post_type=sb_invoice');
       remove_menu_page( 'edit.php?post_type=sb_invoicerole');
       remove_menu_page( 'edit.php?post_type=sb_invoiceitemtype');
       remove_menu_page( 'edit.php?post_type=sb_invoiceitem');
       remove_menu_page( 'edit.php?post_type=sb_invoiceterm');
       remove_menu_page( 'edit.php?post_type=sb_pordertype');
       remove_menu_page( 'edit.php?post_type=sb_porderstatus');
       remove_menu_page( 'edit.php?post_type=sb_porder');
       remove_menu_page( 'edit.php?post_type=sb_porole');
       remove_menu_page( 'edit.php?post_type=sb_poitemtype');
       remove_menu_page( 'edit.php?post_type=sb_porderitem');
       remove_menu_page( 'edit.php?post_type=sb_porderterm');
       remove_menu_page( 'edit.php?post_type=sb_paymenttype');
       remove_menu_page( 'edit.php?post_type=sb_paymethtype');
       remove_menu_page( 'edit.php?post_type=sb_payment');
       remove_menu_page( 'edit.php?post_type=sb_payapp');
       remove_menu_page( 'edit.php?post_type=sb_receipttype');
       remove_menu_page( 'edit.php?post_type=sb_disbursetype');
       remove_menu_page( 'edit.php?post_type=sb_receipt');
       remove_menu_page( 'edit.php?post_type=sb_disbursement');
       remove_menu_page( 'edit.php?post_type=sb_periodtype');
       remove_menu_page( 'edit.php?post_type=sb_acctperiod');
       remove_menu_page( 'edit.php?post_type=sb_coaacctstruct');
       remove_menu_page( 'edit.php?post_type=sb_coaacctsegtype');
       remove_menu_page( 'edit.php?post_type=sb_coaasegval');
       remove_menu_page( 'edit.php?post_type=sb_coaacctseg');
       remove_menu_page( 'edit.php?post_type=sb_coastatus');
       remove_menu_page( 'edit.php?post_type=sb_coa');
       remove_menu_page( 'edit.php?post_type=sb_glaccttype');
       remove_menu_page( 'edit.php?post_type=sb_glaccount');
       remove_menu_page( 'edit.php?post_type=sb_buglaccount');
       remove_menu_page( 'edit.php?post_type=sb_buglaccountbal');
       remove_menu_page( 'edit.php?post_type=sb_coaaseginst');
       remove_menu_page( 'edit.php?post_type=sb_feventtype');
       remove_menu_page( 'edit.php?post_type=sb_fevent');
       remove_menu_page( 'edit.php?post_type=sb_txntype');
       remove_menu_page( 'edit.php?post_type=sb_transaction');
       remove_menu_page( 'edit.php?post_type=sb_txndetail');
       remove_menu_page( 'edit.php?post_type=sb_feventtxntype');
       remove_menu_page( 'edit.php?post_type=sb_txntypeacct');
       remove_menu_page( 'edit.php?post_type=sb_budgettype');
       remove_menu_page( 'edit.php?post_type=sb_budgetstatus');
       remove_menu_page( 'edit.php?post_type=sb_budget');
       remove_menu_page( 'edit.php?post_type=sb_bitemtype');
       remove_menu_page( 'edit.php?post_type=sb_budgetitem');
       remove_menu_page( 'edit.php?post_type=sb_budgetrole');
       remove_menu_page( 'edit.php?post_type=sb_stperiod');
       remove_menu_page( 'edit.php?post_type=sb_brrtype');
       remove_menu_page( 'edit.php?post_type=sb_budgetreview');
       remove_menu_page( 'edit.php?post_type=sb_brevision');
       remove_menu_page( 'edit.php?post_type=sb_budgetrevimpact');
       remove_menu_page( 'edit.php?post_type=sb_budgetscenario');
       remove_menu_page( 'edit.php?post_type=sb_bscenariorule');
       remove_menu_page( 'edit.php?post_type=sb_bscenarioapp');
       remove_menu_page( 'edit.php?post_type=sb_pballocation');
       remove_menu_page( 'edit.php?post_type=sb_glbudgetxref');
       remove_menu_page( 'edit.php?post_type=sb_disputetype');
       remove_menu_page( 'edit.php?post_type=sb_disputestatus');
       remove_menu_page( 'edit.php?post_type=sb_dispute');
       remove_menu_page( 'edit.php?post_type=sb_disputeitem');
       remove_menu_page( 'edit.php?post_type=sb_conversation');
       remove_menu_page( 'edit.php?post_type=sb_conuser');
       remove_menu_page( 'edit.php?post_type=sb_message');
       remove_menu_page( 'edit.php?post_type=sb_messagesfiles');
       remove_menu_page( 'edit.php?post_type=sb_notifytype');
       remove_menu_page( 'edit.php?post_type=sb_notifystatus');
       remove_menu_page( 'edit.php?post_type=sb_notifylevel');
       remove_menu_page( 'edit.php?post_type=sb_notification');
       remove_menu_page( 'edit.php?post_type=sb_pclasstype');
       remove_menu_page( 'edit.php?post_type=sb_ptypeclass');
       remove_menu_page( 'edit.php?post_type=sb_positiontype');
       remove_menu_page( 'edit.php?post_type=sb_pstatus');
       remove_menu_page( 'edit.php?post_type=sb_resptype');
       remove_menu_page( 'edit.php?post_type=sb_validresp');
       remove_menu_page( 'edit.php?post_type=sb_position');
       remove_menu_page( 'edit.php?post_type=sb_posresp');
       remove_menu_page( 'edit.php?post_type=sb_pfulfillment');
       remove_menu_page( 'edit.php?post_type=sb_preportstruct');
       remove_menu_page( 'edit.php?post_type=sb_ratetype');
       remove_menu_page( 'edit.php?post_type=sb_paygrade');
       remove_menu_page( 'edit.php?post_type=sb_salarystep');
       remove_menu_page( 'edit.php?post_type=sb_ptyperate');
       remove_menu_page( 'edit.php?post_type=sb_payhistory');
       remove_menu_page( 'edit.php?post_type=sb_benefittype');
       remove_menu_page( 'edit.php?post_type=sb_partybenefit');
       remove_menu_page( 'edit.php?post_type=sb_deductiontype');
       remove_menu_page( 'edit.php?post_type=sb_deduction');
       remove_menu_page( 'edit.php?post_type=sb_prpreference');
       remove_menu_page( 'edit.php?post_type=sb_empappstatus');
       remove_menu_page( 'edit.php?post_type=sb_empappsrctype');
       remove_menu_page( 'edit.php?post_type=sb_empapplication');
       remove_menu_page( 'edit.php?post_type=sb_qualtype');
       remove_menu_page( 'edit.php?post_type=sb_skilltype');
       remove_menu_page( 'edit.php?post_type=sb_tctype');
       remove_menu_page( 'edit.php?post_type=sb_ptraining');
       remove_menu_page( 'edit.php?post_type=sb_resume');
       remove_menu_page( 'edit.php?post_type=sb_partyskill');
       remove_menu_page( 'edit.php?post_type=sb_partyqual');
       remove_menu_page( 'edit.php?post_type=sb_perfnoteype');
       remove_menu_page( 'edit.php?post_type=sb_perfnote');
       remove_menu_page( 'edit.php?post_type=sb_perfreview');
       remove_menu_page( 'edit.php?post_type=sb_ratingtype');
       remove_menu_page( 'edit.php?post_type=sb_previtemtype');
       remove_menu_page( 'edit.php?post_type=sb_perfreviewitem');
       remove_menu_page( 'edit.php?post_type=sb_terminationtype');
       remove_menu_page( 'edit.php?post_type=sb_termreason');
       remove_menu_page( 'edit.php?post_type=sb_ucstatus');
       remove_menu_page( 'edit.php?post_type=sb_uempclaim');
       remove_menu_page( 'edit.php?post_type=sb_delivertype');
       remove_menu_page( 'edit.php?post_type=sb_deliverable');
       remove_menu_page( 'edit.php?post_type=sb_requiretype');
       remove_menu_page( 'edit.php?post_type=sb_requirement');
       remove_menu_page( 'edit.php?post_type=sb_requirerole');
       remove_menu_page( 'edit.php?post_type=sb_wetypecat');
       remove_menu_page( 'edit.php?post_type=sb_wetype');
       remove_menu_page( 'edit.php?post_type=sb_weptype');
       remove_menu_page( 'edit.php?post_type=sb_westatus');
       remove_menu_page( 'edit.php?post_type=sb_workeffort');
       remove_menu_page( 'edit.php?post_type=sb_wrfulfillment');
       remove_menu_page( 'edit.php?post_type=sb_weatype');
       remove_menu_page( 'edit.php?post_type=sb_weassociation');
       remove_menu_page( 'edit.php?post_type=sb_wertype');
       remove_menu_page( 'edit.php?post_type=sb_wepatyassign');
       remove_menu_page( 'edit.php?post_type=sb_timesheet');
       remove_menu_page( 'edit.php?post_type=sb_tsrtype');
       remove_menu_page( 'edit.php?post_type=sb_tsrole');
       remove_menu_page( 'edit.php?post_type=sb_timeentry');
       remove_menu_page( 'edit.php?post_type=sb_partyrate');
       remove_menu_page( 'edit.php?post_type=sb_wearate');
       remove_menu_page( 'edit.php?post_type=sb_weiassign');
       remove_menu_page( 'edit.php?post_type=sb_weaastatus');
       remove_menu_page( 'edit.php?post_type=sb_weaassign');
       remove_menu_page( 'edit.php?post_type=sb_wepastatus');
       remove_menu_page( 'edit.php?post_type=sb_paassign');
       remove_menu_page( 'edit.php?post_type=sb_wedeliverable');
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
	public static function render_sb_partyfiles()
	{
		$url = admin_url().'edit.php?post_type=sb_partyfiles';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_invitestatus()
	{
		$url = admin_url().'edit.php?post_type=sb_invitestatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_userinvite()
	{
		$url = admin_url().'edit.php?post_type=sb_userinvite';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_businesscat()
	{
		$url = admin_url().'edit.php?post_type=sb_businesscat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_chargetype()
	{
		$url = admin_url().'edit.php?post_type=sb_chargetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_chargefreq()
	{
		$url = admin_url().'edit.php?post_type=sb_chargefreq';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_charge()
	{
		$url = admin_url().'edit.php?post_type=sb_charge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_expensetype()
	{
		$url = admin_url().'edit.php?post_type=sb_expensetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_expensefreq()
	{
		$url = admin_url().'edit.php?post_type=sb_expensefreq';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_expense()
	{
		$url = admin_url().'edit.php?post_type=sb_expense';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_liabcat()
	{
		$url = admin_url().'edit.php?post_type=sb_liabcat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_liabtype()
	{
		$url = admin_url().'edit.php?post_type=sb_liabtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_liability()
	{
		$url = admin_url().'edit.php?post_type=sb_liability';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_dmethod()
	{
		$url = admin_url().'edit.php?post_type=sb_dmethod';
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
	public static function render_sb_utilitytype()
	{
		$url = admin_url().'edit.php?post_type=sb_utilitytype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_utility()
	{
		$url = admin_url().'edit.php?post_type=sb_utility';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_facilitycat()
	{
		$url = admin_url().'edit.php?post_type=sb_facilitycat';
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
	public static function render_sb_facilityrole()
	{
		$url = admin_url().'edit.php?post_type=sb_facilityrole';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_facharge()
	{
		$url = admin_url().'edit.php?post_type=sb_facharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_proptype()
	{
		$url = admin_url().'edit.php?post_type=sb_proptype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_propstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_propstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_property()
	{
		$url = admin_url().'edit.php?post_type=sb_property';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_zonetype()
	{
		$url = admin_url().'edit.php?post_type=sb_zonetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_zoningdata()
	{
		$url = admin_url().'edit.php?post_type=sb_zoningdata';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_mortgagetype()
	{
		$url = admin_url().'edit.php?post_type=sb_mortgagetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_mortgage()
	{
		$url = admin_url().'edit.php?post_type=sb_mortgage';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_laccessibility()
	{
		$url = admin_url().'edit.php?post_type=sb_laccessibility';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_ltopography()
	{
		$url = admin_url().'edit.php?post_type=sb_ltopography';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_landtype()
	{
		$url = admin_url().'edit.php?post_type=sb_landtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_soiltype()
	{
		$url = admin_url().'edit.php?post_type=sb_soiltype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_lshape()
	{
		$url = admin_url().'edit.php?post_type=sb_lshape';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_land()
	{
		$url = admin_url().'edit.php?post_type=sb_land';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_plottype()
	{
		$url = admin_url().'edit.php?post_type=sb_plottype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_plot()
	{
		$url = admin_url().'edit.php?post_type=sb_plot';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_improvetype()
	{
		$url = admin_url().'edit.php?post_type=sb_improvetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_improvement()
	{
		$url = admin_url().'edit.php?post_type=sb_improvement';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_proputility()
	{
		$url = admin_url().'edit.php?post_type=sb_proputility';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pcharge()
	{
		$url = admin_url().'edit.php?post_type=sb_pcharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_assetcat()
	{
		$url = admin_url().'edit.php?post_type=sb_assetcat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_assettype()
	{
		$url = admin_url().'edit.php?post_type=sb_assettype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_asset()
	{
		$url = admin_url().'edit.php?post_type=sb_asset';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_inventype()
	{
		$url = admin_url().'edit.php?post_type=sb_inventype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_inventory()
	{
		$url = admin_url().'edit.php?post_type=sb_inventory';
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
	public static function render_sb_propstaff()
	{
		$url = admin_url().'edit.php?post_type=sb_propstaff';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_propfiles()
	{
		$url = admin_url().'edit.php?post_type=sb_propfiles';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_buildingtype()
	{
		$url = admin_url().'edit.php?post_type=sb_buildingtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_buildtypropty()
	{
		$url = admin_url().'edit.php?post_type=sb_buildtypropty';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_allocunit()
	{
		$url = admin_url().'edit.php?post_type=sb_allocunit';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_building()
	{
		$url = admin_url().'edit.php?post_type=sb_building';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_bcharge()
	{
		$url = admin_url().'edit.php?post_type=sb_bcharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_buildfiles()
	{
		$url = admin_url().'edit.php?post_type=sb_buildfiles';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_floortype()
	{
		$url = admin_url().'edit.php?post_type=sb_floortype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_floor()
	{
		$url = admin_url().'edit.php?post_type=sb_floor';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_fcharge()
	{
		$url = admin_url().'edit.php?post_type=sb_fcharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_unittype()
	{
		$url = admin_url().'edit.php?post_type=sb_unittype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_utypecharge()
	{
		$url = admin_url().'edit.php?post_type=sb_utypecharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_unit()
	{
		$url = admin_url().'edit.php?post_type=sb_unit';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_unitcharge()
	{
		$url = admin_url().'edit.php?post_type=sb_unitcharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pslottype()
	{
		$url = admin_url().'edit.php?post_type=sb_pslottype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pstypecharge()
	{
		$url = admin_url().'edit.php?post_type=sb_pstypecharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pslot()
	{
		$url = admin_url().'edit.php?post_type=sb_pslot';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreecat()
	{
		$url = admin_url().'edit.php?post_type=sb_agreecat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreetype()
	{
		$url = admin_url().'edit.php?post_type=sb_agreetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreetypecharge()
	{
		$url = admin_url().'edit.php?post_type=sb_agreetypecharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_termtype()
	{
		$url = admin_url().'edit.php?post_type=sb_termtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_term()
	{
		$url = admin_url().'edit.php?post_type=sb_term';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreement()
	{
		$url = admin_url().'edit.php?post_type=sb_agreement';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_purchaseagrmnt()
	{
		$url = admin_url().'edit.php?post_type=sb_purchaseagrmnt';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_settlementdata()
	{
		$url = admin_url().'edit.php?post_type=sb_settlementdata';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_settledataloan()
	{
		$url = admin_url().'edit.php?post_type=sb_settledataloan';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agrmntitemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_agrmntitemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreementitem()
	{
		$url = admin_url().'edit.php?post_type=sb_agreementitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_servicetype()
	{
		$url = admin_url().'edit.php?post_type=sb_servicetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_service()
	{
		$url = admin_url().'edit.php?post_type=sb_service';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreeservice()
	{
		$url = admin_url().'edit.php?post_type=sb_agreeservice';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreeunit()
	{
		$url = admin_url().'edit.php?post_type=sb_agreeunit';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreecharge()
	{
		$url = admin_url().'edit.php?post_type=sb_agreecharge';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_agreeterm()
	{
		$url = admin_url().'edit.php?post_type=sb_agreeterm';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_chargeinagrmt()
	{
		$url = admin_url().'edit.php?post_type=sb_chargeinagrmt';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_rentstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_rentstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_rent()
	{
		$url = admin_url().'edit.php?post_type=sb_rent';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_assmttype()
	{
		$url = admin_url().'edit.php?post_type=sb_assmttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_assessment()
	{
		$url = admin_url().'edit.php?post_type=sb_assessment';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_sdtype()
	{
		$url = admin_url().'edit.php?post_type=sb_sdtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_salesdata()
	{
		$url = admin_url().'edit.php?post_type=sb_salesdata';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_sditemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_sditemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_salesdataitem()
	{
		$url = admin_url().'edit.php?post_type=sb_salesdataitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_cdtype()
	{
		$url = admin_url().'edit.php?post_type=sb_cdtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_costdata()
	{
		$url = admin_url().'edit.php?post_type=sb_costdata';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_cditemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_cditemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_cditemdata()
	{
		$url = admin_url().'edit.php?post_type=sb_cditemdata';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_idtype()
	{
		$url = admin_url().'edit.php?post_type=sb_idtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_incomedata()
	{
		$url = admin_url().'edit.php?post_type=sb_incomedata';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_idetype()
	{
		$url = admin_url().'edit.php?post_type=sb_idetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_idexpense()
	{
		$url = admin_url().'edit.php?post_type=sb_idexpense';
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
	public static function render_sb_fundmeth()
	{
		$url = admin_url().'edit.php?post_type=sb_fundmeth';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_templatetype()
	{
		$url = admin_url().'edit.php?post_type=sb_templatetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_template()
	{
		$url = admin_url().'edit.php?post_type=sb_template';
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
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pordertype()
	{
		$url = admin_url().'edit.php?post_type=sb_pordertype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_porderstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_porderstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_porder()
	{
		$url = admin_url().'edit.php?post_type=sb_porder';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_porole()
	{
		$url = admin_url().'edit.php?post_type=sb_porole';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_poitemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_poitemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_porderitem()
	{
		$url = admin_url().'edit.php?post_type=sb_porderitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_porderterm()
	{
		$url = admin_url().'edit.php?post_type=sb_porderterm';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_paymenttype()
	{
		$url = admin_url().'edit.php?post_type=sb_paymenttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_paymethtype()
	{
		$url = admin_url().'edit.php?post_type=sb_paymethtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_payment()
	{
		$url = admin_url().'edit.php?post_type=sb_payment';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_payapp()
	{
		$url = admin_url().'edit.php?post_type=sb_payapp';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_receipttype()
	{
		$url = admin_url().'edit.php?post_type=sb_receipttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_disbursetype()
	{
		$url = admin_url().'edit.php?post_type=sb_disbursetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_receipt()
	{
		$url = admin_url().'edit.php?post_type=sb_receipt';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_disbursement()
	{
		$url = admin_url().'edit.php?post_type=sb_disbursement';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_periodtype()
	{
		$url = admin_url().'edit.php?post_type=sb_periodtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_acctperiod()
	{
		$url = admin_url().'edit.php?post_type=sb_acctperiod';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_coaacctstruct()
	{
		$url = admin_url().'edit.php?post_type=sb_coaacctstruct';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_coaacctsegtype()
	{
		$url = admin_url().'edit.php?post_type=sb_coaacctsegtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_coaasegval()
	{
		$url = admin_url().'edit.php?post_type=sb_coaasegval';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_coaacctseg()
	{
		$url = admin_url().'edit.php?post_type=sb_coaacctseg';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_coastatus()
	{
		$url = admin_url().'edit.php?post_type=sb_coastatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_coa()
	{
		$url = admin_url().'edit.php?post_type=sb_coa';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_glaccttype()
	{
		$url = admin_url().'edit.php?post_type=sb_glaccttype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_glaccount()
	{
		$url = admin_url().'edit.php?post_type=sb_glaccount';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_buglaccount()
	{
		$url = admin_url().'edit.php?post_type=sb_buglaccount';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_buglaccountbal()
	{
		$url = admin_url().'edit.php?post_type=sb_buglaccountbal';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_coaaseginst()
	{
		$url = admin_url().'edit.php?post_type=sb_coaaseginst';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_feventtype()
	{
		$url = admin_url().'edit.php?post_type=sb_feventtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_fevent()
	{
		$url = admin_url().'edit.php?post_type=sb_fevent';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_txntype()
	{
		$url = admin_url().'edit.php?post_type=sb_txntype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_transaction()
	{
		$url = admin_url().'edit.php?post_type=sb_transaction';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_txndetail()
	{
		$url = admin_url().'edit.php?post_type=sb_txndetail';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_feventtxntype()
	{
		$url = admin_url().'edit.php?post_type=sb_feventtxntype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_txntypeacct()
	{
		$url = admin_url().'edit.php?post_type=sb_txntypeacct';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budgettype()
	{
		$url = admin_url().'edit.php?post_type=sb_budgettype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budgetstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_budgetstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budget()
	{
		$url = admin_url().'edit.php?post_type=sb_budget';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_bitemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_bitemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budgetitem()
	{
		$url = admin_url().'edit.php?post_type=sb_budgetitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budgetrole()
	{
		$url = admin_url().'edit.php?post_type=sb_budgetrole';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_stperiod()
	{
		$url = admin_url().'edit.php?post_type=sb_stperiod';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_brrtype()
	{
		$url = admin_url().'edit.php?post_type=sb_brrtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budgetreview()
	{
		$url = admin_url().'edit.php?post_type=sb_budgetreview';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_brevision()
	{
		$url = admin_url().'edit.php?post_type=sb_brevision';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budgetrevimpact()
	{
		$url = admin_url().'edit.php?post_type=sb_budgetrevimpact';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_budgetscenario()
	{
		$url = admin_url().'edit.php?post_type=sb_budgetscenario';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_bscenariorule()
	{
		$url = admin_url().'edit.php?post_type=sb_bscenariorule';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_bscenarioapp()
	{
		$url = admin_url().'edit.php?post_type=sb_bscenarioapp';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pballocation()
	{
		$url = admin_url().'edit.php?post_type=sb_pballocation';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_glbudgetxref()
	{
		$url = admin_url().'edit.php?post_type=sb_glbudgetxref';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_disputetype()
	{
		$url = admin_url().'edit.php?post_type=sb_disputetype';
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
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_disputeitem()
	{
		$url = admin_url().'edit.php?post_type=sb_disputeitem';
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
	public static function render_sb_pclasstype()
	{
		$url = admin_url().'edit.php?post_type=sb_pclasstype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_ptypeclass()
	{
		$url = admin_url().'edit.php?post_type=sb_ptypeclass';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_positiontype()
	{
		$url = admin_url().'edit.php?post_type=sb_positiontype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_pstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_resptype()
	{
		$url = admin_url().'edit.php?post_type=sb_resptype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_validresp()
	{
		$url = admin_url().'edit.php?post_type=sb_validresp';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_position()
	{
		$url = admin_url().'edit.php?post_type=sb_position';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_posresp()
	{
		$url = admin_url().'edit.php?post_type=sb_posresp';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_pfulfillment()
	{
		$url = admin_url().'edit.php?post_type=sb_pfulfillment';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_preportstruct()
	{
		$url = admin_url().'edit.php?post_type=sb_preportstruct';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_ratetype()
	{
		$url = admin_url().'edit.php?post_type=sb_ratetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_paygrade()
	{
		$url = admin_url().'edit.php?post_type=sb_paygrade';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_salarystep()
	{
		$url = admin_url().'edit.php?post_type=sb_salarystep';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_ptyperate()
	{
		$url = admin_url().'edit.php?post_type=sb_ptyperate';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_payhistory()
	{
		$url = admin_url().'edit.php?post_type=sb_payhistory';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_benefittype()
	{
		$url = admin_url().'edit.php?post_type=sb_benefittype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partybenefit()
	{
		$url = admin_url().'edit.php?post_type=sb_partybenefit';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_deductiontype()
	{
		$url = admin_url().'edit.php?post_type=sb_deductiontype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_deduction()
	{
		$url = admin_url().'edit.php?post_type=sb_deduction';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_prpreference()
	{
		$url = admin_url().'edit.php?post_type=sb_prpreference';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_empappstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_empappstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_empappsrctype()
	{
		$url = admin_url().'edit.php?post_type=sb_empappsrctype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_empapplication()
	{
		$url = admin_url().'edit.php?post_type=sb_empapplication';
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
	public static function render_sb_skilltype()
	{
		$url = admin_url().'edit.php?post_type=sb_skilltype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_tctype()
	{
		$url = admin_url().'edit.php?post_type=sb_tctype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_ptraining()
	{
		$url = admin_url().'edit.php?post_type=sb_ptraining';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_resume()
	{
		$url = admin_url().'edit.php?post_type=sb_resume';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyskill()
	{
		$url = admin_url().'edit.php?post_type=sb_partyskill';
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
	public static function render_sb_perfnoteype()
	{
		$url = admin_url().'edit.php?post_type=sb_perfnoteype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_perfnote()
	{
		$url = admin_url().'edit.php?post_type=sb_perfnote';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_perfreview()
	{
		$url = admin_url().'edit.php?post_type=sb_perfreview';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_ratingtype()
	{
		$url = admin_url().'edit.php?post_type=sb_ratingtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_previtemtype()
	{
		$url = admin_url().'edit.php?post_type=sb_previtemtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_perfreviewitem()
	{
		$url = admin_url().'edit.php?post_type=sb_perfreviewitem';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_terminationtype()
	{
		$url = admin_url().'edit.php?post_type=sb_terminationtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_termreason()
	{
		$url = admin_url().'edit.php?post_type=sb_termreason';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_ucstatus()
	{
		$url = admin_url().'edit.php?post_type=sb_ucstatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_uempclaim()
	{
		$url = admin_url().'edit.php?post_type=sb_uempclaim';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_delivertype()
	{
		$url = admin_url().'edit.php?post_type=sb_delivertype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_deliverable()
	{
		$url = admin_url().'edit.php?post_type=sb_deliverable';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_requiretype()
	{
		$url = admin_url().'edit.php?post_type=sb_requiretype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_requirement()
	{
		$url = admin_url().'edit.php?post_type=sb_requirement';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_requirerole()
	{
		$url = admin_url().'edit.php?post_type=sb_requirerole';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wetypecat()
	{
		$url = admin_url().'edit.php?post_type=sb_wetypecat';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wetype()
	{
		$url = admin_url().'edit.php?post_type=sb_wetype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_weptype()
	{
		$url = admin_url().'edit.php?post_type=sb_weptype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_westatus()
	{
		$url = admin_url().'edit.php?post_type=sb_westatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_workeffort()
	{
		$url = admin_url().'edit.php?post_type=sb_workeffort';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wrfulfillment()
	{
		$url = admin_url().'edit.php?post_type=sb_wrfulfillment';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_weatype()
	{
		$url = admin_url().'edit.php?post_type=sb_weatype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_weassociation()
	{
		$url = admin_url().'edit.php?post_type=sb_weassociation';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wertype()
	{
		$url = admin_url().'edit.php?post_type=sb_wertype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wepatyassign()
	{
		$url = admin_url().'edit.php?post_type=sb_wepatyassign';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_timesheet()
	{
		$url = admin_url().'edit.php?post_type=sb_timesheet';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_tsrtype()
	{
		$url = admin_url().'edit.php?post_type=sb_tsrtype';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_tsrole()
	{
		$url = admin_url().'edit.php?post_type=sb_tsrole';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_timeentry()
	{
		$url = admin_url().'edit.php?post_type=sb_timeentry';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_partyrate()
	{
		$url = admin_url().'edit.php?post_type=sb_partyrate';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wearate()
	{
		$url = admin_url().'edit.php?post_type=sb_wearate';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_weiassign()
	{
		$url = admin_url().'edit.php?post_type=sb_weiassign';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_weaastatus()
	{
		$url = admin_url().'edit.php?post_type=sb_weaastatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_weaassign()
	{
		$url = admin_url().'edit.php?post_type=sb_weaassign';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wepastatus()
	{
		$url = admin_url().'edit.php?post_type=sb_wepastatus';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_paassign()
	{
		$url = admin_url().'edit.php?post_type=sb_paassign';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
    /**
	 * Create Orders post-type sub menu
	 */
	public static function render_sb_wedeliverable()
	{
		$url = admin_url().'edit.php?post_type=sb_wedeliverable';
		?>
	 	<script>location.href='<?php echo $url;?>';</script>
		<?php
	}
}
?>
