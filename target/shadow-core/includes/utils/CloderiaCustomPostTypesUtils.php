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
	public static $content_types_array = array('sb_currency','sb_loctype','sb_location','sb_business','sb_businessunit','sb_partycat','sb_partytype','sb_roletype','sb_party','sb_partyrole','sb_reltype','sb_relstatus','sb_partyrel','sb_partygroup','sb_person','sb_partyprofile','sb_partyaddress','sb_partyfiles','sb_invitestatus','sb_userinvite','sb_businesscat','sb_chargetype','sb_chargefreq','sb_charge','sb_expensetype','sb_expensefreq','sb_expense','sb_liabcat','sb_liabtype','sb_liability','sb_dmethod','sb_uom','sb_utilitytype','sb_utility','sb_facilitycat','sb_facilitytype','sb_facility','sb_facharge','sb_proptype','sb_propstatus','sb_property','sb_zonetype','sb_zoningdata','sb_mortgagetype','sb_mortgage','sb_laccessibility','sb_ltopography','sb_landtype','sb_soiltype','sb_lshape','sb_land','sb_plottype','sb_plot','sb_improvetype','sb_improvement','sb_proputility','sb_pcharge','sb_assetcat','sb_assettype','sb_asset','sb_inventype','sb_inventory','sb_invitemtype','sb_inventoryitem','sb_propstaff','sb_propfiles','sb_buildingtype','sb_buildtypropty','sb_allocunit','sb_building','sb_bcharge','sb_buildfiles','sb_floortype','sb_floor','sb_fcharge','sb_unittype','sb_utypecharge','sb_unit','sb_unitcharge','sb_pslottype','sb_pstypecharge','sb_pslot','sb_agreecat','sb_agreetype','sb_agreetypecharge','sb_termtype','sb_term','sb_agreement','sb_purchaseagrmnt','sb_settlementdata','sb_settledataloan','sb_agrmntitemtype','sb_agreementitem','sb_servicetype','sb_service','sb_agreeservice','sb_agreeunit','sb_agreecharge','sb_agreeterm','sb_chargeinagrmt','sb_rentstatus','sb_rent','sb_assmttype','sb_assessment','sb_sdtype','sb_salesdata','sb_sditemtype','sb_salesdataitem','sb_cdtype','sb_costdata','sb_cditemtype','sb_cditemdata','sb_idtype','sb_incomedata','sb_idetype','sb_idexpense','sb_billaccount','sb_accttxntype','sb_accttxnstatus','sb_accttransaction','sb_fundmeth','sb_templatetype','sb_template','sb_invoicetype','sb_invoicestatus','sb_invoice','sb_invoicerole','sb_invoiceitemtype','sb_invoiceitem','sb_invoiceterm','sb_pordertype','sb_porderstatus','sb_porder','sb_porole','sb_poitemtype','sb_porderitem','sb_porderterm','sb_paymenttype','sb_paymethtype','sb_payment','sb_payapp','sb_receipttype','sb_disbursetype','sb_receipt','sb_disbursement','sb_periodtype','sb_acctperiod','sb_coaacctstruct','sb_coaacctsegtype','sb_coaasegval','sb_coaacctseg','sb_coastatus','sb_coa','sb_glaccttype','sb_glaccount','sb_buglaccount','sb_buglaccountbal','sb_coaaseginst','sb_feventtype','sb_fevent','sb_txntype','sb_transaction','sb_txndetail','sb_feventtxntype','sb_txntypeacct','sb_budgettype','sb_budgetstatus','sb_budget','sb_bitemtype','sb_budgetitem','sb_budgetrole','sb_stperiod','sb_brrtype','sb_budgetreview','sb_brevision','sb_budgetrevimpact','sb_budgetscenario','sb_bscenariorule','sb_bscenarioapp','sb_pballocation','sb_glbudgetxref','sb_disputetype','sb_disputestatus','sb_dispute','sb_disputeitem','sb_conversation','sb_message','sb_messagesfiles','sb_notifytype','sb_notifystatus','sb_notifylevel','sb_notification','sb_pclasstype','sb_ptypeclass','sb_positiontype','sb_pstatus','sb_resptype','sb_validresp','sb_position','sb_posresp','sb_pfulfillment','sb_preportstruct','sb_ratetype','sb_paygrade','sb_salarystep','sb_ptyperate','sb_payhistory','sb_benefittype','sb_partybenefit','sb_deductiontype','sb_deduction','sb_prpreference','sb_empappstatus','sb_empappsrctype','sb_empapplication','sb_qualtype','sb_skilltype','sb_tctype','sb_ptraining','sb_resume','sb_partyskill','sb_partyqual','sb_perfnoteype','sb_perfnote','sb_perfreview','sb_ratingtype','sb_previtemtype','sb_perfreviewitem','sb_terminationtype','sb_termreason','sb_ucstatus','sb_uempclaim','sb_delivertype','sb_deliverable','sb_requiretype','sb_requirement','sb_requirerole','sb_wetypecat','sb_wetype','sb_weptype','sb_westatus','sb_workeffort','sb_wrfulfillment','sb_weatype','sb_weassociation','sb_wertype','sb_wepatyassign','sb_timesheet','sb_tsrtype','sb_tsrole','sb_timeentry','sb_partyrate','sb_wearate','sb_weiassign','sb_weaastatus','sb_weaassign','sb_wepastatus','sb_paassign','sb_wedeliverable',);

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
        PartyAddressCPT::register_custom_post_type();
        PartyFilesCPT::register_custom_post_type();
        UserInviteStatusCPT::register_custom_post_type();
        UserInviteCPT::register_custom_post_type();
        BusinessCategoryCPT::register_custom_post_type();
        ChargeTypeCPT::register_custom_post_type();
        ChargeFrequencyCPT::register_custom_post_type();
        ChargeCPT::register_custom_post_type();
        ExpenseTypeCPT::register_custom_post_type();
        ExpenseFrequencyCPT::register_custom_post_type();
        ExpenseCPT::register_custom_post_type();
        LiabilityCategoryCPT::register_custom_post_type();
        LiabilityTypeCPT::register_custom_post_type();
        LiabilityCPT::register_custom_post_type();
        DeprecationMethodCPT::register_custom_post_type();
        UnitOfMeasureCPT::register_custom_post_type();
        UtilityTypeCPT::register_custom_post_type();
        UtilityCPT::register_custom_post_type();
        FacilityCategoryCPT::register_custom_post_type();
        FacilityTypeCPT::register_custom_post_type();
        FacilityCPT::register_custom_post_type();
        FacilityChargeCPT::register_custom_post_type();
        PropertyTypeCPT::register_custom_post_type();
        PropertyStatusCPT::register_custom_post_type();
        PropertyCPT::register_custom_post_type();
        ZoneTypeCPT::register_custom_post_type();
        ZoningDataCPT::register_custom_post_type();
        MortgageTypeCPT::register_custom_post_type();
        MortgageCPT::register_custom_post_type();
        LandAccessibilityCPT::register_custom_post_type();
        LandTopographyCPT::register_custom_post_type();
        LandTypeCPT::register_custom_post_type();
        SoilTypeCPT::register_custom_post_type();
        LandShapeCPT::register_custom_post_type();
        LandCPT::register_custom_post_type();
        PlotTypeCPT::register_custom_post_type();
        PlotCPT::register_custom_post_type();
        ImprovementTypeCPT::register_custom_post_type();
        ImprovementCPT::register_custom_post_type();
        PropertyUtilityCPT::register_custom_post_type();
        PropertyChargeCPT::register_custom_post_type();
        AssetCategoryCPT::register_custom_post_type();
        AssetTypeCPT::register_custom_post_type();
        AssetCPT::register_custom_post_type();
        InventoryTypeCPT::register_custom_post_type();
        InventoryCPT::register_custom_post_type();
        InventoryItemTypeCPT::register_custom_post_type();
        InventoryItemCPT::register_custom_post_type();
        PropertyStaffCPT::register_custom_post_type();
        PropertyFilesCPT::register_custom_post_type();
        BuildingTypeCPT::register_custom_post_type();
        BuildingTypePropertyTypeCPT::register_custom_post_type();
        AllocationUnitCPT::register_custom_post_type();
        BuildingCPT::register_custom_post_type();
        BuildingChargeCPT::register_custom_post_type();
        BuildingFilesCPT::register_custom_post_type();
        FloorTypeCPT::register_custom_post_type();
        FloorCPT::register_custom_post_type();
        FloorChargeCPT::register_custom_post_type();
        UnitTypeCPT::register_custom_post_type();
        UnitTypeChargeCPT::register_custom_post_type();
        UnitCPT::register_custom_post_type();
        UnitChargeCPT::register_custom_post_type();
        ParkingSlotTypeCPT::register_custom_post_type();
        ParkingSlotTypeChargeCPT::register_custom_post_type();
        ParkingSlotCPT::register_custom_post_type();
        AgreementCategoryCPT::register_custom_post_type();
        AgreementTypeCPT::register_custom_post_type();
        AgreementTypeChargeCPT::register_custom_post_type();
        TermTypeCPT::register_custom_post_type();
        TermCPT::register_custom_post_type();
        AgreementCPT::register_custom_post_type();
        PurchaseAgreementCPT::register_custom_post_type();
        SettlementDataCPT::register_custom_post_type();
        SettlementDataLoanCPT::register_custom_post_type();
        AgreementItemTypeCPT::register_custom_post_type();
        AgreementItemCPT::register_custom_post_type();
        ServiceTypeCPT::register_custom_post_type();
        ServiceCPT::register_custom_post_type();
        AgreementServiceCPT::register_custom_post_type();
        AgreementUnitCPT::register_custom_post_type();
        AgreementChargeCPT::register_custom_post_type();
        AgreementTermCPT::register_custom_post_type();
        ChargeInAgreementCPT::register_custom_post_type();
        RentStatusCPT::register_custom_post_type();
        RentCPT::register_custom_post_type();
        AssessmentTypeCPT::register_custom_post_type();
        AssessmentCPT::register_custom_post_type();
        SalesDataTypeCPT::register_custom_post_type();
        SalesDataCPT::register_custom_post_type();
        SalesDataItemTypeCPT::register_custom_post_type();
        SalesDataItemCPT::register_custom_post_type();
        CostDataTypeCPT::register_custom_post_type();
        CostDataCPT::register_custom_post_type();
        CostDataItemTypeCPT::register_custom_post_type();
        CostDataItemCPT::register_custom_post_type();
        IncomeDataTypeCPT::register_custom_post_type();
        IncomeDataCPT::register_custom_post_type();
        IncomeDataExpenseTypeCPT::register_custom_post_type();
        IncomeDataExpenseCPT::register_custom_post_type();
        BillingAccountCPT::register_custom_post_type();
        AccountTransactionTypeCPT::register_custom_post_type();
        AccountTransactionStatusCPT::register_custom_post_type();
        AccountTransactionCPT::register_custom_post_type();
        FundingMethodCPT::register_custom_post_type();
        TemplateTypeCPT::register_custom_post_type();
        TemplateCPT::register_custom_post_type();
        InvoiceTypeCPT::register_custom_post_type();
        InvoiceStatusCPT::register_custom_post_type();
        InvoiceCPT::register_custom_post_type();
        InvoiceRoleCPT::register_custom_post_type();
        InvoiceItemTypeCPT::register_custom_post_type();
        InvoiceItemCPT::register_custom_post_type();
        InvoiceTermCPT::register_custom_post_type();
        PurchaseOrderTypeCPT::register_custom_post_type();
        PurchaseOrderStatusCPT::register_custom_post_type();
        PurchaseOrderCPT::register_custom_post_type();
        PurchaseOrderRoleCPT::register_custom_post_type();
        PurchaseOrderItemTypeCPT::register_custom_post_type();
        PurchaseOrderItemCPT::register_custom_post_type();
        PurchaseOrderTermCPT::register_custom_post_type();
        PaymentTypeCPT::register_custom_post_type();
        PaymentMethodTypeCPT::register_custom_post_type();
        PaymentCPT::register_custom_post_type();
        PaymentApplicationCPT::register_custom_post_type();
        ReceiptTypeCPT::register_custom_post_type();
        DisbursementTypeCPT::register_custom_post_type();
        ReceiptCPT::register_custom_post_type();
        DisbursementCPT::register_custom_post_type();
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
        TransactionCPT::register_custom_post_type();
        TransactionDetailCPT::register_custom_post_type();
        FEventTxnTypeCPT::register_custom_post_type();
        TxnTypeAccountCPT::register_custom_post_type();
        BudgetTypeCPT::register_custom_post_type();
        BudgetStatusCPT::register_custom_post_type();
        BudgetCPT::register_custom_post_type();
        BudgetItemTypeCPT::register_custom_post_type();
        BudgetItemCPT::register_custom_post_type();
        BudgetRoleCPT::register_custom_post_type();
        StandardTimePeriodCPT::register_custom_post_type();
        BudgetReviewResultTypeCPT::register_custom_post_type();
        BudgetReviewCPT::register_custom_post_type();
        BudgetRevisionCPT::register_custom_post_type();
        BudgetRevisionImpactCPT::register_custom_post_type();
        BudgetScenarioCPT::register_custom_post_type();
        BudgetScenarioRuleCPT::register_custom_post_type();
        BudgetScenarioApplicationCPT::register_custom_post_type();
        PaymentBudgetAllocationCPT::register_custom_post_type();
        GLBudgetXREFCPT::register_custom_post_type();
        DisputeTypeCPT::register_custom_post_type();
        DisputeStatusCPT::register_custom_post_type();
        DisputeCPT::register_custom_post_type();
        DisputeItemCPT::register_custom_post_type();
        ConversationCPT::register_custom_post_type();
        MessageCPT::register_custom_post_type();
        MessageFilesCPT::register_custom_post_type();
        NotificationTypeCPT::register_custom_post_type();
        NotificationStatusCPT::register_custom_post_type();
        NotificationLevelCPT::register_custom_post_type();
        NotificationCPT::register_custom_post_type();
        PositionClassificationTypeCPT::register_custom_post_type();
        PositionTypeClassCPT::register_custom_post_type();
        PositionTypeCPT::register_custom_post_type();
        PositionStatusCPT::register_custom_post_type();
        ResponsibilityTypeCPT::register_custom_post_type();
        ValidResponsibilityCPT::register_custom_post_type();
        PositionCPT::register_custom_post_type();
        PositionResponsibilityCPT::register_custom_post_type();
        PositionFulfillmentCPT::register_custom_post_type();
        PositionReportingStructureCPT::register_custom_post_type();
        RateTypeCPT::register_custom_post_type();
        PayGradeCPT::register_custom_post_type();
        SalaryStepCPT::register_custom_post_type();
        PositionTypeRateCPT::register_custom_post_type();
        PayHistoryCPT::register_custom_post_type();
        BenefitTypeCPT::register_custom_post_type();
        PartyBenefitCPT::register_custom_post_type();
        DeductionTypeCPT::register_custom_post_type();
        DeductionCPT::register_custom_post_type();
        PayrollPreferenceCPT::register_custom_post_type();
        EmploymentApplicationStatusCPT::register_custom_post_type();
        EmploymentApplicationSourceTypeCPT::register_custom_post_type();
        EmploymentApplicationCPT::register_custom_post_type();
        QualificationTypeCPT::register_custom_post_type();
        SkillTypeCPT::register_custom_post_type();
        TrainingClassTypeCPT::register_custom_post_type();
        PersonTrainingCPT::register_custom_post_type();
        ResumeCPT::register_custom_post_type();
        PartySkillCPT::register_custom_post_type();
        PartyQualificationCPT::register_custom_post_type();
        PerformanceNoteTypeCPT::register_custom_post_type();
        PerformanceNoteCPT::register_custom_post_type();
        PerformanceReviewCPT::register_custom_post_type();
        RatingTypeCPT::register_custom_post_type();
        PerfReviewItemTypeCPT::register_custom_post_type();
        PerformanceReviewItemCPT::register_custom_post_type();
        TerminationTypeCPT::register_custom_post_type();
        TerminationReasonCPT::register_custom_post_type();
        UnemploymentClaimStatusCPT::register_custom_post_type();
        UnemploymentClaimCPT::register_custom_post_type();
        DeliverableTypeCPT::register_custom_post_type();
        DeliverableCPT::register_custom_post_type();
        RequirementTypeCPT::register_custom_post_type();
        RequirementCPT::register_custom_post_type();
        RequirementRoleCPT::register_custom_post_type();
        WorkEffortCategoryCPT::register_custom_post_type();
        WorkEffortTypeCPT::register_custom_post_type();
        WorkEffortPurposeTypeCPT::register_custom_post_type();
        WorkEffortStatusCPT::register_custom_post_type();
        WorkEffortCPT::register_custom_post_type();
        WorkRequirementFulfillmentCPT::register_custom_post_type();
        WorkEffortAssociationTypeCPT::register_custom_post_type();
        WorkEffortAssociationCPT::register_custom_post_type();
        WorkEffortRoleTypeCPT::register_custom_post_type();
        WorkEffortPartyAssignmentCPT::register_custom_post_type();
        TimeSheetCPT::register_custom_post_type();
        TimeSheetRoleTypeCPT::register_custom_post_type();
        TimeSheetRoleCPT::register_custom_post_type();
        TimeEntryCPT::register_custom_post_type();
        PartyRateCPT::register_custom_post_type();
        WorkEffortAssignmentRateCPT::register_custom_post_type();
        WorkEffortInventoryAssignmentCPT::register_custom_post_type();
        WorkEffortAssetAssignmentStatusCPT::register_custom_post_type();
        WorkEffortAssetAssignmentCPT::register_custom_post_type();
        PartyFAssetAssignmentStatusCPT::register_custom_post_type();
        PartyAssetAssignmentCPT::register_custom_post_type();
        WorkEffortDeliverableCPT::register_custom_post_type();
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
			case 'sb_partyaddress':
				PartyAddressCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyfiles':
				PartyFilesCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invitestatus':
				UserInviteStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_userinvite':
				UserInviteCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_businesscat':
				BusinessCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_chargetype':
				ChargeTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_chargefreq':
				ChargeFrequencyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_charge':
				ChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_expensetype':
				ExpenseTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_expensefreq':
				ExpenseFrequencyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_expense':
				ExpenseCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_liabcat':
				LiabilityCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_liabtype':
				LiabilityTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_liability':
				LiabilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_dmethod':
				DeprecationMethodCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_uom':
				UnitOfMeasureCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_utilitytype':
				UtilityTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_utility':
				UtilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_facilitycat':
				FacilityCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_facilitytype':
				FacilityTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_facility':
				FacilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_facharge':
				FacilityChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_proptype':
				PropertyTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_propstatus':
				PropertyStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_property':
				PropertyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_zonetype':
				ZoneTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_zoningdata':
				ZoningDataCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_mortgagetype':
				MortgageTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_mortgage':
				MortgageCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_laccessibility':
				LandAccessibilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_ltopography':
				LandTopographyCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_landtype':
				LandTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_soiltype':
				SoilTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_lshape':
				LandShapeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_land':
				LandCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_plottype':
				PlotTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_plot':
				PlotCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_improvetype':
				ImprovementTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_improvement':
				ImprovementCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_proputility':
				PropertyUtilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pcharge':
				PropertyChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_assetcat':
				AssetCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_assettype':
				AssetTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_asset':
				AssetCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_inventype':
				InventoryTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_inventory':
				InventoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invitemtype':
				InventoryItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_inventoryitem':
				InventoryItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_propstaff':
				PropertyStaffCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_propfiles':
				PropertyFilesCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_buildingtype':
				BuildingTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_buildtypropty':
				BuildingTypePropertyTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_allocunit':
				AllocationUnitCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_building':
				BuildingCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_bcharge':
				BuildingChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_buildfiles':
				BuildingFilesCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_floortype':
				FloorTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_floor':
				FloorCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_fcharge':
				FloorChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_unittype':
				UnitTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_utypecharge':
				UnitTypeChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_unit':
				UnitCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_unitcharge':
				UnitChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pslottype':
				ParkingSlotTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pstypecharge':
				ParkingSlotTypeChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pslot':
				ParkingSlotCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreecat':
				AgreementCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreetype':
				AgreementTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreetypecharge':
				AgreementTypeChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_termtype':
				TermTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_term':
				TermCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreement':
				AgreementCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_purchaseagrmnt':
				PurchaseAgreementCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_settlementdata':
				SettlementDataCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_settledataloan':
				SettlementDataLoanCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agrmntitemtype':
				AgreementItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreementitem':
				AgreementItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_servicetype':
				ServiceTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_service':
				ServiceCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreeservice':
				AgreementServiceCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreeunit':
				AgreementUnitCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreecharge':
				AgreementChargeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_agreeterm':
				AgreementTermCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_chargeinagrmt':
				ChargeInAgreementCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_rentstatus':
				RentStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_rent':
				RentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_assmttype':
				AssessmentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_assessment':
				AssessmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_sdtype':
				SalesDataTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_salesdata':
				SalesDataCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_sditemtype':
				SalesDataItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_salesdataitem':
				SalesDataItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_cdtype':
				CostDataTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_costdata':
				CostDataCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_cditemtype':
				CostDataItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_cditemdata':
				CostDataItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_idtype':
				IncomeDataTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_incomedata':
				IncomeDataCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_idetype':
				IncomeDataExpenseTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_idexpense':
				IncomeDataExpenseCPT::save_custom_fields($post_id, $post);
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
			case 'sb_fundmeth':
				FundingMethodCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_templatetype':
				TemplateTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_template':
				TemplateCPT::save_custom_fields($post_id, $post);
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
			case 'sb_invoiceitem':
				InvoiceItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_invoiceterm':
				InvoiceTermCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pordertype':
				PurchaseOrderTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_porderstatus':
				PurchaseOrderStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_porder':
				PurchaseOrderCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_porole':
				PurchaseOrderRoleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_poitemtype':
				PurchaseOrderItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_porderitem':
				PurchaseOrderItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_porderterm':
				PurchaseOrderTermCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_paymenttype':
				PaymentTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_paymethtype':
				PaymentMethodTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_payment':
				PaymentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_payapp':
				PaymentApplicationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_receipttype':
				ReceiptTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_disbursetype':
				DisbursementTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_receipt':
				ReceiptCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_disbursement':
				DisbursementCPT::save_custom_fields($post_id, $post);
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
			case 'sb_budgettype':
				BudgetTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_budgetstatus':
				BudgetStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_budget':
				BudgetCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_bitemtype':
				BudgetItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_budgetitem':
				BudgetItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_budgetrole':
				BudgetRoleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_stperiod':
				StandardTimePeriodCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_brrtype':
				BudgetReviewResultTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_budgetreview':
				BudgetReviewCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_brevision':
				BudgetRevisionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_budgetrevimpact':
				BudgetRevisionImpactCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_budgetscenario':
				BudgetScenarioCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_bscenariorule':
				BudgetScenarioRuleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_bscenarioapp':
				BudgetScenarioApplicationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pballocation':
				PaymentBudgetAllocationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_glbudgetxref':
				GLBudgetXREFCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_disputetype':
				DisputeTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_disputestatus':
				DisputeStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_dispute':
				DisputeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_disputeitem':
				DisputeItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_conversation':
				ConversationCPT::save_custom_fields($post_id, $post);
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
			case 'sb_pclasstype':
				PositionClassificationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_ptypeclass':
				PositionTypeClassCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_positiontype':
				PositionTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pstatus':
				PositionStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_resptype':
				ResponsibilityTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_validresp':
				ValidResponsibilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_position':
				PositionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_posresp':
				PositionResponsibilityCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_pfulfillment':
				PositionFulfillmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_preportstruct':
				PositionReportingStructureCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_ratetype':
				RateTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_paygrade':
				PayGradeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_salarystep':
				SalaryStepCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_ptyperate':
				PositionTypeRateCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_payhistory':
				PayHistoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_benefittype':
				BenefitTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partybenefit':
				PartyBenefitCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_deductiontype':
				DeductionTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_deduction':
				DeductionCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_prpreference':
				PayrollPreferenceCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_empappstatus':
				EmploymentApplicationStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_empappsrctype':
				EmploymentApplicationSourceTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_empapplication':
				EmploymentApplicationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_qualtype':
				QualificationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_skilltype':
				SkillTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_tctype':
				TrainingClassTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_ptraining':
				PersonTrainingCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_resume':
				ResumeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyskill':
				PartySkillCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyqual':
				PartyQualificationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_perfnoteype':
				PerformanceNoteTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_perfnote':
				PerformanceNoteCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_perfreview':
				PerformanceReviewCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_ratingtype':
				RatingTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_previtemtype':
				PerfReviewItemTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_perfreviewitem':
				PerformanceReviewItemCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_terminationtype':
				TerminationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_termreason':
				TerminationReasonCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_ucstatus':
				UnemploymentClaimStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_uempclaim':
				UnemploymentClaimCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_delivertype':
				DeliverableTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_deliverable':
				DeliverableCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_requiretype':
				RequirementTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_requirement':
				RequirementCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_requirerole':
				RequirementRoleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wetypecat':
				WorkEffortCategoryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wetype':
				WorkEffortTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_weptype':
				WorkEffortPurposeTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_westatus':
				WorkEffortStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_workeffort':
				WorkEffortCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wrfulfillment':
				WorkRequirementFulfillmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_weatype':
				WorkEffortAssociationTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_weassociation':
				WorkEffortAssociationCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wertype':
				WorkEffortRoleTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wepatyassign':
				WorkEffortPartyAssignmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_timesheet':
				TimeSheetCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_tsrtype':
				TimeSheetRoleTypeCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_tsrole':
				TimeSheetRoleCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_timeentry':
				TimeEntryCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_partyrate':
				PartyRateCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wearate':
				WorkEffortAssignmentRateCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_weiassign':
				WorkEffortInventoryAssignmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_weaastatus':
				WorkEffortAssetAssignmentStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_weaassign':
				WorkEffortAssetAssignmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wepastatus':
				PartyFAssetAssignmentStatusCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_paassign':
				PartyAssetAssignmentCPT::save_custom_fields($post_id, $post);
				break;
			case 'sb_wedeliverable':
				WorkEffortDeliverableCPT::save_custom_fields($post_id, $post);
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