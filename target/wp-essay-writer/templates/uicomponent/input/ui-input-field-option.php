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
                <div class="select">
                    <select id="<?php echo $field['name'];?>" name="<?php echo $field['name'];?>" class="form-control">
                        <option>Select a <?php echo $field['description'];?></option>
                        <?php
                            foreach ($field['options'] as $option) { ?>
                            <option value="<?php echo $option['value']; ?>">
                                <?php echo $option['name']; ?>
                            </option>
                        <?php } ?>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>