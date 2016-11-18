<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>

<div role="tabpanel" class="tab-pane animated fadeIn" id="tab-files">
    <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Size</th>
                </tr>
            </thead><!-- /table header -->  
            <tbody>
                <?php if(!empty($view->get_content_files())) { foreach ($view->get_content_files() as $content_file) { ?>
                <tr>
                    <td>
                        <a href="<?php echo $content_file['file_url']; ?>" class="product-name">
                            <?php echo $content_file['name']; ?>
                        </a>
                    </td>
                    <td class="cart-price"><?php echo $content_file['file_size']; ?></td>
                </tr>
                <?php   }  } else { ?>
                <tr>
                    <td> No files uploaded </td>
                    <td class="cart-price"></td>
                </tr>
                <?php } ?>
            </tbody><!-- /table body -->  
        </table>
    </div>
    <div class="btn-demo m-t-10">
        <div class="row">
            <div class="col-sm-12 col-md-2">
                <a  id="show-upload-dialog-btn" 
                    href="#" data-toggle="modal" 
                    data-target="#contentorder-file-modal" 
                    class="btn btn-primary btn-block waves-effect">
                   <?php _e('Upload Files', 'framework') ?>
                </a>
            </div>
        </div>
    </div>
</div>