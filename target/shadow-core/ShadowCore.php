<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/* ------------------------------------------------------------------------------
  This plugin standardizes the custom fields for specified content types, e.g.
  post, page, and any other custom post-type you register via a plugin.

  TO-DO:
  Create a options page and a menu item
  read the $prefix from the database (? -- maybe not... changing it after posts
  have been created would be disasterous)
  read the $content_types_array from the database
  read the $custom_fields from the database
  more form element types?  E.g. date?
  ------------------------------------------------------------------------------ */

class ShadowCore {

    /**
     * @var string
     */
    public $version = '0.0.1';

    /**
     * @var CloderiaPort The single instance of the class
     * @since 0.0.1
     */
    protected static $_instance = null;

    /**
     * The date format string
     * @since 0.0.1
     */
    public static $date_format = 'M j, Y, H:i';

    /**
     * Main CloderiaPort Instance
     *
     * Ensures only one instance of CloderiaPort is loaded or can be loaded.
     *
     * @since 0.0.1
     * @static
     * @return CloderiaPort - Main instance
     */
    public static function initialize() {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * CloderiaPort Constructor.
     */
    public function __construct() {
        $this->includes();
        $this->init_scripts();
        $this->init_ajax_hooks();
        $this->init_backend_hooks();
        $this->init_template_hooks();
        $this->init_admin_template_hooks();
    }

    /**
     * Include all required files
     */
     /**
     * Include all required files
     */
    public function includes() {
        // Model
        include_once('includes/abstracts/CurrencyCPT.php');
        include_once('includes/abstracts/Currency.php');
        include_once('includes/abstracts/LocationTypeCPT.php');
        include_once('includes/abstracts/LocationType.php');
        include_once('includes/abstracts/LocationCPT.php');
        include_once('includes/abstracts/Location.php');
        include_once('includes/abstracts/BusinessCPT.php');
        include_once('includes/abstracts/Business.php');
        include_once('includes/abstracts/BusinessUnitCPT.php');
        include_once('includes/abstracts/BusinessUnit.php');
        include_once('includes/abstracts/PartyCategoryCPT.php');
        include_once('includes/abstracts/PartyCategory.php');
        include_once('includes/abstracts/PartyTypeCPT.php');
        include_once('includes/abstracts/PartyType.php');
        include_once('includes/abstracts/RoleTypeCPT.php');
        include_once('includes/abstracts/RoleType.php');
        include_once('includes/abstracts/PartyCPT.php');
        include_once('includes/abstracts/Party.php');
        include_once('includes/abstracts/PartyRoleCPT.php');
        include_once('includes/abstracts/PartyRole.php');
        include_once('includes/abstracts/RelationshipTypeCPT.php');
        include_once('includes/abstracts/RelationshipType.php');
        include_once('includes/abstracts/RelationshipStatusCPT.php');
        include_once('includes/abstracts/RelationshipStatus.php');
        include_once('includes/abstracts/PartyRelationshipCPT.php');
        include_once('includes/abstracts/PartyRelationship.php');
        include_once('includes/abstracts/PartyGroupCPT.php');
        include_once('includes/abstracts/PartyGroup.php');
        include_once('includes/abstracts/PersonCPT.php');
        include_once('includes/abstracts/Person.php');
        include_once('includes/abstracts/PartyProfileCPT.php');
        include_once('includes/abstracts/PartyProfile.php');
        include_once('includes/abstracts/ContactMechanismTypeCPT.php');
        include_once('includes/abstracts/ContactMechanismType.php');
        include_once('includes/abstracts/ContactMechanismCPT.php');
        include_once('includes/abstracts/ContactMechanism.php');
        include_once('includes/abstracts/PartyContactMechanismPurposeTypeCPT.php');
        include_once('includes/abstracts/PartyContactMechanismPurposeType.php');
        include_once('includes/abstracts/PartyContactMechanismCPT.php');
        include_once('includes/abstracts/PartyContactMechanism.php');
        include_once('includes/abstracts/PartyContactMechanismPurposeCPT.php');
        include_once('includes/abstracts/PartyContactMechanismPurpose.php');
        include_once('includes/abstracts/PartyFilesCPT.php');
        include_once('includes/abstracts/PartyFiles.php');
        include_once('includes/abstracts/UserInviteStatusCPT.php');
        include_once('includes/abstracts/UserInviteStatus.php');
        include_once('includes/abstracts/UserInviteCPT.php');
        include_once('includes/abstracts/UserInvite.php');
        include_once('includes/abstracts/BusinessCategoryCPT.php');
        include_once('includes/abstracts/BusinessCategory.php');
        include_once('includes/abstracts/ChargeTypeCPT.php');
        include_once('includes/abstracts/ChargeType.php');
        include_once('includes/abstracts/ChargeFrequencyCPT.php');
        include_once('includes/abstracts/ChargeFrequency.php');
        include_once('includes/abstracts/ChargeCPT.php');
        include_once('includes/abstracts/Charge.php');
        include_once('includes/abstracts/ExpenseTypeCPT.php');
        include_once('includes/abstracts/ExpenseType.php');
        include_once('includes/abstracts/ExpenseFrequencyCPT.php');
        include_once('includes/abstracts/ExpenseFrequency.php');
        include_once('includes/abstracts/ExpenseCPT.php');
        include_once('includes/abstracts/Expense.php');
        include_once('includes/abstracts/LiabilityCategoryCPT.php');
        include_once('includes/abstracts/LiabilityCategory.php');
        include_once('includes/abstracts/LiabilityTypeCPT.php');
        include_once('includes/abstracts/LiabilityType.php');
        include_once('includes/abstracts/LiabilityCPT.php');
        include_once('includes/abstracts/Liability.php');
        include_once('includes/abstracts/DeprecationMethodCPT.php');
        include_once('includes/abstracts/DeprecationMethod.php');
        include_once('includes/abstracts/UnitOfMeasureCPT.php');
        include_once('includes/abstracts/UnitOfMeasure.php');
        include_once('includes/abstracts/UtilityTypeCPT.php');
        include_once('includes/abstracts/UtilityType.php');
        include_once('includes/abstracts/UtilityCPT.php');
        include_once('includes/abstracts/Utility.php');
        include_once('includes/abstracts/FacilityCategoryCPT.php');
        include_once('includes/abstracts/FacilityCategory.php');
        include_once('includes/abstracts/FacilityTypeCPT.php');
        include_once('includes/abstracts/FacilityType.php');
        include_once('includes/abstracts/FacilityCPT.php');
        include_once('includes/abstracts/Facility.php');
        include_once('includes/abstracts/FacilityRoleCPT.php');
        include_once('includes/abstracts/FacilityRole.php');
        include_once('includes/abstracts/FacilityChargeCPT.php');
        include_once('includes/abstracts/FacilityCharge.php');
        include_once('includes/abstracts/PropertyTypeCPT.php');
        include_once('includes/abstracts/PropertyType.php');
        include_once('includes/abstracts/PropertyStatusCPT.php');
        include_once('includes/abstracts/PropertyStatus.php');
        include_once('includes/abstracts/PropertyCPT.php');
        include_once('includes/abstracts/Property.php');
        include_once('includes/abstracts/ZoneTypeCPT.php');
        include_once('includes/abstracts/ZoneType.php');
        include_once('includes/abstracts/ZoningDataCPT.php');
        include_once('includes/abstracts/ZoningData.php');
        include_once('includes/abstracts/MortgageTypeCPT.php');
        include_once('includes/abstracts/MortgageType.php');
        include_once('includes/abstracts/MortgageCPT.php');
        include_once('includes/abstracts/Mortgage.php');
        include_once('includes/abstracts/LandAccessibilityCPT.php');
        include_once('includes/abstracts/LandAccessibility.php');
        include_once('includes/abstracts/LandTopographyCPT.php');
        include_once('includes/abstracts/LandTopography.php');
        include_once('includes/abstracts/LandTypeCPT.php');
        include_once('includes/abstracts/LandType.php');
        include_once('includes/abstracts/SoilTypeCPT.php');
        include_once('includes/abstracts/SoilType.php');
        include_once('includes/abstracts/LandShapeCPT.php');
        include_once('includes/abstracts/LandShape.php');
        include_once('includes/abstracts/LandCPT.php');
        include_once('includes/abstracts/Land.php');
        include_once('includes/abstracts/PlotTypeCPT.php');
        include_once('includes/abstracts/PlotType.php');
        include_once('includes/abstracts/PlotCPT.php');
        include_once('includes/abstracts/Plot.php');
        include_once('includes/abstracts/ImprovementTypeCPT.php');
        include_once('includes/abstracts/ImprovementType.php');
        include_once('includes/abstracts/ImprovementCPT.php');
        include_once('includes/abstracts/Improvement.php');
        include_once('includes/abstracts/PropertyUtilityCPT.php');
        include_once('includes/abstracts/PropertyUtility.php');
        include_once('includes/abstracts/PropertyChargeCPT.php');
        include_once('includes/abstracts/PropertyCharge.php');
        include_once('includes/abstracts/AssetCategoryCPT.php');
        include_once('includes/abstracts/AssetCategory.php');
        include_once('includes/abstracts/AssetTypeCPT.php');
        include_once('includes/abstracts/AssetType.php');
        include_once('includes/abstracts/AssetCPT.php');
        include_once('includes/abstracts/Asset.php');
        include_once('includes/abstracts/InventoryTypeCPT.php');
        include_once('includes/abstracts/InventoryType.php');
        include_once('includes/abstracts/InventoryCPT.php');
        include_once('includes/abstracts/Inventory.php');
        include_once('includes/abstracts/InventoryItemTypeCPT.php');
        include_once('includes/abstracts/InventoryItemType.php');
        include_once('includes/abstracts/InventoryItemCPT.php');
        include_once('includes/abstracts/InventoryItem.php');
        include_once('includes/abstracts/PropertyStaffCPT.php');
        include_once('includes/abstracts/PropertyStaff.php');
        include_once('includes/abstracts/PropertyFilesCPT.php');
        include_once('includes/abstracts/PropertyFiles.php');
        include_once('includes/abstracts/BuildingTypeCPT.php');
        include_once('includes/abstracts/BuildingType.php');
        include_once('includes/abstracts/BuildingTypePropertyTypeCPT.php');
        include_once('includes/abstracts/BuildingTypePropertyType.php');
        include_once('includes/abstracts/AllocationUnitCPT.php');
        include_once('includes/abstracts/AllocationUnit.php');
        include_once('includes/abstracts/BuildingCPT.php');
        include_once('includes/abstracts/Building.php');
        include_once('includes/abstracts/BuildingChargeCPT.php');
        include_once('includes/abstracts/BuildingCharge.php');
        include_once('includes/abstracts/BuildingFilesCPT.php');
        include_once('includes/abstracts/BuildingFiles.php');
        include_once('includes/abstracts/FloorTypeCPT.php');
        include_once('includes/abstracts/FloorType.php');
        include_once('includes/abstracts/FloorCPT.php');
        include_once('includes/abstracts/Floor.php');
        include_once('includes/abstracts/FloorChargeCPT.php');
        include_once('includes/abstracts/FloorCharge.php');
        include_once('includes/abstracts/UnitTypeCPT.php');
        include_once('includes/abstracts/UnitType.php');
        include_once('includes/abstracts/UnitTypeChargeCPT.php');
        include_once('includes/abstracts/UnitTypeCharge.php');
        include_once('includes/abstracts/UnitCPT.php');
        include_once('includes/abstracts/Unit.php');
        include_once('includes/abstracts/UnitChargeCPT.php');
        include_once('includes/abstracts/UnitCharge.php');
        include_once('includes/abstracts/ParkingSlotTypeCPT.php');
        include_once('includes/abstracts/ParkingSlotType.php');
        include_once('includes/abstracts/ParkingSlotTypeChargeCPT.php');
        include_once('includes/abstracts/ParkingSlotTypeCharge.php');
        include_once('includes/abstracts/ParkingSlotCPT.php');
        include_once('includes/abstracts/ParkingSlot.php');
        include_once('includes/abstracts/AgreementCategoryCPT.php');
        include_once('includes/abstracts/AgreementCategory.php');
        include_once('includes/abstracts/AgreementTypeCPT.php');
        include_once('includes/abstracts/AgreementType.php');
        include_once('includes/abstracts/AgreementTypeChargeCPT.php');
        include_once('includes/abstracts/AgreementTypeCharge.php');
        include_once('includes/abstracts/TermTypeCPT.php');
        include_once('includes/abstracts/TermType.php');
        include_once('includes/abstracts/TermCPT.php');
        include_once('includes/abstracts/Term.php');
        include_once('includes/abstracts/AgreementCPT.php');
        include_once('includes/abstracts/Agreement.php');
        include_once('includes/abstracts/PurchaseAgreementCPT.php');
        include_once('includes/abstracts/PurchaseAgreement.php');
        include_once('includes/abstracts/SettlementDataCPT.php');
        include_once('includes/abstracts/SettlementData.php');
        include_once('includes/abstracts/SettlementDataLoanCPT.php');
        include_once('includes/abstracts/SettlementDataLoan.php');
        include_once('includes/abstracts/AgreementItemTypeCPT.php');
        include_once('includes/abstracts/AgreementItemType.php');
        include_once('includes/abstracts/AgreementItemCPT.php');
        include_once('includes/abstracts/AgreementItem.php');
        include_once('includes/abstracts/ServiceTypeCPT.php');
        include_once('includes/abstracts/ServiceType.php');
        include_once('includes/abstracts/ServiceCPT.php');
        include_once('includes/abstracts/Service.php');
        include_once('includes/abstracts/AgreementServiceCPT.php');
        include_once('includes/abstracts/AgreementService.php');
        include_once('includes/abstracts/AgreementUnitCPT.php');
        include_once('includes/abstracts/AgreementUnit.php');
        include_once('includes/abstracts/AgreementChargeCPT.php');
        include_once('includes/abstracts/AgreementCharge.php');
        include_once('includes/abstracts/AgreementTermCPT.php');
        include_once('includes/abstracts/AgreementTerm.php');
        include_once('includes/abstracts/ChargeInAgreementCPT.php');
        include_once('includes/abstracts/ChargeInAgreement.php');
        include_once('includes/abstracts/RentStatusCPT.php');
        include_once('includes/abstracts/RentStatus.php');
        include_once('includes/abstracts/RentCPT.php');
        include_once('includes/abstracts/Rent.php');
        include_once('includes/abstracts/AssessmentTypeCPT.php');
        include_once('includes/abstracts/AssessmentType.php');
        include_once('includes/abstracts/AssessmentCPT.php');
        include_once('includes/abstracts/Assessment.php');
        include_once('includes/abstracts/SalesDataTypeCPT.php');
        include_once('includes/abstracts/SalesDataType.php');
        include_once('includes/abstracts/SalesDataCPT.php');
        include_once('includes/abstracts/SalesData.php');
        include_once('includes/abstracts/SalesDataItemTypeCPT.php');
        include_once('includes/abstracts/SalesDataItemType.php');
        include_once('includes/abstracts/SalesDataItemCPT.php');
        include_once('includes/abstracts/SalesDataItem.php');
        include_once('includes/abstracts/CostDataTypeCPT.php');
        include_once('includes/abstracts/CostDataType.php');
        include_once('includes/abstracts/CostDataCPT.php');
        include_once('includes/abstracts/CostData.php');
        include_once('includes/abstracts/CostDataItemTypeCPT.php');
        include_once('includes/abstracts/CostDataItemType.php');
        include_once('includes/abstracts/CostDataItemCPT.php');
        include_once('includes/abstracts/CostDataItem.php');
        include_once('includes/abstracts/IncomeDataTypeCPT.php');
        include_once('includes/abstracts/IncomeDataType.php');
        include_once('includes/abstracts/IncomeDataCPT.php');
        include_once('includes/abstracts/IncomeData.php');
        include_once('includes/abstracts/IncomeDataExpenseTypeCPT.php');
        include_once('includes/abstracts/IncomeDataExpenseType.php');
        include_once('includes/abstracts/IncomeDataExpenseCPT.php');
        include_once('includes/abstracts/IncomeDataExpense.php');
        include_once('includes/abstracts/BillingAccountCPT.php');
        include_once('includes/abstracts/BillingAccount.php');
        include_once('includes/abstracts/AccountTransactionTypeCPT.php');
        include_once('includes/abstracts/AccountTransactionType.php');
        include_once('includes/abstracts/AccountTransactionStatusCPT.php');
        include_once('includes/abstracts/AccountTransactionStatus.php');
        include_once('includes/abstracts/AccountTransactionCPT.php');
        include_once('includes/abstracts/AccountTransaction.php');
        include_once('includes/abstracts/FundingMethodCPT.php');
        include_once('includes/abstracts/FundingMethod.php');
        include_once('includes/abstracts/TemplateTypeCPT.php');
        include_once('includes/abstracts/TemplateType.php');
        include_once('includes/abstracts/TemplateCPT.php');
        include_once('includes/abstracts/Template.php');
        include_once('includes/abstracts/InvoiceTypeCPT.php');
        include_once('includes/abstracts/InvoiceType.php');
        include_once('includes/abstracts/InvoiceStatusCPT.php');
        include_once('includes/abstracts/InvoiceStatus.php');
        include_once('includes/abstracts/InvoiceCPT.php');
        include_once('includes/abstracts/Invoice.php');
        include_once('includes/abstracts/InvoiceRoleCPT.php');
        include_once('includes/abstracts/InvoiceRole.php');
        include_once('includes/abstracts/InvoiceItemTypeCPT.php');
        include_once('includes/abstracts/InvoiceItemType.php');
        include_once('includes/abstracts/InvoiceItemCPT.php');
        include_once('includes/abstracts/InvoiceItem.php');
        include_once('includes/abstracts/InvoiceTermCPT.php');
        include_once('includes/abstracts/InvoiceTerm.php');
        include_once('includes/abstracts/PurchaseOrderTypeCPT.php');
        include_once('includes/abstracts/PurchaseOrderType.php');
        include_once('includes/abstracts/PurchaseOrderStatusCPT.php');
        include_once('includes/abstracts/PurchaseOrderStatus.php');
        include_once('includes/abstracts/PurchaseOrderCPT.php');
        include_once('includes/abstracts/PurchaseOrder.php');
        include_once('includes/abstracts/PurchaseOrderRoleCPT.php');
        include_once('includes/abstracts/PurchaseOrderRole.php');
        include_once('includes/abstracts/PurchaseOrderItemTypeCPT.php');
        include_once('includes/abstracts/PurchaseOrderItemType.php');
        include_once('includes/abstracts/PurchaseOrderItemCPT.php');
        include_once('includes/abstracts/PurchaseOrderItem.php');
        include_once('includes/abstracts/PurchaseOrderTermCPT.php');
        include_once('includes/abstracts/PurchaseOrderTerm.php');
        include_once('includes/abstracts/PaymentTypeCPT.php');
        include_once('includes/abstracts/PaymentType.php');
        include_once('includes/abstracts/PaymentMethodTypeCPT.php');
        include_once('includes/abstracts/PaymentMethodType.php');
        include_once('includes/abstracts/PaymentCPT.php');
        include_once('includes/abstracts/Payment.php');
        include_once('includes/abstracts/PaymentApplicationCPT.php');
        include_once('includes/abstracts/PaymentApplication.php');
        include_once('includes/abstracts/ReceiptTypeCPT.php');
        include_once('includes/abstracts/ReceiptType.php');
        include_once('includes/abstracts/DisbursementTypeCPT.php');
        include_once('includes/abstracts/DisbursementType.php');
        include_once('includes/abstracts/ReceiptCPT.php');
        include_once('includes/abstracts/Receipt.php');
        include_once('includes/abstracts/DisbursementCPT.php');
        include_once('includes/abstracts/Disbursement.php');
        include_once('includes/abstracts/PeriodTypeCPT.php');
        include_once('includes/abstracts/PeriodType.php');
        include_once('includes/abstracts/AccountingPeriodCPT.php');
        include_once('includes/abstracts/AccountingPeriod.php');
        include_once('includes/abstracts/COAAccountStructureCPT.php');
        include_once('includes/abstracts/COAAccountStructure.php');
        include_once('includes/abstracts/COAAccountSegmentTypeCPT.php');
        include_once('includes/abstracts/COAAccountSegmentType.php');
        include_once('includes/abstracts/COAAccountSegmentTypeValueCPT.php');
        include_once('includes/abstracts/COAAccountSegmentTypeValue.php');
        include_once('includes/abstracts/COAAccountSegmentCPT.php');
        include_once('includes/abstracts/COAAccountSegment.php');
        include_once('includes/abstracts/COAStatusCPT.php');
        include_once('includes/abstracts/COAStatus.php');
        include_once('includes/abstracts/ChartOfAccountsCPT.php');
        include_once('includes/abstracts/ChartOfAccounts.php');
        include_once('includes/abstracts/GLAccountTypeCPT.php');
        include_once('includes/abstracts/GLAccountType.php');
        include_once('includes/abstracts/GLAccountCPT.php');
        include_once('includes/abstracts/GLAccount.php');
        include_once('includes/abstracts/BusinessUnitGLAccountCPT.php');
        include_once('includes/abstracts/BusinessUnitGLAccount.php');
        include_once('includes/abstracts/BusinessUnitGLAccountBalanceCPT.php');
        include_once('includes/abstracts/BusinessUnitGLAccountBalance.php');
        include_once('includes/abstracts/COAAccountSegmentInstanceCPT.php');
        include_once('includes/abstracts/COAAccountSegmentInstance.php');
        include_once('includes/abstracts/FinancialEventTypeCPT.php');
        include_once('includes/abstracts/FinancialEventType.php');
        include_once('includes/abstracts/FinancialEventCPT.php');
        include_once('includes/abstracts/FinancialEvent.php');
        include_once('includes/abstracts/TransactionTypeCPT.php');
        include_once('includes/abstracts/TransactionType.php');
        include_once('includes/abstracts/TransactionCPT.php');
        include_once('includes/abstracts/Transaction.php');
        include_once('includes/abstracts/TransactionDetailCPT.php');
        include_once('includes/abstracts/TransactionDetail.php');
        include_once('includes/abstracts/FEventTxnTypeCPT.php');
        include_once('includes/abstracts/FEventTxnType.php');
        include_once('includes/abstracts/TxnTypeAccountCPT.php');
        include_once('includes/abstracts/TxnTypeAccount.php');
        include_once('includes/abstracts/BudgetTypeCPT.php');
        include_once('includes/abstracts/BudgetType.php');
        include_once('includes/abstracts/BudgetStatusCPT.php');
        include_once('includes/abstracts/BudgetStatus.php');
        include_once('includes/abstracts/BudgetCPT.php');
        include_once('includes/abstracts/Budget.php');
        include_once('includes/abstracts/BudgetItemTypeCPT.php');
        include_once('includes/abstracts/BudgetItemType.php');
        include_once('includes/abstracts/BudgetItemCPT.php');
        include_once('includes/abstracts/BudgetItem.php');
        include_once('includes/abstracts/BudgetRoleCPT.php');
        include_once('includes/abstracts/BudgetRole.php');
        include_once('includes/abstracts/StandardTimePeriodCPT.php');
        include_once('includes/abstracts/StandardTimePeriod.php');
        include_once('includes/abstracts/BudgetReviewResultTypeCPT.php');
        include_once('includes/abstracts/BudgetReviewResultType.php');
        include_once('includes/abstracts/BudgetReviewCPT.php');
        include_once('includes/abstracts/BudgetReview.php');
        include_once('includes/abstracts/BudgetRevisionCPT.php');
        include_once('includes/abstracts/BudgetRevision.php');
        include_once('includes/abstracts/BudgetRevisionImpactCPT.php');
        include_once('includes/abstracts/BudgetRevisionImpact.php');
        include_once('includes/abstracts/BudgetScenarioCPT.php');
        include_once('includes/abstracts/BudgetScenario.php');
        include_once('includes/abstracts/BudgetScenarioRuleCPT.php');
        include_once('includes/abstracts/BudgetScenarioRule.php');
        include_once('includes/abstracts/BudgetScenarioApplicationCPT.php');
        include_once('includes/abstracts/BudgetScenarioApplication.php');
        include_once('includes/abstracts/PaymentBudgetAllocationCPT.php');
        include_once('includes/abstracts/PaymentBudgetAllocation.php');
        include_once('includes/abstracts/GLBudgetXREFCPT.php');
        include_once('includes/abstracts/GLBudgetXREF.php');
        include_once('includes/abstracts/DisputeTypeCPT.php');
        include_once('includes/abstracts/DisputeType.php');
        include_once('includes/abstracts/DisputeStatusCPT.php');
        include_once('includes/abstracts/DisputeStatus.php');
        include_once('includes/abstracts/DisputeCPT.php');
        include_once('includes/abstracts/Dispute.php');
        include_once('includes/abstracts/DisputeItemCPT.php');
        include_once('includes/abstracts/DisputeItem.php');
        include_once('includes/abstracts/ConversationCPT.php');
        include_once('includes/abstracts/Conversation.php');
        include_once('includes/abstracts/MessageCPT.php');
        include_once('includes/abstracts/Message.php');
        include_once('includes/abstracts/MessageFilesCPT.php');
        include_once('includes/abstracts/MessageFiles.php');
        include_once('includes/abstracts/NotificationTypeCPT.php');
        include_once('includes/abstracts/NotificationType.php');
        include_once('includes/abstracts/NotificationStatusCPT.php');
        include_once('includes/abstracts/NotificationStatus.php');
        include_once('includes/abstracts/NotificationLevelCPT.php');
        include_once('includes/abstracts/NotificationLevel.php');
        include_once('includes/abstracts/NotificationCPT.php');
        include_once('includes/abstracts/Notification.php');
        include_once('includes/abstracts/PositionClassificationTypeCPT.php');
        include_once('includes/abstracts/PositionClassificationType.php');
        include_once('includes/abstracts/PositionTypeClassCPT.php');
        include_once('includes/abstracts/PositionTypeClass.php');
        include_once('includes/abstracts/PositionTypeCPT.php');
        include_once('includes/abstracts/PositionType.php');
        include_once('includes/abstracts/PositionStatusCPT.php');
        include_once('includes/abstracts/PositionStatus.php');
        include_once('includes/abstracts/ResponsibilityTypeCPT.php');
        include_once('includes/abstracts/ResponsibilityType.php');
        include_once('includes/abstracts/ValidResponsibilityCPT.php');
        include_once('includes/abstracts/ValidResponsibility.php');
        include_once('includes/abstracts/PositionCPT.php');
        include_once('includes/abstracts/Position.php');
        include_once('includes/abstracts/PositionResponsibilityCPT.php');
        include_once('includes/abstracts/PositionResponsibility.php');
        include_once('includes/abstracts/PositionFulfillmentCPT.php');
        include_once('includes/abstracts/PositionFulfillment.php');
        include_once('includes/abstracts/PositionReportingStructureCPT.php');
        include_once('includes/abstracts/PositionReportingStructure.php');
        include_once('includes/abstracts/RateTypeCPT.php');
        include_once('includes/abstracts/RateType.php');
        include_once('includes/abstracts/PayGradeCPT.php');
        include_once('includes/abstracts/PayGrade.php');
        include_once('includes/abstracts/SalaryStepCPT.php');
        include_once('includes/abstracts/SalaryStep.php');
        include_once('includes/abstracts/PositionTypeRateCPT.php');
        include_once('includes/abstracts/PositionTypeRate.php');
        include_once('includes/abstracts/PayHistoryCPT.php');
        include_once('includes/abstracts/PayHistory.php');
        include_once('includes/abstracts/BenefitTypeCPT.php');
        include_once('includes/abstracts/BenefitType.php');
        include_once('includes/abstracts/PartyBenefitCPT.php');
        include_once('includes/abstracts/PartyBenefit.php');
        include_once('includes/abstracts/DeductionTypeCPT.php');
        include_once('includes/abstracts/DeductionType.php');
        include_once('includes/abstracts/DeductionCPT.php');
        include_once('includes/abstracts/Deduction.php');
        include_once('includes/abstracts/PayrollPreferenceCPT.php');
        include_once('includes/abstracts/PayrollPreference.php');
        include_once('includes/abstracts/EmploymentApplicationStatusCPT.php');
        include_once('includes/abstracts/EmploymentApplicationStatus.php');
        include_once('includes/abstracts/EmploymentApplicationSourceTypeCPT.php');
        include_once('includes/abstracts/EmploymentApplicationSourceType.php');
        include_once('includes/abstracts/EmploymentApplicationCPT.php');
        include_once('includes/abstracts/EmploymentApplication.php');
        include_once('includes/abstracts/QualificationTypeCPT.php');
        include_once('includes/abstracts/QualificationType.php');
        include_once('includes/abstracts/SkillTypeCPT.php');
        include_once('includes/abstracts/SkillType.php');
        include_once('includes/abstracts/TrainingClassTypeCPT.php');
        include_once('includes/abstracts/TrainingClassType.php');
        include_once('includes/abstracts/PersonTrainingCPT.php');
        include_once('includes/abstracts/PersonTraining.php');
        include_once('includes/abstracts/ResumeCPT.php');
        include_once('includes/abstracts/Resume.php');
        include_once('includes/abstracts/PartySkillCPT.php');
        include_once('includes/abstracts/PartySkill.php');
        include_once('includes/abstracts/PartyQualificationCPT.php');
        include_once('includes/abstracts/PartyQualification.php');
        include_once('includes/abstracts/PerformanceNoteTypeCPT.php');
        include_once('includes/abstracts/PerformanceNoteType.php');
        include_once('includes/abstracts/PerformanceNoteCPT.php');
        include_once('includes/abstracts/PerformanceNote.php');
        include_once('includes/abstracts/PerformanceReviewCPT.php');
        include_once('includes/abstracts/PerformanceReview.php');
        include_once('includes/abstracts/RatingTypeCPT.php');
        include_once('includes/abstracts/RatingType.php');
        include_once('includes/abstracts/PerfReviewItemTypeCPT.php');
        include_once('includes/abstracts/PerfReviewItemType.php');
        include_once('includes/abstracts/PerformanceReviewItemCPT.php');
        include_once('includes/abstracts/PerformanceReviewItem.php');
        include_once('includes/abstracts/TerminationTypeCPT.php');
        include_once('includes/abstracts/TerminationType.php');
        include_once('includes/abstracts/TerminationReasonCPT.php');
        include_once('includes/abstracts/TerminationReason.php');
        include_once('includes/abstracts/UnemploymentClaimStatusCPT.php');
        include_once('includes/abstracts/UnemploymentClaimStatus.php');
        include_once('includes/abstracts/UnemploymentClaimCPT.php');
        include_once('includes/abstracts/UnemploymentClaim.php');
        include_once('includes/abstracts/DeliverableTypeCPT.php');
        include_once('includes/abstracts/DeliverableType.php');
        include_once('includes/abstracts/DeliverableCPT.php');
        include_once('includes/abstracts/Deliverable.php');
        include_once('includes/abstracts/RequirementTypeCPT.php');
        include_once('includes/abstracts/RequirementType.php');
        include_once('includes/abstracts/RequirementCPT.php');
        include_once('includes/abstracts/Requirement.php');
        include_once('includes/abstracts/RequirementRoleCPT.php');
        include_once('includes/abstracts/RequirementRole.php');
        include_once('includes/abstracts/WorkEffortCategoryCPT.php');
        include_once('includes/abstracts/WorkEffortCategory.php');
        include_once('includes/abstracts/WorkEffortTypeCPT.php');
        include_once('includes/abstracts/WorkEffortType.php');
        include_once('includes/abstracts/WorkEffortPurposeTypeCPT.php');
        include_once('includes/abstracts/WorkEffortPurposeType.php');
        include_once('includes/abstracts/WorkEffortStatusCPT.php');
        include_once('includes/abstracts/WorkEffortStatus.php');
        include_once('includes/abstracts/WorkEffortCPT.php');
        include_once('includes/abstracts/WorkEffort.php');
        include_once('includes/abstracts/WorkRequirementFulfillmentCPT.php');
        include_once('includes/abstracts/WorkRequirementFulfillment.php');
        include_once('includes/abstracts/WorkEffortAssociationTypeCPT.php');
        include_once('includes/abstracts/WorkEffortAssociationType.php');
        include_once('includes/abstracts/WorkEffortAssociationCPT.php');
        include_once('includes/abstracts/WorkEffortAssociation.php');
        include_once('includes/abstracts/WorkEffortRoleTypeCPT.php');
        include_once('includes/abstracts/WorkEffortRoleType.php');
        include_once('includes/abstracts/WorkEffortPartyAssignmentCPT.php');
        include_once('includes/abstracts/WorkEffortPartyAssignment.php');
        include_once('includes/abstracts/TimeSheetCPT.php');
        include_once('includes/abstracts/TimeSheet.php');
        include_once('includes/abstracts/TimeSheetRoleTypeCPT.php');
        include_once('includes/abstracts/TimeSheetRoleType.php');
        include_once('includes/abstracts/TimeSheetRoleCPT.php');
        include_once('includes/abstracts/TimeSheetRole.php');
        include_once('includes/abstracts/TimeEntryCPT.php');
        include_once('includes/abstracts/TimeEntry.php');
        include_once('includes/abstracts/PartyRateCPT.php');
        include_once('includes/abstracts/PartyRate.php');
        include_once('includes/abstracts/WorkEffortAssignmentRateCPT.php');
        include_once('includes/abstracts/WorkEffortAssignmentRate.php');
        include_once('includes/abstracts/WorkEffortInventoryAssignmentCPT.php');
        include_once('includes/abstracts/WorkEffortInventoryAssignment.php');
        include_once('includes/abstracts/WorkEffortAssetAssignmentStatusCPT.php');
        include_once('includes/abstracts/WorkEffortAssetAssignmentStatus.php');
        include_once('includes/abstracts/WorkEffortAssetAssignmentCPT.php');
        include_once('includes/abstracts/WorkEffortAssetAssignment.php');
        include_once('includes/abstracts/PartyFAssetAssignmentStatusCPT.php');
        include_once('includes/abstracts/PartyFAssetAssignmentStatus.php');
        include_once('includes/abstracts/PartyAssetAssignmentCPT.php');
        include_once('includes/abstracts/PartyAssetAssignment.php');
        include_once('includes/abstracts/WorkEffortDeliverableCPT.php');
        include_once('includes/abstracts/WorkEffortDeliverable.php');
        // Entity API
        include_once('includes/api/EntityAPI.php');

        // API
        include_once('includes/api/BusinessUnitAPI.php');
        include_once('includes/api/PartyAPI.php');
        include_once('includes/api/PartyGroupAPI.php');
        include_once('includes/api/PersonAPI.php');
        include_once('includes/api/LiabilityAPI.php');
        include_once('includes/api/PropertyAPI.php');
        include_once('includes/api/AssetAPI.php');
        include_once('includes/api/InventoryAPI.php');
        include_once('includes/api/BuildingTypeAPI.php');
        include_once('includes/api/BuildingAPI.php');
        include_once('includes/api/AgreementAPI.php');
        include_once('includes/api/PurchaseAgreementAPI.php');
        include_once('includes/api/AssessmentAPI.php');
        include_once('includes/api/InvoiceAPI.php');
        include_once('includes/api/PurchaseOrderAPI.php');
        include_once('includes/api/ReceiptAPI.php');
        include_once('includes/api/DisbursementAPI.php');
        include_once('includes/api/COAAccountStructureAPI.php');
        include_once('includes/api/COAAccountSegmentTypeAPI.php');
        include_once('includes/api/ChartOfAccountsAPI.php');
        include_once('includes/api/GLAccountTypeAPI.php');
        include_once('includes/api/FinancialEventTypeAPI.php');
        include_once('includes/api/TransactionTypeAPI.php');
        include_once('includes/api/NotificationAPI.php');
        include_once('includes/api/WorkEffortAPI.php');
        
        include_once('includes/api/EntityPersistenceAPI.php');
        // Entity Controller
        include_once('includes/controller/EntityActionProcessor.php');


        // Entity View and view controllers
        include_once('includes/view/ViewUtils.php');
        include_once('includes/view/ArtifactView.php');
        include_once('includes/view/BaseEntityView.php');
        include_once('includes/view/DashboardView.php');
        include_once('includes/view/ViewFilter.php');
        include_once('includes/view/CreateEntityView.php');
        include_once('includes/view/EditEntityView.php');
        include_once('includes/view/SingleEntityView.php');
        include_once('includes/view/ListEntityView.php');
        include_once('includes/view/FormFieldFilter.php');
        include_once('includes/view/MultiEntityCreateView.php');
        include_once('includes/view/CategorizedViewFilter.php');
        include_once('includes/view/ParamCategorizedViewFilter.php');
        include_once('includes/view/party/SinglePartyView.php');
        include_once('includes/view/party/PartyViewFilter.php');
        include_once('includes/view/partygroup/CreatePartyGroupView.php');
        include_once('includes/view/person/CreatePersonView.php');
        include_once('includes/view/partyprofile/ListPartyProfileView.php');
        include_once('includes/view/liability/LiabilityViewFilter.php');
        include_once('includes/view/property/CreatePropertyView.php');
        include_once('includes/view/property/PropertyViewFilter.php');
        include_once('includes/view/asset/AssetViewFilter.php');
        include_once('includes/view/inventory/CreateInventoryView.php');
        include_once('includes/view/inventory/InventoryViewFilter.php');
        include_once('includes/view/buildingtype/CreateBuildingTypeView.php');
        include_once('includes/view/agreement/CreateAgreementView.php');
        include_once('includes/view/agreement/AgreementViewFilter.php');
        include_once('includes/view/purchaseagreement/CreatePurchaseAgreementView.php');
        include_once('includes/view/purchaseagreement/PurchaseAgreementViewFilter.php');
        include_once('includes/view/assessment/CreateAssessmentView.php');
        include_once('includes/view/assessment/AssessmentViewFilter.php');
        include_once('includes/view/accounttransaction/AccountTransactionViewFilter.php');
        include_once('includes/view/invoice/CreateInvoiceView.php');
        include_once('includes/view/invoice/InvoiceViewFilter.php');
        include_once('includes/view/purchaseorder/CreatePurchaseOrderView.php');
        include_once('includes/view/purchaseorder/PurchaseOrderViewFilter.php');
        include_once('includes/view/receipt/ReceiptViewFilter.php');
        include_once('includes/view/disbursement/DisbursementViewFilter.php');
        include_once('includes/view/coaaccountstructure/CreateCOAAccountStructureView.php');
        include_once('includes/view/coaaccountsegmenttype/CreateCOAAccountSegmentTypeView.php');
        include_once('includes/view/coaaccountsegmenttype/COAAccountSegmentTypeViewFilter.php');
        include_once('includes/view/chartofaccounts/SingleChartOfAccountsView.php');
        include_once('includes/view/glaccounttype/CreateGLAccountTypeView.php');
        include_once('includes/view/financialeventtype/CreateFinancialEventTypeView.php');
        include_once('includes/view/transactiontype/CreateTransactionTypeView.php');
        include_once('includes/view/budget/CreateBudgetView.php');
        include_once('includes/view/conversation/ListConversationView.php');
        include_once('includes/view/notification/SingleNotificationView.php');
        include_once('includes/view/workeffort/CreateWorkEffortView.php');
        include_once('includes/view/workeffort/WorkEffortViewFilter.php');

        include_once('includes/view/entity-form-fields.php');

        // Framework API
        include_once('includes/api/CloderiaFileAPI.php');
        include_once('includes/api/CloderiaUserAPI.php');
        include_once('includes/api/ArtifactRequestProcessor.php');
        include_once('includes/api/CloderiaAdminAPI.php');
        include_once('includes/api/CloderiaSecurityAPI.php');
        include_once('includes/api/CloderiaUserLoginAPI.php');
        include_once('includes/api/CloderiaUIDisplayAPI.php');
        include_once('includes/api/CloderiaFileUploadValidatorAPI.php');
        // Services
        include_once('includes/service/DashboardService.php');
        include_once('includes/service/TransactionService.php');
        // Utility Classes
        include_once('includes/utils/EntityStringUtils.php');
        include_once('includes/utils/EntityRequestUtils.php');
        include_once('includes/utils/EntityAPIUtils.php');
        include_once('includes/utils/ArtifactUtils.php');

        include_once('includes/utils/CloderiaLogUtils.php');
        include_once('includes/utils/CloderiaUserUtils.php');
        include_once('includes/utils/CloderiaCustomFieldsUtils.php');
        include_once('includes/utils/CloderiaCustomPostTypesUtils.php');
        include_once('includes/utils/CloderiaMenuUtils.php');
        include_once('includes/utils/CloderiaDateUtils.php');
        include_once('includes/utils/CloderiaTemplateFunctions.php');
        include_once('includes/fpdf.php');
        include_once('includes/font/courier.php');
        include_once('includes/font/courierb.php');

    }
    
    /**
     * Init JavaScript scripts
     */
    public function init_scripts() {
        //Hooks our custom function into WP's wp_enqueue_scripts function
        add_action('wp_enqueue_scripts', 'ShadowCore::enqueue_scripts');
    }
    
    public function init_ajax_hooks() {
        // Setup Ajax
        add_action('template_redirect', 'CloderiaAdminAPI::do_ajax_setup');

        EntityActionProcessor::init_hooks();
        //ChartOfAccountsAPI::init_hooks();
        //Order related Ajax functions
        #add_action('wp_ajax_do_content_order_ajax', 'CloderiaOrdersAPI::do_content_order_ajax');
        #add_action('wp_ajax_nopriv_do_content_order_ajax', 'CloderiaOrdersAPI::do_content_order_ajax');
        //User profile related Ajax functions
        #add_action('wp_ajax_find_user_orders_ajax', 'CloderiaOrdersAPI::find_user_orders_ajax');
        #add_action('wp_ajax_nopriv_find_user_orders_ajax', 'CloderiaOrdersAPI::find_user_orders_ajax');

    }


    public function init_backend_hooks() {
        add_action('cloderia_create_shadow_user', 'CloderiaUserAPI::create_shadow_user', 10, 1);
        add_action('cloderia_user_reset_password', 'CloderiaUserAPI::create_shadow_user', 10, 1);
        add_action('shadowbanker_notify_user', 'NotificationAPI::do_notification', 10, 1);
    }

    /**
     * Add template processing related hooks.
     */
    public function init_template_hooks() {
        // UI display actions
        add_action('shadowbanker_before_main_content', 'CloderiaUIDisplayAPI::before_main_content', 10);
        add_action('shadowbanker_after_main_content', 'CloderiaUIDisplayAPI::after_main_content', 10);
        // Menu UI display actions
        add_action('shadowbanker_show_app_menu', 'CloderiaUIDisplayAPI::display_app_menu', 10);
        add_action('shadowbanker_before_app_menu', 'CloderiaUIDisplayAPI::before_app_menu', 10);
        add_action('shadowbanker_after_app_menu', 'CloderiaUIDisplayAPI::after_app_menu', 10);
        // Chat bar display icons
        add_action('shadowbanker_show_chat_bar', 'CloderiaUIDisplayAPI::display_chat_bar', 10);

        add_action('shadowbanker_render_create_entity_view', 'CloderiaUIDisplayAPI::render_create_form', 10);
        add_action('shadowbanker_render_edit_entity_view', 'CloderiaUIDisplayAPI::render_edit_form', 10);
        add_action('shadowbanker_render_view_entity_view', 'CloderiaUIDisplayAPI::render_single', 10);
        add_action('shadowbanker_render_list_entity_view', 'CloderiaUIDisplayAPI::render_list', 10);
        add_action('shadowbanker_render_entity_form_fields', 'CloderiaUIDisplayAPI::render_entity_form_fields', 10);
        add_action('shadowbanker_render_related_entity_field_modals', 'CloderiaUIDisplayAPI::render_related_entity_field_modals', 10);
        add_action('shadowbanker_render_multi_entity_create_view', 'CloderiaUIDisplayAPI::render_multi_entity_create_view', 10);

        add_action('shadowbanker_before_entity_form_field', 'CloderiaUIDisplayAPI::before_entity_form_field', 10);
        add_action('shadowbanker_after_entity_form_field', 'CloderiaUIDisplayAPI::after_entity_form_field', 10);
        
        add_action('shadowbanker_display_notifications_items', 'CloderiaUIDisplayAPI::show_notification_items', 10);
        add_action('shadowbanker_render_dashboard_view', 'CloderiaUIDisplayAPI::render_dashboard_view', 10);
        //add_action('showdow_banker_display_user_conversations', 'CloderiaUIDisplayAPI::show_user_conversations', 10); 
        //add_action('showdow_banker_display_latest_user_conversation', 'CloderiaUIDisplayAPI::show_latest_user_conversation', 10);

        // Page display functions
        add_action('shadowbanker_process_page_request', 'ArtifactRequestProcessor::process_artifact_request', 10);

        // Entity page display actions
        add_action('shadowbanker_before_artifact_content', 'CloderiaUIDisplayAPI::before_artifact_content', 10);
        add_action('shadowbanker_the_artifact_content', 'CloderiaUIDisplayAPI::the_artifact_content', 10, 1);
        add_action('shadowbanker_after_artifact_content', 'CloderiaUIDisplayAPI::after_artifact_content', 10);
        
        // Remove admin bar for non admin users
        //add_action('after_setup_theme', 'CloderiaAdminAPI::do_remove_admin_bar');
        /*add_action('wp_logout', 'ShadowCore::redirect_logout_url');*/
        FormFieldFilter::init_hooks();

        PartyViewFilter::init_hooks();
        LiabilityViewFilter::init_hooks();
        PropertyViewFilter::init_hooks();
        AssetViewFilter::init_hooks();
        InventoryViewFilter::init_hooks();
        AgreementViewFilter::init_hooks();
        PurchaseAgreementViewFilter::init_hooks();
        AssessmentViewFilter::init_hooks();
        AccountTransactionViewFilter::init_hooks();
        InvoiceViewFilter::init_hooks();
        PurchaseOrderViewFilter::init_hooks();
        ReceiptViewFilter::init_hooks();
        DisbursementViewFilter::init_hooks();
        COAAccountSegmentTypeViewFilter::init_hooks();
        WorkEffortViewFilter::init_hooks();

    }

    public function init_admin_template_hooks(){
        add_filter('manage_sb_currency_posts_columns', 'CurrencyCPT::sb_currency_table_head');
        add_action('manage_sb_currency_posts_custom_column', 'CurrencyCPT::sb_currency_table_content', 10, 2);
        add_filter('manage_sb_loctype_posts_columns', 'LocationTypeCPT::sb_loctype_table_head');
        add_action('manage_sb_loctype_posts_custom_column', 'LocationTypeCPT::sb_loctype_table_content', 10, 2);
        add_filter('manage_sb_location_posts_columns', 'LocationCPT::sb_location_table_head');
        add_action('manage_sb_location_posts_custom_column', 'LocationCPT::sb_location_table_content', 10, 2);
        add_filter('manage_sb_business_posts_columns', 'BusinessCPT::sb_business_table_head');
        add_action('manage_sb_business_posts_custom_column', 'BusinessCPT::sb_business_table_content', 10, 2);
        add_filter('manage_sb_businessunit_posts_columns', 'BusinessUnitCPT::sb_businessunit_table_head');
        add_action('manage_sb_businessunit_posts_custom_column', 'BusinessUnitCPT::sb_businessunit_table_content', 10, 2);
        add_filter('manage_sb_partycat_posts_columns', 'PartyCategoryCPT::sb_partycat_table_head');
        add_action('manage_sb_partycat_posts_custom_column', 'PartyCategoryCPT::sb_partycat_table_content', 10, 2);
        add_filter('manage_sb_partytype_posts_columns', 'PartyTypeCPT::sb_partytype_table_head');
        add_action('manage_sb_partytype_posts_custom_column', 'PartyTypeCPT::sb_partytype_table_content', 10, 2);
        add_filter('manage_sb_roletype_posts_columns', 'RoleTypeCPT::sb_roletype_table_head');
        add_action('manage_sb_roletype_posts_custom_column', 'RoleTypeCPT::sb_roletype_table_content', 10, 2);
        add_filter('manage_sb_party_posts_columns', 'PartyCPT::sb_party_table_head');
        add_action('manage_sb_party_posts_custom_column', 'PartyCPT::sb_party_table_content', 10, 2);
        add_filter('manage_sb_partyrole_posts_columns', 'PartyRoleCPT::sb_partyrole_table_head');
        add_action('manage_sb_partyrole_posts_custom_column', 'PartyRoleCPT::sb_partyrole_table_content', 10, 2);
        add_filter('manage_sb_reltype_posts_columns', 'RelationshipTypeCPT::sb_reltype_table_head');
        add_action('manage_sb_reltype_posts_custom_column', 'RelationshipTypeCPT::sb_reltype_table_content', 10, 2);
        add_filter('manage_sb_relstatus_posts_columns', 'RelationshipStatusCPT::sb_relstatus_table_head');
        add_action('manage_sb_relstatus_posts_custom_column', 'RelationshipStatusCPT::sb_relstatus_table_content', 10, 2);
        add_filter('manage_sb_partyrel_posts_columns', 'PartyRelationshipCPT::sb_partyrel_table_head');
        add_action('manage_sb_partyrel_posts_custom_column', 'PartyRelationshipCPT::sb_partyrel_table_content', 10, 2);
        add_filter('manage_sb_partygroup_posts_columns', 'PartyGroupCPT::sb_partygroup_table_head');
        add_action('manage_sb_partygroup_posts_custom_column', 'PartyGroupCPT::sb_partygroup_table_content', 10, 2);
        add_filter('manage_sb_person_posts_columns', 'PersonCPT::sb_person_table_head');
        add_action('manage_sb_person_posts_custom_column', 'PersonCPT::sb_person_table_content', 10, 2);
        add_filter('manage_sb_partyprofile_posts_columns', 'PartyProfileCPT::sb_partyprofile_table_head');
        add_action('manage_sb_partyprofile_posts_custom_column', 'PartyProfileCPT::sb_partyprofile_table_content', 10, 2);
        add_filter('manage_sb_cmechtype_posts_columns', 'ContactMechanismTypeCPT::sb_cmechtype_table_head');
        add_action('manage_sb_cmechtype_posts_custom_column', 'ContactMechanismTypeCPT::sb_cmechtype_table_content', 10, 2);
        add_filter('manage_sb_contactmech_posts_columns', 'ContactMechanismCPT::sb_contactmech_table_head');
        add_action('manage_sb_contactmech_posts_custom_column', 'ContactMechanismCPT::sb_contactmech_table_content', 10, 2);
        add_filter('manage_sb_pcmpurposetype_posts_columns', 'PartyContactMechanismPurposeTypeCPT::sb_pcmpurposetype_table_head');
        add_action('manage_sb_pcmpurposetype_posts_custom_column', 'PartyContactMechanismPurposeTypeCPT::sb_pcmpurposetype_table_content', 10, 2);
        add_filter('manage_sb_partycmech_posts_columns', 'PartyContactMechanismCPT::sb_partycmech_table_head');
        add_action('manage_sb_partycmech_posts_custom_column', 'PartyContactMechanismCPT::sb_partycmech_table_content', 10, 2);
        add_filter('manage_sb_pcmpurpose_posts_columns', 'PartyContactMechanismPurposeCPT::sb_pcmpurpose_table_head');
        add_action('manage_sb_pcmpurpose_posts_custom_column', 'PartyContactMechanismPurposeCPT::sb_pcmpurpose_table_content', 10, 2);
        add_filter('manage_sb_partyfiles_posts_columns', 'PartyFilesCPT::sb_partyfiles_table_head');
        add_action('manage_sb_partyfiles_posts_custom_column', 'PartyFilesCPT::sb_partyfiles_table_content', 10, 2);
        add_filter('manage_sb_invitestatus_posts_columns', 'UserInviteStatusCPT::sb_invitestatus_table_head');
        add_action('manage_sb_invitestatus_posts_custom_column', 'UserInviteStatusCPT::sb_invitestatus_table_content', 10, 2);
        add_filter('manage_sb_userinvite_posts_columns', 'UserInviteCPT::sb_userinvite_table_head');
        add_action('manage_sb_userinvite_posts_custom_column', 'UserInviteCPT::sb_userinvite_table_content', 10, 2);
        add_filter('manage_sb_businesscat_posts_columns', 'BusinessCategoryCPT::sb_businesscat_table_head');
        add_action('manage_sb_businesscat_posts_custom_column', 'BusinessCategoryCPT::sb_businesscat_table_content', 10, 2);
        add_filter('manage_sb_chargetype_posts_columns', 'ChargeTypeCPT::sb_chargetype_table_head');
        add_action('manage_sb_chargetype_posts_custom_column', 'ChargeTypeCPT::sb_chargetype_table_content', 10, 2);
        add_filter('manage_sb_chargefreq_posts_columns', 'ChargeFrequencyCPT::sb_chargefreq_table_head');
        add_action('manage_sb_chargefreq_posts_custom_column', 'ChargeFrequencyCPT::sb_chargefreq_table_content', 10, 2);
        add_filter('manage_sb_charge_posts_columns', 'ChargeCPT::sb_charge_table_head');
        add_action('manage_sb_charge_posts_custom_column', 'ChargeCPT::sb_charge_table_content', 10, 2);
        add_filter('manage_sb_expensetype_posts_columns', 'ExpenseTypeCPT::sb_expensetype_table_head');
        add_action('manage_sb_expensetype_posts_custom_column', 'ExpenseTypeCPT::sb_expensetype_table_content', 10, 2);
        add_filter('manage_sb_expensefreq_posts_columns', 'ExpenseFrequencyCPT::sb_expensefreq_table_head');
        add_action('manage_sb_expensefreq_posts_custom_column', 'ExpenseFrequencyCPT::sb_expensefreq_table_content', 10, 2);
        add_filter('manage_sb_expense_posts_columns', 'ExpenseCPT::sb_expense_table_head');
        add_action('manage_sb_expense_posts_custom_column', 'ExpenseCPT::sb_expense_table_content', 10, 2);
        add_filter('manage_sb_liabcat_posts_columns', 'LiabilityCategoryCPT::sb_liabcat_table_head');
        add_action('manage_sb_liabcat_posts_custom_column', 'LiabilityCategoryCPT::sb_liabcat_table_content', 10, 2);
        add_filter('manage_sb_liabtype_posts_columns', 'LiabilityTypeCPT::sb_liabtype_table_head');
        add_action('manage_sb_liabtype_posts_custom_column', 'LiabilityTypeCPT::sb_liabtype_table_content', 10, 2);
        add_filter('manage_sb_liability_posts_columns', 'LiabilityCPT::sb_liability_table_head');
        add_action('manage_sb_liability_posts_custom_column', 'LiabilityCPT::sb_liability_table_content', 10, 2);
        add_filter('manage_sb_dmethod_posts_columns', 'DeprecationMethodCPT::sb_dmethod_table_head');
        add_action('manage_sb_dmethod_posts_custom_column', 'DeprecationMethodCPT::sb_dmethod_table_content', 10, 2);
        add_filter('manage_sb_uom_posts_columns', 'UnitOfMeasureCPT::sb_uom_table_head');
        add_action('manage_sb_uom_posts_custom_column', 'UnitOfMeasureCPT::sb_uom_table_content', 10, 2);
        add_filter('manage_sb_utilitytype_posts_columns', 'UtilityTypeCPT::sb_utilitytype_table_head');
        add_action('manage_sb_utilitytype_posts_custom_column', 'UtilityTypeCPT::sb_utilitytype_table_content', 10, 2);
        add_filter('manage_sb_utility_posts_columns', 'UtilityCPT::sb_utility_table_head');
        add_action('manage_sb_utility_posts_custom_column', 'UtilityCPT::sb_utility_table_content', 10, 2);
        add_filter('manage_sb_facilitycat_posts_columns', 'FacilityCategoryCPT::sb_facilitycat_table_head');
        add_action('manage_sb_facilitycat_posts_custom_column', 'FacilityCategoryCPT::sb_facilitycat_table_content', 10, 2);
        add_filter('manage_sb_facilitytype_posts_columns', 'FacilityTypeCPT::sb_facilitytype_table_head');
        add_action('manage_sb_facilitytype_posts_custom_column', 'FacilityTypeCPT::sb_facilitytype_table_content', 10, 2);
        add_filter('manage_sb_facility_posts_columns', 'FacilityCPT::sb_facility_table_head');
        add_action('manage_sb_facility_posts_custom_column', 'FacilityCPT::sb_facility_table_content', 10, 2);
        add_filter('manage_sb_facilityrole_posts_columns', 'FacilityRoleCPT::sb_facilityrole_table_head');
        add_action('manage_sb_facilityrole_posts_custom_column', 'FacilityRoleCPT::sb_facilityrole_table_content', 10, 2);
        add_filter('manage_sb_facharge_posts_columns', 'FacilityChargeCPT::sb_facharge_table_head');
        add_action('manage_sb_facharge_posts_custom_column', 'FacilityChargeCPT::sb_facharge_table_content', 10, 2);
        add_filter('manage_sb_proptype_posts_columns', 'PropertyTypeCPT::sb_proptype_table_head');
        add_action('manage_sb_proptype_posts_custom_column', 'PropertyTypeCPT::sb_proptype_table_content', 10, 2);
        add_filter('manage_sb_propstatus_posts_columns', 'PropertyStatusCPT::sb_propstatus_table_head');
        add_action('manage_sb_propstatus_posts_custom_column', 'PropertyStatusCPT::sb_propstatus_table_content', 10, 2);
        add_filter('manage_sb_property_posts_columns', 'PropertyCPT::sb_property_table_head');
        add_action('manage_sb_property_posts_custom_column', 'PropertyCPT::sb_property_table_content', 10, 2);
        add_filter('manage_sb_zonetype_posts_columns', 'ZoneTypeCPT::sb_zonetype_table_head');
        add_action('manage_sb_zonetype_posts_custom_column', 'ZoneTypeCPT::sb_zonetype_table_content', 10, 2);
        add_filter('manage_sb_zoningdata_posts_columns', 'ZoningDataCPT::sb_zoningdata_table_head');
        add_action('manage_sb_zoningdata_posts_custom_column', 'ZoningDataCPT::sb_zoningdata_table_content', 10, 2);
        add_filter('manage_sb_mortgagetype_posts_columns', 'MortgageTypeCPT::sb_mortgagetype_table_head');
        add_action('manage_sb_mortgagetype_posts_custom_column', 'MortgageTypeCPT::sb_mortgagetype_table_content', 10, 2);
        add_filter('manage_sb_mortgage_posts_columns', 'MortgageCPT::sb_mortgage_table_head');
        add_action('manage_sb_mortgage_posts_custom_column', 'MortgageCPT::sb_mortgage_table_content', 10, 2);
        add_filter('manage_sb_laccessibility_posts_columns', 'LandAccessibilityCPT::sb_laccessibility_table_head');
        add_action('manage_sb_laccessibility_posts_custom_column', 'LandAccessibilityCPT::sb_laccessibility_table_content', 10, 2);
        add_filter('manage_sb_ltopography_posts_columns', 'LandTopographyCPT::sb_ltopography_table_head');
        add_action('manage_sb_ltopography_posts_custom_column', 'LandTopographyCPT::sb_ltopography_table_content', 10, 2);
        add_filter('manage_sb_landtype_posts_columns', 'LandTypeCPT::sb_landtype_table_head');
        add_action('manage_sb_landtype_posts_custom_column', 'LandTypeCPT::sb_landtype_table_content', 10, 2);
        add_filter('manage_sb_soiltype_posts_columns', 'SoilTypeCPT::sb_soiltype_table_head');
        add_action('manage_sb_soiltype_posts_custom_column', 'SoilTypeCPT::sb_soiltype_table_content', 10, 2);
        add_filter('manage_sb_lshape_posts_columns', 'LandShapeCPT::sb_lshape_table_head');
        add_action('manage_sb_lshape_posts_custom_column', 'LandShapeCPT::sb_lshape_table_content', 10, 2);
        add_filter('manage_sb_land_posts_columns', 'LandCPT::sb_land_table_head');
        add_action('manage_sb_land_posts_custom_column', 'LandCPT::sb_land_table_content', 10, 2);
        add_filter('manage_sb_plottype_posts_columns', 'PlotTypeCPT::sb_plottype_table_head');
        add_action('manage_sb_plottype_posts_custom_column', 'PlotTypeCPT::sb_plottype_table_content', 10, 2);
        add_filter('manage_sb_plot_posts_columns', 'PlotCPT::sb_plot_table_head');
        add_action('manage_sb_plot_posts_custom_column', 'PlotCPT::sb_plot_table_content', 10, 2);
        add_filter('manage_sb_improvetype_posts_columns', 'ImprovementTypeCPT::sb_improvetype_table_head');
        add_action('manage_sb_improvetype_posts_custom_column', 'ImprovementTypeCPT::sb_improvetype_table_content', 10, 2);
        add_filter('manage_sb_improvement_posts_columns', 'ImprovementCPT::sb_improvement_table_head');
        add_action('manage_sb_improvement_posts_custom_column', 'ImprovementCPT::sb_improvement_table_content', 10, 2);
        add_filter('manage_sb_proputility_posts_columns', 'PropertyUtilityCPT::sb_proputility_table_head');
        add_action('manage_sb_proputility_posts_custom_column', 'PropertyUtilityCPT::sb_proputility_table_content', 10, 2);
        add_filter('manage_sb_pcharge_posts_columns', 'PropertyChargeCPT::sb_pcharge_table_head');
        add_action('manage_sb_pcharge_posts_custom_column', 'PropertyChargeCPT::sb_pcharge_table_content', 10, 2);
        add_filter('manage_sb_assetcat_posts_columns', 'AssetCategoryCPT::sb_assetcat_table_head');
        add_action('manage_sb_assetcat_posts_custom_column', 'AssetCategoryCPT::sb_assetcat_table_content', 10, 2);
        add_filter('manage_sb_assettype_posts_columns', 'AssetTypeCPT::sb_assettype_table_head');
        add_action('manage_sb_assettype_posts_custom_column', 'AssetTypeCPT::sb_assettype_table_content', 10, 2);
        add_filter('manage_sb_asset_posts_columns', 'AssetCPT::sb_asset_table_head');
        add_action('manage_sb_asset_posts_custom_column', 'AssetCPT::sb_asset_table_content', 10, 2);
        add_filter('manage_sb_inventype_posts_columns', 'InventoryTypeCPT::sb_inventype_table_head');
        add_action('manage_sb_inventype_posts_custom_column', 'InventoryTypeCPT::sb_inventype_table_content', 10, 2);
        add_filter('manage_sb_inventory_posts_columns', 'InventoryCPT::sb_inventory_table_head');
        add_action('manage_sb_inventory_posts_custom_column', 'InventoryCPT::sb_inventory_table_content', 10, 2);
        add_filter('manage_sb_invitemtype_posts_columns', 'InventoryItemTypeCPT::sb_invitemtype_table_head');
        add_action('manage_sb_invitemtype_posts_custom_column', 'InventoryItemTypeCPT::sb_invitemtype_table_content', 10, 2);
        add_filter('manage_sb_inventoryitem_posts_columns', 'InventoryItemCPT::sb_inventoryitem_table_head');
        add_action('manage_sb_inventoryitem_posts_custom_column', 'InventoryItemCPT::sb_inventoryitem_table_content', 10, 2);
        add_filter('manage_sb_propstaff_posts_columns', 'PropertyStaffCPT::sb_propstaff_table_head');
        add_action('manage_sb_propstaff_posts_custom_column', 'PropertyStaffCPT::sb_propstaff_table_content', 10, 2);
        add_filter('manage_sb_propfiles_posts_columns', 'PropertyFilesCPT::sb_propfiles_table_head');
        add_action('manage_sb_propfiles_posts_custom_column', 'PropertyFilesCPT::sb_propfiles_table_content', 10, 2);
        add_filter('manage_sb_buildingtype_posts_columns', 'BuildingTypeCPT::sb_buildingtype_table_head');
        add_action('manage_sb_buildingtype_posts_custom_column', 'BuildingTypeCPT::sb_buildingtype_table_content', 10, 2);
        add_filter('manage_sb_buildtypropty_posts_columns', 'BuildingTypePropertyTypeCPT::sb_buildtypropty_table_head');
        add_action('manage_sb_buildtypropty_posts_custom_column', 'BuildingTypePropertyTypeCPT::sb_buildtypropty_table_content', 10, 2);
        add_filter('manage_sb_allocunit_posts_columns', 'AllocationUnitCPT::sb_allocunit_table_head');
        add_action('manage_sb_allocunit_posts_custom_column', 'AllocationUnitCPT::sb_allocunit_table_content', 10, 2);
        add_filter('manage_sb_building_posts_columns', 'BuildingCPT::sb_building_table_head');
        add_action('manage_sb_building_posts_custom_column', 'BuildingCPT::sb_building_table_content', 10, 2);
        add_filter('manage_sb_bcharge_posts_columns', 'BuildingChargeCPT::sb_bcharge_table_head');
        add_action('manage_sb_bcharge_posts_custom_column', 'BuildingChargeCPT::sb_bcharge_table_content', 10, 2);
        add_filter('manage_sb_buildfiles_posts_columns', 'BuildingFilesCPT::sb_buildfiles_table_head');
        add_action('manage_sb_buildfiles_posts_custom_column', 'BuildingFilesCPT::sb_buildfiles_table_content', 10, 2);
        add_filter('manage_sb_floortype_posts_columns', 'FloorTypeCPT::sb_floortype_table_head');
        add_action('manage_sb_floortype_posts_custom_column', 'FloorTypeCPT::sb_floortype_table_content', 10, 2);
        add_filter('manage_sb_floor_posts_columns', 'FloorCPT::sb_floor_table_head');
        add_action('manage_sb_floor_posts_custom_column', 'FloorCPT::sb_floor_table_content', 10, 2);
        add_filter('manage_sb_fcharge_posts_columns', 'FloorChargeCPT::sb_fcharge_table_head');
        add_action('manage_sb_fcharge_posts_custom_column', 'FloorChargeCPT::sb_fcharge_table_content', 10, 2);
        add_filter('manage_sb_unittype_posts_columns', 'UnitTypeCPT::sb_unittype_table_head');
        add_action('manage_sb_unittype_posts_custom_column', 'UnitTypeCPT::sb_unittype_table_content', 10, 2);
        add_filter('manage_sb_utypecharge_posts_columns', 'UnitTypeChargeCPT::sb_utypecharge_table_head');
        add_action('manage_sb_utypecharge_posts_custom_column', 'UnitTypeChargeCPT::sb_utypecharge_table_content', 10, 2);
        add_filter('manage_sb_unit_posts_columns', 'UnitCPT::sb_unit_table_head');
        add_action('manage_sb_unit_posts_custom_column', 'UnitCPT::sb_unit_table_content', 10, 2);
        add_filter('manage_sb_unitcharge_posts_columns', 'UnitChargeCPT::sb_unitcharge_table_head');
        add_action('manage_sb_unitcharge_posts_custom_column', 'UnitChargeCPT::sb_unitcharge_table_content', 10, 2);
        add_filter('manage_sb_pslottype_posts_columns', 'ParkingSlotTypeCPT::sb_pslottype_table_head');
        add_action('manage_sb_pslottype_posts_custom_column', 'ParkingSlotTypeCPT::sb_pslottype_table_content', 10, 2);
        add_filter('manage_sb_pstypecharge_posts_columns', 'ParkingSlotTypeChargeCPT::sb_pstypecharge_table_head');
        add_action('manage_sb_pstypecharge_posts_custom_column', 'ParkingSlotTypeChargeCPT::sb_pstypecharge_table_content', 10, 2);
        add_filter('manage_sb_pslot_posts_columns', 'ParkingSlotCPT::sb_pslot_table_head');
        add_action('manage_sb_pslot_posts_custom_column', 'ParkingSlotCPT::sb_pslot_table_content', 10, 2);
        add_filter('manage_sb_agreecat_posts_columns', 'AgreementCategoryCPT::sb_agreecat_table_head');
        add_action('manage_sb_agreecat_posts_custom_column', 'AgreementCategoryCPT::sb_agreecat_table_content', 10, 2);
        add_filter('manage_sb_agreetype_posts_columns', 'AgreementTypeCPT::sb_agreetype_table_head');
        add_action('manage_sb_agreetype_posts_custom_column', 'AgreementTypeCPT::sb_agreetype_table_content', 10, 2);
        add_filter('manage_sb_agreetypecharge_posts_columns', 'AgreementTypeChargeCPT::sb_agreetypecharge_table_head');
        add_action('manage_sb_agreetypecharge_posts_custom_column', 'AgreementTypeChargeCPT::sb_agreetypecharge_table_content', 10, 2);
        add_filter('manage_sb_termtype_posts_columns', 'TermTypeCPT::sb_termtype_table_head');
        add_action('manage_sb_termtype_posts_custom_column', 'TermTypeCPT::sb_termtype_table_content', 10, 2);
        add_filter('manage_sb_term_posts_columns', 'TermCPT::sb_term_table_head');
        add_action('manage_sb_term_posts_custom_column', 'TermCPT::sb_term_table_content', 10, 2);
        add_filter('manage_sb_agreement_posts_columns', 'AgreementCPT::sb_agreement_table_head');
        add_action('manage_sb_agreement_posts_custom_column', 'AgreementCPT::sb_agreement_table_content', 10, 2);
        add_filter('manage_sb_purchaseagrmnt_posts_columns', 'PurchaseAgreementCPT::sb_purchaseagrmnt_table_head');
        add_action('manage_sb_purchaseagrmnt_posts_custom_column', 'PurchaseAgreementCPT::sb_purchaseagrmnt_table_content', 10, 2);
        add_filter('manage_sb_settlementdata_posts_columns', 'SettlementDataCPT::sb_settlementdata_table_head');
        add_action('manage_sb_settlementdata_posts_custom_column', 'SettlementDataCPT::sb_settlementdata_table_content', 10, 2);
        add_filter('manage_sb_settledataloan_posts_columns', 'SettlementDataLoanCPT::sb_settledataloan_table_head');
        add_action('manage_sb_settledataloan_posts_custom_column', 'SettlementDataLoanCPT::sb_settledataloan_table_content', 10, 2);
        add_filter('manage_sb_agrmntitemtype_posts_columns', 'AgreementItemTypeCPT::sb_agrmntitemtype_table_head');
        add_action('manage_sb_agrmntitemtype_posts_custom_column', 'AgreementItemTypeCPT::sb_agrmntitemtype_table_content', 10, 2);
        add_filter('manage_sb_agreementitem_posts_columns', 'AgreementItemCPT::sb_agreementitem_table_head');
        add_action('manage_sb_agreementitem_posts_custom_column', 'AgreementItemCPT::sb_agreementitem_table_content', 10, 2);
        add_filter('manage_sb_servicetype_posts_columns', 'ServiceTypeCPT::sb_servicetype_table_head');
        add_action('manage_sb_servicetype_posts_custom_column', 'ServiceTypeCPT::sb_servicetype_table_content', 10, 2);
        add_filter('manage_sb_service_posts_columns', 'ServiceCPT::sb_service_table_head');
        add_action('manage_sb_service_posts_custom_column', 'ServiceCPT::sb_service_table_content', 10, 2);
        add_filter('manage_sb_agreeservice_posts_columns', 'AgreementServiceCPT::sb_agreeservice_table_head');
        add_action('manage_sb_agreeservice_posts_custom_column', 'AgreementServiceCPT::sb_agreeservice_table_content', 10, 2);
        add_filter('manage_sb_agreeunit_posts_columns', 'AgreementUnitCPT::sb_agreeunit_table_head');
        add_action('manage_sb_agreeunit_posts_custom_column', 'AgreementUnitCPT::sb_agreeunit_table_content', 10, 2);
        add_filter('manage_sb_agreecharge_posts_columns', 'AgreementChargeCPT::sb_agreecharge_table_head');
        add_action('manage_sb_agreecharge_posts_custom_column', 'AgreementChargeCPT::sb_agreecharge_table_content', 10, 2);
        add_filter('manage_sb_agreeterm_posts_columns', 'AgreementTermCPT::sb_agreeterm_table_head');
        add_action('manage_sb_agreeterm_posts_custom_column', 'AgreementTermCPT::sb_agreeterm_table_content', 10, 2);
        add_filter('manage_sb_chargeinagrmt_posts_columns', 'ChargeInAgreementCPT::sb_chargeinagrmt_table_head');
        add_action('manage_sb_chargeinagrmt_posts_custom_column', 'ChargeInAgreementCPT::sb_chargeinagrmt_table_content', 10, 2);
        add_filter('manage_sb_rentstatus_posts_columns', 'RentStatusCPT::sb_rentstatus_table_head');
        add_action('manage_sb_rentstatus_posts_custom_column', 'RentStatusCPT::sb_rentstatus_table_content', 10, 2);
        add_filter('manage_sb_rent_posts_columns', 'RentCPT::sb_rent_table_head');
        add_action('manage_sb_rent_posts_custom_column', 'RentCPT::sb_rent_table_content', 10, 2);
        add_filter('manage_sb_assmttype_posts_columns', 'AssessmentTypeCPT::sb_assmttype_table_head');
        add_action('manage_sb_assmttype_posts_custom_column', 'AssessmentTypeCPT::sb_assmttype_table_content', 10, 2);
        add_filter('manage_sb_assessment_posts_columns', 'AssessmentCPT::sb_assessment_table_head');
        add_action('manage_sb_assessment_posts_custom_column', 'AssessmentCPT::sb_assessment_table_content', 10, 2);
        add_filter('manage_sb_sdtype_posts_columns', 'SalesDataTypeCPT::sb_sdtype_table_head');
        add_action('manage_sb_sdtype_posts_custom_column', 'SalesDataTypeCPT::sb_sdtype_table_content', 10, 2);
        add_filter('manage_sb_salesdata_posts_columns', 'SalesDataCPT::sb_salesdata_table_head');
        add_action('manage_sb_salesdata_posts_custom_column', 'SalesDataCPT::sb_salesdata_table_content', 10, 2);
        add_filter('manage_sb_sditemtype_posts_columns', 'SalesDataItemTypeCPT::sb_sditemtype_table_head');
        add_action('manage_sb_sditemtype_posts_custom_column', 'SalesDataItemTypeCPT::sb_sditemtype_table_content', 10, 2);
        add_filter('manage_sb_salesdataitem_posts_columns', 'SalesDataItemCPT::sb_salesdataitem_table_head');
        add_action('manage_sb_salesdataitem_posts_custom_column', 'SalesDataItemCPT::sb_salesdataitem_table_content', 10, 2);
        add_filter('manage_sb_cdtype_posts_columns', 'CostDataTypeCPT::sb_cdtype_table_head');
        add_action('manage_sb_cdtype_posts_custom_column', 'CostDataTypeCPT::sb_cdtype_table_content', 10, 2);
        add_filter('manage_sb_costdata_posts_columns', 'CostDataCPT::sb_costdata_table_head');
        add_action('manage_sb_costdata_posts_custom_column', 'CostDataCPT::sb_costdata_table_content', 10, 2);
        add_filter('manage_sb_cditemtype_posts_columns', 'CostDataItemTypeCPT::sb_cditemtype_table_head');
        add_action('manage_sb_cditemtype_posts_custom_column', 'CostDataItemTypeCPT::sb_cditemtype_table_content', 10, 2);
        add_filter('manage_sb_cditemdata_posts_columns', 'CostDataItemCPT::sb_cditemdata_table_head');
        add_action('manage_sb_cditemdata_posts_custom_column', 'CostDataItemCPT::sb_cditemdata_table_content', 10, 2);
        add_filter('manage_sb_idtype_posts_columns', 'IncomeDataTypeCPT::sb_idtype_table_head');
        add_action('manage_sb_idtype_posts_custom_column', 'IncomeDataTypeCPT::sb_idtype_table_content', 10, 2);
        add_filter('manage_sb_incomedata_posts_columns', 'IncomeDataCPT::sb_incomedata_table_head');
        add_action('manage_sb_incomedata_posts_custom_column', 'IncomeDataCPT::sb_incomedata_table_content', 10, 2);
        add_filter('manage_sb_idetype_posts_columns', 'IncomeDataExpenseTypeCPT::sb_idetype_table_head');
        add_action('manage_sb_idetype_posts_custom_column', 'IncomeDataExpenseTypeCPT::sb_idetype_table_content', 10, 2);
        add_filter('manage_sb_idexpense_posts_columns', 'IncomeDataExpenseCPT::sb_idexpense_table_head');
        add_action('manage_sb_idexpense_posts_custom_column', 'IncomeDataExpenseCPT::sb_idexpense_table_content', 10, 2);
        add_filter('manage_sb_billaccount_posts_columns', 'BillingAccountCPT::sb_billaccount_table_head');
        add_action('manage_sb_billaccount_posts_custom_column', 'BillingAccountCPT::sb_billaccount_table_content', 10, 2);
        add_filter('manage_sb_accttxntype_posts_columns', 'AccountTransactionTypeCPT::sb_accttxntype_table_head');
        add_action('manage_sb_accttxntype_posts_custom_column', 'AccountTransactionTypeCPT::sb_accttxntype_table_content', 10, 2);
        add_filter('manage_sb_accttxnstatus_posts_columns', 'AccountTransactionStatusCPT::sb_accttxnstatus_table_head');
        add_action('manage_sb_accttxnstatus_posts_custom_column', 'AccountTransactionStatusCPT::sb_accttxnstatus_table_content', 10, 2);
        add_filter('manage_sb_accttransaction_posts_columns', 'AccountTransactionCPT::sb_accttransaction_table_head');
        add_action('manage_sb_accttransaction_posts_custom_column', 'AccountTransactionCPT::sb_accttransaction_table_content', 10, 2);
        add_filter('manage_sb_fundmeth_posts_columns', 'FundingMethodCPT::sb_fundmeth_table_head');
        add_action('manage_sb_fundmeth_posts_custom_column', 'FundingMethodCPT::sb_fundmeth_table_content', 10, 2);
        add_filter('manage_sb_templatetype_posts_columns', 'TemplateTypeCPT::sb_templatetype_table_head');
        add_action('manage_sb_templatetype_posts_custom_column', 'TemplateTypeCPT::sb_templatetype_table_content', 10, 2);
        add_filter('manage_sb_template_posts_columns', 'TemplateCPT::sb_template_table_head');
        add_action('manage_sb_template_posts_custom_column', 'TemplateCPT::sb_template_table_content', 10, 2);
        add_filter('manage_sb_invoicetype_posts_columns', 'InvoiceTypeCPT::sb_invoicetype_table_head');
        add_action('manage_sb_invoicetype_posts_custom_column', 'InvoiceTypeCPT::sb_invoicetype_table_content', 10, 2);
        add_filter('manage_sb_invoicestatus_posts_columns', 'InvoiceStatusCPT::sb_invoicestatus_table_head');
        add_action('manage_sb_invoicestatus_posts_custom_column', 'InvoiceStatusCPT::sb_invoicestatus_table_content', 10, 2);
        add_filter('manage_sb_invoice_posts_columns', 'InvoiceCPT::sb_invoice_table_head');
        add_action('manage_sb_invoice_posts_custom_column', 'InvoiceCPT::sb_invoice_table_content', 10, 2);
        add_filter('manage_sb_invoicerole_posts_columns', 'InvoiceRoleCPT::sb_invoicerole_table_head');
        add_action('manage_sb_invoicerole_posts_custom_column', 'InvoiceRoleCPT::sb_invoicerole_table_content', 10, 2);
        add_filter('manage_sb_invoiceitemtype_posts_columns', 'InvoiceItemTypeCPT::sb_invoiceitemtype_table_head');
        add_action('manage_sb_invoiceitemtype_posts_custom_column', 'InvoiceItemTypeCPT::sb_invoiceitemtype_table_content', 10, 2);
        add_filter('manage_sb_invoiceitem_posts_columns', 'InvoiceItemCPT::sb_invoiceitem_table_head');
        add_action('manage_sb_invoiceitem_posts_custom_column', 'InvoiceItemCPT::sb_invoiceitem_table_content', 10, 2);
        add_filter('manage_sb_invoiceterm_posts_columns', 'InvoiceTermCPT::sb_invoiceterm_table_head');
        add_action('manage_sb_invoiceterm_posts_custom_column', 'InvoiceTermCPT::sb_invoiceterm_table_content', 10, 2);
        add_filter('manage_sb_pordertype_posts_columns', 'PurchaseOrderTypeCPT::sb_pordertype_table_head');
        add_action('manage_sb_pordertype_posts_custom_column', 'PurchaseOrderTypeCPT::sb_pordertype_table_content', 10, 2);
        add_filter('manage_sb_porderstatus_posts_columns', 'PurchaseOrderStatusCPT::sb_porderstatus_table_head');
        add_action('manage_sb_porderstatus_posts_custom_column', 'PurchaseOrderStatusCPT::sb_porderstatus_table_content', 10, 2);
        add_filter('manage_sb_porder_posts_columns', 'PurchaseOrderCPT::sb_porder_table_head');
        add_action('manage_sb_porder_posts_custom_column', 'PurchaseOrderCPT::sb_porder_table_content', 10, 2);
        add_filter('manage_sb_porole_posts_columns', 'PurchaseOrderRoleCPT::sb_porole_table_head');
        add_action('manage_sb_porole_posts_custom_column', 'PurchaseOrderRoleCPT::sb_porole_table_content', 10, 2);
        add_filter('manage_sb_poitemtype_posts_columns', 'PurchaseOrderItemTypeCPT::sb_poitemtype_table_head');
        add_action('manage_sb_poitemtype_posts_custom_column', 'PurchaseOrderItemTypeCPT::sb_poitemtype_table_content', 10, 2);
        add_filter('manage_sb_porderitem_posts_columns', 'PurchaseOrderItemCPT::sb_porderitem_table_head');
        add_action('manage_sb_porderitem_posts_custom_column', 'PurchaseOrderItemCPT::sb_porderitem_table_content', 10, 2);
        add_filter('manage_sb_porderterm_posts_columns', 'PurchaseOrderTermCPT::sb_porderterm_table_head');
        add_action('manage_sb_porderterm_posts_custom_column', 'PurchaseOrderTermCPT::sb_porderterm_table_content', 10, 2);
        add_filter('manage_sb_paymenttype_posts_columns', 'PaymentTypeCPT::sb_paymenttype_table_head');
        add_action('manage_sb_paymenttype_posts_custom_column', 'PaymentTypeCPT::sb_paymenttype_table_content', 10, 2);
        add_filter('manage_sb_paymethtype_posts_columns', 'PaymentMethodTypeCPT::sb_paymethtype_table_head');
        add_action('manage_sb_paymethtype_posts_custom_column', 'PaymentMethodTypeCPT::sb_paymethtype_table_content', 10, 2);
        add_filter('manage_sb_payment_posts_columns', 'PaymentCPT::sb_payment_table_head');
        add_action('manage_sb_payment_posts_custom_column', 'PaymentCPT::sb_payment_table_content', 10, 2);
        add_filter('manage_sb_payapp_posts_columns', 'PaymentApplicationCPT::sb_payapp_table_head');
        add_action('manage_sb_payapp_posts_custom_column', 'PaymentApplicationCPT::sb_payapp_table_content', 10, 2);
        add_filter('manage_sb_receipttype_posts_columns', 'ReceiptTypeCPT::sb_receipttype_table_head');
        add_action('manage_sb_receipttype_posts_custom_column', 'ReceiptTypeCPT::sb_receipttype_table_content', 10, 2);
        add_filter('manage_sb_disbursetype_posts_columns', 'DisbursementTypeCPT::sb_disbursetype_table_head');
        add_action('manage_sb_disbursetype_posts_custom_column', 'DisbursementTypeCPT::sb_disbursetype_table_content', 10, 2);
        add_filter('manage_sb_receipt_posts_columns', 'ReceiptCPT::sb_receipt_table_head');
        add_action('manage_sb_receipt_posts_custom_column', 'ReceiptCPT::sb_receipt_table_content', 10, 2);
        add_filter('manage_sb_disbursement_posts_columns', 'DisbursementCPT::sb_disbursement_table_head');
        add_action('manage_sb_disbursement_posts_custom_column', 'DisbursementCPT::sb_disbursement_table_content', 10, 2);
        add_filter('manage_sb_periodtype_posts_columns', 'PeriodTypeCPT::sb_periodtype_table_head');
        add_action('manage_sb_periodtype_posts_custom_column', 'PeriodTypeCPT::sb_periodtype_table_content', 10, 2);
        add_filter('manage_sb_acctperiod_posts_columns', 'AccountingPeriodCPT::sb_acctperiod_table_head');
        add_action('manage_sb_acctperiod_posts_custom_column', 'AccountingPeriodCPT::sb_acctperiod_table_content', 10, 2);
        add_filter('manage_sb_coaacctstruct_posts_columns', 'COAAccountStructureCPT::sb_coaacctstruct_table_head');
        add_action('manage_sb_coaacctstruct_posts_custom_column', 'COAAccountStructureCPT::sb_coaacctstruct_table_content', 10, 2);
        add_filter('manage_sb_coaacctsegtype_posts_columns', 'COAAccountSegmentTypeCPT::sb_coaacctsegtype_table_head');
        add_action('manage_sb_coaacctsegtype_posts_custom_column', 'COAAccountSegmentTypeCPT::sb_coaacctsegtype_table_content', 10, 2);
        add_filter('manage_sb_coaasegval_posts_columns', 'COAAccountSegmentTypeValueCPT::sb_coaasegval_table_head');
        add_action('manage_sb_coaasegval_posts_custom_column', 'COAAccountSegmentTypeValueCPT::sb_coaasegval_table_content', 10, 2);
        add_filter('manage_sb_coaacctseg_posts_columns', 'COAAccountSegmentCPT::sb_coaacctseg_table_head');
        add_action('manage_sb_coaacctseg_posts_custom_column', 'COAAccountSegmentCPT::sb_coaacctseg_table_content', 10, 2);
        add_filter('manage_sb_coastatus_posts_columns', 'COAStatusCPT::sb_coastatus_table_head');
        add_action('manage_sb_coastatus_posts_custom_column', 'COAStatusCPT::sb_coastatus_table_content', 10, 2);
        add_filter('manage_sb_coa_posts_columns', 'ChartOfAccountsCPT::sb_coa_table_head');
        add_action('manage_sb_coa_posts_custom_column', 'ChartOfAccountsCPT::sb_coa_table_content', 10, 2);
        add_filter('manage_sb_glaccttype_posts_columns', 'GLAccountTypeCPT::sb_glaccttype_table_head');
        add_action('manage_sb_glaccttype_posts_custom_column', 'GLAccountTypeCPT::sb_glaccttype_table_content', 10, 2);
        add_filter('manage_sb_glaccount_posts_columns', 'GLAccountCPT::sb_glaccount_table_head');
        add_action('manage_sb_glaccount_posts_custom_column', 'GLAccountCPT::sb_glaccount_table_content', 10, 2);
        add_filter('manage_sb_buglaccount_posts_columns', 'BusinessUnitGLAccountCPT::sb_buglaccount_table_head');
        add_action('manage_sb_buglaccount_posts_custom_column', 'BusinessUnitGLAccountCPT::sb_buglaccount_table_content', 10, 2);
        add_filter('manage_sb_buglaccountbal_posts_columns', 'BusinessUnitGLAccountBalanceCPT::sb_buglaccountbal_table_head');
        add_action('manage_sb_buglaccountbal_posts_custom_column', 'BusinessUnitGLAccountBalanceCPT::sb_buglaccountbal_table_content', 10, 2);
        add_filter('manage_sb_coaaseginst_posts_columns', 'COAAccountSegmentInstanceCPT::sb_coaaseginst_table_head');
        add_action('manage_sb_coaaseginst_posts_custom_column', 'COAAccountSegmentInstanceCPT::sb_coaaseginst_table_content', 10, 2);
        add_filter('manage_sb_feventtype_posts_columns', 'FinancialEventTypeCPT::sb_feventtype_table_head');
        add_action('manage_sb_feventtype_posts_custom_column', 'FinancialEventTypeCPT::sb_feventtype_table_content', 10, 2);
        add_filter('manage_sb_fevent_posts_columns', 'FinancialEventCPT::sb_fevent_table_head');
        add_action('manage_sb_fevent_posts_custom_column', 'FinancialEventCPT::sb_fevent_table_content', 10, 2);
        add_filter('manage_sb_txntype_posts_columns', 'TransactionTypeCPT::sb_txntype_table_head');
        add_action('manage_sb_txntype_posts_custom_column', 'TransactionTypeCPT::sb_txntype_table_content', 10, 2);
        add_filter('manage_sb_transaction_posts_columns', 'TransactionCPT::sb_transaction_table_head');
        add_action('manage_sb_transaction_posts_custom_column', 'TransactionCPT::sb_transaction_table_content', 10, 2);
        add_filter('manage_sb_txndetail_posts_columns', 'TransactionDetailCPT::sb_txndetail_table_head');
        add_action('manage_sb_txndetail_posts_custom_column', 'TransactionDetailCPT::sb_txndetail_table_content', 10, 2);
        add_filter('manage_sb_feventtxntype_posts_columns', 'FEventTxnTypeCPT::sb_feventtxntype_table_head');
        add_action('manage_sb_feventtxntype_posts_custom_column', 'FEventTxnTypeCPT::sb_feventtxntype_table_content', 10, 2);
        add_filter('manage_sb_txntypeacct_posts_columns', 'TxnTypeAccountCPT::sb_txntypeacct_table_head');
        add_action('manage_sb_txntypeacct_posts_custom_column', 'TxnTypeAccountCPT::sb_txntypeacct_table_content', 10, 2);
        add_filter('manage_sb_budgettype_posts_columns', 'BudgetTypeCPT::sb_budgettype_table_head');
        add_action('manage_sb_budgettype_posts_custom_column', 'BudgetTypeCPT::sb_budgettype_table_content', 10, 2);
        add_filter('manage_sb_budgetstatus_posts_columns', 'BudgetStatusCPT::sb_budgetstatus_table_head');
        add_action('manage_sb_budgetstatus_posts_custom_column', 'BudgetStatusCPT::sb_budgetstatus_table_content', 10, 2);
        add_filter('manage_sb_budget_posts_columns', 'BudgetCPT::sb_budget_table_head');
        add_action('manage_sb_budget_posts_custom_column', 'BudgetCPT::sb_budget_table_content', 10, 2);
        add_filter('manage_sb_bitemtype_posts_columns', 'BudgetItemTypeCPT::sb_bitemtype_table_head');
        add_action('manage_sb_bitemtype_posts_custom_column', 'BudgetItemTypeCPT::sb_bitemtype_table_content', 10, 2);
        add_filter('manage_sb_budgetitem_posts_columns', 'BudgetItemCPT::sb_budgetitem_table_head');
        add_action('manage_sb_budgetitem_posts_custom_column', 'BudgetItemCPT::sb_budgetitem_table_content', 10, 2);
        add_filter('manage_sb_budgetrole_posts_columns', 'BudgetRoleCPT::sb_budgetrole_table_head');
        add_action('manage_sb_budgetrole_posts_custom_column', 'BudgetRoleCPT::sb_budgetrole_table_content', 10, 2);
        add_filter('manage_sb_stperiod_posts_columns', 'StandardTimePeriodCPT::sb_stperiod_table_head');
        add_action('manage_sb_stperiod_posts_custom_column', 'StandardTimePeriodCPT::sb_stperiod_table_content', 10, 2);
        add_filter('manage_sb_brrtype_posts_columns', 'BudgetReviewResultTypeCPT::sb_brrtype_table_head');
        add_action('manage_sb_brrtype_posts_custom_column', 'BudgetReviewResultTypeCPT::sb_brrtype_table_content', 10, 2);
        add_filter('manage_sb_budgetreview_posts_columns', 'BudgetReviewCPT::sb_budgetreview_table_head');
        add_action('manage_sb_budgetreview_posts_custom_column', 'BudgetReviewCPT::sb_budgetreview_table_content', 10, 2);
        add_filter('manage_sb_brevision_posts_columns', 'BudgetRevisionCPT::sb_brevision_table_head');
        add_action('manage_sb_brevision_posts_custom_column', 'BudgetRevisionCPT::sb_brevision_table_content', 10, 2);
        add_filter('manage_sb_budgetrevimpact_posts_columns', 'BudgetRevisionImpactCPT::sb_budgetrevimpact_table_head');
        add_action('manage_sb_budgetrevimpact_posts_custom_column', 'BudgetRevisionImpactCPT::sb_budgetrevimpact_table_content', 10, 2);
        add_filter('manage_sb_budgetscenario_posts_columns', 'BudgetScenarioCPT::sb_budgetscenario_table_head');
        add_action('manage_sb_budgetscenario_posts_custom_column', 'BudgetScenarioCPT::sb_budgetscenario_table_content', 10, 2);
        add_filter('manage_sb_bscenariorule_posts_columns', 'BudgetScenarioRuleCPT::sb_bscenariorule_table_head');
        add_action('manage_sb_bscenariorule_posts_custom_column', 'BudgetScenarioRuleCPT::sb_bscenariorule_table_content', 10, 2);
        add_filter('manage_sb_bscenarioapp_posts_columns', 'BudgetScenarioApplicationCPT::sb_bscenarioapp_table_head');
        add_action('manage_sb_bscenarioapp_posts_custom_column', 'BudgetScenarioApplicationCPT::sb_bscenarioapp_table_content', 10, 2);
        add_filter('manage_sb_pballocation_posts_columns', 'PaymentBudgetAllocationCPT::sb_pballocation_table_head');
        add_action('manage_sb_pballocation_posts_custom_column', 'PaymentBudgetAllocationCPT::sb_pballocation_table_content', 10, 2);
        add_filter('manage_sb_glbudgetxref_posts_columns', 'GLBudgetXREFCPT::sb_glbudgetxref_table_head');
        add_action('manage_sb_glbudgetxref_posts_custom_column', 'GLBudgetXREFCPT::sb_glbudgetxref_table_content', 10, 2);
        add_filter('manage_sb_disputetype_posts_columns', 'DisputeTypeCPT::sb_disputetype_table_head');
        add_action('manage_sb_disputetype_posts_custom_column', 'DisputeTypeCPT::sb_disputetype_table_content', 10, 2);
        add_filter('manage_sb_disputestatus_posts_columns', 'DisputeStatusCPT::sb_disputestatus_table_head');
        add_action('manage_sb_disputestatus_posts_custom_column', 'DisputeStatusCPT::sb_disputestatus_table_content', 10, 2);
        add_filter('manage_sb_dispute_posts_columns', 'DisputeCPT::sb_dispute_table_head');
        add_action('manage_sb_dispute_posts_custom_column', 'DisputeCPT::sb_dispute_table_content', 10, 2);
        add_filter('manage_sb_disputeitem_posts_columns', 'DisputeItemCPT::sb_disputeitem_table_head');
        add_action('manage_sb_disputeitem_posts_custom_column', 'DisputeItemCPT::sb_disputeitem_table_content', 10, 2);
        add_filter('manage_sb_conversation_posts_columns', 'ConversationCPT::sb_conversation_table_head');
        add_action('manage_sb_conversation_posts_custom_column', 'ConversationCPT::sb_conversation_table_content', 10, 2);
        add_filter('manage_sb_message_posts_columns', 'MessageCPT::sb_message_table_head');
        add_action('manage_sb_message_posts_custom_column', 'MessageCPT::sb_message_table_content', 10, 2);
        add_filter('manage_sb_messagesfiles_posts_columns', 'MessageFilesCPT::sb_messagesfiles_table_head');
        add_action('manage_sb_messagesfiles_posts_custom_column', 'MessageFilesCPT::sb_messagesfiles_table_content', 10, 2);
        add_filter('manage_sb_notifytype_posts_columns', 'NotificationTypeCPT::sb_notifytype_table_head');
        add_action('manage_sb_notifytype_posts_custom_column', 'NotificationTypeCPT::sb_notifytype_table_content', 10, 2);
        add_filter('manage_sb_notifystatus_posts_columns', 'NotificationStatusCPT::sb_notifystatus_table_head');
        add_action('manage_sb_notifystatus_posts_custom_column', 'NotificationStatusCPT::sb_notifystatus_table_content', 10, 2);
        add_filter('manage_sb_notifylevel_posts_columns', 'NotificationLevelCPT::sb_notifylevel_table_head');
        add_action('manage_sb_notifylevel_posts_custom_column', 'NotificationLevelCPT::sb_notifylevel_table_content', 10, 2);
        add_filter('manage_sb_notification_posts_columns', 'NotificationCPT::sb_notification_table_head');
        add_action('manage_sb_notification_posts_custom_column', 'NotificationCPT::sb_notification_table_content', 10, 2);
        add_filter('manage_sb_pclasstype_posts_columns', 'PositionClassificationTypeCPT::sb_pclasstype_table_head');
        add_action('manage_sb_pclasstype_posts_custom_column', 'PositionClassificationTypeCPT::sb_pclasstype_table_content', 10, 2);
        add_filter('manage_sb_ptypeclass_posts_columns', 'PositionTypeClassCPT::sb_ptypeclass_table_head');
        add_action('manage_sb_ptypeclass_posts_custom_column', 'PositionTypeClassCPT::sb_ptypeclass_table_content', 10, 2);
        add_filter('manage_sb_positiontype_posts_columns', 'PositionTypeCPT::sb_positiontype_table_head');
        add_action('manage_sb_positiontype_posts_custom_column', 'PositionTypeCPT::sb_positiontype_table_content', 10, 2);
        add_filter('manage_sb_pstatus_posts_columns', 'PositionStatusCPT::sb_pstatus_table_head');
        add_action('manage_sb_pstatus_posts_custom_column', 'PositionStatusCPT::sb_pstatus_table_content', 10, 2);
        add_filter('manage_sb_resptype_posts_columns', 'ResponsibilityTypeCPT::sb_resptype_table_head');
        add_action('manage_sb_resptype_posts_custom_column', 'ResponsibilityTypeCPT::sb_resptype_table_content', 10, 2);
        add_filter('manage_sb_validresp_posts_columns', 'ValidResponsibilityCPT::sb_validresp_table_head');
        add_action('manage_sb_validresp_posts_custom_column', 'ValidResponsibilityCPT::sb_validresp_table_content', 10, 2);
        add_filter('manage_sb_position_posts_columns', 'PositionCPT::sb_position_table_head');
        add_action('manage_sb_position_posts_custom_column', 'PositionCPT::sb_position_table_content', 10, 2);
        add_filter('manage_sb_posresp_posts_columns', 'PositionResponsibilityCPT::sb_posresp_table_head');
        add_action('manage_sb_posresp_posts_custom_column', 'PositionResponsibilityCPT::sb_posresp_table_content', 10, 2);
        add_filter('manage_sb_pfulfillment_posts_columns', 'PositionFulfillmentCPT::sb_pfulfillment_table_head');
        add_action('manage_sb_pfulfillment_posts_custom_column', 'PositionFulfillmentCPT::sb_pfulfillment_table_content', 10, 2);
        add_filter('manage_sb_preportstruct_posts_columns', 'PositionReportingStructureCPT::sb_preportstruct_table_head');
        add_action('manage_sb_preportstruct_posts_custom_column', 'PositionReportingStructureCPT::sb_preportstruct_table_content', 10, 2);
        add_filter('manage_sb_ratetype_posts_columns', 'RateTypeCPT::sb_ratetype_table_head');
        add_action('manage_sb_ratetype_posts_custom_column', 'RateTypeCPT::sb_ratetype_table_content', 10, 2);
        add_filter('manage_sb_paygrade_posts_columns', 'PayGradeCPT::sb_paygrade_table_head');
        add_action('manage_sb_paygrade_posts_custom_column', 'PayGradeCPT::sb_paygrade_table_content', 10, 2);
        add_filter('manage_sb_salarystep_posts_columns', 'SalaryStepCPT::sb_salarystep_table_head');
        add_action('manage_sb_salarystep_posts_custom_column', 'SalaryStepCPT::sb_salarystep_table_content', 10, 2);
        add_filter('manage_sb_ptyperate_posts_columns', 'PositionTypeRateCPT::sb_ptyperate_table_head');
        add_action('manage_sb_ptyperate_posts_custom_column', 'PositionTypeRateCPT::sb_ptyperate_table_content', 10, 2);
        add_filter('manage_sb_payhistory_posts_columns', 'PayHistoryCPT::sb_payhistory_table_head');
        add_action('manage_sb_payhistory_posts_custom_column', 'PayHistoryCPT::sb_payhistory_table_content', 10, 2);
        add_filter('manage_sb_benefittype_posts_columns', 'BenefitTypeCPT::sb_benefittype_table_head');
        add_action('manage_sb_benefittype_posts_custom_column', 'BenefitTypeCPT::sb_benefittype_table_content', 10, 2);
        add_filter('manage_sb_partybenefit_posts_columns', 'PartyBenefitCPT::sb_partybenefit_table_head');
        add_action('manage_sb_partybenefit_posts_custom_column', 'PartyBenefitCPT::sb_partybenefit_table_content', 10, 2);
        add_filter('manage_sb_deductiontype_posts_columns', 'DeductionTypeCPT::sb_deductiontype_table_head');
        add_action('manage_sb_deductiontype_posts_custom_column', 'DeductionTypeCPT::sb_deductiontype_table_content', 10, 2);
        add_filter('manage_sb_deduction_posts_columns', 'DeductionCPT::sb_deduction_table_head');
        add_action('manage_sb_deduction_posts_custom_column', 'DeductionCPT::sb_deduction_table_content', 10, 2);
        add_filter('manage_sb_prpreference_posts_columns', 'PayrollPreferenceCPT::sb_prpreference_table_head');
        add_action('manage_sb_prpreference_posts_custom_column', 'PayrollPreferenceCPT::sb_prpreference_table_content', 10, 2);
        add_filter('manage_sb_empappstatus_posts_columns', 'EmploymentApplicationStatusCPT::sb_empappstatus_table_head');
        add_action('manage_sb_empappstatus_posts_custom_column', 'EmploymentApplicationStatusCPT::sb_empappstatus_table_content', 10, 2);
        add_filter('manage_sb_empappsrctype_posts_columns', 'EmploymentApplicationSourceTypeCPT::sb_empappsrctype_table_head');
        add_action('manage_sb_empappsrctype_posts_custom_column', 'EmploymentApplicationSourceTypeCPT::sb_empappsrctype_table_content', 10, 2);
        add_filter('manage_sb_empapplication_posts_columns', 'EmploymentApplicationCPT::sb_empapplication_table_head');
        add_action('manage_sb_empapplication_posts_custom_column', 'EmploymentApplicationCPT::sb_empapplication_table_content', 10, 2);
        add_filter('manage_sb_qualtype_posts_columns', 'QualificationTypeCPT::sb_qualtype_table_head');
        add_action('manage_sb_qualtype_posts_custom_column', 'QualificationTypeCPT::sb_qualtype_table_content', 10, 2);
        add_filter('manage_sb_skilltype_posts_columns', 'SkillTypeCPT::sb_skilltype_table_head');
        add_action('manage_sb_skilltype_posts_custom_column', 'SkillTypeCPT::sb_skilltype_table_content', 10, 2);
        add_filter('manage_sb_tctype_posts_columns', 'TrainingClassTypeCPT::sb_tctype_table_head');
        add_action('manage_sb_tctype_posts_custom_column', 'TrainingClassTypeCPT::sb_tctype_table_content', 10, 2);
        add_filter('manage_sb_ptraining_posts_columns', 'PersonTrainingCPT::sb_ptraining_table_head');
        add_action('manage_sb_ptraining_posts_custom_column', 'PersonTrainingCPT::sb_ptraining_table_content', 10, 2);
        add_filter('manage_sb_resume_posts_columns', 'ResumeCPT::sb_resume_table_head');
        add_action('manage_sb_resume_posts_custom_column', 'ResumeCPT::sb_resume_table_content', 10, 2);
        add_filter('manage_sb_partyskill_posts_columns', 'PartySkillCPT::sb_partyskill_table_head');
        add_action('manage_sb_partyskill_posts_custom_column', 'PartySkillCPT::sb_partyskill_table_content', 10, 2);
        add_filter('manage_sb_partyqual_posts_columns', 'PartyQualificationCPT::sb_partyqual_table_head');
        add_action('manage_sb_partyqual_posts_custom_column', 'PartyQualificationCPT::sb_partyqual_table_content', 10, 2);
        add_filter('manage_sb_perfnoteype_posts_columns', 'PerformanceNoteTypeCPT::sb_perfnoteype_table_head');
        add_action('manage_sb_perfnoteype_posts_custom_column', 'PerformanceNoteTypeCPT::sb_perfnoteype_table_content', 10, 2);
        add_filter('manage_sb_perfnote_posts_columns', 'PerformanceNoteCPT::sb_perfnote_table_head');
        add_action('manage_sb_perfnote_posts_custom_column', 'PerformanceNoteCPT::sb_perfnote_table_content', 10, 2);
        add_filter('manage_sb_perfreview_posts_columns', 'PerformanceReviewCPT::sb_perfreview_table_head');
        add_action('manage_sb_perfreview_posts_custom_column', 'PerformanceReviewCPT::sb_perfreview_table_content', 10, 2);
        add_filter('manage_sb_ratingtype_posts_columns', 'RatingTypeCPT::sb_ratingtype_table_head');
        add_action('manage_sb_ratingtype_posts_custom_column', 'RatingTypeCPT::sb_ratingtype_table_content', 10, 2);
        add_filter('manage_sb_previtemtype_posts_columns', 'PerfReviewItemTypeCPT::sb_previtemtype_table_head');
        add_action('manage_sb_previtemtype_posts_custom_column', 'PerfReviewItemTypeCPT::sb_previtemtype_table_content', 10, 2);
        add_filter('manage_sb_perfreviewitem_posts_columns', 'PerformanceReviewItemCPT::sb_perfreviewitem_table_head');
        add_action('manage_sb_perfreviewitem_posts_custom_column', 'PerformanceReviewItemCPT::sb_perfreviewitem_table_content', 10, 2);
        add_filter('manage_sb_terminationtype_posts_columns', 'TerminationTypeCPT::sb_terminationtype_table_head');
        add_action('manage_sb_terminationtype_posts_custom_column', 'TerminationTypeCPT::sb_terminationtype_table_content', 10, 2);
        add_filter('manage_sb_termreason_posts_columns', 'TerminationReasonCPT::sb_termreason_table_head');
        add_action('manage_sb_termreason_posts_custom_column', 'TerminationReasonCPT::sb_termreason_table_content', 10, 2);
        add_filter('manage_sb_ucstatus_posts_columns', 'UnemploymentClaimStatusCPT::sb_ucstatus_table_head');
        add_action('manage_sb_ucstatus_posts_custom_column', 'UnemploymentClaimStatusCPT::sb_ucstatus_table_content', 10, 2);
        add_filter('manage_sb_uempclaim_posts_columns', 'UnemploymentClaimCPT::sb_uempclaim_table_head');
        add_action('manage_sb_uempclaim_posts_custom_column', 'UnemploymentClaimCPT::sb_uempclaim_table_content', 10, 2);
        add_filter('manage_sb_delivertype_posts_columns', 'DeliverableTypeCPT::sb_delivertype_table_head');
        add_action('manage_sb_delivertype_posts_custom_column', 'DeliverableTypeCPT::sb_delivertype_table_content', 10, 2);
        add_filter('manage_sb_deliverable_posts_columns', 'DeliverableCPT::sb_deliverable_table_head');
        add_action('manage_sb_deliverable_posts_custom_column', 'DeliverableCPT::sb_deliverable_table_content', 10, 2);
        add_filter('manage_sb_requiretype_posts_columns', 'RequirementTypeCPT::sb_requiretype_table_head');
        add_action('manage_sb_requiretype_posts_custom_column', 'RequirementTypeCPT::sb_requiretype_table_content', 10, 2);
        add_filter('manage_sb_requirement_posts_columns', 'RequirementCPT::sb_requirement_table_head');
        add_action('manage_sb_requirement_posts_custom_column', 'RequirementCPT::sb_requirement_table_content', 10, 2);
        add_filter('manage_sb_requirerole_posts_columns', 'RequirementRoleCPT::sb_requirerole_table_head');
        add_action('manage_sb_requirerole_posts_custom_column', 'RequirementRoleCPT::sb_requirerole_table_content', 10, 2);
        add_filter('manage_sb_wetypecat_posts_columns', 'WorkEffortCategoryCPT::sb_wetypecat_table_head');
        add_action('manage_sb_wetypecat_posts_custom_column', 'WorkEffortCategoryCPT::sb_wetypecat_table_content', 10, 2);
        add_filter('manage_sb_wetype_posts_columns', 'WorkEffortTypeCPT::sb_wetype_table_head');
        add_action('manage_sb_wetype_posts_custom_column', 'WorkEffortTypeCPT::sb_wetype_table_content', 10, 2);
        add_filter('manage_sb_weptype_posts_columns', 'WorkEffortPurposeTypeCPT::sb_weptype_table_head');
        add_action('manage_sb_weptype_posts_custom_column', 'WorkEffortPurposeTypeCPT::sb_weptype_table_content', 10, 2);
        add_filter('manage_sb_westatus_posts_columns', 'WorkEffortStatusCPT::sb_westatus_table_head');
        add_action('manage_sb_westatus_posts_custom_column', 'WorkEffortStatusCPT::sb_westatus_table_content', 10, 2);
        add_filter('manage_sb_workeffort_posts_columns', 'WorkEffortCPT::sb_workeffort_table_head');
        add_action('manage_sb_workeffort_posts_custom_column', 'WorkEffortCPT::sb_workeffort_table_content', 10, 2);
        add_filter('manage_sb_wrfulfillment_posts_columns', 'WorkRequirementFulfillmentCPT::sb_wrfulfillment_table_head');
        add_action('manage_sb_wrfulfillment_posts_custom_column', 'WorkRequirementFulfillmentCPT::sb_wrfulfillment_table_content', 10, 2);
        add_filter('manage_sb_weatype_posts_columns', 'WorkEffortAssociationTypeCPT::sb_weatype_table_head');
        add_action('manage_sb_weatype_posts_custom_column', 'WorkEffortAssociationTypeCPT::sb_weatype_table_content', 10, 2);
        add_filter('manage_sb_weassociation_posts_columns', 'WorkEffortAssociationCPT::sb_weassociation_table_head');
        add_action('manage_sb_weassociation_posts_custom_column', 'WorkEffortAssociationCPT::sb_weassociation_table_content', 10, 2);
        add_filter('manage_sb_wertype_posts_columns', 'WorkEffortRoleTypeCPT::sb_wertype_table_head');
        add_action('manage_sb_wertype_posts_custom_column', 'WorkEffortRoleTypeCPT::sb_wertype_table_content', 10, 2);
        add_filter('manage_sb_wepatyassign_posts_columns', 'WorkEffortPartyAssignmentCPT::sb_wepatyassign_table_head');
        add_action('manage_sb_wepatyassign_posts_custom_column', 'WorkEffortPartyAssignmentCPT::sb_wepatyassign_table_content', 10, 2);
        add_filter('manage_sb_timesheet_posts_columns', 'TimeSheetCPT::sb_timesheet_table_head');
        add_action('manage_sb_timesheet_posts_custom_column', 'TimeSheetCPT::sb_timesheet_table_content', 10, 2);
        add_filter('manage_sb_tsrtype_posts_columns', 'TimeSheetRoleTypeCPT::sb_tsrtype_table_head');
        add_action('manage_sb_tsrtype_posts_custom_column', 'TimeSheetRoleTypeCPT::sb_tsrtype_table_content', 10, 2);
        add_filter('manage_sb_tsrole_posts_columns', 'TimeSheetRoleCPT::sb_tsrole_table_head');
        add_action('manage_sb_tsrole_posts_custom_column', 'TimeSheetRoleCPT::sb_tsrole_table_content', 10, 2);
        add_filter('manage_sb_timeentry_posts_columns', 'TimeEntryCPT::sb_timeentry_table_head');
        add_action('manage_sb_timeentry_posts_custom_column', 'TimeEntryCPT::sb_timeentry_table_content', 10, 2);
        add_filter('manage_sb_partyrate_posts_columns', 'PartyRateCPT::sb_partyrate_table_head');
        add_action('manage_sb_partyrate_posts_custom_column', 'PartyRateCPT::sb_partyrate_table_content', 10, 2);
        add_filter('manage_sb_wearate_posts_columns', 'WorkEffortAssignmentRateCPT::sb_wearate_table_head');
        add_action('manage_sb_wearate_posts_custom_column', 'WorkEffortAssignmentRateCPT::sb_wearate_table_content', 10, 2);
        add_filter('manage_sb_weiassign_posts_columns', 'WorkEffortInventoryAssignmentCPT::sb_weiassign_table_head');
        add_action('manage_sb_weiassign_posts_custom_column', 'WorkEffortInventoryAssignmentCPT::sb_weiassign_table_content', 10, 2);
        add_filter('manage_sb_weaastatus_posts_columns', 'WorkEffortAssetAssignmentStatusCPT::sb_weaastatus_table_head');
        add_action('manage_sb_weaastatus_posts_custom_column', 'WorkEffortAssetAssignmentStatusCPT::sb_weaastatus_table_content', 10, 2);
        add_filter('manage_sb_weaassign_posts_columns', 'WorkEffortAssetAssignmentCPT::sb_weaassign_table_head');
        add_action('manage_sb_weaassign_posts_custom_column', 'WorkEffortAssetAssignmentCPT::sb_weaassign_table_content', 10, 2);
        add_filter('manage_sb_wepastatus_posts_columns', 'PartyFAssetAssignmentStatusCPT::sb_wepastatus_table_head');
        add_action('manage_sb_wepastatus_posts_custom_column', 'PartyFAssetAssignmentStatusCPT::sb_wepastatus_table_content', 10, 2);
        add_filter('manage_sb_paassign_posts_columns', 'PartyAssetAssignmentCPT::sb_paassign_table_head');
        add_action('manage_sb_paassign_posts_custom_column', 'PartyAssetAssignmentCPT::sb_paassign_table_content', 10, 2);
        add_filter('manage_sb_wedeliverable_posts_columns', 'WorkEffortDeliverableCPT::sb_wedeliverable_table_head');
        add_action('manage_sb_wedeliverable_posts_custom_column', 'WorkEffortDeliverableCPT::sb_wedeliverable_table_content', 10, 2);
        //add_shortcode('show_single_entity', array('CloderiaUIDisplayAPI', 'display_single_entity'));
    }

    /*public static function redirect_logout_url(){
         wp_redirect(home_url());
    }*/

    /**
     * Enqueue the necessary scripts
     */
    public static function enqueue_scripts() {

        wp_register_script('cp_init', plugins_url('/js/init.js', __FILE__), array('jquery'), true);
        wp_register_script('bootstrap_js', plugins_url('/js/bootstrap.min.js', __FILE__), array('jquery'), true);
        wp_register_script('jquery_form_js', plugins_url('/js/jquery.form.min.js', __FILE__), array('jquery'), true);
        wp_register_script('bootstrap_tabdrop_js', plugins_url('/js/bootstrap-tabdrop.js', __FILE__), array('jquery'), true);
        wp_register_script('datatables_core_js', plugins_url('/js/jquery.dataTables.min.js', __FILE__), array('jquery'), true);
        wp_register_script('datatables_bootstrap_js', plugins_url('/js/dataTables.bootstrap.js', __FILE__), array('jquery'), true);
        wp_register_script('bootstrap_validator_js', plugins_url('/js/bootstrapValidator.min.js', __FILE__), array('jquery'), true);
        wp_register_script('entity_datasource_js', plugins_url('/js/entity-datatables.js', __FILE__), array('jquery'), true);
        wp_register_script('entity_multi_datatables_js', plugins_url('/js/entity-multi-datatables.js', __FILE__), array('jquery'), true);
        wp_register_script('datetimepicker_js', plugins_url('/js/vendors/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js', __FILE__), array('jquery'), true);
        wp_register_script('wizard_js', plugins_url('/js/vendors/bootstrap-wizard/jquery.bootstrap.wizard.min.js', __FILE__), array('jquery'), true);

        wp_register_script('input_mask_js', plugins_url('/js/jquery.mask.min.js', __FILE__), array('jquery'), true);
        wp_register_script('jstree_js', plugins_url('/js/jstree.min.js', __FILE__), array('jquery'), true);
        wp_register_script('conversations_js', plugins_url('/js/conversation-messages.js', __FILE__), array('jquery'), true);

        wp_enqueue_script('jquery_form_js');
        //wp_enqueue_script('bootstrap_js');
        wp_enqueue_script('bootstrap_validator_js');
        wp_enqueue_script('bootstrap_tabdrop_js');
        wp_enqueue_script('datatables_core_js');
        wp_enqueue_script('datatables_bootstrap_js');
        wp_enqueue_script('cp_init');

        // Enqueue data tables js for view pages
        if(isset($_REQUEST['page_action'])) {
            $page_action = sanitize_text_field($_REQUEST['page_action']);
            if($page_action == 'view') {
                wp_enqueue_script('entity_datasource_js');
                wp_enqueue_script('entity_multi_datatables_js');
            }
        }

        wp_enqueue_script('jstree_js');
        wp_enqueue_script('input_mask_js');
        //wp_enqueue_script('datetimepicker_js');
        wp_enqueue_script('wizard_js');
        //wp_enqueue_script('conversations_js');
        
        //wp_localize_script('conversations_js', 'shadowcore_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
        wp_localize_script('entity_datasource_js', 'shadowcore_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
         wp_localize_script('entity_datasource_js', 'shadowcore_base_url', array('baseUrl' => EntityActionProcessor::get_base_url()));
    }

    /**
     * Get the plugin path.
     * @return string
     */
    public static function plugin_path() {
        return untrailingslashit(plugin_dir_path(__FILE__));
    }

    /**
     * Get the template path.
     * @return string
     */
    public static function template_path() {
        return 'shadow-core/';
    }
}
// End Class
/* EOF */
