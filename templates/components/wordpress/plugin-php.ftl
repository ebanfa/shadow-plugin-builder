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
    public function includes() {
        // Model
<#list module.entities as entity>
        include_once('includes/abstracts/${entity.name}CPT.php');
</#list>
        // Entity API
        include_once('includes/api/EntityAPI.php');
        include_once('includes/api/PartyAPI.php');
        include_once('includes/api/NotificationAPI.php');
        include_once('includes/api/TenantAgreementAPI.php');
        include_once('includes/api/BusinessUnitAPI.php');
        include_once('includes/api/EntityPersistenceAPI.php');
        // Entity Controller
        include_once('includes/controller/EntityActionProcessor.php');
        // Entity View and view controllers
        include_once('includes/view/ViewUtils.php');
        include_once('includes/view/ArtifactView.php');
        include_once('includes/view/BaseEntityView.php');
        include_once('includes/view/DashboardView.php');
        include_once('includes/view/ViewController.php');
        include_once('includes/view/PartyView.php');
        include_once('includes/view/party/SinglePartyView.php');
        include_once('includes/view/CreateEntityView.php');
        include_once('includes/view/EditEntityView.php');
        include_once('includes/view/SingleEntityView.php');
        include_once('includes/view/ListEntityView.php');
        include_once('includes/view/FormFieldFilter.php');
        include_once('includes/view/MultiEntityCreateView.php');
        include_once('includes/view/TenantAgreementCreateView.php');
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
        // Utility Classes
        include_once('includes/utils/EntityStringUtils.php');
        include_once('includes/utils/EntityRequestUtils.php');
        include_once('includes/utils/EntityAPIUtils.php');
        include_once('includes/utils/ArtifactUtils.php');

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
        add_action('wp_enqueue_scripts', '${application.name}::enqueue_scripts');
    }
    
    public function init_ajax_hooks() {
        // Setup Ajax
        add_action('template_redirect', 'CloderiaAdminAPI::do_ajax_setup');

        EntityActionProcessor::init_hooks();
        //Order related Ajax functions
        #add_action('wp_ajax_do_content_order_ajax', 'CloderiaOrdersAPI::do_content_order_ajax');
        #add_action('wp_ajax_nopriv_do_content_order_ajax', 'CloderiaOrdersAPI::do_content_order_ajax');
        //User profile related Ajax functions
        #add_action('wp_ajax_find_user_orders_ajax', 'CloderiaOrdersAPI::find_user_orders_ajax');
        #add_action('wp_ajax_nopriv_find_user_orders_ajax', 'CloderiaOrdersAPI::find_user_orders_ajax');

    }


    public function init_backend_hooks() {
        //
        add_action('cloderia_create_shadow_user', 'CloderiaUserAPI::create_shadow_user', 10, 1);
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

        add_action('shadowbanker_render_create_entity_view', 'CloderiaUIDisplayAPI::render_create_form', 10);
        add_action('shadowbanker_render_edit_entity_view', 'CloderiaUIDisplayAPI::render_edit_form', 10);
        add_action('shadowbanker_render_view_entity_view', 'CloderiaUIDisplayAPI::render_single', 10);
        add_action('shadowbanker_render_list_entity_view', 'CloderiaUIDisplayAPI::render_list', 10);
        add_action('shadowbanker_render_entity_form_fields', 'CloderiaUIDisplayAPI::render_entity_form_fields', 10);
        add_action('shadowbanker_render_related_entity_field_modals', 'CloderiaUIDisplayAPI::render_related_entity_field_modals', 10);
        add_action('shadowbanker_render_multi_entity_create_view', 'CloderiaUIDisplayAPI::render_multi_entity_create_view', 10);

        add_action('shadowbanker_before_entity_form_field', 'CloderiaUIDisplayAPI::before_entity_form_field', 10);
        add_action('shadowbanker_after_entity_form_field', 'CloderiaUIDisplayAPI::after_entity_form_field', 10);
        
        //add_action('shadowbanker_display_notifications_items', 'CloderiaUIDisplayAPI::show_notification_items', 10);
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
        add_action('after_setup_theme', 'CloderiaAdminAPI::do_remove_admin_bar');
        /*add_action('wp_logout', '${application.name}::redirect_logout_url');*/
        PartyView::init_hooks();
        FormFieldFilter::init_hooks();

    }

    public function init_admin_template_hooks(){
<#list module.entities as entity>
        add_filter('manage_${entity.postName}_posts_columns', '${entity.name}CPT::${entity.postName}_table_head');
        add_action('manage_${entity.postName}_posts_custom_column', '${entity.name}CPT::${entity.postName}_table_content', 10, 2);
</#list>
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
        wp_register_script('conversations_js', plugins_url('/js/conversation-messages.js', __FILE__), array('jquery'), true);

        wp_enqueue_script('jquery_form_js');
        wp_enqueue_script('bootstrap_js');
        wp_enqueue_script('bootstrap_validator_js');
        wp_enqueue_script('bootstrap_tabdrop_js');
        wp_enqueue_script('datatables_core_js');
        wp_enqueue_script('datatables_bootstrap_js');
        wp_enqueue_script('cp_init');
        wp_enqueue_script('entity_datasource_js');
        wp_enqueue_script('entity_multi_datatables_js');
        wp_enqueue_script('input_mask_js');
        wp_enqueue_script('datetimepicker_js');
        wp_enqueue_script('wizard_js');
        wp_enqueue_script('conversations_js');
        
        wp_localize_script('conversations_js', '${application.name?lower_case}_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
        wp_localize_script('entity_datasource_js', '${application.name?lower_case}_ajax_script', array('ajaxurl' => admin_url('admin-ajax.php')));
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
        return '${pluginName}/';
    }
}
// End Class
/* EOF */
