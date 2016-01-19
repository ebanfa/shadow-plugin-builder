<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    global $entity_data;

    if(!isset($_REQUEST['artifact'])){
    }
    $entity_name = sanitize_text_field($_REQUEST['artifact']);


?>

				<div class="btn-demo m-t-10">
                    <a href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=edit" 
                       class="btn btn-primary waves-effect">
                       <?php _e('Edit', 'framework') ?>
                    </a>
                    <form id="delete-entity-form" style="display:none" action=""  method="POST">
                        <input type="hidden" name="id" value="<?php echo $entity_data['id']; ?>">
                        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
                        <input type="hidden" name="submitted" id="submitted" value="true" />
                    </form>
                    <a id="delete-entity-btn" href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=delete" class="btn btn-warning waves-effect">
                       <?php _e('Delete', 'framework') ?>
                    </a>
                </div>
    
			</div>
		</div>
	</div>
</div>
