<?php
/*------------------------------------------------------------------------------
These are helper functions
------------------------------------------------------------------------------*/
class CloderiaCustomFieldsUtils
{
	public static $prefix = ''; 
	public static $page = 'custom-content';
	// Which types of content do we want to standardize?
	public static $content_types_array = array('sb_currency','sb_loctype','sb_location','sb_business','sb_businessunit','sb_partycat','sb_partytype','sb_roletype','sb_party','sb_partyrole','sb_reltype','sb_relstatus','sb_partyrel','sb_partygroup','sb_person','sb_partyprofile','sb_cmechtype','sb_contactmech','sb_pcmpurposetype','sb_partycmech','sb_pcmpurpose','sb_socmediaccttype','sb_socmediaacct','sb_billaccount','sb_accttxntype','sb_accttxnstatus','sb_accttransaction','sb_conversation','sb_conuser','sb_message','sb_messagesfiles','sb_notifytype','sb_notifystatus','sb_notifylevel','sb_notification','sb_contactus','sb_uom','sb_uomconversion','sb_prodcat','sb_prodclass','sb_prodtype','sb_producttmpl','sb_product','sb_prodclasslink','sb_prodcatimage','sb_prodtyimage','sb_prodimage','sb_prodfeatcat','sb_prodfeattype','sb_prodfeature','sb_featappltype','sb_featappl','sb_featinttype','sb_featinteraction','sb_pricecomptype','sb_pricecomp','sb_costcomptype','sb_costcomp','sb_supprating','sb_supppref','sb_prodsupplier','sb_facilitytype','sb_facility','sb_containertype','sb_container','sb_lot','sb_invitemtype','sb_invitemstat','sb_inventoryitem','sb_prodordertype','sb_prodorderstatus','sb_prodorder','sb_prodorderitype','sb_prodorderistatus','sb_prodorderitem','sb_invoicetype','sb_invoicestatus','sb_invoice','sb_invoicerole','sb_invoiceitemtype','sb_invoiceitemstatus','sb_invoiceitem','sb_invoiceterm','sb_paymenttype','sb_paymethod','sb_payment','sb_periodtype','sb_acctperiod','sb_coaacctstruct','sb_coaacctsegtype','sb_coaasegval','sb_coaacctseg','sb_coastatus','sb_coa','sb_glaccttype','sb_glaccount','sb_buglaccount','sb_buglaccountbal','sb_coaaseginst','sb_feventtype','sb_fevent','sb_txntype','sb_txnstatus','sb_transaction','sb_txndetail','sb_feventtxntype','sb_txntypeacct','sb_bankaccttype','sb_bankaccount',);

	/*------------------------------------------------------------------------------
	SYNOPSIS: prints the value of a custom field from the current post.
	INPUT: 
		$field (str) Name of custom field; technically, this string appears in the 
			meta_key column of the wp_postmeta database table.
		$separator (str) optional separator used to join values if a post has more than
			one value for the field named in $field.
	OUTPUT: prints the value of that field for the current post OR an empty string
		If the $field contains an array of values, then they are joined by the separator.
	------------------------------------------------------------------------------*/
	static function get_custom_field($field, $separator=',')
	{
		// the_ID() function won't work because it prints its output
		$post_id = get_the_ID();
		$output_array = get_post_meta($post_id, $field);
		print implode($separator, $output_array);
	}

	/*------------------------------------------------------------------------------
	Adds a menu item inside the WordPress admin
	------------------------------------------------------------------------------*/
	static function add_menu_item()
	{
		add_submenu_page(
			'plugins.php', 							// Menu page to attach to
			'Custom Content',				 		// page title
			'Content Content', 						// menu title
			'manage_options', 						// permissions
			ContentRotator::$page,					// page-name (used in the URL)
			'ContentRotator::generate_admin_page'	// clicking callback function
		);
	}

	/*------------------------------------------------------------------------------
	Controller that generates admin page
	------------------------------------------------------------------------------*/
	static function generate_admin_page()
	{
		$msg = ''; // used to display a success message on updates
		// Maybe update... remember, the string used by check_admin_referer() must match the 
		// string used by wp_nonce_field();
		if ( !empty($_POST) && check_admin_referer('content_rotation_admin_options_update') )
		{
			
			update_option('content_rotation_content_separator', 
				stripslashes($_POST['separator']) );
			update_option('content_rotation_content_block', 
				stripslashes($_POST['content_block']) );	

			$msg = '<div class="updated"><p>Your settings have been <strong>updated</strong></p></div>';
		}
		// Show the page
		include('admin_page.php');
	}


	//! public Functions
	
	/*------------------------------------------------------------------------------
	Get custom fields for this content type.
	INPUT: $content_type (str) the name of the content type, e.g. post, page.
	OUTPUT: array of associative arrays where each associative array describes 
		a custom field to be used for the $content_type specified.
	FUTURE: read these arrays from the database.
	------------------------------------------------------------------------------*/
	public static function get_custom_fields($content_type)
	{
		$custom_fields = '';
		switch ($content_type) 
		{
        case 'sb_currency':
				$custom_fields = CurrencyCPT::$custom_fields;
				break;
        case 'sb_loctype':
				$custom_fields = LocationTypeCPT::$custom_fields;
				break;
        case 'sb_location':
				$custom_fields = LocationCPT::$custom_fields;
				break;
        case 'sb_business':
				$custom_fields = BusinessCPT::$custom_fields;
				break;
        case 'sb_businessunit':
				$custom_fields = BusinessUnitCPT::$custom_fields;
				break;
        case 'sb_partycat':
				$custom_fields = PartyCategoryCPT::$custom_fields;
				break;
        case 'sb_partytype':
				$custom_fields = PartyTypeCPT::$custom_fields;
				break;
        case 'sb_roletype':
				$custom_fields = RoleTypeCPT::$custom_fields;
				break;
        case 'sb_party':
				$custom_fields = PartyCPT::$custom_fields;
				break;
        case 'sb_partyrole':
				$custom_fields = PartyRoleCPT::$custom_fields;
				break;
        case 'sb_reltype':
				$custom_fields = RelationshipTypeCPT::$custom_fields;
				break;
        case 'sb_relstatus':
				$custom_fields = RelationshipStatusCPT::$custom_fields;
				break;
        case 'sb_partyrel':
				$custom_fields = PartyRelationshipCPT::$custom_fields;
				break;
        case 'sb_partygroup':
				$custom_fields = PartyGroupCPT::$custom_fields;
				break;
        case 'sb_person':
				$custom_fields = PersonCPT::$custom_fields;
				break;
        case 'sb_partyprofile':
				$custom_fields = PartyProfileCPT::$custom_fields;
				break;
        case 'sb_cmechtype':
				$custom_fields = ContactMechanismTypeCPT::$custom_fields;
				break;
        case 'sb_contactmech':
				$custom_fields = ContactMechanismCPT::$custom_fields;
				break;
        case 'sb_pcmpurposetype':
				$custom_fields = PartyContactMechanismPurposeTypeCPT::$custom_fields;
				break;
        case 'sb_partycmech':
				$custom_fields = PartyContactMechanismCPT::$custom_fields;
				break;
        case 'sb_pcmpurpose':
				$custom_fields = PartyContactMechanismPurposeCPT::$custom_fields;
				break;
        case 'sb_socmediaccttype':
				$custom_fields = SocialMediaAccountTypeCPT::$custom_fields;
				break;
        case 'sb_socmediaacct':
				$custom_fields = SocialMediaAccountCPT::$custom_fields;
				break;
        case 'sb_billaccount':
				$custom_fields = BillingAccountCPT::$custom_fields;
				break;
        case 'sb_accttxntype':
				$custom_fields = AccountTransactionTypeCPT::$custom_fields;
				break;
        case 'sb_accttxnstatus':
				$custom_fields = AccountTransactionStatusCPT::$custom_fields;
				break;
        case 'sb_accttransaction':
				$custom_fields = AccountTransactionCPT::$custom_fields;
				break;
        case 'sb_conversation':
				$custom_fields = ConversationCPT::$custom_fields;
				break;
        case 'sb_conuser':
				$custom_fields = ConversationUserCPT::$custom_fields;
				break;
        case 'sb_message':
				$custom_fields = MessageCPT::$custom_fields;
				break;
        case 'sb_messagesfiles':
				$custom_fields = MessageFilesCPT::$custom_fields;
				break;
        case 'sb_notifytype':
				$custom_fields = NotificationTypeCPT::$custom_fields;
				break;
        case 'sb_notifystatus':
				$custom_fields = NotificationStatusCPT::$custom_fields;
				break;
        case 'sb_notifylevel':
				$custom_fields = NotificationLevelCPT::$custom_fields;
				break;
        case 'sb_notification':
				$custom_fields = NotificationCPT::$custom_fields;
				break;
        case 'sb_contactus':
				$custom_fields = ContactUsCPT::$custom_fields;
				break;
        case 'sb_uom':
				$custom_fields = UomCPT::$custom_fields;
				break;
        case 'sb_uomconversion':
				$custom_fields = UomConversionCPT::$custom_fields;
				break;
        case 'sb_prodcat':
				$custom_fields = ProductCategoryCPT::$custom_fields;
				break;
        case 'sb_prodclass':
				$custom_fields = ProductClassificationCPT::$custom_fields;
				break;
        case 'sb_prodtype':
				$custom_fields = ProductTypeCPT::$custom_fields;
				break;
        case 'sb_producttmpl':
				$custom_fields = ProductTemplateCPT::$custom_fields;
				break;
        case 'sb_product':
				$custom_fields = ProductCPT::$custom_fields;
				break;
        case 'sb_prodclasslink':
				$custom_fields = ProductClassificationLinkCPT::$custom_fields;
				break;
        case 'sb_prodcatimage':
				$custom_fields = ProductCategoryImageCPT::$custom_fields;
				break;
        case 'sb_prodtyimage':
				$custom_fields = ProductTypeImageCPT::$custom_fields;
				break;
        case 'sb_prodimage':
				$custom_fields = ProductImageCPT::$custom_fields;
				break;
        case 'sb_prodfeatcat':
				$custom_fields = ProductFeatureCategoryCPT::$custom_fields;
				break;
        case 'sb_prodfeattype':
				$custom_fields = ProductFeatureTypeCPT::$custom_fields;
				break;
        case 'sb_prodfeature':
				$custom_fields = ProductFeatureCPT::$custom_fields;
				break;
        case 'sb_featappltype':
				$custom_fields = FeatureApplicabilityTypeCPT::$custom_fields;
				break;
        case 'sb_featappl':
				$custom_fields = ProductFeatureApplicabilityCPT::$custom_fields;
				break;
        case 'sb_featinttype':
				$custom_fields = FeatureInteractionTypeCPT::$custom_fields;
				break;
        case 'sb_featinteraction':
				$custom_fields = ProductFeatureInteractionCPT::$custom_fields;
				break;
        case 'sb_pricecomptype':
				$custom_fields = PriceComponentTypeCPT::$custom_fields;
				break;
        case 'sb_pricecomp':
				$custom_fields = PriceComponentCPT::$custom_fields;
				break;
        case 'sb_costcomptype':
				$custom_fields = CostComponentTypeCPT::$custom_fields;
				break;
        case 'sb_costcomp':
				$custom_fields = CostComponentCPT::$custom_fields;
				break;
        case 'sb_supprating':
				$custom_fields = SupplierRatingCPT::$custom_fields;
				break;
        case 'sb_supppref':
				$custom_fields = SupplierPreferenceCPT::$custom_fields;
				break;
        case 'sb_prodsupplier':
				$custom_fields = ProductSupplierCPT::$custom_fields;
				break;
        case 'sb_facilitytype':
				$custom_fields = FacilityTypeCPT::$custom_fields;
				break;
        case 'sb_facility':
				$custom_fields = FacilityCPT::$custom_fields;
				break;
        case 'sb_containertype':
				$custom_fields = ContainerTypeCPT::$custom_fields;
				break;
        case 'sb_container':
				$custom_fields = ContainerCPT::$custom_fields;
				break;
        case 'sb_lot':
				$custom_fields = LotCPT::$custom_fields;
				break;
        case 'sb_invitemtype':
				$custom_fields = InventoryItemTypeCPT::$custom_fields;
				break;
        case 'sb_invitemstat':
				$custom_fields = InventoryItemStatusCPT::$custom_fields;
				break;
        case 'sb_inventoryitem':
				$custom_fields = InventoryItemCPT::$custom_fields;
				break;
        case 'sb_prodordertype':
				$custom_fields = ProductOrderTypeCPT::$custom_fields;
				break;
        case 'sb_prodorderstatus':
				$custom_fields = ProductOrderStatusCPT::$custom_fields;
				break;
        case 'sb_prodorder':
				$custom_fields = ProductOrderCPT::$custom_fields;
				break;
        case 'sb_prodorderitype':
				$custom_fields = ProductOrderItemTypeCPT::$custom_fields;
				break;
        case 'sb_prodorderistatus':
				$custom_fields = ProductOrderItemStatusCPT::$custom_fields;
				break;
        case 'sb_prodorderitem':
				$custom_fields = ProductOrderItemCPT::$custom_fields;
				break;
        case 'sb_invoicetype':
				$custom_fields = InvoiceTypeCPT::$custom_fields;
				break;
        case 'sb_invoicestatus':
				$custom_fields = InvoiceStatusCPT::$custom_fields;
				break;
        case 'sb_invoice':
				$custom_fields = InvoiceCPT::$custom_fields;
				break;
        case 'sb_invoicerole':
				$custom_fields = InvoiceRoleCPT::$custom_fields;
				break;
        case 'sb_invoiceitemtype':
				$custom_fields = InvoiceItemTypeCPT::$custom_fields;
				break;
        case 'sb_invoiceitemstatus':
				$custom_fields = InvoiceItemStatusCPT::$custom_fields;
				break;
        case 'sb_invoiceitem':
				$custom_fields = InvoiceItemCPT::$custom_fields;
				break;
        case 'sb_invoiceterm':
				$custom_fields = InvoiceTermCPT::$custom_fields;
				break;
        case 'sb_paymenttype':
				$custom_fields = PaymentTypeCPT::$custom_fields;
				break;
        case 'sb_paymethod':
				$custom_fields = PaymentMethodCPT::$custom_fields;
				break;
        case 'sb_payment':
				$custom_fields = PaymentCPT::$custom_fields;
				break;
        case 'sb_periodtype':
				$custom_fields = PeriodTypeCPT::$custom_fields;
				break;
        case 'sb_acctperiod':
				$custom_fields = AccountingPeriodCPT::$custom_fields;
				break;
        case 'sb_coaacctstruct':
				$custom_fields = COAAccountStructureCPT::$custom_fields;
				break;
        case 'sb_coaacctsegtype':
				$custom_fields = COAAccountSegmentTypeCPT::$custom_fields;
				break;
        case 'sb_coaasegval':
				$custom_fields = COAAccountSegmentTypeValueCPT::$custom_fields;
				break;
        case 'sb_coaacctseg':
				$custom_fields = COAAccountSegmentCPT::$custom_fields;
				break;
        case 'sb_coastatus':
				$custom_fields = COAStatusCPT::$custom_fields;
				break;
        case 'sb_coa':
				$custom_fields = ChartOfAccountsCPT::$custom_fields;
				break;
        case 'sb_glaccttype':
				$custom_fields = GLAccountTypeCPT::$custom_fields;
				break;
        case 'sb_glaccount':
				$custom_fields = GLAccountCPT::$custom_fields;
				break;
        case 'sb_buglaccount':
				$custom_fields = BusinessUnitGLAccountCPT::$custom_fields;
				break;
        case 'sb_buglaccountbal':
				$custom_fields = BusinessUnitGLAccountBalanceCPT::$custom_fields;
				break;
        case 'sb_coaaseginst':
				$custom_fields = COAAccountSegmentInstanceCPT::$custom_fields;
				break;
        case 'sb_feventtype':
				$custom_fields = FinancialEventTypeCPT::$custom_fields;
				break;
        case 'sb_fevent':
				$custom_fields = FinancialEventCPT::$custom_fields;
				break;
        case 'sb_txntype':
				$custom_fields = TransactionTypeCPT::$custom_fields;
				break;
        case 'sb_txnstatus':
				$custom_fields = TransactionStatusCPT::$custom_fields;
				break;
        case 'sb_transaction':
				$custom_fields = TransactionCPT::$custom_fields;
				break;
        case 'sb_txndetail':
				$custom_fields = TransactionDetailCPT::$custom_fields;
				break;
        case 'sb_feventtxntype':
				$custom_fields = FEventTxnTypeCPT::$custom_fields;
				break;
        case 'sb_txntypeacct':
				$custom_fields = TxnTypeAccountCPT::$custom_fields;
				break;
        case 'sb_bankaccttype':
				$custom_fields = BankAccountTypeCPT::$custom_fields;
				break;
        case 'sb_bankaccount':
				$custom_fields = BankAccountCPT::$custom_fields;
				break;
			default:
				;
				break;
		}
		return $custom_fields;
	}

	public static function get_field_value($content_type, $post_id, $field) {

		$field_value = $field['value'];
		switch ($content_type) {
        case 'sb_currency':
				$field_value = CurrencyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_loctype':
				$field_value = LocationTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_location':
				$field_value = LocationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_business':
				$field_value = BusinessCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_businessunit':
				$field_value = BusinessUnitCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partycat':
				$field_value = PartyCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partytype':
				$field_value = PartyTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_roletype':
				$field_value = RoleTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_party':
				$field_value = PartyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyrole':
				$field_value = PartyRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_reltype':
				$field_value = RelationshipTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_relstatus':
				$field_value = RelationshipStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyrel':
				$field_value = PartyRelationshipCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partygroup':
				$field_value = PartyGroupCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_person':
				$field_value = PersonCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyprofile':
				$field_value = PartyProfileCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_cmechtype':
				$field_value = ContactMechanismTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_contactmech':
				$field_value = ContactMechanismCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pcmpurposetype':
				$field_value = PartyContactMechanismPurposeTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partycmech':
				$field_value = PartyContactMechanismCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pcmpurpose':
				$field_value = PartyContactMechanismPurposeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_socmediaccttype':
				$field_value = SocialMediaAccountTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_socmediaacct':
				$field_value = SocialMediaAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_billaccount':
				$field_value = BillingAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_accttxntype':
				$field_value = AccountTransactionTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_accttxnstatus':
				$field_value = AccountTransactionStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_accttransaction':
				$field_value = AccountTransactionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_conversation':
				$field_value = ConversationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_conuser':
				$field_value = ConversationUserCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_message':
				$field_value = MessageCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_messagesfiles':
				$field_value = MessageFilesCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_notifytype':
				$field_value = NotificationTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_notifystatus':
				$field_value = NotificationStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_notifylevel':
				$field_value = NotificationLevelCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_notification':
				$field_value = NotificationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_contactus':
				$field_value = ContactUsCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_uom':
				$field_value = UomCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_uomconversion':
				$field_value = UomConversionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodcat':
				$field_value = ProductCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodclass':
				$field_value = ProductClassificationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodtype':
				$field_value = ProductTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_producttmpl':
				$field_value = ProductTemplateCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_product':
				$field_value = ProductCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodclasslink':
				$field_value = ProductClassificationLinkCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodcatimage':
				$field_value = ProductCategoryImageCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodtyimage':
				$field_value = ProductTypeImageCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodimage':
				$field_value = ProductImageCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodfeatcat':
				$field_value = ProductFeatureCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodfeattype':
				$field_value = ProductFeatureTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodfeature':
				$field_value = ProductFeatureCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_featappltype':
				$field_value = FeatureApplicabilityTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_featappl':
				$field_value = ProductFeatureApplicabilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_featinttype':
				$field_value = FeatureInteractionTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_featinteraction':
				$field_value = ProductFeatureInteractionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pricecomptype':
				$field_value = PriceComponentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pricecomp':
				$field_value = PriceComponentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_costcomptype':
				$field_value = CostComponentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_costcomp':
				$field_value = CostComponentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_supprating':
				$field_value = SupplierRatingCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_supppref':
				$field_value = SupplierPreferenceCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodsupplier':
				$field_value = ProductSupplierCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_facilitytype':
				$field_value = FacilityTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_facility':
				$field_value = FacilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_containertype':
				$field_value = ContainerTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_container':
				$field_value = ContainerCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_lot':
				$field_value = LotCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invitemtype':
				$field_value = InventoryItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invitemstat':
				$field_value = InventoryItemStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_inventoryitem':
				$field_value = InventoryItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodordertype':
				$field_value = ProductOrderTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodorderstatus':
				$field_value = ProductOrderStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodorder':
				$field_value = ProductOrderCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodorderitype':
				$field_value = ProductOrderItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodorderistatus':
				$field_value = ProductOrderItemStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prodorderitem':
				$field_value = ProductOrderItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoicetype':
				$field_value = InvoiceTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoicestatus':
				$field_value = InvoiceStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoice':
				$field_value = InvoiceCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoicerole':
				$field_value = InvoiceRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoiceitemtype':
				$field_value = InvoiceItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoiceitemstatus':
				$field_value = InvoiceItemStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoiceitem':
				$field_value = InvoiceItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoiceterm':
				$field_value = InvoiceTermCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_paymenttype':
				$field_value = PaymentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_paymethod':
				$field_value = PaymentMethodCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_payment':
				$field_value = PaymentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_periodtype':
				$field_value = PeriodTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_acctperiod':
				$field_value = AccountingPeriodCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_coaacctstruct':
				$field_value = COAAccountStructureCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_coaacctsegtype':
				$field_value = COAAccountSegmentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_coaasegval':
				$field_value = COAAccountSegmentTypeValueCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_coaacctseg':
				$field_value = COAAccountSegmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_coastatus':
				$field_value = COAStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_coa':
				$field_value = ChartOfAccountsCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_glaccttype':
				$field_value = GLAccountTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_glaccount':
				$field_value = GLAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_buglaccount':
				$field_value = BusinessUnitGLAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_buglaccountbal':
				$field_value = BusinessUnitGLAccountBalanceCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_coaaseginst':
				$field_value = COAAccountSegmentInstanceCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_feventtype':
				$field_value = FinancialEventTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_fevent':
				$field_value = FinancialEventCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_txntype':
				$field_value = TransactionTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_txnstatus':
				$field_value = TransactionStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_transaction':
				$field_value = TransactionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_txndetail':
				$field_value = TransactionDetailCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_feventtxntype':
				$field_value = FEventTxnTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_txntypeacct':
				$field_value = TxnTypeAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_bankaccttype':
				$field_value = BankAccountTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_bankaccount':
				$field_value = BankAccountCPT::get_field_value($content_type, $post_id, $field);
				break;
			default:
				$field_value =  $field['value'];
				break;
		}
		return $field_value;
		

	}

	/*------------------------------------------------------------------------------
    Save the new Custom Fields values
    INPUT:
        $post_id (int) id of the post these custom fields are associated with
        $post (obj) the post object
  ------------------------------------------------------------------------------*/
    public static function save_custom_fields($post_id, $post, $custom_fields) 
    {
        // Loop through all the fields
        foreach ( $custom_fields as $field ) 
        {
            // Processing all fields apart except attachment field here
            if (isset( $_POST[ self::$prefix . $field['name'] ] ) ) 
            {
                $value = trim($_POST[ self::$prefix . $field['name'] ]);
                // Auto-paragraphs for any WYSIWYG
                if ( $field['type'] == 'wysiwyg' ) 
                {
                    $value = wpautop( $value );
                }
                update_post_meta($post_id, $field[ 'name' ], $value);
            }
            // if not set, then it's an unchecked checkbox, so blank out the value.
            else {
                //update_post_meta( $post_id, $field[ 'name' ], '' );
            }
        }
    }


	/*------------------------------------------------------------------------------
	The following '_get_xxx_element' functions each generate a single form element.
	INPUT: $data (array) contains an associative array describing how the element
	should look with keys for name, title, description, and type.
	------------------------------------------------------------------------------*/
	/*------------------------------------------------------------------------------
	Note: the checked value is hard-coded to 'yes' for simplicity.
	------------------------------------------------------------------------------*/
	public static function get_checkbox_element($data)
	{
		$tpl ='<input type="checkbox" name="[+name+]" id="[+name+]" value="yes" [+is_checked+] style="width: auto;"/> 
		<label for="[+name+]" style="display:inline;"><strong>[+title+]</strong></label>';
		// Special handling to see if the box is checked.
		if ( $data['value'] == "yes" )
		{
			$data['is_checked'] = 'checked="checked"';
		}
		else
		{
			$data['is_checked'] = '';
		}
	
		return self::parse($tpl, $data);
	}

	
	/*------------------------------------------------------------------------------
	The dropdown is special: it requires that you supply an array of options in its
	'options' key.
	The $tpl used internally here uses a custom [+options+] placeholder.
	------------------------------------------------------------------------------*/
	public static function get_dropdown_element($data)
	{
		// Some error messaging.
		if ( !isset($data['options']) || !is_array($data['options']) )
		{
			return '<p><strong>Custom Content Error:</strong> No options supplied for '.$data['name'].'</p>';
		}
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label><br/>
			     <select name="[+name+]" id="[+name+]">[+options+]</select>';

		$option_str = '<option value="">Pick One</option>';
		foreach ( $data['options'] as $option )
		{
			$option = htmlspecialchars($option); // Filter the values
			$is_selected = '';
			if ( $data['value'] == $option )
			{
				$is_selected = 'selected="selected"';
			}
			$option_str .= '<option value="'.$option.'" '.$is_selected.'>'.$option.'</option>';
		}
		
		unset($data['options']); // the parse function req's a simple hash.
		$data['options'] = $option_str; // prep for parsing
		
		return self::parse($tpl, $data);
	}
	
	//------------------------------------------------------------------------------
	public static function get_text_element($data)
	{
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label><br/>
				<input type="text" name="[+name+]" id="[+name+]" value="[+value+]" /><br/>';
		return self::parse($tpl, $data);
	}
	
	//------------------------------------------------------------------------------
	public static function get_textarea_element($data)
	{
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label><br/>
			<textarea name="[+name+]" id="[+name+]" columns="30" rows="3">[+value+]</textarea>';
		return self::parse($tpl, $data);	
	}

	//------------------------------------------------------------------------------
	public static function get_wysiwyg_element($data)
	{
		$tpl = '<label for="[+name+]"><strong>[+title+]</strong></label>
			<textarea name="[+name+]" id="[+name+]" columns="30" rows="3">[+value+]</textarea>
			<script type="text/javascript">
				jQuery( document ).ready( function() {
					jQuery( "[+name+]" ).addClass( "mceEditor" );
					if ( typeof( tinyMCE ) == "object" && typeof( tinyMCE.execCommand ) == "function" ) {
						tinyMCE.execCommand( "mceAddControl", false, "[+name+]" );
					}
				});
			</script>
			';	
		return self::parse($tpl, $data);
	}

	/*------------------------------------------------------------------------------
	SYNOPSIS: a simple parsing function for basic templating.
	INPUT:
		$tpl (str): a string containing [+placeholders+]
		$hash (array): an associative array('key' => 'value');
	OUTPUT
		string; placeholders corresponding to the keys of the hash will be replaced
		with the values and the string will be returned.
	------------------------------------------------------------------------------*/
	public static function parse($tpl, $hash) {
	
	    foreach ($hash as $key => $value) {
	        $tpl = str_replace('[+'.$key.'+]', $value, $tpl);
	    }
	    return $tpl;
	}


	/*------------------------------------------------------------------------------
	Test if a variable is null or an empty string
	------------------------------------------------------------------------------*/
	static function isNullOrEmptyString($variable){
	    return (!isset($variable) || trim($variable)==='');
	}
}
/*EOF*/
?>