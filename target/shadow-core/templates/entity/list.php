<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
    <form id="<?php echo $model['entity_post_name']; ?>-list-form">
        <?php foreach ($view->get_form_fields() as $field) { if(isset($field['options_criteria'])) { ?>
        <input type="hidden" name="<?php echo $field['options_criteria']['name']; ?>" id="<?php echo $field['options_criteria']['name']; ?>" value="<?php echo $field['options_criteria']['value']; ?>" /> 
        <?php }} ?>
        <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
        <input type="hidden" name="submitted" id="submitted" value="true" /> 
    </form>
    <div class="table-responsive">
        <table id="<?php echo $model['entity_post_name']; ?>-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <?php foreach ($model['entity_fields'] as $field_name => $field) { if($field['is_list_field']) { ?>
                    <th><?php echo $field['description']; ?></th>
                    <?php }} ?>
                </tr>
            </thead>
            <tbody>
            </tbody>
            <tfoot>
                <tr>
                    <th>ID</th>
                    <?php foreach ($model['entity_fields'] as $field_name => $field) { if($field['is_list_field']) { ?>
                    <th><?php echo $field['description']; ?></th>
                    <?php }} ?>
                </tr>
            </tfoot>
        </table>
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
                    },
                },
                'columns': [
                    {'data': 'id' },
                <?php 
                    foreach ($model['entity_fields'] as $field_name => $field) { 
                        if($field['is_list_field']) { 
                            echo '{"data": "'.$field_name.'"},'; 
                        }
                    } 
                ?>
                ],
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
