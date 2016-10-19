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

class ${application.name} {

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
<#list module.entities as entity>
        include_once('includes/abstracts/${entity.name}CPT.php');
        include_once('includes/abstracts/${entity.name}.php');
</#list>
        // Entity API
        include_once('includes/api/EntityAPI.php');

        // API
<#list module.entities as entity>
        <#if entity.apiTemplate ??>
        include_once('includes/api/${entity.name}API.php');
        </#if>
</#list>
<#list module.apis as api>
        include_once('includes/api/${api.name}.php');
</#list>
<#list module.pages as page>
    <#if page.ajaxRequestProcessorTemplate ??>
        include_once('includes/controller/${page.name}AjaxRequestProcessor.php');
    </#if>
</#list>
<#list module.entities as entity>
        <#if entity.ajaxRequestProcessorTemplate ??>
        include_once('includes/controller/${entity.name}AjaxRequestProcessor.php');
        </#if>
</#list>
        
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
<#list module.pages as page>
    <#if page.viewTemplate ??>
        include_once('includes/view/${page.name}View.php');
    </#if>
    <#if page.viewFilterTemplate ??>
    include_once('includes/view/${page.name}ViewFilter.php');
    </#if>
</#list>
<#list module.entities as entity>
        <#if entity.createViewTemplate ??>
        include_once('includes/view/${entity.name?lower_case}/Create${entity.name}View.php');
        </#if>
        <#if entity.singleViewTemplate ??>
        include_once('includes/view/${entity.name?lower_case}/Single${entity.name}View.php');
        </#if>
        <#if entity.listViewTemplate ??>
        include_once('includes/view/${entity.name?lower_case}/List${entity.name}View.php');
        </#if>
        <#if entity.viewFilterTemplate ??>
        include_once('includes/view/${entity.name?lower_case}/${entity.name}ViewFilter.php');
        </#if>
</#list>

        include_once('includes/view/entity-form-fields.php');

    }
    
    /**
     * Init JavaScript scripts
     */
    public function init_scripts() {
        //Hooks our custom function into WP's wp_enqueue_scripts function
        add_action('wp_enqueue_scripts', '${application.name}::enqueue_scripts');
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

<#list module.pages as page>
    <#if page.viewFilterTemplate ??>
        ${page.name}ViewFilter::init_hooks();
    </#if>
</#list>
<#list module.entities as entity>
    <#if entity.viewFilterTemplate ??>
        ${entity.name}ViewFilter::init_hooks();
    </#if>
</#list>
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
        
        wp_localize_script('entity_datasource_js', '${application.name?lower_case}_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
         wp_localize_script('entity_datasource_js', '${application.name?lower_case}_base_url', array('baseUrl' => ArtficatAjaxRequestProcessorUtils::get_base_url()));
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
        return '${pluginName}/';
    }
}
// End Class
/* EOF */
