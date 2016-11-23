<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class WPEssayWriter {

    /**
     * @var string
     */
    public $version = '0.5.0';

    /**
     * @var The single instance of the class
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
     * @return - Main instance
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
        $this->do_includes();
        $this->enqueue_scripts();
        $this->init_template_hooks();
        $this->init_backend_hooks();
    }

    /**
     * Include all required files
     */
    public function do_includes() {
        include_once('includes.php');
    }
    
    /**
     * Load CSS stylesheets
     */
    public function enqueue_scripts() {
        EnqueueUtils::init_hooks();
    }

    /**
     * Add template processing related hooks.
     */
    public function init_template_hooks() {
        ViewActionsController::init_hooks();
    }

    /**
     * Initialize ajax, admin and other
     * backend related scripts
     */
    public function init_backend_hooks() {
        AdminAPI::init_hooks();
        MenuUtils::init_hooks();
        URLRewriteProcessor::init_hooks();
        ArtifactRequestProcessor::init_hooks();
        ArtifactAjaxRequestProcessor::init_hooks();
    }

    /**
     * Get the plugin path.
     * @return string
     */
    public static function plugin_path() {
        return untrailingslashit(plugin_dir_path(__FILE__));
    }

    /**
     * Get the plugin url.
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
