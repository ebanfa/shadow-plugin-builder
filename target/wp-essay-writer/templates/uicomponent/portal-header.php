<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>
            <?php
            /*
             * Print the <title> tag based on what is being viewed.
             */
            global $page, $paged;
            wp_title('|', true, 'right');

            // Add the blog name.
            bloginfo('name');

            // Add the blog description for the home/front page.
            $site_description = get_bloginfo('description', 'display');
            if ($site_description && ( is_home() || is_front_page() ))
                echo " | $site_description";
            ?>
        </title>


        <?php wp_head(); ?>
    </head>

    <?php                            
        $login_nav_text = 'Sign In';                            
        $login_nav_link = get_site_url() . '/signin';
        if (is_user_logged_in()) {
            $login_nav_link = wp_logout_url(home_url());
            $login_nav_text = 'Sign Out';
        } 
        $header_color = get_option('cp_default_portal_header_color');
        if(!EntityStringUtils::is_invalid_string($header_color)) $header_color = 'background-color:' . $header_color;
    ?>
    <body class="toggled sw-toggled">
        <header id="header" class="clearfix" data-current-skin="blue" style="<?php echo $header_color; ?>">
            <ul class="header-inner">
                <li id="menu-trigger" data-trigger="#sidebar">
                    <div class="line-wrap">
                        <div class="line top"></div>
                        <div class="line center"></div>
                        <div class="line bottom"></div>
                    </div>
                </li>
                <li class="logo hidden-xs">
                    <a href="<?php echo get_site_url(); ?>"><?php bloginfo('name'); ?></a>
                </li>
                <li class="pull-right">
                    <ul class="top-menu">
                        <li id="toggle-width">
                            <div class="toggle-switch">
                                <input id="tw-switch" type="checkbox" hidden="hidden">
                                <label for="tw-switch" class="ts-helper"></label>
                            </div>
                        </li>
                        <!-- <li id="top-search">
                            <a href="index.html"><i class="tm-icon zmdi zmdi-search"></i></a>
                        </li> -->
                        
                        <li>
                            <a data-field="headerLogoutLink" href="<?php echo $login_nav_link; ?>"><i class="tm-icon zmdi zmdi-sign-in"></i></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- Top Search Content -->
            <div id="top-search-wrap">
                <div class="tsw-inner">
                    <i id="top-search-close" class="zmdi zmdi-arrow-left"></i>
                    <input type="text">
                </div>
            </div>
        </header>
        <section id="main">



