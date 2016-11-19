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
            <div class="checkbox m-b-15">
                <label>
                    <input id="<?php echo $field['name'];?>" 
                    name="<?php echo $field['name']; ?>"  type="checkbox" value="N" 
                    data-bv-message="The <?php echo $field['description']; ?> is not valid" 
                    data-bv-notempty-message="The <?php echo $field['description']; ?> is required and cannot be empty" 
                    <?php if($field['is_required']) { echo ' required'; }?>>
                    <i class="input-helper"></i>
                    <?php echo $field['description']; ?>
                </label>
            </div>
            <?php //if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?> 
        </div>
    </div>
</div>