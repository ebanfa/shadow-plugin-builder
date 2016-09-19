<?php

class CloderiaCustomPostTypesUtils {

	/*
	This prefix helps ensure unique keys in the $_POST array. It is used only to 
	identify the form elements; this prefix is *not* used as part of the meta_key
	when saving the field names to the database. If you want your fields to be 
	hidden from built-in WordPress functions, you can name them individually 
	using "_" as the first character.
	
	If you omit a prefix entirely, your custom field names must steer clear of
	the built-in post field names (e.g. 'content').
	*/
	public static $prefix = ''; 

	// Which types of content do we want to standardize?
	public static $content_types_array = array('sb_currency','sb_loctype','sb_location','sb_business','sb_businessunit','sb_partycat','sb_partytype','sb_roletype','sb_party','sb_partyrole','sb_reltype','sb_relstatus','sb_partyrel','sb_partygroup','sb_person','sb_partyprofile','sb_cmechtype','sb_contactmech','sb_pcmpurposetype','sb_partycmech','sb_pcmpurpose','sb_socmediaccttype','sb_socmediaacct','sb_billaccount','sb_accttxntype','sb_accttxnstatus','sb_accttransaction','sb_conversation','sb_conuser','sb_message','sb_messagesfiles','sb_notifytype','sb_notifystatus','sb_notifylevel','sb_notification','sb_contactus','sb_uom','sb_uomconversion','sb_prodcat','sb_prodclass','sb_prodtype','sb_producttmpl','sb_product','sb_prodclasslink','sb_prodcatimage','sb_prodtyimage','sb_prodimage','sb_prodfeatcat','sb_prodfeattype','sb_prodfeature','sb_featappltype','sb_featappl','sb_featinttype','sb_featinteraction','sb_pricecomptype','sb_pricecomp','sb_costcomptype','sb_costcomp','sb_supprating','sb_supppref','sb_prodsupplier','sb_facilitytype','sb_facility','sb_containertype','sb_container','sb_lot','sb_invitemtype','sb_invitemstat','sb_inventoryitem','sb_prodordertype','sb_prodorderstatus','sb_prodorder','sb_prodorderitype','sb_prodorderistatus','sb_prodorderitem','sb_invoicetype','sb_invoicestatus','sb_invoice','sb_invoicerole','sb_invoiceitemtype','sb_invoiceitemstatus','sb_invoiceitem','sb_invoiceterm','sb_paymenttype','sb_paymethod','sb_payment','sb_periodtype','sb_acctperiod','sb_coaacctstruct','sb_coaacctsegtype','sb_coaasegval','sb_coaacctseg','sb_coastatus','sb_coa','sb_glaccttype','sb_glaccount','sb_buglaccount','sb_buglaccountbal','sb_coaaseginst','sb_feventtype','sb_fevent','sb_txntype','sb_txnstatus','sb_transaction','sb_txndetail','sb_feventtxntype','sb_txntypeacct','sb_bankaccttype','sb_bankaccount',);

	/**
	 * Register the custom post type so it shows up in menus
	 */
	public static function register_custom_post_type()
	{
        CurrencyCPT::register_custom_post_type();
        LocationTypeCPT::register_custom_post_type();
        LocationCPT::register_custom_post_type();
        BusinessCPT::register_custom_post_type();
        BusinessUnitCPT::register_custom_post_type();
        PartyCategoryCPT::register_custom_post_type();
        PartyTypeCPT::register_custom_post_type();
        RoleTypeCPT::register_custom_post_type();
        PartyCPT::register_custom_post_type();
        PartyRoleCPT::register_custom_post_type();
        RelationshipTypeCPT::register_custom_post_type();
        RelationshipStatusCPT::register_custom_post_type();
        PartyRelationshipCPT::register_custom_post_type();
        PartyGroupCPT::register_custom_post_type();
        PersonCPT::register_custom_post_type();
        PartyProfileCPT::register_custom_post_type();
        ContactMechanismTypeCPT::register_custom_post_type();
        ContactMechanismCPT::register_custom_post_type();
        PartyContactMechanismPurposeTypeCPT::register_custom_post_type();
        PartyContactMechanismCPT::register_custom_post_type();
        PartyContactMechanismPurposeCPT::register_custom_post_type();
        SocialMediaAccountTypeCPT::register_custom_post_type();
        SocialMediaAccountCPT::register_custom_post_type();
        BillingAccountCPT::register_custom_post_type();
        AccountTransactionTypeCPT::register_custom_post_type();
        AccountTransactionStatusCPT::register_custom_post_type();
        AccountTransactionCPT::register_custom_post_type();
        ConversationCPT::register_custom_post_type();
        ConversationUserCPT::register_custom_post_type();
        MessageCPT::register_custom_post_type();
        MessageFilesCPT::register_custom_post_type();
        NotificationTypeCPT::register_custom_post_type();
        NotificationStatusCPT::register_custom_post_type();
        NotificationLevelCPT::register_custom_post_type();
        NotificationCPT::register_custom_post_type();
        ContactUsCPT::register_custom_post_type();
        UomCPT::register_custom_post_type();
        UomConversionCPT::register_custom_post_type();
        ProductCategoryCPT::register_custom_post_type();
        ProductClassificationCPT::register_custom_post_type();
        ProductTypeCPT::register_custom_post_type();
        ProductTemplateCPT::register_custom_post_type();
        ProductCPT::register_custom_post_type();
        ProductClassificationLinkCPT::register_custom_post_type();
        ProductCategoryImageCPT::register_custom_post_type();
        ProductTypeImageCPT::register_custom_post_type();
        ProductImageCPT::register_custom_post_type();
        ProductFeatureCategoryCPT::register_custom_post_type();
        ProductFeatureTypeCPT::register_custom_post_type();
        ProductFeatureCPT::register_custom_post_type();
        FeatureApplicabilityTypeCPT::register_custom_post_type();
        ProductFeatureApplicabilityCPT::register_custom_post_type();
        FeatureInteractionTypeCPT::register_custom_post_type();
        ProductFeatureInteractionCPT::register_custom_post_type();
        PriceComponentTypeCPT::register_custom_post_type();
        PriceComponentCPT::register_custom_post_type();
        CostComponentTypeCPT::register_custom_post_type();
        CostComponentCPT::register_custom_post_type();
        SupplierRatingCPT::register_custom_post_type();
        SupplierPreferenceCPT::register_custom_post_type();
        ProductSupplierCPT::register_custom_post_type();
        FacilityTypeCPT::register_custom_post_type();
        FacilityCPT::register_custom_post_type();
        ContainerTypeCPT::register_custom_post_type();
        ContainerCPT::register_custom_post_type();
        LotCPT::register_custom_post_type();
        InventoryItemTypeCPT::register_custom_post_type();
        InventoryItemStatusCPT::register_custom_post_type();
        InventoryItemCPT::register_custom_post_type();
        ProductOrderTypeCPT::register_custom_post_type();
        ProductOrderStatusCPT::register_custom_post_type();
        ProductOrderCPT::register_custom_post_type();
        ProductOrderItemTypeCPT::register_custom_post_type();
        ProductOrderItemStatusCPT::register_custom_post_type();
        ProductOrderItemCPT::register_custom_post_type();
        InvoiceTypeCPT::register_custom_post_type();
        InvoiceStatusCPT::register_custom_post_type();
        InvoiceCPT::register_custom_post_type();
        InvoiceRoleCPT::register_custom_post_type();
        InvoiceItemTypeCPT::register_custom_post_type();
        InvoiceItemStatusCPT::register_custom_post_type();
        InvoiceItemCPT::register_custom_post_type();
        InvoiceTermCPT::register_custom_post_type();
        PaymentTypeCPT::register_custom_post_type();
        PaymentMethodCPT::register_custom_post_type();
        PaymentCPT::register_custom_post_type();
        PeriodTypeCPT::register_custom_post_type();
        AccountingPeriodCPT::register_custom_post_type();
        COAAccountStructureCPT::register_custom_post_type();
        COAAccountSegmentTypeCPT::register_custom_post_type();
        COAAccountSegmentTypeValueCPT::register_custom_post_type();
        COAAccountSegmentCPT::register_custom_post_type();
        COAStatusCPT::register_custom_post_type();
        ChartOfAccountsCPT::register_custom_post_type();
        GLAccountTypeCPT::register_custom_post_type();
        GLAccountCPT::register_custom_post_type();
        BusinessUnitGLAccountCPT::register_custom_post_type();
        BusinessUnitGLAccountBalanceCPT::register_custom_post_type();
        COAAccountSegmentInstanceCPT::register_custom_post_type();
        FinancialEventTypeCPT::register_custom_post_type();
        FinancialEventCPT::register_custom_post_type();
        TransactionTypeCPT::register_custom_post_type();
        TransactionStatusCPT::register_custom_post_type();
        TransactionCPT::register_custom_post_type();
        TransactionDetailCPT::register_custom_post_type();
        FEventTxnTypeCPT::register_custom_post_type();
        TxnTypeAccountCPT::register_custom_post_type();
        BankAccountTypeCPT::register_custom_post_type();
        BankAccountCPT::register_custom_post_type();
	}

	/*------------------------------------------------------------------------------
	Save the new Custom Fields values
	INPUT:
		$post_id (int) id of the post these custom fields are associated with
		$post (obj) the post object
	------------------------------------------------------------------------------*/
	public static function save_custom_fields( $post_id, $post ) 
	{
		switch ($post->post_type) 
		{
			case 'sb_currency':
				CurrencyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_loctype':
				LocationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_location':
				LocationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_business':
				BusinessCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_businessunit':
				BusinessUnitCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partycat':
				PartyCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partytype':
				PartyTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_roletype':
				RoleTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_party':
				PartyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyrole':
				PartyRoleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_reltype':
				RelationshipTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_relstatus':
				RelationshipStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyrel':
				PartyRelationshipCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partygroup':
				PartyGroupCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_person':
				PersonCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyprofile':
				PartyProfileCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_cmechtype':
				ContactMechanismTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contactmech':
				ContactMechanismCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pcmpurposetype':
				PartyContactMechanismPurposeTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partycmech':
				PartyContactMechanismCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pcmpurpose':
				PartyContactMechanismPurposeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_socmediaccttype':
				SocialMediaAccountTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_socmediaacct':
				SocialMediaAccountCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_billaccount':
				BillingAccountCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_accttxntype':
				AccountTransactionTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_accttxnstatus':
				AccountTransactionStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_accttransaction':
				AccountTransactionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_conversation':
				ConversationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_conuser':
				ConversationUserCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_message':
				MessageCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_messagesfiles':
				MessageFilesCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_notifytype':
				NotificationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_notifystatus':
				NotificationStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_notifylevel':
				NotificationLevelCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_notification':
				NotificationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_contactus':
				ContactUsCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_uom':
				UomCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_uomconversion':
				UomConversionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodcat':
				ProductCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodclass':
				ProductClassificationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodtype':
				ProductTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_producttmpl':
				ProductTemplateCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_product':
				ProductCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodclasslink':
				ProductClassificationLinkCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodcatimage':
				ProductCategoryImageCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodtyimage':
				ProductTypeImageCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodimage':
				ProductImageCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodfeatcat':
				ProductFeatureCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodfeattype':
				ProductFeatureTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodfeature':
				ProductFeatureCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_featappltype':
				FeatureApplicabilityTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_featappl':
				ProductFeatureApplicabilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_featinttype':
				FeatureInteractionTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_featinteraction':
				ProductFeatureInteractionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pricecomptype':
				PriceComponentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pricecomp':
				PriceComponentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_costcomptype':
				CostComponentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_costcomp':
				CostComponentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_supprating':
				SupplierRatingCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_supppref':
				SupplierPreferenceCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodsupplier':
				ProductSupplierCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_facilitytype':
				FacilityTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_facility':
				FacilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_containertype':
				ContainerTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_container':
				ContainerCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_lot':
				LotCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invitemtype':
				InventoryItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invitemstat':
				InventoryItemStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_inventoryitem':
				InventoryItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodordertype':
				ProductOrderTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodorderstatus':
				ProductOrderStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodorder':
				ProductOrderCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodorderitype':
				ProductOrderItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodorderistatus':
				ProductOrderItemStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prodorderitem':
				ProductOrderItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoicetype':
				InvoiceTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoicestatus':
				InvoiceStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoice':
				InvoiceCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoicerole':
				InvoiceRoleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoiceitemtype':
				InvoiceItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoiceitemstatus':
				InvoiceItemStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoiceitem':
				InvoiceItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoiceterm':
				InvoiceTermCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_paymenttype':
				PaymentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_paymethod':
				PaymentMethodCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_payment':
				PaymentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_periodtype':
				PeriodTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_acctperiod':
				AccountingPeriodCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_coaacctstruct':
				COAAccountStructureCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_coaacctsegtype':
				COAAccountSegmentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_coaasegval':
				COAAccountSegmentTypeValueCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_coaacctseg':
				COAAccountSegmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_coastatus':
				COAStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_coa':
				ChartOfAccountsCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_glaccttype':
				GLAccountTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_glaccount':
				GLAccountCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_buglaccount':
				BusinessUnitGLAccountCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_buglaccountbal':
				BusinessUnitGLAccountBalanceCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_coaaseginst':
				COAAccountSegmentInstanceCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_feventtype':
				FinancialEventTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_fevent':
				FinancialEventCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_txntype':
				TransactionTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_txnstatus':
				TransactionStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_transaction':
				TransactionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_txndetail':
				TransactionDetailCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_feventtxntype':
				FEventTxnTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_txntypeacct':
				TxnTypeAccountCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_bankaccttype':
				BankAccountTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_bankaccount':
				BankAccountCPT::save_custom_fields($post_id, $post);
				break;
			default:
				;
				break;
		}
	}

	/*------------------------------------------------------------------------------
	This plugin is meant to be configured so it acts on a specified list of content
	types, e.g. post, page, or any custom content types that is registered.
	FUTURE: read this from the database.
	------------------------------------------------------------------------------*/
	public static function get_active_content_types()
	{
		return self::$content_types_array;
	}

	//! Public Functions	
	/*------------------------------------------------------------------------------
	* Create the new Custom Fields meta box
	------------------------------------------------------------------------------*/
	public static function create_meta_box() {
		$content_types_array = self::get_active_content_types();
		foreach ($content_types_array as $content_type) {
			add_meta_box( 'my-custom-fields'
				, 'Custom Fields'
				, 'CloderiaCustomPostTypesUtils::print_custom_fields'
				, $content_type
				, 'normal'
				, 'high'
				, $content_type 
			);
		}
	}

	/**
	 * Display the new Custom Fields meta box
	 * INPUT:
	 * $post (the post object is always passed to this callback function). 
	 * $callback_args will always have a copy of this object passed (I'm not sure why),
	 * but in $callback_args['args'] will be the 7th parameter from the add_meta_box() function.
	 *  We are using this argument to pass the content_type.
	 * @param	post $post - The post.
	 * @param	string	$callback_args 	- The names of call backs
	 */
	public static function print_custom_fields($post, $callback_args='') {
		$content_type = $callback_args['args']; // the 7th arg from add_meta_box()
		$custom_fields = CloderiaCustomFieldsUtils::get_custom_fields($content_type);
		$output = '';		
		
		foreach ( $custom_fields as $field ) 
		{
			$output_this_field = '';
			$field['name'] = self::$prefix . $field['name']; // this ensures unique keys in $_POST
			
			$field['value'] = htmlspecialchars( get_post_meta( $post->ID, $field['name'], true ) );
			// This will eventually delegate to each CPT to load the correct field value
			$field['value'] = CloderiaCustomFieldsUtils::get_field_value($content_type, $post->ID, $field);
			switch ( $field['type'] ) 
			{
				case 'checkbox':
					$output_this_field .= CloderiaCustomFieldsUtils::get_checkbox_element($field);
					break;
				case 'dropdown':
					$output_this_field .= CloderiaCustomFieldsUtils::get_dropdown_element($field);
					break;
				case 'textarea':
					$output_this_field .= CloderiaCustomFieldsUtils::get_textarea_element($field);
					break;
				case 'wysiwyg':
					$output_this_field .= CloderiaCustomFieldsUtils::get_wysiwyg_element($field);
					break;
				case 'text':
				default:
					$output_this_field .= CloderiaCustomFieldsUtils::get_text_element($field);
					break;
			}
			// optionally add description
			if ( $field['description'] ) 
			{
				$output_this_field .= '<p>'.$field['description'].'</p>';
			}
			$output .= '<div class="form-field form-required">'.$output_this_field.'</div>';
		}
 		// Print the form
 		print '<div class="form-wrap">';
	 	wp_nonce_field('update_custom_content_fields','custom_content_fields_nonce');
	 	print $output;
	 	print '</div>';
	}
	
	/*------------------------------------------------------------------------------
	Remove the default Custom Fields meta box. Only affects the content types that
	have been activated.
	INPUTS: sent from WordPress
	------------------------------------------------------------------------------*/
	public static function remove_default_custom_fields( $type, $context, $post ) {
		$content_types_array = self::get_active_content_types();
		foreach ( array( 'normal', 'advanced', 'side' ) as $context ) {
			foreach ( $content_types_array as $content_type )
			{
				remove_meta_box( 'postcustom', $content_type, $context );
			}
		}
	}
}
?>