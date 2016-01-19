<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }


    /*
     * If the request parameter $order_code is not present
     * then display the end of the create form else display the 
     * end of the edit form
     */
    if(!isset($_REQUEST['artifact'])){
    }
    $entity_name = sanitize_text_field($_REQUEST['artifact']);
    if(!isset($_REQUEST['id'])){

?>
    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
    <input type="hidden" name="submitted" id="submitted" value="true" />    
    <input type="hidden" name="edit_mode" value="create" /> 
    <div class="btn-demo m-t-10">
        <button id="<?php echo $entity_name; ?>-form-btn" type="submit" class="btn btn-primary waves-effect">
            <?php _e('Submit', 'framework') ?>
        </button>
    </div>

</form>

<?php
    
    // Display the end of the edit form
    } else { 
        global $entity_data;

?>

    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
    <input type="hidden" name="submitted" id="submitted" value="true" />     
    <input type="hidden" name="edit_mode" value="edit" />  
    <input type="hidden" name="id" value="<?php echo $entity_data['id'];?>" />  
    <div class="btn-demo m-t-10">
        <button id="<?php echo $entity_name; ?>-form-btn" type="submit" class="btn btn-primary waves-effect">
            <?php _e('Update', 'framework') ?>
        </button>
        
        <a href="<?php echo get_site_url() . '/page?type=entity&artifact=' . $entity_name . '&id=' . $entity_data['id']; ?>&page_action=view" 
           class="btn bgm-indigo waves-effect"><?php _e('Back', 'framework') ?>
        </a>
    </div>
    
</form>

<?php  
    }
?>