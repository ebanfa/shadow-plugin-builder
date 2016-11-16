<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $page_action = $_REQUEST['page_info']['page_action'];
?>
<div class="lv-header-alt clearfix">
    <h2 class="lvh-label hidden-xs">
        <?php echo PageUtils::$page_action_mapping[$view->get_page_action()] . ' ' . $view->get_page_name(); ?> 
        <small style="display:block"><?php echo $view->get_page_description(); ?></small>
    </h2>
    <div class="lvh-search">
        <input id="artifact-search-input" type="text" placeholder="Start typing..." class="lvhs-input">
        <i class="lvh-search-close">&times;</i>
    </div>
    <ul class="lv-actions actions artifact-actions">
        <li>
            <?php if($page_action == PageUtils::$page_action_list) { ?>
            <a href="#" class="lvh-search-trigger">
                <i class="zmdi zmdi-search"></i>
            </a>
            <?php } else  { ?>
            <a href="#">
                <i class="zmdi zmdi-search"></i>
            </a>
            <?php } ?>
        </li>
        <li class="dropdown">
            <a href="#" data-toggle="dropdown" aria-expanded="true">
                <i class="zmdi zmdi-plus zmdi-hc-fw"></i>
            </a>
            
            <?php if (count($view->get_action_links()) > 0) { ?>
                <ul class="dropdown-menu dropdown-menu-right">
                    <?php foreach ($view->get_action_links() as $link) { ?>
                    <li>
                        <a href="javascript:void(0);" class="data-table-link"  data-link="<?php echo $link['link']; ?>"><?php echo $link['name']; ?></a>
                    </li>
                    <?php } ?>
                </ul>
            <?php } ?>
        </li>
    </ul>
</div>