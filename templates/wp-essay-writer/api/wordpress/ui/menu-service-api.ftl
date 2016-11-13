<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class MenuAPI {

    public static $menu_groups = array(<#list menuBar.menuGroups as group>
        '${group.name}' => array(
            'type' => '${group.type}',
            <#if group.type == "menu">'target' => '${group.target}',</#if>
            'is_admin' => <#if group.admin == "Y">true<#else>false</#if>,
            'display_name' => '${group.displayName}',
            'css_class' => '${group.cssClass}',
            'items' => array(<#list group.menus as menu>
                '${menu.name}' => array(
                    'target' => '${menu.target}',
                    'css_class' => '${menu.cssClass}',
                    'display_name' => '${menu.displayName}',
                ),</#list>
            ),
        ),</#list>
    );


    public static function get_menu_groups(){
        //$user_groups = array();
        $current_user_party = UserPartyAPI::get_current_user_party();
        foreach (self::$menu_groups as $key => $group) {
            if($group['is_admin']  && !UserPartyAPI::is_portal_admin($current_user_party))
                unset(self::$menu_groups[$key]);

            if(!$group['is_admin']  && UserPartyAPI::is_portal_admin($current_user_party))
                unset(self::$menu_groups[$key]);
        }
        return self::$menu_groups;
    }

    /**
     *
     */
    public static function get_header_data(){
        $menu_header_data = array(
            'menu_image' => '',
            'user_name' => get_option('cp_default_guest_user_name'),
        );
        // If the user is sign in the we load the name of the user
        if(is_user_logged_in()) {
            $current_user_party = UserPartyAPI::get_current_user_party();
            if(isset($current_user_party['id'])) 
                $menu_header_data['user_name'] = $current_user_party['user_name'];
        }
        // Process the menu header image
        $menu_image = get_option('cp_default_portal_menu_image');
        if(!EntityStringUtils::is_invalid_string($menu_image)) 
            $menu_header_data['menu_image'] = 'background: transparent url(' . $menu_image . ') no-repeat scroll left top / 100% auto;';

        return $menu_header_data;
    }
}
