<?php
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="row">
	<div class="<?php echo $field['col_size']; ?>">
        <div class="form-group">
            <div class="fg-line">
                <input type="email" class="form-control email" 
                    id="<?php echo $field['name'];?>" name="<?php echo $field['name'];?>" 
                    <?php if(isset($model['id']) && isset($model[$field['name']])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
                    placeholder="<?php echo $field['description']; ?>" 
                    data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                    data-bv-emailaddress-message="The value is not a valid email address" 
                    data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" required>
            </div>
        </div>
    </div>
</div>