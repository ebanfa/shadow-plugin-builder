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
                    'target' => '/portal/studentlist/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Students',
                ),
                'tutors' => array(
                    'target' => '/portal/tutorlist/list',
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
                    'target' => '/portal/contentorder/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Orders',
                ),
                'transactions' => array(
                    'target' => '/portal/accounttransaction/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Transactions',
                ),
                'disputes' => array(
                    'target' => '/portal/dispute/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Disputes',
                ),
            ),
        ),
        'content' => array(
            'type' => 'menu',
            'target' => '/portal/subjectarea/list',
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
                    'target' => '/portal/academiclevel/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Academic Levels',
                ),
                'documenttypes' => array(
                    'target' => '/portal/documenttype/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Document Types',
                ),
                'numberofpages' => array(
                    'target' => '/portal/noofpages/list',
                    'css_class' => 'md-person',
                    'display_name' => 'No of Pages',
                ),
                'subjectareas' => array(
                    'target' => '/portal/subjectarea/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Subject Areas',
                ),
                'urgencies' => array(
                    'target' => '/portal/urgency/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Writing Schedule',
                ),
                'writingstyles' => array(
                    'target' => '/portal/writingstyle/list',
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
                    'target' => '/portal/business/list',
                    'css_class' => 'md-person',
                    'display_name' => 'Business',
                ),
            ),
        ),
        'accountsummary' => array(
            'type' => 'menu',
            'target' => '/portal/dashboard/list',
            'is_admin' => false,
            'display_name' => 'Account Summary',
            'css_class' => 'zmdi zmdi-accounts-alt',
            'items' => array(
            ),
        ),
        'myorders' => array(
            'type' => 'menu',
            'target' => '/portal/contentorder/list',
            'is_admin' => false,
            'display_name' => 'Orders',
            'css_class' => 'zmdi zmdi-folder-outline',
            'items' => array(
            ),
        ),
        'mytransactions' => array(
            'type' => 'menu',
            'target' => '/portal/accounttransaction/list',
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
            'target' => '/portal/party/list/tutor',
            'is_admin' => false,
            'display_name' => 'Tutors',
            'css_class' => 'zmdi zmdi-graduation-cap',
            'items' => array(
            ),
        ),
        'profile' => array(
            'type' => 'menu',
            'target' => '/portal/profiledisplay/list',
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
