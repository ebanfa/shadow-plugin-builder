<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    global $sb_post_type;
    $sb_post_type = '${entity.postName}';

    
    function do_page_footer() {
        wp_register_script('cp_entity_form', plugins_url('/js/entity-form.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);
        wp_register_script('cp_entity_form', plugins_url('/js/entity-form.js', dirname(dirname(dirname(__FILE__)))), array('jquery'),'', true);

        wp_enqueue_script('cp_entity_form');
        wp_enqueue_script('cp_entity_form');
    }
    // Add the action
    add_action('wp_footer', 'do_page_footer');

    // Process the parent id, if any
    if(isset($_REQUEST['parent_id']) && isset($_REQUEST['parent_artifact'])) {

        $parent_id = sanitize_text_field($_REQUEST['parent_id']);
        $parent_artifact = sanitize_text_field($_REQUEST['parent_artifact']);
    }
?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    //do_action('shadowbanker_before_entity_form');

    do_action('shadowbanker_entity_form_start');
?>

<div class="card">
                        <div class="card-header">
                            <h2>Wizard <small>This twitter bootstrap plugin builds a wizard out of a formatter tabbable structure. It allows to build a wizard functionality using buttons to go through the different wizard steps and using events allows to hook into each step individually.</small></h2>
                        </div>
                        
                        <div class="card-body card-padding">
                            <div class="form-wizard-basic fw-container">
                                <ul class="tab-nav text-center">
                                    <li><a href="#tab1" data-toggle="tab">Agreement</a></li>
                                    <li><a href="#tab2" data-toggle="tab">Units</a></li>
                                    <li><a href="#tab3" data-toggle="tab">Terms</a></li>
                                    <li><a href="#tab4" data-toggle="tab">Charges</a></li>
                                </ul>
                                
                                <div class="tab-content">
                                    <div class="tab-pane fade" id="tab1">                                        
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus sapien, cursus et egestas at, volutpat sed dolor. Aliquam sollicitudin dui ac euismod hendrerit. Phasellus quis lobortis dolor. Sed massa massa, sagittis nec fermentum eu, volutpat non lectus. Nullam vitae tristique nunc. Aenean vel placerat augue. Aliquam pharetra mauris neque, sit amet egestas risus semper non. Proin egestas egestas ex sed gravida. Suspendisse commodo nisl sit amet risus volutpat volutpat. Phasellus vitae turpis a elit tincidunt ornare. Praesent non libero quis libero scelerisque eleifend. Ut eleifend laoreet vulputate.</p>
                                        <p>Duis eu eros vitae risus sollicitudin blandit in non nisi. Phasellus rhoncus ullamcorper pretium. Etiam et viverra neque, aliquam imperdiet velit. Nam a scelerisque justo, id tristique diam. Aenean ut vestibulum velit, vel ornare augue. Nullam eu est malesuada, vehicula ex in, maximus massa. Sed sit amet massa venenatis, tristique orci sed, eleifend arcu.</p>
                                        <p>Aliquam tempus rutrum neque, a blandit dui. Proin quis elit non est scelerisque pharetra nec id libero. Quisque id tincidunt elit. Maecenas non mauris malesuada, interdum justo et, ullamcorper magna. Nulla libero risus, vestibulum pharetra eleifend in, aliquam ac odio. Sed ligula orci, rhoncus sit amet ipsum vel, vehicula interdum ligula. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab2">
                                        <p>Duis eu eros vitae risus sollicitudin blandit in non nisi. Phasellus rhoncus ullamcorper pretium. Etiam et viverra neque, aliquam imperdiet velit. Nam a scelerisque justo, id tristique diam. Aenean ut vestibulum velit, vel ornare augue. Nullam eu est malesuada, vehicula ex in, maximus massa. Sed sit amet massa venenatis, tristique orci sed, eleifend arcu.</p>
                                    </div>
                                    <div class="tab-pane fade" id="tab3">
                                        <p>Duis eu eros vitae risus sollicitudin blandit in non nisi. Phasellus rhoncus ullamcorper pretium. Etiam et viverra neque, aliquam imperdiet velit. Nam a scelerisque justo, id tristique diam. Aenean ut vestibulum velit, vel ornare augue. Nullam eu est malesuada, vehicula ex in, maximus massa. Sed sit amet massa venenatis, tristique orci sed, eleifend arcu.</p>
                                        <p>Aliquam tempus rutrum neque, a blandit dui. Proin quis elit non est scelerisque pharetra nec id libero. Quisque id tincidunt elit. Maecenas non mauris malesuada, interdum justo et, ullamcorper magna. Nulla libero risus, vestibulum pharetra eleifend in, aliquam ac odio. Sed ligula orci, rhoncus sit amet ipsum vel, vehicula interdum ligula. </p>
                                    </div>
                                    <div class="tab-pane fade" id="tab4">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus sapien, cursus et egestas at, volutpat sed dolor. Aliquam sollicitudin dui ac euismod hendrerit. Phasellus quis lobortis dolor. Sed massa massa, sagittis nec fermentum eu, volutpat non lectus. Nullam vitae tristique nunc. Aenean vel placerat augue. Aliquam pharetra mauris neque, sit amet egestas risus semper non. Proin egestas egestas ex sed gravida. Suspendisse commodo nisl sit amet risus volutpat volutpat. Phasellus vitae turpis a elit tincidunt ornare. Praesent non libero quis libero scelerisque eleifend. Ut eleifend laoreet vulputate.</p>
                                    </div>
                                        
                                    <ul class="fw-footer pagination wizard">
                                        <li class="previous first"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-more-horiz"></i></a></li>
                                        <li class="previous"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-chevron-left"></i></a></li>
                                        <li class="next"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-chevron-right"></i></a></li>
                                        <li class="next last"><a class="a-prevent" href="components.html"><i class="zmdi zmdi-more-horiz"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
    
<?php 
    do_action('shadowbanker_entity_form_end'); 
    
   // do_action('shadowbanker_after_entity_form');
    
    do_action('shadowbanker_after_main_content');
?>