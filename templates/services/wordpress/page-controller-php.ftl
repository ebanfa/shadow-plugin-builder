<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class PageControllerAPI {

    static $pages = array(
<#list menuBar.menuGroups as group>
    <#if group.type == "menu">
        <#if group.targetType == "page">
       '${group.name}' => '${group.displayName}',
        </#if>
    </#if>
    <#if group.type == "group">
        <#list group.menus as menu>
            <#if menu.targetType == "page">
       '${menu.name}' => '${menu.displayName}',
            </#if>
        </#list>
    </#if>
</#list>
    );
    static $entities = array(
<#list module.entities as entity>
        '${entity.name?lower_case}' => '${entity.description}',
</#list>
    );
    static $page_actions = array(
        'create' => 'Create',
        'edit' => 'Edit',
        'view' => 'View',
        'list' => 'List',
    );
    /**
     */
    public static function handle_page_request() {

        if (isset($_REQUEST['type'])) {
            $type = sanitize_text_field($_REQUEST['type']);

            if($type == 'page') {
                PageControllerAPI::do_page_request(); 
            }
            elseif($type == 'entity'){
                PageControllerAPI::do_entity_request(); 
            }
        }
        else {
            echo '<h2>Invalid request!</h2>';
        }
        
    }

    /**
     */
    public static function do_page_request() {
        if (isset($_REQUEST['artifact'])) {
            
            $page_info = array();
            $page_info['name'] = sanitize_text_field($_REQUEST['artifact']);
            $page_info['display_name'] = PageControllerAPI::$pages[$page_info['name']];

            if(isset($_REQUEST['page_action'])) {
                $page_info['page_action'] = sanitize_text_field($_REQUEST['page_action']);
                $page_info['page_action_description'] = $page_actions[$page_info['page_action']];
            }
            $_REQUEST['page_info'] = $page_info;

            CloderiaUIDisplayAPI::display_page($page_info['name']);
        }
        else {
            echo '<h2>The page specified does not exist!</h2>';
        }
    }

    /**
     */
    public static function do_entity_request() {

        if (isset($_REQUEST['artifact']) && isset($_REQUEST['page_action'])) {

            $page_info = array();
            $page_info['name'] = sanitize_text_field($_REQUEST['artifact']);

            $page_info['page_action'] = sanitize_text_field($_REQUEST['page_action']);

	    $page_info['page_action_description'] = PageControllerAPI::$page_actions[$page_info['page_action']];

            $page_info['display_name'] = PageControllerAPI::$entities[$page_info['name']];
            $_REQUEST['page_info'] = $page_info; 

            if($page_info['page_action'] == 'create') {
                CloderiaUIDisplayAPI::display_entity_create_form($page_info['name']);
            }
            elseif ($page_info['page_action'] == 'edit'){
                CloderiaUIDisplayAPI::display_entity_edit_form($page_info['name']);
            }
            elseif ($page_info['page_action'] == 'view'){
                CloderiaUIDisplayAPI::display_single_entity($page_info['name']);
            }
            elseif ($page_info['page_action'] == 'list'){
                CloderiaUIDisplayAPI::display_entity_archive($page_info['name']);
            }
            else {
              echo '<h1>Invalid entity page action!</h1>';
            }
        }
        else {
            echo '<h1>Invalid entity page request!</h1>';
        }}
}
// End Class
/* EOF */
