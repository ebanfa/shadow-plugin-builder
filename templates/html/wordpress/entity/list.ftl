<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $view_model = $view->view_model;
    $artifact_data = ArtifactUtils::$artifacts[$view->artifact];
    if($artifact_data['artifact_type'] == 'entity'){
            var_dump($view_model); ;
        }   
    //var_dump($artifact_data['artifact_type']);//
?>
    <form id="<?php echo $model['entity_post_name']; ?>-list-form">
        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
        <input type="hidden" name="submitted" id="submitted" value="true" /> 
    </form>
    <div class="table-responsive">
        <table id="<?php echo $model['entity_post_name']; ?>-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <?php foreach ($model['entity_fields'] as $field_name => $field) {  if($field['is_list_field']) { ?>
                    <th><?php echo $field['description']; ?></th>
                    <?php }} ?>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
