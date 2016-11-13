<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class URLRewriteProcessor {

    /**
     */
    public static function init_hooks() {
        self::add_url_rewrite_rules();
        self::add_custom_query_variables();
    }

    /**
     */
    public static function add_url_rewrite_rules() {
        add_rewrite_rule('^site/([^/]*)/([^/]*)$', 'index.php?pagename=content-page&page_type=site&artifact=$matches[1]&page_action=$matches[2]', 'top' );
        add_rewrite_rule('^portal/party/list/([a-z]*)$', 'index.php?pagename=content-page&page_type=portal&artifact=party&page_action=list&role=$matches[1]', 'top' );
        add_rewrite_rule('^portal/([^/]*)/([^/]*[list])$', 'index.php?pagename=content-page&page_type=portal&artifact=$matches[1]&page_action=list', 'top' );
        add_rewrite_rule('^portal/([^/]*)/([^/]*[create])$', 'index.php?pagename=content-page&page_type=portal&artifact=$matches[1]&page_action=create', 'top' );
        add_rewrite_rule('^portal/([^/]*)/view/([0-9]*)$', 'index.php?pagename=content-page&page_type=portal&artifact=$matches[1]&page_action=view&entity_id=$matches[2]', 'top' );
        add_rewrite_rule('^portal/([^/]*)/edit/([0-9]*)$', 'index.php?pagename=content-page&page_type=portal&artifact=$matches[1]&page_action=edit&entity_id=$matches[2]', 'top' );

        /*add_rewrite_rule('^recent$', 'index.php?pagename=post-question&artifact=question&page_action=list', 'top' );
        add_rewrite_rule('^categories$', 'index.php?pagename=post-question&artifact=tutor&page_action=view', 'top' );
        add_rewrite_rule('^subject$', 'index.php?pagename=post-question&artifact=tutor&page_action=view', 'top' );
        add_rewrite_rule('^tutors$', 'index.php?pagename=post-question&artifact=tutor&page_action=view', 'top' );*/
    }


    /**
     */
    public static function add_custom_query_variables() {
        add_rewrite_tag('%artifact%','([^/]*)');
        add_rewrite_tag('%page_action%','([^/]*)');
        add_rewrite_tag('%page_type%','([^/]*)');
        add_rewrite_tag('%entity_id%','([^/]*)');
        add_rewrite_tag('%role%','([^/]*)');
    }

   
}
// End Class
?>