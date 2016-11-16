<?php

    /* The main menu file is here.
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $page_context = $view->get_context();
    $menu_groups = $page_context['portal-menu-main-data'];
?>
<ul class="main-menu">
    <?php
        foreach ($menu_groups as $key => $group) {
            if ($group['type'] == 'menu') { 
    ?>
    <li>
        <a href="javascript:void(0);" class="data-table-link" data-link="<?php if($key == 'signout')  echo wp_logout_url(home_url()); else echo $group['target']; ?>">
            <i class="md <?php echo $group['css_class'];?>"></i> <?php echo $group['display_name'];?>
        </a>
    </li>
    <?php   } else { ?>
    <li class="sub-menu">
        <a href="javascript:void(0);">
            <i class="md <?php echo $group['css_class'];?>"></i> <?php echo $group['display_name'];?>
        </a>
        <ul>
        <?php   foreach ($group['items'] as $key => $item) { ?>
            <li class="active">
                <a href="javascript:void(0);" class="data-table-link" data-link="<?php echo $item['target'];?>">
                    <i class="md <?php echo $item['css_class']?>"></i> <?php echo $item['display_name'];?>
                </a>
            </li>
        <?php } ?>
        </ul>
    </li>
    <?php   }
        }
    ?>
</ul>