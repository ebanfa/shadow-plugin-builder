<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
    <form id="<?php echo $model['entity_post_name']; ?>-list-form">
        <?php foreach ($view->get_form_fields() as $field) { if(isset($field['options_criteria'])) { ?>
        <input type="hidden" name="<?php echo $field['options_criteria']['name']; ?>" id="<?php echo $field['options_criteria']['name']; ?>" value="<?php echo $field['options_criteria']['value']; ?>" /> 
        <?php }} ?>
        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
        <input type="hidden" name="submitted" id="submitted" value="true" /> 
    </form>
    <div class="table-responsive">
        <table id="<?php echo $model['entity_post_name']; ?>-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <?php foreach ($model['entity_fields'] as $field_name => $field) { if($field['is_list_field']) { ?>
                    <th><?php echo $field['description']; ?></th>
                    <?php }} ?>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
