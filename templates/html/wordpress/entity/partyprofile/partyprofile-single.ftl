<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
    $tabs = $view->get_tabs();

    
    $parent_param = '';
    if(isset($_REQUEST['parent_param'])) $parent_param = urldecode($_REQUEST['parent_param']);

?>
<div class="card" id="profile-main">
    <div class="pm-overview c-overflow">
        <div class="pmo-pic">
            <div class="p-relative">
                <a data-toggle="modal" href="#modalWider">
                    <img class="img-responsive" src="<?php echo get_stylesheet_directory_uri(); ?>/images/profile-pics/profile-pic-2.jpg" alt=""> 
                </a>
                
                <div class="dropdown pmop-message">
                    <a data-toggle="dropdown" href="profile-about.html" class="btn bgm-white btn-float z-depth-1">
                        <i class="zmdi zmdi-comment-text-alt"></i>
                    </a>
                    
                    <div class="dropdown-menu">
                        <textarea placeholder="Write something..."></textarea>
                        
                        <button class="btn bgm-green btn-float"><i class="zmdi zmdi-mail-send"></i></button>
                    </div>
                </div>
                
                <a href="profile-about.html" class="pmop-edit">
                    <i class="zmdi zmdi-plus"></i> <span class="hidden-xs">Update Profile</span>
                </a>
            </div>
            
           
            <div class="pmo-stat">
                <h2 class="m-0 c-white">1562</h2>
                Total Connections
            </div>
            <div class="pmo-block pmo-contact hidden-xs">
                 <div class="btn-demo m-t-10">
                    <a href="<?php echo $view->get_edit_url(); ?>" class="btn btn-primary btn-block waves-effect">
                       <?php _e('Edit', 'framework') ?>
                    </a>
                </div>
            </div>
        </div>
    </div>
    
    <div class="pm-body clearfix">
        <ul class="tab-nav tn-justified"  role="tablist">
            <li class="active waves-effect"><a href="#tab-0" aria-controls="tab-0" role="tab" data-toggle="tab">About</a></li>
           <!--  <li class="waves-effect"><a href="#tab-1" aria-controls="tab-0" role="tab" data-toggle="tab">Timeline</a></li>
            <li class="waves-effect"><a href="#tab-2" aria-controls="tab-0" role="tab" data-toggle="tab">Tasks</a></li> -->
            <!-- <li class="waves-effect"><a href="profile-connections.html">Connections</a></li> -->
        </ul>
        
        <div class="tab-content p-20">
            <div role="tabpanel" class="tab-pane animated fadeIn in active" id="tab-0">

                
                <div class="pmb-block">
                    <div class="pmbb-header">
                        <h2><i class="zmdi zmdi-account m-r-5"></i> Basic Information</h2>
                        
                        <!-- <ul class="actions">
                            <li class="dropdown">
                                <a href="profile-about.html" data-toggle="dropdown">
                                    <i class="zmdi zmdi-more-vert"></i>
                                </a>
                                
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li>
                                        <a data-pmb-action="edit" href="profile-about.html">Edit</a>
                                    </li>
                                </ul>
                            </li>
                        </ul> -->
                    </div>
                    <div class="pmbb-body p-l-30">
                        <div class="pmbb-view">
                            <dl class="dl-horizontal">
                                <dt>Full Name</dt>
                                <dd><?php echo $model['name']; ?></dd>
                            </dl>
                            <dl class="dl-horizontal">
                                <dt>Display Name</dt>
                                <dd><?php echo $model['display_name']; ?></dd>
                            </dl>
                            <dl class="dl-horizontal">
                                <dt>Business Unit</dt>
                                <dd><?php echo $model['default_unit_txt']; ?></dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="pmb-block">
                    <div class="pmbb-header">
                        <h2><i class="zmdi zmdi-equalizer m-r-5"></i> Summary</h2>
                    </div>
                    <div class="pmbb-body p-l-30">
                        <div class="pmbb-view">
                            <?php echo $model['description']; ?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End first tab -->
            <div role="tabpanel" class="tab-pane animated fadeIn in" id="tab-1">
                <div class="pmb-block">
                    <div class="pmbb-header">
                        <h2><i class="zmdi zmdi-equalizer m-r-5"></i> Summary</h2>
                        
                        <ul class="actions">
                            <li class="dropdown">
                                <a href="profile-about.html" data-toggle="dropdown">
                                    <i class="zmdi zmdi-more-vert"></i>
                                </a>
                                
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li>
                                        <a data-pmb-action="edit" href="profile-about.html">Edit</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="pmbb-body p-l-30">
                        <div class="pmbb-view">
                            Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.
                        </div>
                        
                        <div class="pmbb-edit">
                            <div class="fg-line">
                                <textarea class="form-control" rows="5" placeholder="Summary...">Sed eu est vulputate, fringilla ligula ac, maximus arcu. Donec sed felis vel magna mattis ornare ut non turpis. Sed id arcu elit. Sed nec sagittis tortor. Mauris ante urna, ornare sit amet mollis eu, aliquet ac ligula. Nullam dolor metus, suscipit ac imperdiet nec, consectetur sed ex. Sed cursus porttitor leo.</textarea>
                            </div>
                            <div class="m-t-10">
                                <button class="btn btn-primary btn-sm">Save</button>
                                <button data-pmb-action="reset" class="btn btn-link btn-sm">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End second tab -->
        </div>

        
    </div>
</div>
<div class="modal fade" id="modalWider" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Modal title</h4>
            </div>
            <div class="modal-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales orci ante, sed ornare eros vestibulum ut. Ut accumsan vitae eros sit amet tristique. Nullam scelerisque nunc enim, non dignissim nibh faucibus ullamcorper. Fusce pulvinar libero vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-link">Save changes</button>
                <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

