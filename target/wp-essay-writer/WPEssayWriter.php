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

class WPEssayWriter {

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
     * Main Instance
     *
     * Ensures only one instance is loaded or can be loaded.
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
     * Constructor.
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
        // Framework API
        include_once('includes/api/AdminAPI.php');
        include_once('includes/api/MailAPI.php');
        include_once('includes/api/SecurityAPI.php');
        include_once('includes/api/UIDisplayAPI.php');
        include_once('includes/controller/ArtifactRequestProcessor.php');
        include_once('includes/controller/ArtifactAjaxRequestProcessor.php');
        // Party API
        include_once('includes/api/PartyAPI.php');
        include_once('includes/api/PartyEditAPI.php');
        include_once('includes/api/PartyCreateAPI.php');
        include_once('includes/api/PersonAPI.php');
        include_once('includes/api/PartyGroupAPI.php');
        include_once('includes/api/ContentUserAPI.php');
        include_once('includes/api/UserPartyAPI.php');
        include_once('includes/api/UserLoginAPI.php');
        // File management API
        include_once('includes/api/FileAPI.php');
        include_once('includes/api/FileUploadValidatorAPI.php');
        // Utility Classes
        include_once('includes/utils/LogUtils.php');
        include_once('includes/utils/UserUtils.php');
        include_once('includes/utils/MenuUtils.php');
        include_once('includes/utils/DateUtils.php');
        include_once('includes/utils/ArtifactUtils.php');
        include_once('includes/utils/EntityAPIUtils.php');
        include_once('includes/utils/EntityStringUtils.php');
        include_once('includes/utils/EntityRequestUtils.php');
        include_once('includes/utils/CustomFieldsUtils.php');
        include_once('includes/utils/CustomPostTypesUtils.php');
        include_once('includes/utils/TemplateFunctions.php');
        include_once('includes/utils/ArtifactAjaxRequestProcessorUtils.php');
        // Model
        include_once('includes/abstracts/CurrencyCPT.php');
        include_once('includes/abstracts/Currency.php');
        include_once('includes/abstracts/CountryCPT.php');
        include_once('includes/abstracts/Country.php');
        include_once('includes/abstracts/BusinessCPT.php');
        include_once('includes/abstracts/Business.php');
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
        include_once('includes/abstracts/PartyGroupCPT.php');
        include_once('includes/abstracts/PartyGroup.php');
        include_once('includes/abstracts/PersonCPT.php');
        include_once('includes/abstracts/Person.php');
        include_once('includes/abstracts/PartyProfileCPT.php');
        include_once('includes/abstracts/PartyProfile.php');
        include_once('includes/abstracts/BillingAccountCPT.php');
        include_once('includes/abstracts/BillingAccount.php');
        include_once('includes/abstracts/PartyImageCPT.php');
        include_once('includes/abstracts/PartyImage.php');
        include_once('includes/abstracts/PartyFileCPT.php');
        include_once('includes/abstracts/PartyFile.php');
        include_once('includes/abstracts/SocialMediaAccountTypeCPT.php');
        include_once('includes/abstracts/SocialMediaAccountType.php');
        include_once('includes/abstracts/SocialMediaAccountCPT.php');
        include_once('includes/abstracts/SocialMediaAccount.php');
        include_once('includes/abstracts/ContactRequestCPT.php');
        include_once('includes/abstracts/ContactRequest.php');
        include_once('includes/abstracts/QualificationTypeCPT.php');
        include_once('includes/abstracts/QualificationType.php');
        include_once('includes/abstracts/PartyQualificationCPT.php');
        include_once('includes/abstracts/PartyQualification.php');
        include_once('includes/abstracts/AcademicLevelCPT.php');
        include_once('includes/abstracts/AcademicLevel.php');
        include_once('includes/abstracts/DocumentTypeCPT.php');
        include_once('includes/abstracts/DocumentType.php');
        include_once('includes/abstracts/NoOfPagesCPT.php');
        include_once('includes/abstracts/NoOfPages.php');
        include_once('includes/abstracts/UrgencyCPT.php');
        include_once('includes/abstracts/Urgency.php');
        include_once('includes/abstracts/SubjectAreaCPT.php');
        include_once('includes/abstracts/SubjectArea.php');
        include_once('includes/abstracts/SubjectCPT.php');
        include_once('includes/abstracts/Subject.php');
        include_once('includes/abstracts/PartySubjectAreaCPT.php');
        include_once('includes/abstracts/PartySubjectArea.php');
        include_once('includes/abstracts/WritingStyleCPT.php');
        include_once('includes/abstracts/WritingStyle.php');
        include_once('includes/abstracts/PartyReviewCPT.php');
        include_once('includes/abstracts/PartyReview.php');
        include_once('includes/abstracts/ClassificationTypeCPT.php');
        include_once('includes/abstracts/ClassificationType.php');
        include_once('includes/abstracts/ClassificationCPT.php');
        include_once('includes/abstracts/Classification.php');
        include_once('includes/abstracts/ContentCategoryCPT.php');
        include_once('includes/abstracts/ContentCategory.php');
        include_once('includes/abstracts/ContentTypeCPT.php');
        include_once('includes/abstracts/ContentType.php');
        include_once('includes/abstracts/ContentCPT.php');
        include_once('includes/abstracts/Content.php');
        include_once('includes/abstracts/ContentFileCPT.php');
        include_once('includes/abstracts/ContentFile.php');
        include_once('includes/abstracts/ContentClassificationCPT.php');
        include_once('includes/abstracts/ContentClassification.php');
        include_once('includes/abstracts/ContentOrderTypeCPT.php');
        include_once('includes/abstracts/ContentOrderType.php');
        include_once('includes/abstracts/ContentOrderStatusCPT.php');
        include_once('includes/abstracts/ContentOrderStatus.php');
        include_once('includes/abstracts/PaymentStatusCPT.php');
        include_once('includes/abstracts/PaymentStatus.php');
        include_once('includes/abstracts/ContentOrderCPT.php');
        include_once('includes/abstracts/ContentOrder.php');
        include_once('includes/abstracts/ContentOrderFileCPT.php');
        include_once('includes/abstracts/ContentOrderFile.php');
        include_once('includes/abstracts/AccountTransactionTypeCPT.php');
        include_once('includes/abstracts/AccountTransactionType.php');
        include_once('includes/abstracts/AccountTransactionStatusCPT.php');
        include_once('includes/abstracts/AccountTransactionStatus.php');
        include_once('includes/abstracts/AccountTransactionCPT.php');
        include_once('includes/abstracts/AccountTransaction.php');
        include_once('includes/abstracts/DisputeTypeCPT.php');
        include_once('includes/abstracts/DisputeType.php');
        include_once('includes/abstracts/DisputeStatusCPT.php');
        include_once('includes/abstracts/DisputeStatus.php');
        include_once('includes/abstracts/DisputeCPT.php');
        include_once('includes/abstracts/Dispute.php');
        // Entity API
        include_once('includes/api/EntityAPI.php');

        // API
        include_once('includes/api/BusinessAPI.php');
        include_once('includes/api/PartyRoleAPI.php');
        include_once('includes/api/PartyProfileAPI.php');
        include_once('includes/api/BillingAccountAPI.php');
        include_once('includes/api/PartyImageAPI.php');
        include_once('includes/api/ContentOrderAPI.php');
        include_once('includes/api/ContentOrderFileAPI.php');
        include_once('includes/api/AccountTransactionAPI.php');
        include_once('includes/api/DisputeAPI.php');
        include_once('includes/api/BusinessSummaryAPI.php');
        include_once('includes/api/MenuAPI.php');
        include_once('includes/api/BasicStatsAPI.php');
        include_once('includes/api/StudentAPI.php');
        include_once('includes/api/TutorAPI.php');
        include_once('includes/api/RatingAPI.php');
        include_once('includes/api/ContentOrderUserAPI.php');
        include_once('includes/api/ContentOrderPaymentAPI.php');
        include_once('includes/api/IPNListenerAPI.php');
        include_once('includes/controller/SigninAjaxRequestProcessor.php');
        include_once('includes/controller/SignupAjaxRequestProcessor.php');
        include_once('includes/controller/PasswordAjaxRequestProcessor.php');
        include_once('includes/controller/StudentEditorAjaxRequestProcessor.php');
        include_once('includes/controller/StudentDisplayAjaxRequestProcessor.php');
        include_once('includes/controller/TutorEditorAjaxRequestProcessor.php');
        include_once('includes/controller/TutorDisplayAjaxRequestProcessor.php');
        include_once('includes/controller/PersonAjaxRequestProcessor.php');
        include_once('includes/controller/ContentOrderAjaxRequestProcessor.php');
        
        include_once('includes/api/EntityPersistenceAPI.php');

        // Entity View and view controllers
        include_once('includes/view/ViewUtils.php');
        include_once('includes/view/ArtifactView.php');
        include_once('includes/view/BaseEntityView.php');
        include_once('includes/view/DashboardView.php');
        include_once('includes/view/QuestionView.php');
        include_once('includes/view/ViewFilter.php');

        include_once('includes/view/ArtifactListView.php');
        include_once('includes/view/ArtifactEditorView.php');
        include_once('includes/view/ArtifactDisplayView.php');

        include_once('includes/view/CreateEntityView.php');
        include_once('includes/view/EditEntityView.php');
        include_once('includes/view/SingleEntityView.php');
        include_once('includes/view/ListEntityView.php');
        include_once('includes/view/FormFieldFilter.php');
        include_once('includes/view/MultiEntityCreateView.php');
        include_once('includes/view/CategorizedViewFilter.php');
        include_once('includes/view/ParamCategorizedViewFilter.php');
        include_once('includes/view/SigninView.php');
        include_once('includes/view/SignupView.php');
        include_once('includes/view/PasswordView.php');
        include_once('includes/view/DashboardView.php');
        include_once('includes/view/QuestionView.php');
        include_once('includes/view/AccountSummaryView.php');
        include_once('includes/view/BusinessSummaryView.php');
        include_once('includes/view/ProfileView.php');
        include_once('includes/view/StudentListView.php');
    include_once('includes/view/StudentListViewFilter.php');
        include_once('includes/view/StudentEditorView.php');
        include_once('includes/view/StudentDisplayView.php');
        include_once('includes/view/TutorListView.php');
    include_once('includes/view/TutorListViewFilter.php');
        include_once('includes/view/TutorEditorView.php');
        include_once('includes/view/TutorDisplayView.php');
        include_once('includes/view/currency/CurrencyViewFilter.php');
        include_once('includes/view/business/BusinessViewFilter.php');
        include_once('includes/view/party/SinglePartyView.php');
        include_once('includes/view/party/PartyViewFilter.php');
        include_once('includes/view/partygroup/CreatePartyGroupView.php');
        include_once('includes/view/person/CreatePersonView.php');
        include_once('includes/view/person/PersonViewFilter.php');
        include_once('includes/view/subjectarea/ListSubjectAreaView.php');
        include_once('includes/view/content/ListContentView.php');
        include_once('includes/view/contentorder/SingleContentOrderView.php');

        include_once('includes/view/entity-form-fields.php');

    }
    
    /**
     * Init JavaScript scripts
     */
    public function init_scripts() {
        //Hooks our custom function into WP's wp_enqueue_scripts function
        add_action('wp_enqueue_scripts', 'WPEssayWriter::enqueue_scripts');
    }
    
    public function init_ajax_hooks() {
        ArtifactAjaxRequestProcessor::init_hooks();
        // Setup Ajax
        add_action('template_redirect', 'AdminAPI::do_ajax_setup');
    }


    public function init_backend_hooks() {
        add_action('paypal-web_accept', 'IPNListenerAPI::do_web_accept', 1);
        add_action('cloderia_create_individual', 'UserAPI::create_person', 10, 1);
    }

    /**
     * Add template processing related hooks.
     */
    public function init_template_hooks() {
        // UI display actions
        add_action('shadowbanker_before_main_content', 'UIDisplayAPI::before_main_content', 10);
        add_action('shadowbanker_after_main_content', 'UIDisplayAPI::after_main_content', 10);
        // Menu UI display actions
        add_action('shadowbanker_show_app_menu', 'UIDisplayAPI::display_app_menu', 10);
        add_action('shadowbanker_before_app_menu', 'UIDisplayAPI::before_app_menu', 10);
        add_action('shadowbanker_after_app_menu', 'UIDisplayAPI::after_app_menu', 10);
        // Chat bar display icons
        add_action('shadowbanker_show_chat_bar', 'UIDisplayAPI::display_chat_bar', 10);

        add_action('shadowbanker_render_create_entity_view', 'UIDisplayAPI::render_create_form', 10);
        add_action('shadowbanker_render_edit_entity_view', 'UIDisplayAPI::render_edit_form', 10);
        add_action('shadowbanker_render_view_entity_view', 'UIDisplayAPI::render_single', 10);
        add_action('shadowbanker_render_list_entity_view', 'UIDisplayAPI::render_list', 10);
        add_action('shadowbanker_render_entity_form_fields', 'UIDisplayAPI::render_entity_form_fields', 10);
        add_action('shadowbanker_render_related_entity_field_modals', 'UIDisplayAPI::render_related_entity_field_modals', 10);
        add_action('shadowbanker_render_multi_entity_create_view', 'UIDisplayAPI::render_multi_entity_create_view', 10);

        add_action('shadowbanker_before_entity_form_field', 'UIDisplayAPI::before_entity_form_field', 10);
        add_action('shadowbanker_after_entity_form_field', 'UIDisplayAPI::after_entity_form_field', 10);
        
        add_action('shadowbanker_display_notifications_items', 'UIDisplayAPI::show_notification_items', 10);
        add_action('shadowbanker_render_dashboard_view', 'UIDisplayAPI::render_dashboard_view', 10);
        //add_action('showdow_banker_display_user_conversations', 'UIDisplayAPI::show_user_conversations', 10); 
        //add_action('showdow_banker_display_latest_user_conversation', 'UIDisplayAPI::show_latest_user_conversation', 10);

        // Page display functions
        add_action('shadowbanker_process_page_request', 'ArtifactRequestProcessor::process_artifact_request', 10);

        // Entity page display actions
        add_action('shadowbanker_before_artifact_content', 'UIDisplayAPI::before_artifact_content', 10);
        add_action('shadowbanker_the_artifact_content', 'UIDisplayAPI::the_artifact_content', 10, 1);
        add_action('shadowbanker_after_artifact_content', 'UIDisplayAPI::after_artifact_content', 10);
        
        FormFieldFilter::init_hooks();

        StudentListViewFilter::init_hooks();
        TutorListViewFilter::init_hooks();
        CurrencyViewFilter::init_hooks();
        BusinessViewFilter::init_hooks();
        PartyViewFilter::init_hooks();
        PersonViewFilter::init_hooks();
    }

    public function init_admin_template_hooks(){
    }

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

        wp_enqueue_script('jquery_form_js');
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
        wp_enqueue_script('input_mask_js');
        wp_enqueue_script('wizard_js');
        
        wp_localize_script('entity_datasource_js', 'wpessaywriter_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
         wp_localize_script('entity_datasource_js', 'wpessaywriter_base_url', array('baseUrl' => ArtficatAjaxRequestProcessorUtils::get_base_url()));
    }

    /**
     * Get the plugin path.
     * @return string
     */
    public static function plugin_path() {
        return untrailingslashit(plugin_dir_path(__FILE__));
    }

    /**
     * Get the plugin path.
     * @return string
     */
    public static function plugin_url() {
        return untrailingslashit(plugins_url( '' , __FILE__ ));
    }

    /**
     * Get the template path.
     * @return string
     */
    public static function template_path() {
        return 'wp-essay-writer/';
    }
}
// End Class
/* EOF */
