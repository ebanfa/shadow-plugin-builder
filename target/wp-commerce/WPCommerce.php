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

class WPCommerce {

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
        include_once('includes/abstracts/SocialMediaAccountTypeCPT.php');
        include_once('includes/abstracts/SocialMediaAccountType.php');
        include_once('includes/abstracts/SocialMediaAccountCPT.php');
        include_once('includes/abstracts/SocialMediaAccount.php');
        include_once('includes/abstracts/BillingAccountCPT.php');
        include_once('includes/abstracts/BillingAccount.php');
        include_once('includes/abstracts/AccountTransactionTypeCPT.php');
        include_once('includes/abstracts/AccountTransactionType.php');
        include_once('includes/abstracts/AccountTransactionStatusCPT.php');
        include_once('includes/abstracts/AccountTransactionStatus.php');
        include_once('includes/abstracts/AccountTransactionCPT.php');
        include_once('includes/abstracts/AccountTransaction.php');
        include_once('includes/abstracts/ConversationCPT.php');
        include_once('includes/abstracts/Conversation.php');
        include_once('includes/abstracts/ConversationUserCPT.php');
        include_once('includes/abstracts/ConversationUser.php');
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
        include_once('includes/abstracts/ContactUsCPT.php');
        include_once('includes/abstracts/ContactUs.php');
        include_once('includes/abstracts/UomCPT.php');
        include_once('includes/abstracts/Uom.php');
        include_once('includes/abstracts/UomConversionCPT.php');
        include_once('includes/abstracts/UomConversion.php');
        include_once('includes/abstracts/ProductCategoryCPT.php');
        include_once('includes/abstracts/ProductCategory.php');
        include_once('includes/abstracts/ProductClassificationCPT.php');
        include_once('includes/abstracts/ProductClassification.php');
        include_once('includes/abstracts/ProductTypeCPT.php');
        include_once('includes/abstracts/ProductType.php');
        include_once('includes/abstracts/ProductCPT.php');
        include_once('includes/abstracts/Product.php');
        include_once('includes/abstracts/ProductClassificationLinkCPT.php');
        include_once('includes/abstracts/ProductClassificationLink.php');
        include_once('includes/abstracts/ProductCategoryImageCPT.php');
        include_once('includes/abstracts/ProductCategoryImage.php');
        include_once('includes/abstracts/ProductTypeImageCPT.php');
        include_once('includes/abstracts/ProductTypeImage.php');
        include_once('includes/abstracts/ProductImageCPT.php');
        include_once('includes/abstracts/ProductImage.php');
        include_once('includes/abstracts/ProductFeatureCategoryCPT.php');
        include_once('includes/abstracts/ProductFeatureCategory.php');
        include_once('includes/abstracts/ProductFeatureTypeCPT.php');
        include_once('includes/abstracts/ProductFeatureType.php');
        include_once('includes/abstracts/ProductFeatureCPT.php');
        include_once('includes/abstracts/ProductFeature.php');
        include_once('includes/abstracts/FeatureApplicabilityTypeCPT.php');
        include_once('includes/abstracts/FeatureApplicabilityType.php');
        include_once('includes/abstracts/ProductFeatureApplicabilityCPT.php');
        include_once('includes/abstracts/ProductFeatureApplicability.php');
        include_once('includes/abstracts/FeatureInteractionTypeCPT.php');
        include_once('includes/abstracts/FeatureInteractionType.php');
        include_once('includes/abstracts/ProductFeatureInteractionCPT.php');
        include_once('includes/abstracts/ProductFeatureInteraction.php');
        include_once('includes/abstracts/PriceComponentTypeCPT.php');
        include_once('includes/abstracts/PriceComponentType.php');
        include_once('includes/abstracts/PriceComponentCPT.php');
        include_once('includes/abstracts/PriceComponent.php');
        include_once('includes/abstracts/CostComponentTypeCPT.php');
        include_once('includes/abstracts/CostComponentType.php');
        include_once('includes/abstracts/CostComponentCPT.php');
        include_once('includes/abstracts/CostComponent.php');
        include_once('includes/abstracts/SupplierRatingCPT.php');
        include_once('includes/abstracts/SupplierRating.php');
        include_once('includes/abstracts/SupplierPreferenceCPT.php');
        include_once('includes/abstracts/SupplierPreference.php');
        include_once('includes/abstracts/ProductSupplierCPT.php');
        include_once('includes/abstracts/ProductSupplier.php');
        include_once('includes/abstracts/FacilityTypeCPT.php');
        include_once('includes/abstracts/FacilityType.php');
        include_once('includes/abstracts/FacilityCPT.php');
        include_once('includes/abstracts/Facility.php');
        include_once('includes/abstracts/ContainerTypeCPT.php');
        include_once('includes/abstracts/ContainerType.php');
        include_once('includes/abstracts/ContainerCPT.php');
        include_once('includes/abstracts/Container.php');
        include_once('includes/abstracts/LotCPT.php');
        include_once('includes/abstracts/Lot.php');
        include_once('includes/abstracts/InventoryItemTypeCPT.php');
        include_once('includes/abstracts/InventoryItemType.php');
        include_once('includes/abstracts/InventoryItemStatusCPT.php');
        include_once('includes/abstracts/InventoryItemStatus.php');
        include_once('includes/abstracts/InventoryItemCPT.php');
        include_once('includes/abstracts/InventoryItem.php');
        include_once('includes/abstracts/ProductOrderTypeCPT.php');
        include_once('includes/abstracts/ProductOrderType.php');
        include_once('includes/abstracts/ProductOrderStatusCPT.php');
        include_once('includes/abstracts/ProductOrderStatus.php');
        include_once('includes/abstracts/ProductOrderCPT.php');
        include_once('includes/abstracts/ProductOrder.php');
        include_once('includes/abstracts/ProductOrderItemTypeCPT.php');
        include_once('includes/abstracts/ProductOrderItemType.php');
        include_once('includes/abstracts/ProductOrderItemStatusCPT.php');
        include_once('includes/abstracts/ProductOrderItemStatus.php');
        include_once('includes/abstracts/ProductOrderItemCPT.php');
        include_once('includes/abstracts/ProductOrderItem.php');
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
        include_once('includes/abstracts/InvoiceItemStatusCPT.php');
        include_once('includes/abstracts/InvoiceItemStatus.php');
        include_once('includes/abstracts/InvoiceItemCPT.php');
        include_once('includes/abstracts/InvoiceItem.php');
        include_once('includes/abstracts/InvoiceTermCPT.php');
        include_once('includes/abstracts/InvoiceTerm.php');
        include_once('includes/abstracts/PaymentTypeCPT.php');
        include_once('includes/abstracts/PaymentType.php');
        include_once('includes/abstracts/PaymentMethodCPT.php');
        include_once('includes/abstracts/PaymentMethod.php');
        include_once('includes/abstracts/PaymentCPT.php');
        include_once('includes/abstracts/Payment.php');
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
        include_once('includes/abstracts/TransactionStatusCPT.php');
        include_once('includes/abstracts/TransactionStatus.php');
        include_once('includes/abstracts/TransactionCPT.php');
        include_once('includes/abstracts/Transaction.php');
        include_once('includes/abstracts/TransactionDetailCPT.php');
        include_once('includes/abstracts/TransactionDetail.php');
        include_once('includes/abstracts/FEventTxnTypeCPT.php');
        include_once('includes/abstracts/FEventTxnType.php');
        include_once('includes/abstracts/TxnTypeAccountCPT.php');
        include_once('includes/abstracts/TxnTypeAccount.php');
        include_once('includes/abstracts/BankAccountTypeCPT.php');
        include_once('includes/abstracts/BankAccountType.php');
        include_once('includes/abstracts/BankAccountCPT.php');
        include_once('includes/abstracts/BankAccount.php');
        // Entity API
        include_once('includes/api/EntityAPI.php');

        // API
        include_once('includes/api/BusinessUnitAPI.php');
        include_once('includes/api/PartyAPI.php');
        include_once('includes/api/PartyGroupAPI.php');
        include_once('includes/api/PersonAPI.php');
        include_once('includes/api/ConversationAPI.php');
        include_once('includes/api/NotificationAPI.php');
        include_once('includes/api/ContactUsAPI.php');
        include_once('includes/api/ProductCategoryAPI.php');
        include_once('includes/api/ProductTypeAPI.php');
        include_once('includes/api/ProductAPI.php');
        include_once('includes/api/ProductCategoryImageAPI.php');
        include_once('includes/api/ProductTypeImageAPI.php');
        include_once('includes/api/ProductImageAPI.php');
        include_once('includes/api/ProductOrderAPI.php');
        include_once('includes/api/InvoiceAPI.php');
        
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
        include_once('includes/view/currency/CurrencyViewFilter.php');
        include_once('includes/view/business/BusinessViewFilter.php');
        include_once('includes/view/party/SinglePartyView.php');
        include_once('includes/view/party/PartyViewFilter.php');
        include_once('includes/view/partygroup/CreatePartyGroupView.php');
        include_once('includes/view/person/CreatePersonView.php');
        include_once('includes/view/person/PersonViewFilter.php');
        include_once('includes/view/partyprofile/SinglePartyProfileView.php');
        include_once('includes/view/partyprofile/ListPartyProfileView.php');
        include_once('includes/view/conversation/ListConversationView.php');
        include_once('includes/view/notification/SingleNotificationView.php');
        include_once('includes/view/product/SingleProductView.php');
        include_once('includes/view/invoice/CreateInvoiceView.php');
        include_once('includes/view/invoice/InvoiceViewFilter.php');

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
        add_action('wp_enqueue_scripts', 'WPCommerce::enqueue_scripts');
    }
    
    public function init_ajax_hooks() {
        // Setup Ajax
        add_action('template_redirect', 'CloderiaAdminAPI::do_ajax_setup');

        EntityActionProcessor::init_hooks();
        ConversationAPI::init_hooks();
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
        /*add_action('wp_logout', 'WPCommerce::redirect_logout_url');*/
        FormFieldFilter::init_hooks();

        CurrencyViewFilter::init_hooks();
        BusinessViewFilter::init_hooks();
        PartyViewFilter::init_hooks();
        PersonViewFilter::init_hooks();
        InvoiceViewFilter::init_hooks();

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
        add_filter('manage_sb_socmediaccttype_posts_columns', 'SocialMediaAccountTypeCPT::sb_socmediaccttype_table_head');
        add_action('manage_sb_socmediaccttype_posts_custom_column', 'SocialMediaAccountTypeCPT::sb_socmediaccttype_table_content', 10, 2);
        add_filter('manage_sb_socmediaacct_posts_columns', 'SocialMediaAccountCPT::sb_socmediaacct_table_head');
        add_action('manage_sb_socmediaacct_posts_custom_column', 'SocialMediaAccountCPT::sb_socmediaacct_table_content', 10, 2);
        add_filter('manage_sb_billaccount_posts_columns', 'BillingAccountCPT::sb_billaccount_table_head');
        add_action('manage_sb_billaccount_posts_custom_column', 'BillingAccountCPT::sb_billaccount_table_content', 10, 2);
        add_filter('manage_sb_accttxntype_posts_columns', 'AccountTransactionTypeCPT::sb_accttxntype_table_head');
        add_action('manage_sb_accttxntype_posts_custom_column', 'AccountTransactionTypeCPT::sb_accttxntype_table_content', 10, 2);
        add_filter('manage_sb_accttxnstatus_posts_columns', 'AccountTransactionStatusCPT::sb_accttxnstatus_table_head');
        add_action('manage_sb_accttxnstatus_posts_custom_column', 'AccountTransactionStatusCPT::sb_accttxnstatus_table_content', 10, 2);
        add_filter('manage_sb_accttransaction_posts_columns', 'AccountTransactionCPT::sb_accttransaction_table_head');
        add_action('manage_sb_accttransaction_posts_custom_column', 'AccountTransactionCPT::sb_accttransaction_table_content', 10, 2);
        add_filter('manage_sb_conversation_posts_columns', 'ConversationCPT::sb_conversation_table_head');
        add_action('manage_sb_conversation_posts_custom_column', 'ConversationCPT::sb_conversation_table_content', 10, 2);
        add_filter('manage_sb_conuser_posts_columns', 'ConversationUserCPT::sb_conuser_table_head');
        add_action('manage_sb_conuser_posts_custom_column', 'ConversationUserCPT::sb_conuser_table_content', 10, 2);
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
        add_filter('manage_sb_contactus_posts_columns', 'ContactUsCPT::sb_contactus_table_head');
        add_action('manage_sb_contactus_posts_custom_column', 'ContactUsCPT::sb_contactus_table_content', 10, 2);
        add_filter('manage_sb_uom_posts_columns', 'UomCPT::sb_uom_table_head');
        add_action('manage_sb_uom_posts_custom_column', 'UomCPT::sb_uom_table_content', 10, 2);
        add_filter('manage_sb_uomconversion_posts_columns', 'UomConversionCPT::sb_uomconversion_table_head');
        add_action('manage_sb_uomconversion_posts_custom_column', 'UomConversionCPT::sb_uomconversion_table_content', 10, 2);
        add_filter('manage_sb_prodcat_posts_columns', 'ProductCategoryCPT::sb_prodcat_table_head');
        add_action('manage_sb_prodcat_posts_custom_column', 'ProductCategoryCPT::sb_prodcat_table_content', 10, 2);
        add_filter('manage_sb_prodclass_posts_columns', 'ProductClassificationCPT::sb_prodclass_table_head');
        add_action('manage_sb_prodclass_posts_custom_column', 'ProductClassificationCPT::sb_prodclass_table_content', 10, 2);
        add_filter('manage_sb_prodtype_posts_columns', 'ProductTypeCPT::sb_prodtype_table_head');
        add_action('manage_sb_prodtype_posts_custom_column', 'ProductTypeCPT::sb_prodtype_table_content', 10, 2);
        add_filter('manage_sb_product_posts_columns', 'ProductCPT::sb_product_table_head');
        add_action('manage_sb_product_posts_custom_column', 'ProductCPT::sb_product_table_content', 10, 2);
        add_filter('manage_sb_prodclasslink_posts_columns', 'ProductClassificationLinkCPT::sb_prodclasslink_table_head');
        add_action('manage_sb_prodclasslink_posts_custom_column', 'ProductClassificationLinkCPT::sb_prodclasslink_table_content', 10, 2);
        add_filter('manage_sb_prodcatimage_posts_columns', 'ProductCategoryImageCPT::sb_prodcatimage_table_head');
        add_action('manage_sb_prodcatimage_posts_custom_column', 'ProductCategoryImageCPT::sb_prodcatimage_table_content', 10, 2);
        add_filter('manage_sb_prodtyimage_posts_columns', 'ProductTypeImageCPT::sb_prodtyimage_table_head');
        add_action('manage_sb_prodtyimage_posts_custom_column', 'ProductTypeImageCPT::sb_prodtyimage_table_content', 10, 2);
        add_filter('manage_sb_prodimage_posts_columns', 'ProductImageCPT::sb_prodimage_table_head');
        add_action('manage_sb_prodimage_posts_custom_column', 'ProductImageCPT::sb_prodimage_table_content', 10, 2);
        add_filter('manage_sb_prodfeatcat_posts_columns', 'ProductFeatureCategoryCPT::sb_prodfeatcat_table_head');
        add_action('manage_sb_prodfeatcat_posts_custom_column', 'ProductFeatureCategoryCPT::sb_prodfeatcat_table_content', 10, 2);
        add_filter('manage_sb_prodfeattype_posts_columns', 'ProductFeatureTypeCPT::sb_prodfeattype_table_head');
        add_action('manage_sb_prodfeattype_posts_custom_column', 'ProductFeatureTypeCPT::sb_prodfeattype_table_content', 10, 2);
        add_filter('manage_sb_prodfeature_posts_columns', 'ProductFeatureCPT::sb_prodfeature_table_head');
        add_action('manage_sb_prodfeature_posts_custom_column', 'ProductFeatureCPT::sb_prodfeature_table_content', 10, 2);
        add_filter('manage_sb_featappltype_posts_columns', 'FeatureApplicabilityTypeCPT::sb_featappltype_table_head');
        add_action('manage_sb_featappltype_posts_custom_column', 'FeatureApplicabilityTypeCPT::sb_featappltype_table_content', 10, 2);
        add_filter('manage_sb_featappl_posts_columns', 'ProductFeatureApplicabilityCPT::sb_featappl_table_head');
        add_action('manage_sb_featappl_posts_custom_column', 'ProductFeatureApplicabilityCPT::sb_featappl_table_content', 10, 2);
        add_filter('manage_sb_featinttype_posts_columns', 'FeatureInteractionTypeCPT::sb_featinttype_table_head');
        add_action('manage_sb_featinttype_posts_custom_column', 'FeatureInteractionTypeCPT::sb_featinttype_table_content', 10, 2);
        add_filter('manage_sb_featinteraction_posts_columns', 'ProductFeatureInteractionCPT::sb_featinteraction_table_head');
        add_action('manage_sb_featinteraction_posts_custom_column', 'ProductFeatureInteractionCPT::sb_featinteraction_table_content', 10, 2);
        add_filter('manage_sb_pricecomptype_posts_columns', 'PriceComponentTypeCPT::sb_pricecomptype_table_head');
        add_action('manage_sb_pricecomptype_posts_custom_column', 'PriceComponentTypeCPT::sb_pricecomptype_table_content', 10, 2);
        add_filter('manage_sb_pricecomp_posts_columns', 'PriceComponentCPT::sb_pricecomp_table_head');
        add_action('manage_sb_pricecomp_posts_custom_column', 'PriceComponentCPT::sb_pricecomp_table_content', 10, 2);
        add_filter('manage_sb_costcomptype_posts_columns', 'CostComponentTypeCPT::sb_costcomptype_table_head');
        add_action('manage_sb_costcomptype_posts_custom_column', 'CostComponentTypeCPT::sb_costcomptype_table_content', 10, 2);
        add_filter('manage_sb_costcomp_posts_columns', 'CostComponentCPT::sb_costcomp_table_head');
        add_action('manage_sb_costcomp_posts_custom_column', 'CostComponentCPT::sb_costcomp_table_content', 10, 2);
        add_filter('manage_sb_supprating_posts_columns', 'SupplierRatingCPT::sb_supprating_table_head');
        add_action('manage_sb_supprating_posts_custom_column', 'SupplierRatingCPT::sb_supprating_table_content', 10, 2);
        add_filter('manage_sb_supppref_posts_columns', 'SupplierPreferenceCPT::sb_supppref_table_head');
        add_action('manage_sb_supppref_posts_custom_column', 'SupplierPreferenceCPT::sb_supppref_table_content', 10, 2);
        add_filter('manage_sb_prodsupplier_posts_columns', 'ProductSupplierCPT::sb_prodsupplier_table_head');
        add_action('manage_sb_prodsupplier_posts_custom_column', 'ProductSupplierCPT::sb_prodsupplier_table_content', 10, 2);
        add_filter('manage_sb_facilitytype_posts_columns', 'FacilityTypeCPT::sb_facilitytype_table_head');
        add_action('manage_sb_facilitytype_posts_custom_column', 'FacilityTypeCPT::sb_facilitytype_table_content', 10, 2);
        add_filter('manage_sb_facility_posts_columns', 'FacilityCPT::sb_facility_table_head');
        add_action('manage_sb_facility_posts_custom_column', 'FacilityCPT::sb_facility_table_content', 10, 2);
        add_filter('manage_sb_containertype_posts_columns', 'ContainerTypeCPT::sb_containertype_table_head');
        add_action('manage_sb_containertype_posts_custom_column', 'ContainerTypeCPT::sb_containertype_table_content', 10, 2);
        add_filter('manage_sb_container_posts_columns', 'ContainerCPT::sb_container_table_head');
        add_action('manage_sb_container_posts_custom_column', 'ContainerCPT::sb_container_table_content', 10, 2);
        add_filter('manage_sb_lot_posts_columns', 'LotCPT::sb_lot_table_head');
        add_action('manage_sb_lot_posts_custom_column', 'LotCPT::sb_lot_table_content', 10, 2);
        add_filter('manage_sb_invitemtype_posts_columns', 'InventoryItemTypeCPT::sb_invitemtype_table_head');
        add_action('manage_sb_invitemtype_posts_custom_column', 'InventoryItemTypeCPT::sb_invitemtype_table_content', 10, 2);
        add_filter('manage_sb_invitemstat_posts_columns', 'InventoryItemStatusCPT::sb_invitemstat_table_head');
        add_action('manage_sb_invitemstat_posts_custom_column', 'InventoryItemStatusCPT::sb_invitemstat_table_content', 10, 2);
        add_filter('manage_sb_inventoryitem_posts_columns', 'InventoryItemCPT::sb_inventoryitem_table_head');
        add_action('manage_sb_inventoryitem_posts_custom_column', 'InventoryItemCPT::sb_inventoryitem_table_content', 10, 2);
        add_filter('manage_sb_prodordertype_posts_columns', 'ProductOrderTypeCPT::sb_prodordertype_table_head');
        add_action('manage_sb_prodordertype_posts_custom_column', 'ProductOrderTypeCPT::sb_prodordertype_table_content', 10, 2);
        add_filter('manage_sb_prodorderstatus_posts_columns', 'ProductOrderStatusCPT::sb_prodorderstatus_table_head');
        add_action('manage_sb_prodorderstatus_posts_custom_column', 'ProductOrderStatusCPT::sb_prodorderstatus_table_content', 10, 2);
        add_filter('manage_sb_prodorder_posts_columns', 'ProductOrderCPT::sb_prodorder_table_head');
        add_action('manage_sb_prodorder_posts_custom_column', 'ProductOrderCPT::sb_prodorder_table_content', 10, 2);
        add_filter('manage_sb_prodorderitype_posts_columns', 'ProductOrderItemTypeCPT::sb_prodorderitype_table_head');
        add_action('manage_sb_prodorderitype_posts_custom_column', 'ProductOrderItemTypeCPT::sb_prodorderitype_table_content', 10, 2);
        add_filter('manage_sb_prodorderistatus_posts_columns', 'ProductOrderItemStatusCPT::sb_prodorderistatus_table_head');
        add_action('manage_sb_prodorderistatus_posts_custom_column', 'ProductOrderItemStatusCPT::sb_prodorderistatus_table_content', 10, 2);
        add_filter('manage_sb_prodorderitem_posts_columns', 'ProductOrderItemCPT::sb_prodorderitem_table_head');
        add_action('manage_sb_prodorderitem_posts_custom_column', 'ProductOrderItemCPT::sb_prodorderitem_table_content', 10, 2);
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
        add_filter('manage_sb_invoiceitemstatus_posts_columns', 'InvoiceItemStatusCPT::sb_invoiceitemstatus_table_head');
        add_action('manage_sb_invoiceitemstatus_posts_custom_column', 'InvoiceItemStatusCPT::sb_invoiceitemstatus_table_content', 10, 2);
        add_filter('manage_sb_invoiceitem_posts_columns', 'InvoiceItemCPT::sb_invoiceitem_table_head');
        add_action('manage_sb_invoiceitem_posts_custom_column', 'InvoiceItemCPT::sb_invoiceitem_table_content', 10, 2);
        add_filter('manage_sb_invoiceterm_posts_columns', 'InvoiceTermCPT::sb_invoiceterm_table_head');
        add_action('manage_sb_invoiceterm_posts_custom_column', 'InvoiceTermCPT::sb_invoiceterm_table_content', 10, 2);
        add_filter('manage_sb_paymenttype_posts_columns', 'PaymentTypeCPT::sb_paymenttype_table_head');
        add_action('manage_sb_paymenttype_posts_custom_column', 'PaymentTypeCPT::sb_paymenttype_table_content', 10, 2);
        add_filter('manage_sb_paymethod_posts_columns', 'PaymentMethodCPT::sb_paymethod_table_head');
        add_action('manage_sb_paymethod_posts_custom_column', 'PaymentMethodCPT::sb_paymethod_table_content', 10, 2);
        add_filter('manage_sb_payment_posts_columns', 'PaymentCPT::sb_payment_table_head');
        add_action('manage_sb_payment_posts_custom_column', 'PaymentCPT::sb_payment_table_content', 10, 2);
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
        add_filter('manage_sb_txnstatus_posts_columns', 'TransactionStatusCPT::sb_txnstatus_table_head');
        add_action('manage_sb_txnstatus_posts_custom_column', 'TransactionStatusCPT::sb_txnstatus_table_content', 10, 2);
        add_filter('manage_sb_transaction_posts_columns', 'TransactionCPT::sb_transaction_table_head');
        add_action('manage_sb_transaction_posts_custom_column', 'TransactionCPT::sb_transaction_table_content', 10, 2);
        add_filter('manage_sb_txndetail_posts_columns', 'TransactionDetailCPT::sb_txndetail_table_head');
        add_action('manage_sb_txndetail_posts_custom_column', 'TransactionDetailCPT::sb_txndetail_table_content', 10, 2);
        add_filter('manage_sb_feventtxntype_posts_columns', 'FEventTxnTypeCPT::sb_feventtxntype_table_head');
        add_action('manage_sb_feventtxntype_posts_custom_column', 'FEventTxnTypeCPT::sb_feventtxntype_table_content', 10, 2);
        add_filter('manage_sb_txntypeacct_posts_columns', 'TxnTypeAccountCPT::sb_txntypeacct_table_head');
        add_action('manage_sb_txntypeacct_posts_custom_column', 'TxnTypeAccountCPT::sb_txntypeacct_table_content', 10, 2);
        add_filter('manage_sb_bankaccttype_posts_columns', 'BankAccountTypeCPT::sb_bankaccttype_table_head');
        add_action('manage_sb_bankaccttype_posts_custom_column', 'BankAccountTypeCPT::sb_bankaccttype_table_content', 10, 2);
        add_filter('manage_sb_bankaccount_posts_columns', 'BankAccountCPT::sb_bankaccount_table_head');
        add_action('manage_sb_bankaccount_posts_custom_column', 'BankAccountCPT::sb_bankaccount_table_content', 10, 2);
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
        wp_register_script('conversate_js', plugins_url('/js/conversate.js', __FILE__), array('jquery'), true);

        wp_enqueue_script('jquery_form_js');
        wp_enqueue_script('bootstrap_validator_js');
        wp_enqueue_script('bootstrap_tabdrop_js');
        wp_enqueue_script('datatables_core_js');
        wp_enqueue_script('datatables_bootstrap_js');
        wp_enqueue_script('cp_init');
        wp_enqueue_script('conversate_js');

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
        
        //wp_localize_script('conversations_js', 'wpcommerce_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
        wp_localize_script('entity_datasource_js', 'wpcommerce_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
         wp_localize_script('entity_datasource_js', 'wpcommerce_base_url', array('baseUrl' => EntityActionProcessor::get_base_url()));
        wp_localize_script('conversate_js', 'wpcommerce_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
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
        return 'wp-commerce/';
    }
}
// End Class
/* EOF */
