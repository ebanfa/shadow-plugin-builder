<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
    <ul class="tab-nav tn-justified tn-icon" role="tablist">
        <li role="presentation" class="active">
            <a class="col-sx-4" href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">
                <?php echo $model['entity_description']; ?>
            </a>
        </li>

        <?php 
            $count = 1;
            foreach ($model['inferred_fields'] as $inferred_field) { ?>

        <li role="presentation">
            <a class="col-xs-4" 
                href="#tab-<?php echo $count; ?>" 
                aria-controls="tab-<?php echo $count; ?>" role="tab" data-toggle="tab">
                <?php echo $inferred_field['entity_description']; $count++; ?>
            </a>
        </li>
        
        <?php } ?>
    </ul>

        <div class="tab-content p-20">
            <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-a">
                <div id="success"></div>
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                        <tbody>
                            <tr>
                            <?php 
                                foreach ($model['entity_fields'] as $field_name => $field) { 
                                    if($field['is_view_field']) {  ?>
                                <th><?php echo $field['description']; ?></th>
                            <?php   
                                    }
                                } ?>
                            </tr>

                            <tr>
                            <?php 
                                foreach ($model['entity_fields'] as $field_name => $field) { 
                                    if($field['is_view_field'] && !$field['is_relationship_field']) {  ?>
                                <td><?php echo $model[$field['name']]; ?></td>
                            <?php   
                                    }
                                } ?>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn-demo m-t-10">
                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $view->get_model() . '&id=' . $model['id'] . '$parent_url'; ?>&page_action=edit" 
                       class="btn btn-primary waves-effect">
                       <?php _e('Edit', 'framework') ?>
                    </a>
                    <form id="delete-entity-form" style="display:none" action=""  method="POST">
                        <input type="hidden" name="id" value="<?php echo $model['id']; ?>">
                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                        <input type="hidden" name="submitted" id="submitted" value="true" />
                    </form>
                    <a id="delete-entity-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $view->get_model() . '&id=' . $model['id']. '$parent_url'; ?>&page_action=delete" class="btn btn-warning waves-effect">
                       <?php _e('Delete', 'framework') ?>
                    </a>
                    <?php if(true) { ?>
                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=' . '$parent_artifact' . '&id=' . '$parent_id.$parent_param'; ?>&page_action=view" 
                       class="btn btn-primary waves-effect">
                       <?php _e('Done', 'framework') ?>
                    </a>
                    <?php } ?>
                </div>

            </div>
            

        </div>
