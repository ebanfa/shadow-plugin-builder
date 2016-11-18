<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div role="tabpanel" class="tab-pane animated fadeIn" id="tab-instructions">
    <div class="table-responsive m-t-20 m-b-20">
        <?php 
            if (EntityStringUtils::is_invalid_string($model['description'])) {
                echo 'No instructions provided';
            }
            else {
                echo $model['description'];
            }
        ?>
    </div>
</div>