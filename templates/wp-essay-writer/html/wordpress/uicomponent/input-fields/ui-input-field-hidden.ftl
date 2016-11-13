<?php
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="row">
    <input type="hidden" id="<?php echo $field['name'];?>" name="<?php echo $field['name'];?>" value="<?php echo $field['value'];?>">
</div>