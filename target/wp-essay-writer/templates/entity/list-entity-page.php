<?php
    /*
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    } 
    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>

<?php do_action('shadowbanker_do_render_component', 'portal-header'); ?>
<?php do_action('shadowbanker_do_render_component', 'portal-menu'); ?>
<section id="content">
    <div class="container">
        <?php do_action('shadowbanker_do_render_component', 'page-block-header'); ?>
        <?php do_action('shadowbanker_do_render_component', 'entity-list-block'); ?>
    </div>
</section>
<?php do_action('shadowbanker_do_render_component', 'portal-footer'); ?>

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
                    d.artifact = '<?php echo $view->get_artifact(); ?>';
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
                        return '<a class="data-table-link" href="' + '<?php echo $view->get_view_artifact_url(); ?>' + row.id + '" data-related-artifact-name="<?php echo $view->get_artifact(); ?>" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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