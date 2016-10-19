<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $content_in_subject = $view->get_content_by_subject();


?>
    <div class="row">
        <?php if (!empty($content_in_subject)) { foreach ($content_in_subject as $content) { ?>
        <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
                <img src="img/300x200.gif" alt="">
                <div class="caption">
                    <h4>Thumbnail label</h4>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                        elit non mi porta gravida at eget metus. Nullam id dolor id nibh
                        ultricies vehicula ut id elit.</p>

                    <div class="m-b-5">
                        <a href="media.html#" class="btn btn-sm btn-primary" role="button">Button</a>
                    </div>
                </div>
            </div>
        </div>
        <?php }} else { ?>
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div><h5>No content found.</h5></div>
        </div>
        <?php } ?>
    </div>