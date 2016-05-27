<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();


?>
    <div class="card m-b-0" id="messages-main">
                        
                        <div class="ms-menu">
                            <div class="ms-block">
                                <div class="ms-user">
                                    <img src="img/profile-pics/1.jpg" alt="">
                                    <div>Signed in as <br/> m-hollaway@gmail.com</div>
                                </div>
                            </div>
                            
                            <div class="ms-block">
                                <div class="dropdown">
                                    <a class="btn btn-primary btn-block" href="messages.html" data-toggle="dropdown">Messages <i class="caret m-l-5"></i></a>

                                    <ul class="dropdown-menu dm-icon w-100">
                                        <li><a href="messages.html"><i class="zmdi zmdi-email"></i> Messages</a></li>
                                        <li><a href="messages.html"><i class="zmdi zmdi-account"></i> Contacts</a></li>
                                        <li><a href="messages.html"><i class="zmdi zmdi-format-list-bulleted"> </i>Todo Lists</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="listview lv-user m-t-20">
                                <div class="lv-item media active">
                                    <div class="lv-avatar pull-left">
                                        <img src="img/profile-pics/1.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lv-title">Davil Parnell</div>
                                        <div class="lv-small">Fierent fastidii recteque ad pro</div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar bgm-red pull-left">a</div>
                                    <div class="media-body">
                                        <div class="lv-title">Ann Watkinson</div>
                                        <div class="lv-small">Cum sociis natoque penatibus </div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar bgm-orange pull-left">m</div>
                                    <div class="media-body">
                                        <div class="lv-title">Marse Walter</div>
                                        <div class="lv-small">Suspendisse sapien ligula</div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar pull-left">
                                        <img src="img/profile-pics/2.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lv-title">Jeremy Robbins</div>
                                        <div class="lv-small">Phasellus porttitor tellus nec</div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar pull-left">
                                        <img src="img/profile-pics/3.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lv-title">Reginald Horace</div>
                                        <div class="lv-small">Quisque consequat arcu eget</div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar bgm-cyan pull-left">s</div>
                                    <div class="media-body">
                                        <div class="lv-title">Shark Henry</div>
                                        <div class="lv-small">Nam lobortis odio et leo maximu</div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar bgm-purple pull-left">p</div>
                                    <div class="media-body">
                                        <div class="lv-title">Paul Van Dack</div>
                                        <div class="lv-small">Nam posuere purus sed velit auctor sodales</div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar pull-left">
                                        <img src="img/profile-pics/4.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lv-title">James Anderson</div>
                                        <div class="lv-small">Vivamus imperdiet sagittis quam</div>
                                    </div>
                                </div>
                                
                                <div class="lv-item media">
                                    <div class="lv-avatar pull-left">
                                        <img src="img/profile-pics/6.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lv-title">Kane Williams</div>
                                        <div class="lv-small">Suspendisse justo nulla luctus nec</div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        
                        <div class="ms-body">
                            <div class="listview lv-message">
                                <div class="lv-header-alt clearfix">
                                    <div id="ms-menu-trigger">
                                        <div class="line-wrap">
                                            <div class="line top"></div>
                                            <div class="line center"></div>
                                            <div class="line bottom"></div>
                                        </div>
                                    </div>

                                    <div class="lvh-label hidden-xs">
                                        <div class="lv-avatar pull-left">
                                            <img src="img/profile-pics/1.jpg" alt="">
                                        </div>
                                        <span class="c-black">David Parbell</span>
                                    </div>
                                    
                                    <ul class="lv-actions actions">
                                        <li>
                                            <a href="messages.html">
                                                <i class="zmdi zmdi-delete"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="messages.html">
                                                <i class="zmdi zmdi-check"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="messages.html">
                                                <i class="zmdi zmdi-time"></i>
                                            </a>
                                        </li>
                                        <li class="dropdown">
                                            <a href="messages.html" data-toggle="dropdown" aria-expanded="true">
                                                <i class="zmdi zmdi-sort"></i>
                                            </a>
                                
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a href="messages.html">Latest</a>
                                                </li>
                                                <li>
                                                    <a href="messages.html">Oldest</a>
                                                </li>
                                            </ul>
                                        </li>                             
                                        <li class="dropdown">
                                            <a href="messages.html" data-toggle="dropdown" aria-expanded="true">
                                                <i class="zmdi zmdi-more-vert"></i>
                                            </a>
                                
                                            <ul class="dropdown-menu dropdown-menu-right">
                                                <li>
                                                    <a href="messages.html">Refresh</a>
                                                </li>
                                                <li>
                                                    <a href="messages.html">Message Settings</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                
                                <div class="lv-body">                                    
                                    <div class="lv-item media">
                                        <div class="lv-avatar pull-left">
                                            <img src="img/profile-pics/1.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                                            </div>
                                            <small class="ms-date"><i class="zmdi zmdi-time"></i> 20/02/2015 at 09:00</small>
                                        </div>
                                    </div>
                                    
                                    <div class="lv-item media right">
                                        <div class="lv-avatar pull-right">
                                            <img src="img/profile-pics/8.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                                            </div>
                                            <small class="ms-date"><i class="zmdi zmdi-time"></i> 20/02/2015 at 09:30</small>
                                        </div>
                                    </div>
                                    
                                    <div class="lv-item media">
                                        <div class="lv-avatar pull-left">
                                            <img src="img/profile-pics/1.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Etiam ex arcumentum
                                            </div>
                                            <small class="ms-date"><i class="zmdi zmdi-time"></i> 20/02/2015 at 09:33</small>
                                        </div>
                                    </div>
                                    
                                    <div class="lv-item media right">
                                        <div class="lv-avatar pull-right">
                                            <img src="img/profile-pics/8.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Etiam nec facilisis lacus. Nulla imperdiet augue ullamcorper dui ullamcorper, eu laoreet sem consectetur. Aenean et ligula risus. Praesent sed posuere sem. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            </div>
                                            <small class="ms-date"><i class="zmdi zmdi-time"></i> 20/02/2015 at 10:10</small>
                                        </div>
                                    </div>
                                    
                                    <div class="lv-item media">
                                        <div class="lv-avatar pull-left">
                                            <img src="img/profile-pics/1.jpg" alt="">
                                        </div>
                                        <div class="media-body">
                                            <div class="ms-item">
                                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac tortor ut elit sodales varius. Mauris id ipsum id mauris malesuada tincidunt. Vestibulum elit massa, pulvinar at sapien sed, luctus vestibulum eros. Etiam finibus tristique ante, vitae rhoncus sapien volutpat eget
                                            </div>
                                            <small class="ms-date"><i class="zmdi zmdi-time"></i> 20/02/2015 at 10:24</small>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="lv-footer ms-reply">
                                    <textarea placeholder="What's on your mind..."></textarea>
                                    
                                    <button><i class="zmdi zmdi-mail-send"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

    <script type="text/javascript">
        $(document).ready(function() { 
            // Setup - add a text input to each footer cell 
            $('#<?php echo $model['entity_post_name']; ?>-table tfoot th').each(function () { 
                var title = $('#<?php echo $model['entity_post_name']; ?>-table thead th').eq($(this).index()).text(); 
                $(this).html('<div class="form-group"><div class="fg-line"><input type="text" class="form-control" placeholder="Search '+title+'" /></div></div>'); 
            }); 

            // DataTable 
            var table = $('#<?php echo $model['entity_post_name']; ?>-table').DataTable({                
                "processing": true, // for show processing bar
                "serverSide": true, // for process on server side
                "orderMulti": false, // for disable multi column order
                //"dom": '<"top"i>rt<"bottom"lp><"clear">', // for hide default global search box // little confusion? don't worry I explained in the tutorial website
                'ajax': {
                    'url':'<?php echo admin_url('admin-ajax.php'); ?>',
                    'type':'POST',
                    'datatype':'json',
                    'data': function(d){
                        d.action = 'find_entity_ajax';
                        d.artifact = '<?php echo $view->get_artifact_name(); ?>';
                        <?php foreach ($view->get_form_fields() as $field) { if(isset($field['options_criteria'])) { 
                                foreach ($field['options_criteria'] as $criteria_name => $criteria_value) {?>
                        d.<?php echo $criteria_name; ?> = '<?php echo $criteria_value; ?>'; <?php }}} ?>
                    },
                },
                'columns': [
                    {'data': 'id' },
                <?php 
                    foreach ($model['entity_fields'] as $field_name => $field) { 
                        if($field['is_list_field'] && !$field['is_relationship_field']) { 
                            echo '{"data": "'.$field_name.'"},'; 
                        }
                        if($field['is_list_field'] && $field['is_relationship_field']) { 
                            echo '{"data": "'.$field_name.'_txt"},'; 
                        }
                    } 
                ?>
                ],
                'columnDefs': [
                    { "visible": false,  "targets": 0 },
                    {
                        // The `data` parameter refers to the data for the cell (defined by the
                        // `data` option, which defaults to the column being worked with, in
                        // this case `data: 0`.
                        "render": function ( data, type, row ) {
                            var additional_seach_options = '';
                            if($('#additional_seach_options').length) { additional_seach_options = $('#additional_seach_options').val(); }

                            var parent_params = '';
                            if($('#<?php echo $view->get_artifact_name(); ?>_parent_params').length) {
                                parent_params = parent_params + $('#<?php echo $view->get_artifact_name(); ?>_parent_params').val(); 
                            }
                            return '<a class="data-table-link" href="' + '<?php echo EntityActionProcessor::get_base_url(); ?>' + 'artifact=<?php echo $view->get_artifact_name(); ?>&id=' + row.id + '&page_action=view' + parent_params + additional_seach_options +'" data-related-artifact-name="<?php echo $view->get_artifact_name(); ?>" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                        },
                        "targets": 1
                    }
                ]
            }); 
            
            $('#artifact-search-input').on('keyup change', function () { 
                table.search(this.value).draw(); 
            }); 
            // Apply the search 
            table.columns().eq( 0 ).each( 
                function ( colIdx ) { 
                    $('input', table.column(colIdx).footer()).on('keyup change', function () { 
                        table.column(colIdx).search(this.value).draw(); 
                    }); 
                } 
            ); 
        });
    </script>
