<?php
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="card-body card-padding">
    <div class="row mg-btm-30">
        <div class="col-sm-12">
            <div class="body-section">
                <div id="success"></div>
                <?php do_action('shadowbanker_do_render_component', 'entity-form-panel'); ?>
            </div>
        </div>
    </div>
</div>
      