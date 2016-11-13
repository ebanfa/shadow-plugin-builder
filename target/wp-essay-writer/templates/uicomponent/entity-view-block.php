<?php
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
?>

<div class="row">
    <div class="col-sm-12">
        <div class="card">
            <?php do_action('shadowbanker_do_render_component', 'artifact-block-header'); ?>
            <?php do_action('shadowbanker_do_render_component', 'entity-view-panel'); ?>
        </div>
    </div>
</div>
<script type="text/javascript">
    jQuery(document).ready(function($)
    {
        $('#action-link-trigger').on('click', function (e) {
            e.stopPropagation();
            $(this).prev().find('[data-toggle=dropdown]').dropdown('toggle');
        });
    });
</script>
            