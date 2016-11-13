<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class MenuAPI {

    public static $menu_groups = array(
        'dashboard' => array(
            'type' => 'menu',
            'target' => '/portal/dashboard/list',
            'is_admin' => true,
            'display_name' => 'Dashboard',
            'css_class' => 'zmdi zmdi-trending-up',
            'items' => array(
            ),
        ),
        'peoples' => array(
            'type' => 'group',
            
            'is_admin' => true,
            'display_name' => 'People',
            'css_class' => 'zmdi zmdi-accounts-alt',
            'items' => array(
                'students' => array(
                    'target' => '/portal/party/list/student',
                    'css_class' => 'md-person',
                    'display_name' => 'Students',
                ),
                'tutors' => array(
                    'target' => '/portal/party/list/tutor',
                    'css_class' => 'md-person',
                    'display_name' => 'Tutors',
                ),
            ),
        ),
        'business' => array(
            'type' => 'group',
            
            'is_admin' => true,
            'display_name' => 'Business',
            'css_class' => 'zmdi zmdi-balance',
            'items' => array(
                'contentorders' => array(
                    'target' => '/wordpress/page?artifact=contentorder&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Orders',
                ),
                'transactions' => array(
                    'target' => '/wordpress/page?artifact=accounttransaction&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Transactions',
                ),
                'disputes' => array(
                    'target' => '/wordpress/page?artifact=dispute&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Disputes',
                ),
            ),
        ),
        'content' => array(
            'type' => 'menu',
            'target' => '/wordpress/page?artifact=subjectarea&page_action=list',
            'is_admin' => true,
            'display_name' => 'Content',
            'css_class' => 'zmdi zmdi-collection-text',
            'items' => array(
            ),
        ),
        'reference' => array(
            'type' => 'group',
            
            'is_admin' => true,
            'display_name' => 'Reference Data',
            'css_class' => 'zmdi zmdi-library',
            'items' => array(
                'academiclevels' => array(
                    'target' => '/wordpress/page?artifact=academiclevel&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Academic Levels',
                ),
                'documenttypes' => array(
                    'target' => '/wordpress/page?artifact=documenttype&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Document Types',
                ),
                'numberofpages' => array(
                    'target' => '/wordpress/page?artifact=noofpages&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'No of Pages',
                ),
                'subjectareas' => array(
                    'target' => '/wordpress/page?artifact=subjectarea&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Subject Areas',
                ),
                'urgencies' => array(
                    'target' => '/wordpress/page?artifact=urgency&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Writing Schedule',
                ),
                'writingstyles' => array(
                    'target' => '/wordpress/page?artifact=writingstyle&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Writing Styles',
                ),
            ),
        ),
        'businesssettings' => array(
            'type' => 'group',
            
            'is_admin' => true,
            'display_name' => 'Business Settings',
            'css_class' => 'zmdi zmdi-settings',
            'items' => array(
                'business' => array(
                    'target' => '/wordpress/page?artifact=business&page_action=list',
                    'css_class' => 'md-person',
                    'display_name' => 'Business',
                ),
            ),
        ),
        'accountsummary' => array(
            'type' => 'menu',
            'target' => '/wordpress/page?artifact=accountsummary&page_action=list',
            'is_admin' => false,
            'display_name' => 'Account Summary',
            'css_class' => 'zmdi zmdi-accounts-alt',
            'items' => array(
            ),
        ),
        'myorders' => array(
            'type' => 'menu',
            'target' => '/wordpress/page?artifact=contentorder&page_action=list',
            'is_admin' => false,
            'display_name' => 'Orders',
            'css_class' => 'zmdi zmdi-folder-outline',
            'items' => array(
            ),
        ),
        'mytransactions' => array(
            'type' => 'menu',
            'target' => '/wordpress/page?artifact=accounttransaction&page_action=list',
            'is_admin' => false,
            'display_name' => 'Transactions',
            'css_class' => 'zmdi zmdi-money-box',
            'items' => array(
            ),
        ),
        'blog' => array(
            'type' => 'menu',
            'target' => '/blog',
            'is_admin' => false,
            'display_name' => 'Blog',
            'css_class' => 'zmdi zmdi-collection-text',
            'items' => array(
            ),
        ),
        'mytutors' => array(
            'type' => 'menu',
            'target' => '/wordpress/page?artifact=tutorlist&page_action=list',
            'is_admin' => false,
            'display_name' => 'Tutors',
            'css_class' => 'zmdi zmdi-graduation-cap',
            'items' => array(
            ),
        ),
        'disputes' => array(
            'type' => 'menu',
            'target' => '/wordpress/page?artifact=dispute&page_action=list',
            'is_admin' => false,
            'display_name' => 'Disputes',
            'css_class' => 'zmdi zmdi-close-circle',
            'items' => array(
            ),
        ),
        'profile' => array(
            'type' => 'menu',
            'target' => '/wordpress/page?artifact=profile&page_action=list',
            'is_admin' => false,
            'display_name' => 'My Profile',
            'css_class' => 'zmdi zmdi-settings',
            'items' => array(
            ),
        ),
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
