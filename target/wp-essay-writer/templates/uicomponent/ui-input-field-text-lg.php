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
                <textarea placeholder="<?php echo $field['description']; ?>" 
                    name="<?php echo $field['name'];?>" rows="7" cols="100" 
                    class="form-control text-lg" id="<?php echo $field['name'];?>">
                    <?php if(isset($model['id'])) { echo $model[$field['name']]; }?>
                </textarea>
            </div>
        </div>
    </div>
</div>