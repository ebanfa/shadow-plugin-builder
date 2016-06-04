<?php
/*------------------------------------------------------------------------------
These are helper functions
------------------------------------------------------------------------------*/
class CloderiaCustomFieldsUtils
{
	public static $prefix = ''; 
	public static $page = 'custom-content';
	// Which types of content do we want to standardize?
	public static $content_types_array = array('sb_currency','sb_loctype','sb_location','sb_business','sb_businessunit','sb_partycat','sb_partytype','sb_roletype','sb_party','sb_partyrole','sb_reltype','sb_relstatus','sb_partyrel','sb_partygroup','sb_person','sb_partyprofile','sb_cmechtype','sb_contactmech','sb_pcmpurposetype','sb_partycmech','sb_pcmpurpose','sb_partyfiles','sb_invitestatus','sb_userinvite','sb_businesscat','sb_chargetype','sb_chargefreq','sb_charge','sb_expensetype','sb_expensefreq','sb_expense','sb_liabcat','sb_liabtype','sb_liability','sb_dmethod','sb_uom','sb_utilitytype','sb_utility','sb_facilitycat','sb_facilitytype','sb_facility','sb_facilityrole','sb_facharge','sb_proptype','sb_propstatus','sb_property','sb_zonetype','sb_zoningdata','sb_mortgagetype','sb_mortgage','sb_laccessibility','sb_ltopography','sb_landtype','sb_soiltype','sb_lshape','sb_land','sb_plottype','sb_plot','sb_improvetype','sb_improvement','sb_proputility','sb_pcharge','sb_assetcat','sb_assettype','sb_asset','sb_inventype','sb_inventory','sb_invitemtype','sb_inventoryitem','sb_propstaff','sb_propfiles','sb_buildingtype','sb_buildtypropty','sb_allocunit','sb_building','sb_bcharge','sb_buildfiles','sb_floortype','sb_floor','sb_fcharge','sb_unittype','sb_utypecharge','sb_unit','sb_unitcharge','sb_pslottype','sb_pstypecharge','sb_pslot','sb_agreecat','sb_agreetype','sb_agreetypecharge','sb_termtype','sb_term','sb_agreement','sb_purchaseagrmnt','sb_settlementdata','sb_settledataloan','sb_agrmntitemtype','sb_agreementitem','sb_servicetype','sb_service','sb_agreeservice','sb_agreeunit','sb_agreecharge','sb_agreeterm','sb_chargeinagrmt','sb_rentstatus','sb_rent','sb_assmttype','sb_assessment','sb_sdtype','sb_salesdata','sb_sditemtype','sb_salesdataitem','sb_cdtype','sb_costdata','sb_cditemtype','sb_cditemdata','sb_idtype','sb_incomedata','sb_idetype','sb_idexpense','sb_billaccount','sb_accttxntype','sb_accttxnstatus','sb_accttransaction','sb_fundmeth','sb_templatetype','sb_template','sb_invoicetype','sb_invoicestatus','sb_invoice','sb_invoicerole','sb_invoiceitemtype','sb_invoiceitem','sb_invoiceterm','sb_pordertype','sb_porderstatus','sb_porder','sb_porole','sb_poitemtype','sb_porderitem','sb_porderterm','sb_paymenttype','sb_paymethtype','sb_payment','sb_payapp','sb_receipttype','sb_disbursetype','sb_receipt','sb_disbursement','sb_periodtype','sb_acctperiod','sb_coaacctstruct','sb_coaacctsegtype','sb_coaasegval','sb_coaacctseg','sb_coastatus','sb_coa','sb_glaccttype','sb_glaccount','sb_buglaccount','sb_buglaccountbal','sb_coaaseginst','sb_feventtype','sb_fevent','sb_txntype','sb_transaction','sb_txndetail','sb_feventtxntype','sb_txntypeacct','sb_budgettype','sb_budgetstatus','sb_budget','sb_bitemtype','sb_budgetitem','sb_budgetrole','sb_stperiod','sb_brrtype','sb_budgetreview','sb_brevision','sb_budgetrevimpact','sb_budgetscenario','sb_bscenariorule','sb_bscenarioapp','sb_pballocation','sb_glbudgetxref','sb_disputetype','sb_disputestatus','sb_dispute','sb_disputeitem','sb_conversation','sb_conuser','sb_message','sb_messagesfiles','sb_notifytype','sb_notifystatus','sb_notifylevel','sb_notification','sb_pclasstype','sb_ptypeclass','sb_positiontype','sb_pstatus','sb_resptype','sb_validresp','sb_position','sb_posresp','sb_pfulfillment','sb_preportstruct','sb_ratetype','sb_paygrade','sb_salarystep','sb_ptyperate','sb_payhistory','sb_benefittype','sb_partybenefit','sb_deductiontype','sb_deduction','sb_prpreference','sb_empappstatus','sb_empappsrctype','sb_empapplication','sb_qualtype','sb_skilltype','sb_tctype','sb_ptraining','sb_resume','sb_partyskill','sb_partyqual','sb_perfnoteype','sb_perfnote','sb_perfreview','sb_ratingtype','sb_previtemtype','sb_perfreviewitem','sb_terminationtype','sb_termreason','sb_ucstatus','sb_uempclaim','sb_delivertype','sb_deliverable','sb_requiretype','sb_requirement','sb_requirerole','sb_wetypecat','sb_wetype','sb_weptype','sb_westatus','sb_workeffort','sb_wrfulfillment','sb_weatype','sb_weassociation','sb_wertype','sb_wepatyassign','sb_timesheet','sb_tsrtype','sb_tsrole','sb_timeentry','sb_partyrate','sb_wearate','sb_weiassign','sb_weaastatus','sb_weaassign','sb_wepastatus','sb_paassign','sb_wedeliverable',);

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
        case 'sb_partyfiles':
				$custom_fields = PartyFilesCPT::$custom_fields;
				break;
        case 'sb_invitestatus':
				$custom_fields = UserInviteStatusCPT::$custom_fields;
				break;
        case 'sb_userinvite':
				$custom_fields = UserInviteCPT::$custom_fields;
				break;
        case 'sb_businesscat':
				$custom_fields = BusinessCategoryCPT::$custom_fields;
				break;
        case 'sb_chargetype':
				$custom_fields = ChargeTypeCPT::$custom_fields;
				break;
        case 'sb_chargefreq':
				$custom_fields = ChargeFrequencyCPT::$custom_fields;
				break;
        case 'sb_charge':
				$custom_fields = ChargeCPT::$custom_fields;
				break;
        case 'sb_expensetype':
				$custom_fields = ExpenseTypeCPT::$custom_fields;
				break;
        case 'sb_expensefreq':
				$custom_fields = ExpenseFrequencyCPT::$custom_fields;
				break;
        case 'sb_expense':
				$custom_fields = ExpenseCPT::$custom_fields;
				break;
        case 'sb_liabcat':
				$custom_fields = LiabilityCategoryCPT::$custom_fields;
				break;
        case 'sb_liabtype':
				$custom_fields = LiabilityTypeCPT::$custom_fields;
				break;
        case 'sb_liability':
				$custom_fields = LiabilityCPT::$custom_fields;
				break;
        case 'sb_dmethod':
				$custom_fields = DeprecationMethodCPT::$custom_fields;
				break;
        case 'sb_uom':
				$custom_fields = UnitOfMeasureCPT::$custom_fields;
				break;
        case 'sb_utilitytype':
				$custom_fields = UtilityTypeCPT::$custom_fields;
				break;
        case 'sb_utility':
				$custom_fields = UtilityCPT::$custom_fields;
				break;
        case 'sb_facilitycat':
				$custom_fields = FacilityCategoryCPT::$custom_fields;
				break;
        case 'sb_facilitytype':
				$custom_fields = FacilityTypeCPT::$custom_fields;
				break;
        case 'sb_facility':
				$custom_fields = FacilityCPT::$custom_fields;
				break;
        case 'sb_facilityrole':
				$custom_fields = FacilityRoleCPT::$custom_fields;
				break;
        case 'sb_facharge':
				$custom_fields = FacilityChargeCPT::$custom_fields;
				break;
        case 'sb_proptype':
				$custom_fields = PropertyTypeCPT::$custom_fields;
				break;
        case 'sb_propstatus':
				$custom_fields = PropertyStatusCPT::$custom_fields;
				break;
        case 'sb_property':
				$custom_fields = PropertyCPT::$custom_fields;
				break;
        case 'sb_zonetype':
				$custom_fields = ZoneTypeCPT::$custom_fields;
				break;
        case 'sb_zoningdata':
				$custom_fields = ZoningDataCPT::$custom_fields;
				break;
        case 'sb_mortgagetype':
				$custom_fields = MortgageTypeCPT::$custom_fields;
				break;
        case 'sb_mortgage':
				$custom_fields = MortgageCPT::$custom_fields;
				break;
        case 'sb_laccessibility':
				$custom_fields = LandAccessibilityCPT::$custom_fields;
				break;
        case 'sb_ltopography':
				$custom_fields = LandTopographyCPT::$custom_fields;
				break;
        case 'sb_landtype':
				$custom_fields = LandTypeCPT::$custom_fields;
				break;
        case 'sb_soiltype':
				$custom_fields = SoilTypeCPT::$custom_fields;
				break;
        case 'sb_lshape':
				$custom_fields = LandShapeCPT::$custom_fields;
				break;
        case 'sb_land':
				$custom_fields = LandCPT::$custom_fields;
				break;
        case 'sb_plottype':
				$custom_fields = PlotTypeCPT::$custom_fields;
				break;
        case 'sb_plot':
				$custom_fields = PlotCPT::$custom_fields;
				break;
        case 'sb_improvetype':
				$custom_fields = ImprovementTypeCPT::$custom_fields;
				break;
        case 'sb_improvement':
				$custom_fields = ImprovementCPT::$custom_fields;
				break;
        case 'sb_proputility':
				$custom_fields = PropertyUtilityCPT::$custom_fields;
				break;
        case 'sb_pcharge':
				$custom_fields = PropertyChargeCPT::$custom_fields;
				break;
        case 'sb_assetcat':
				$custom_fields = AssetCategoryCPT::$custom_fields;
				break;
        case 'sb_assettype':
				$custom_fields = AssetTypeCPT::$custom_fields;
				break;
        case 'sb_asset':
				$custom_fields = AssetCPT::$custom_fields;
				break;
        case 'sb_inventype':
				$custom_fields = InventoryTypeCPT::$custom_fields;
				break;
        case 'sb_inventory':
				$custom_fields = InventoryCPT::$custom_fields;
				break;
        case 'sb_invitemtype':
				$custom_fields = InventoryItemTypeCPT::$custom_fields;
				break;
        case 'sb_inventoryitem':
				$custom_fields = InventoryItemCPT::$custom_fields;
				break;
        case 'sb_propstaff':
				$custom_fields = PropertyStaffCPT::$custom_fields;
				break;
        case 'sb_propfiles':
				$custom_fields = PropertyFilesCPT::$custom_fields;
				break;
        case 'sb_buildingtype':
				$custom_fields = BuildingTypeCPT::$custom_fields;
				break;
        case 'sb_buildtypropty':
				$custom_fields = BuildingTypePropertyTypeCPT::$custom_fields;
				break;
        case 'sb_allocunit':
				$custom_fields = AllocationUnitCPT::$custom_fields;
				break;
        case 'sb_building':
				$custom_fields = BuildingCPT::$custom_fields;
				break;
        case 'sb_bcharge':
				$custom_fields = BuildingChargeCPT::$custom_fields;
				break;
        case 'sb_buildfiles':
				$custom_fields = BuildingFilesCPT::$custom_fields;
				break;
        case 'sb_floortype':
				$custom_fields = FloorTypeCPT::$custom_fields;
				break;
        case 'sb_floor':
				$custom_fields = FloorCPT::$custom_fields;
				break;
        case 'sb_fcharge':
				$custom_fields = FloorChargeCPT::$custom_fields;
				break;
        case 'sb_unittype':
				$custom_fields = UnitTypeCPT::$custom_fields;
				break;
        case 'sb_utypecharge':
				$custom_fields = UnitTypeChargeCPT::$custom_fields;
				break;
        case 'sb_unit':
				$custom_fields = UnitCPT::$custom_fields;
				break;
        case 'sb_unitcharge':
				$custom_fields = UnitChargeCPT::$custom_fields;
				break;
        case 'sb_pslottype':
				$custom_fields = ParkingSlotTypeCPT::$custom_fields;
				break;
        case 'sb_pstypecharge':
				$custom_fields = ParkingSlotTypeChargeCPT::$custom_fields;
				break;
        case 'sb_pslot':
				$custom_fields = ParkingSlotCPT::$custom_fields;
				break;
        case 'sb_agreecat':
				$custom_fields = AgreementCategoryCPT::$custom_fields;
				break;
        case 'sb_agreetype':
				$custom_fields = AgreementTypeCPT::$custom_fields;
				break;
        case 'sb_agreetypecharge':
				$custom_fields = AgreementTypeChargeCPT::$custom_fields;
				break;
        case 'sb_termtype':
				$custom_fields = TermTypeCPT::$custom_fields;
				break;
        case 'sb_term':
				$custom_fields = TermCPT::$custom_fields;
				break;
        case 'sb_agreement':
				$custom_fields = AgreementCPT::$custom_fields;
				break;
        case 'sb_purchaseagrmnt':
				$custom_fields = PurchaseAgreementCPT::$custom_fields;
				break;
        case 'sb_settlementdata':
				$custom_fields = SettlementDataCPT::$custom_fields;
				break;
        case 'sb_settledataloan':
				$custom_fields = SettlementDataLoanCPT::$custom_fields;
				break;
        case 'sb_agrmntitemtype':
				$custom_fields = AgreementItemTypeCPT::$custom_fields;
				break;
        case 'sb_agreementitem':
				$custom_fields = AgreementItemCPT::$custom_fields;
				break;
        case 'sb_servicetype':
				$custom_fields = ServiceTypeCPT::$custom_fields;
				break;
        case 'sb_service':
				$custom_fields = ServiceCPT::$custom_fields;
				break;
        case 'sb_agreeservice':
				$custom_fields = AgreementServiceCPT::$custom_fields;
				break;
        case 'sb_agreeunit':
				$custom_fields = AgreementUnitCPT::$custom_fields;
				break;
        case 'sb_agreecharge':
				$custom_fields = AgreementChargeCPT::$custom_fields;
				break;
        case 'sb_agreeterm':
				$custom_fields = AgreementTermCPT::$custom_fields;
				break;
        case 'sb_chargeinagrmt':
				$custom_fields = ChargeInAgreementCPT::$custom_fields;
				break;
        case 'sb_rentstatus':
				$custom_fields = RentStatusCPT::$custom_fields;
				break;
        case 'sb_rent':
				$custom_fields = RentCPT::$custom_fields;
				break;
        case 'sb_assmttype':
				$custom_fields = AssessmentTypeCPT::$custom_fields;
				break;
        case 'sb_assessment':
				$custom_fields = AssessmentCPT::$custom_fields;
				break;
        case 'sb_sdtype':
				$custom_fields = SalesDataTypeCPT::$custom_fields;
				break;
        case 'sb_salesdata':
				$custom_fields = SalesDataCPT::$custom_fields;
				break;
        case 'sb_sditemtype':
				$custom_fields = SalesDataItemTypeCPT::$custom_fields;
				break;
        case 'sb_salesdataitem':
				$custom_fields = SalesDataItemCPT::$custom_fields;
				break;
        case 'sb_cdtype':
				$custom_fields = CostDataTypeCPT::$custom_fields;
				break;
        case 'sb_costdata':
				$custom_fields = CostDataCPT::$custom_fields;
				break;
        case 'sb_cditemtype':
				$custom_fields = CostDataItemTypeCPT::$custom_fields;
				break;
        case 'sb_cditemdata':
				$custom_fields = CostDataItemCPT::$custom_fields;
				break;
        case 'sb_idtype':
				$custom_fields = IncomeDataTypeCPT::$custom_fields;
				break;
        case 'sb_incomedata':
				$custom_fields = IncomeDataCPT::$custom_fields;
				break;
        case 'sb_idetype':
				$custom_fields = IncomeDataExpenseTypeCPT::$custom_fields;
				break;
        case 'sb_idexpense':
				$custom_fields = IncomeDataExpenseCPT::$custom_fields;
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
        case 'sb_fundmeth':
				$custom_fields = FundingMethodCPT::$custom_fields;
				break;
        case 'sb_templatetype':
				$custom_fields = TemplateTypeCPT::$custom_fields;
				break;
        case 'sb_template':
				$custom_fields = TemplateCPT::$custom_fields;
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
        case 'sb_invoiceitem':
				$custom_fields = InvoiceItemCPT::$custom_fields;
				break;
        case 'sb_invoiceterm':
				$custom_fields = InvoiceTermCPT::$custom_fields;
				break;
        case 'sb_pordertype':
				$custom_fields = PurchaseOrderTypeCPT::$custom_fields;
				break;
        case 'sb_porderstatus':
				$custom_fields = PurchaseOrderStatusCPT::$custom_fields;
				break;
        case 'sb_porder':
				$custom_fields = PurchaseOrderCPT::$custom_fields;
				break;
        case 'sb_porole':
				$custom_fields = PurchaseOrderRoleCPT::$custom_fields;
				break;
        case 'sb_poitemtype':
				$custom_fields = PurchaseOrderItemTypeCPT::$custom_fields;
				break;
        case 'sb_porderitem':
				$custom_fields = PurchaseOrderItemCPT::$custom_fields;
				break;
        case 'sb_porderterm':
				$custom_fields = PurchaseOrderTermCPT::$custom_fields;
				break;
        case 'sb_paymenttype':
				$custom_fields = PaymentTypeCPT::$custom_fields;
				break;
        case 'sb_paymethtype':
				$custom_fields = PaymentMethodTypeCPT::$custom_fields;
				break;
        case 'sb_payment':
				$custom_fields = PaymentCPT::$custom_fields;
				break;
        case 'sb_payapp':
				$custom_fields = PaymentApplicationCPT::$custom_fields;
				break;
        case 'sb_receipttype':
				$custom_fields = ReceiptTypeCPT::$custom_fields;
				break;
        case 'sb_disbursetype':
				$custom_fields = DisbursementTypeCPT::$custom_fields;
				break;
        case 'sb_receipt':
				$custom_fields = ReceiptCPT::$custom_fields;
				break;
        case 'sb_disbursement':
				$custom_fields = DisbursementCPT::$custom_fields;
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
        case 'sb_budgettype':
				$custom_fields = BudgetTypeCPT::$custom_fields;
				break;
        case 'sb_budgetstatus':
				$custom_fields = BudgetStatusCPT::$custom_fields;
				break;
        case 'sb_budget':
				$custom_fields = BudgetCPT::$custom_fields;
				break;
        case 'sb_bitemtype':
				$custom_fields = BudgetItemTypeCPT::$custom_fields;
				break;
        case 'sb_budgetitem':
				$custom_fields = BudgetItemCPT::$custom_fields;
				break;
        case 'sb_budgetrole':
				$custom_fields = BudgetRoleCPT::$custom_fields;
				break;
        case 'sb_stperiod':
				$custom_fields = StandardTimePeriodCPT::$custom_fields;
				break;
        case 'sb_brrtype':
				$custom_fields = BudgetReviewResultTypeCPT::$custom_fields;
				break;
        case 'sb_budgetreview':
				$custom_fields = BudgetReviewCPT::$custom_fields;
				break;
        case 'sb_brevision':
				$custom_fields = BudgetRevisionCPT::$custom_fields;
				break;
        case 'sb_budgetrevimpact':
				$custom_fields = BudgetRevisionImpactCPT::$custom_fields;
				break;
        case 'sb_budgetscenario':
				$custom_fields = BudgetScenarioCPT::$custom_fields;
				break;
        case 'sb_bscenariorule':
				$custom_fields = BudgetScenarioRuleCPT::$custom_fields;
				break;
        case 'sb_bscenarioapp':
				$custom_fields = BudgetScenarioApplicationCPT::$custom_fields;
				break;
        case 'sb_pballocation':
				$custom_fields = PaymentBudgetAllocationCPT::$custom_fields;
				break;
        case 'sb_glbudgetxref':
				$custom_fields = GLBudgetXREFCPT::$custom_fields;
				break;
        case 'sb_disputetype':
				$custom_fields = DisputeTypeCPT::$custom_fields;
				break;
        case 'sb_disputestatus':
				$custom_fields = DisputeStatusCPT::$custom_fields;
				break;
        case 'sb_dispute':
				$custom_fields = DisputeCPT::$custom_fields;
				break;
        case 'sb_disputeitem':
				$custom_fields = DisputeItemCPT::$custom_fields;
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
        case 'sb_pclasstype':
				$custom_fields = PositionClassificationTypeCPT::$custom_fields;
				break;
        case 'sb_ptypeclass':
				$custom_fields = PositionTypeClassCPT::$custom_fields;
				break;
        case 'sb_positiontype':
				$custom_fields = PositionTypeCPT::$custom_fields;
				break;
        case 'sb_pstatus':
				$custom_fields = PositionStatusCPT::$custom_fields;
				break;
        case 'sb_resptype':
				$custom_fields = ResponsibilityTypeCPT::$custom_fields;
				break;
        case 'sb_validresp':
				$custom_fields = ValidResponsibilityCPT::$custom_fields;
				break;
        case 'sb_position':
				$custom_fields = PositionCPT::$custom_fields;
				break;
        case 'sb_posresp':
				$custom_fields = PositionResponsibilityCPT::$custom_fields;
				break;
        case 'sb_pfulfillment':
				$custom_fields = PositionFulfillmentCPT::$custom_fields;
				break;
        case 'sb_preportstruct':
				$custom_fields = PositionReportingStructureCPT::$custom_fields;
				break;
        case 'sb_ratetype':
				$custom_fields = RateTypeCPT::$custom_fields;
				break;
        case 'sb_paygrade':
				$custom_fields = PayGradeCPT::$custom_fields;
				break;
        case 'sb_salarystep':
				$custom_fields = SalaryStepCPT::$custom_fields;
				break;
        case 'sb_ptyperate':
				$custom_fields = PositionTypeRateCPT::$custom_fields;
				break;
        case 'sb_payhistory':
				$custom_fields = PayHistoryCPT::$custom_fields;
				break;
        case 'sb_benefittype':
				$custom_fields = BenefitTypeCPT::$custom_fields;
				break;
        case 'sb_partybenefit':
				$custom_fields = PartyBenefitCPT::$custom_fields;
				break;
        case 'sb_deductiontype':
				$custom_fields = DeductionTypeCPT::$custom_fields;
				break;
        case 'sb_deduction':
				$custom_fields = DeductionCPT::$custom_fields;
				break;
        case 'sb_prpreference':
				$custom_fields = PayrollPreferenceCPT::$custom_fields;
				break;
        case 'sb_empappstatus':
				$custom_fields = EmploymentApplicationStatusCPT::$custom_fields;
				break;
        case 'sb_empappsrctype':
				$custom_fields = EmploymentApplicationSourceTypeCPT::$custom_fields;
				break;
        case 'sb_empapplication':
				$custom_fields = EmploymentApplicationCPT::$custom_fields;
				break;
        case 'sb_qualtype':
				$custom_fields = QualificationTypeCPT::$custom_fields;
				break;
        case 'sb_skilltype':
				$custom_fields = SkillTypeCPT::$custom_fields;
				break;
        case 'sb_tctype':
				$custom_fields = TrainingClassTypeCPT::$custom_fields;
				break;
        case 'sb_ptraining':
				$custom_fields = PersonTrainingCPT::$custom_fields;
				break;
        case 'sb_resume':
				$custom_fields = ResumeCPT::$custom_fields;
				break;
        case 'sb_partyskill':
				$custom_fields = PartySkillCPT::$custom_fields;
				break;
        case 'sb_partyqual':
				$custom_fields = PartyQualificationCPT::$custom_fields;
				break;
        case 'sb_perfnoteype':
				$custom_fields = PerformanceNoteTypeCPT::$custom_fields;
				break;
        case 'sb_perfnote':
				$custom_fields = PerformanceNoteCPT::$custom_fields;
				break;
        case 'sb_perfreview':
				$custom_fields = PerformanceReviewCPT::$custom_fields;
				break;
        case 'sb_ratingtype':
				$custom_fields = RatingTypeCPT::$custom_fields;
				break;
        case 'sb_previtemtype':
				$custom_fields = PerfReviewItemTypeCPT::$custom_fields;
				break;
        case 'sb_perfreviewitem':
				$custom_fields = PerformanceReviewItemCPT::$custom_fields;
				break;
        case 'sb_terminationtype':
				$custom_fields = TerminationTypeCPT::$custom_fields;
				break;
        case 'sb_termreason':
				$custom_fields = TerminationReasonCPT::$custom_fields;
				break;
        case 'sb_ucstatus':
				$custom_fields = UnemploymentClaimStatusCPT::$custom_fields;
				break;
        case 'sb_uempclaim':
				$custom_fields = UnemploymentClaimCPT::$custom_fields;
				break;
        case 'sb_delivertype':
				$custom_fields = DeliverableTypeCPT::$custom_fields;
				break;
        case 'sb_deliverable':
				$custom_fields = DeliverableCPT::$custom_fields;
				break;
        case 'sb_requiretype':
				$custom_fields = RequirementTypeCPT::$custom_fields;
				break;
        case 'sb_requirement':
				$custom_fields = RequirementCPT::$custom_fields;
				break;
        case 'sb_requirerole':
				$custom_fields = RequirementRoleCPT::$custom_fields;
				break;
        case 'sb_wetypecat':
				$custom_fields = WorkEffortCategoryCPT::$custom_fields;
				break;
        case 'sb_wetype':
				$custom_fields = WorkEffortTypeCPT::$custom_fields;
				break;
        case 'sb_weptype':
				$custom_fields = WorkEffortPurposeTypeCPT::$custom_fields;
				break;
        case 'sb_westatus':
				$custom_fields = WorkEffortStatusCPT::$custom_fields;
				break;
        case 'sb_workeffort':
				$custom_fields = WorkEffortCPT::$custom_fields;
				break;
        case 'sb_wrfulfillment':
				$custom_fields = WorkRequirementFulfillmentCPT::$custom_fields;
				break;
        case 'sb_weatype':
				$custom_fields = WorkEffortAssociationTypeCPT::$custom_fields;
				break;
        case 'sb_weassociation':
				$custom_fields = WorkEffortAssociationCPT::$custom_fields;
				break;
        case 'sb_wertype':
				$custom_fields = WorkEffortRoleTypeCPT::$custom_fields;
				break;
        case 'sb_wepatyassign':
				$custom_fields = WorkEffortPartyAssignmentCPT::$custom_fields;
				break;
        case 'sb_timesheet':
				$custom_fields = TimeSheetCPT::$custom_fields;
				break;
        case 'sb_tsrtype':
				$custom_fields = TimeSheetRoleTypeCPT::$custom_fields;
				break;
        case 'sb_tsrole':
				$custom_fields = TimeSheetRoleCPT::$custom_fields;
				break;
        case 'sb_timeentry':
				$custom_fields = TimeEntryCPT::$custom_fields;
				break;
        case 'sb_partyrate':
				$custom_fields = PartyRateCPT::$custom_fields;
				break;
        case 'sb_wearate':
				$custom_fields = WorkEffortAssignmentRateCPT::$custom_fields;
				break;
        case 'sb_weiassign':
				$custom_fields = WorkEffortInventoryAssignmentCPT::$custom_fields;
				break;
        case 'sb_weaastatus':
				$custom_fields = WorkEffortAssetAssignmentStatusCPT::$custom_fields;
				break;
        case 'sb_weaassign':
				$custom_fields = WorkEffortAssetAssignmentCPT::$custom_fields;
				break;
        case 'sb_wepastatus':
				$custom_fields = PartyFAssetAssignmentStatusCPT::$custom_fields;
				break;
        case 'sb_paassign':
				$custom_fields = PartyAssetAssignmentCPT::$custom_fields;
				break;
        case 'sb_wedeliverable':
				$custom_fields = WorkEffortDeliverableCPT::$custom_fields;
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
        case 'sb_partyfiles':
				$field_value = PartyFilesCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invitestatus':
				$field_value = UserInviteStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_userinvite':
				$field_value = UserInviteCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_businesscat':
				$field_value = BusinessCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_chargetype':
				$field_value = ChargeTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_chargefreq':
				$field_value = ChargeFrequencyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_charge':
				$field_value = ChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_expensetype':
				$field_value = ExpenseTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_expensefreq':
				$field_value = ExpenseFrequencyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_expense':
				$field_value = ExpenseCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_liabcat':
				$field_value = LiabilityCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_liabtype':
				$field_value = LiabilityTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_liability':
				$field_value = LiabilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_dmethod':
				$field_value = DeprecationMethodCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_uom':
				$field_value = UnitOfMeasureCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_utilitytype':
				$field_value = UtilityTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_utility':
				$field_value = UtilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_facilitycat':
				$field_value = FacilityCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_facilitytype':
				$field_value = FacilityTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_facility':
				$field_value = FacilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_facilityrole':
				$field_value = FacilityRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_facharge':
				$field_value = FacilityChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_proptype':
				$field_value = PropertyTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_propstatus':
				$field_value = PropertyStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_property':
				$field_value = PropertyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_zonetype':
				$field_value = ZoneTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_zoningdata':
				$field_value = ZoningDataCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_mortgagetype':
				$field_value = MortgageTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_mortgage':
				$field_value = MortgageCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_laccessibility':
				$field_value = LandAccessibilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_ltopography':
				$field_value = LandTopographyCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_landtype':
				$field_value = LandTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_soiltype':
				$field_value = SoilTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_lshape':
				$field_value = LandShapeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_land':
				$field_value = LandCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_plottype':
				$field_value = PlotTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_plot':
				$field_value = PlotCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_improvetype':
				$field_value = ImprovementTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_improvement':
				$field_value = ImprovementCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_proputility':
				$field_value = PropertyUtilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pcharge':
				$field_value = PropertyChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_assetcat':
				$field_value = AssetCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_assettype':
				$field_value = AssetTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_asset':
				$field_value = AssetCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_inventype':
				$field_value = InventoryTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_inventory':
				$field_value = InventoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invitemtype':
				$field_value = InventoryItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_inventoryitem':
				$field_value = InventoryItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_propstaff':
				$field_value = PropertyStaffCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_propfiles':
				$field_value = PropertyFilesCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_buildingtype':
				$field_value = BuildingTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_buildtypropty':
				$field_value = BuildingTypePropertyTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_allocunit':
				$field_value = AllocationUnitCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_building':
				$field_value = BuildingCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_bcharge':
				$field_value = BuildingChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_buildfiles':
				$field_value = BuildingFilesCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_floortype':
				$field_value = FloorTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_floor':
				$field_value = FloorCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_fcharge':
				$field_value = FloorChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_unittype':
				$field_value = UnitTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_utypecharge':
				$field_value = UnitTypeChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_unit':
				$field_value = UnitCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_unitcharge':
				$field_value = UnitChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pslottype':
				$field_value = ParkingSlotTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pstypecharge':
				$field_value = ParkingSlotTypeChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pslot':
				$field_value = ParkingSlotCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreecat':
				$field_value = AgreementCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreetype':
				$field_value = AgreementTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreetypecharge':
				$field_value = AgreementTypeChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_termtype':
				$field_value = TermTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_term':
				$field_value = TermCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreement':
				$field_value = AgreementCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_purchaseagrmnt':
				$field_value = PurchaseAgreementCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_settlementdata':
				$field_value = SettlementDataCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_settledataloan':
				$field_value = SettlementDataLoanCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agrmntitemtype':
				$field_value = AgreementItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreementitem':
				$field_value = AgreementItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_servicetype':
				$field_value = ServiceTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_service':
				$field_value = ServiceCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreeservice':
				$field_value = AgreementServiceCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreeunit':
				$field_value = AgreementUnitCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreecharge':
				$field_value = AgreementChargeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_agreeterm':
				$field_value = AgreementTermCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_chargeinagrmt':
				$field_value = ChargeInAgreementCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_rentstatus':
				$field_value = RentStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_rent':
				$field_value = RentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_assmttype':
				$field_value = AssessmentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_assessment':
				$field_value = AssessmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_sdtype':
				$field_value = SalesDataTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_salesdata':
				$field_value = SalesDataCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_sditemtype':
				$field_value = SalesDataItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_salesdataitem':
				$field_value = SalesDataItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_cdtype':
				$field_value = CostDataTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_costdata':
				$field_value = CostDataCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_cditemtype':
				$field_value = CostDataItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_cditemdata':
				$field_value = CostDataItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_idtype':
				$field_value = IncomeDataTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_incomedata':
				$field_value = IncomeDataCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_idetype':
				$field_value = IncomeDataExpenseTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_idexpense':
				$field_value = IncomeDataExpenseCPT::get_field_value($content_type, $post_id, $field);
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
        case 'sb_fundmeth':
				$field_value = FundingMethodCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_templatetype':
				$field_value = TemplateTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_template':
				$field_value = TemplateCPT::get_field_value($content_type, $post_id, $field);
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
        case 'sb_invoiceitem':
				$field_value = InvoiceItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_invoiceterm':
				$field_value = InvoiceTermCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pordertype':
				$field_value = PurchaseOrderTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_porderstatus':
				$field_value = PurchaseOrderStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_porder':
				$field_value = PurchaseOrderCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_porole':
				$field_value = PurchaseOrderRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_poitemtype':
				$field_value = PurchaseOrderItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_porderitem':
				$field_value = PurchaseOrderItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_porderterm':
				$field_value = PurchaseOrderTermCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_paymenttype':
				$field_value = PaymentTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_paymethtype':
				$field_value = PaymentMethodTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_payment':
				$field_value = PaymentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_payapp':
				$field_value = PaymentApplicationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_receipttype':
				$field_value = ReceiptTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_disbursetype':
				$field_value = DisbursementTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_receipt':
				$field_value = ReceiptCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_disbursement':
				$field_value = DisbursementCPT::get_field_value($content_type, $post_id, $field);
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
        case 'sb_budgettype':
				$field_value = BudgetTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_budgetstatus':
				$field_value = BudgetStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_budget':
				$field_value = BudgetCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_bitemtype':
				$field_value = BudgetItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_budgetitem':
				$field_value = BudgetItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_budgetrole':
				$field_value = BudgetRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_stperiod':
				$field_value = StandardTimePeriodCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_brrtype':
				$field_value = BudgetReviewResultTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_budgetreview':
				$field_value = BudgetReviewCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_brevision':
				$field_value = BudgetRevisionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_budgetrevimpact':
				$field_value = BudgetRevisionImpactCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_budgetscenario':
				$field_value = BudgetScenarioCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_bscenariorule':
				$field_value = BudgetScenarioRuleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_bscenarioapp':
				$field_value = BudgetScenarioApplicationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pballocation':
				$field_value = PaymentBudgetAllocationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_glbudgetxref':
				$field_value = GLBudgetXREFCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_disputetype':
				$field_value = DisputeTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_disputestatus':
				$field_value = DisputeStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_dispute':
				$field_value = DisputeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_disputeitem':
				$field_value = DisputeItemCPT::get_field_value($content_type, $post_id, $field);
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
        case 'sb_pclasstype':
				$field_value = PositionClassificationTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_ptypeclass':
				$field_value = PositionTypeClassCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_positiontype':
				$field_value = PositionTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pstatus':
				$field_value = PositionStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_resptype':
				$field_value = ResponsibilityTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_validresp':
				$field_value = ValidResponsibilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_position':
				$field_value = PositionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_posresp':
				$field_value = PositionResponsibilityCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_pfulfillment':
				$field_value = PositionFulfillmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_preportstruct':
				$field_value = PositionReportingStructureCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_ratetype':
				$field_value = RateTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_paygrade':
				$field_value = PayGradeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_salarystep':
				$field_value = SalaryStepCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_ptyperate':
				$field_value = PositionTypeRateCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_payhistory':
				$field_value = PayHistoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_benefittype':
				$field_value = BenefitTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partybenefit':
				$field_value = PartyBenefitCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_deductiontype':
				$field_value = DeductionTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_deduction':
				$field_value = DeductionCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_prpreference':
				$field_value = PayrollPreferenceCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_empappstatus':
				$field_value = EmploymentApplicationStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_empappsrctype':
				$field_value = EmploymentApplicationSourceTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_empapplication':
				$field_value = EmploymentApplicationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_qualtype':
				$field_value = QualificationTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_skilltype':
				$field_value = SkillTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_tctype':
				$field_value = TrainingClassTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_ptraining':
				$field_value = PersonTrainingCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_resume':
				$field_value = ResumeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyskill':
				$field_value = PartySkillCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyqual':
				$field_value = PartyQualificationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_perfnoteype':
				$field_value = PerformanceNoteTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_perfnote':
				$field_value = PerformanceNoteCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_perfreview':
				$field_value = PerformanceReviewCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_ratingtype':
				$field_value = RatingTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_previtemtype':
				$field_value = PerfReviewItemTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_perfreviewitem':
				$field_value = PerformanceReviewItemCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_terminationtype':
				$field_value = TerminationTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_termreason':
				$field_value = TerminationReasonCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_ucstatus':
				$field_value = UnemploymentClaimStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_uempclaim':
				$field_value = UnemploymentClaimCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_delivertype':
				$field_value = DeliverableTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_deliverable':
				$field_value = DeliverableCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_requiretype':
				$field_value = RequirementTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_requirement':
				$field_value = RequirementCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_requirerole':
				$field_value = RequirementRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wetypecat':
				$field_value = WorkEffortCategoryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wetype':
				$field_value = WorkEffortTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_weptype':
				$field_value = WorkEffortPurposeTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_westatus':
				$field_value = WorkEffortStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_workeffort':
				$field_value = WorkEffortCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wrfulfillment':
				$field_value = WorkRequirementFulfillmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_weatype':
				$field_value = WorkEffortAssociationTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_weassociation':
				$field_value = WorkEffortAssociationCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wertype':
				$field_value = WorkEffortRoleTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wepatyassign':
				$field_value = WorkEffortPartyAssignmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_timesheet':
				$field_value = TimeSheetCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_tsrtype':
				$field_value = TimeSheetRoleTypeCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_tsrole':
				$field_value = TimeSheetRoleCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_timeentry':
				$field_value = TimeEntryCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_partyrate':
				$field_value = PartyRateCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wearate':
				$field_value = WorkEffortAssignmentRateCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_weiassign':
				$field_value = WorkEffortInventoryAssignmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_weaastatus':
				$field_value = WorkEffortAssetAssignmentStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_weaassign':
				$field_value = WorkEffortAssetAssignmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wepastatus':
				$field_value = PartyFAssetAssignmentStatusCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_paassign':
				$field_value = PartyAssetAssignmentCPT::get_field_value($content_type, $post_id, $field);
				break;
        case 'sb_wedeliverable':
				$field_value = WorkEffortDeliverableCPT::get_field_value($content_type, $post_id, $field);
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