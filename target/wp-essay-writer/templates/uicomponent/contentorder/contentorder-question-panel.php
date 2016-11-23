<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div role="tabpanel" class="tab-pane animated fadeIn" id="tab-question">
    <div class="table-responsive m-t-20 m-b-20">
        <?php 
            if (!isset($model['post_question'])) {
                echo 'No associated question';
            }
            else {
                $post_data = get_post($model['post_question']);
                echo $post_data->post_content;
            }
        ?>
    </div>
</div>