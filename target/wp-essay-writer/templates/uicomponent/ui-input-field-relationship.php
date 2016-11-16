<?php
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

    $view = $_REQUEST['page_info']['view'];
    $model = $view->get_model();
?>
<div class="row">
    <div class="col-xs-11">
        <div class="form-group">
            <div class="fg-line">
                <input type="text" 
                    class="form-control text related-field-search-link" 
                    data-related-field-name="<?php echo $field['name'];?>"
                    id="<?php echo $field['name'];?>_txt" name="<?php echo $field['name'];?>_txt" 
                    <?php if(isset($model['id'])) { $value = $field['name'] . '_txt'; echo 'value="' . $model[$value] . '" '; }?>
                    placeholder="<?php echo $field['description']; ?>" 
                    data-bv-message="<?php echo $field['description']; ?> is not valid" 
                    data-bv-notempty-message="<?php echo $field['description']; ?> is required and cannot be empty">

                <input type="hidden" id="<?php echo $field['name'];?>" 
                    name="<?php echo $field['name'];?>" 
                    <?php if(isset($model['id'])) { echo 'value="' . $model[$field['name']]. '" '; }?>>
            </div>
        </div>
    </div>
    <a data-related-field-name="<?php echo $field['name'];?>" 
        class="related-field-search-link" 
        style="font-size:20px" href="#<?php echo $field['name'];?>_modal">
        <i class="md md-trending-up"></i>
    </a>

</div>


<script type="text/javascript">
    $(document).ready(function() { 
        // Setup - add a text input to each footer cell 
        $('#<?php echo $field['name']; ?>-table tfoot th').each(function () { 
            var title = $('#<?php echo $field['name']; ?>-table thead th').eq($(this).index()).text(); 
            $(this).html('<div class="form-group"><div class="fg-line"><input type="text" class="form-control" placeholder="Search '+title+'" /></div></div>'); 
        }); 

        // DataTable 
        var table = $('#<?php echo $field['name']; ?>-table').DataTable({                
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
                    d.artifact = '<?php echo strtolower($field['entity_name']); ?>';
                    <?php 
                    if(isset($field['options_criteria'])) { 
                        foreach ($field['options_criteria'] as $criteria_name => $criteria_value) {?>
                    d.<?php echo $criteria_name; ?> = '<?php echo $criteria_value; ?>';    
                    <?php }} ?>
                    
                },
            },
            'columns': [
                {'data': 'id' },
            <?php 
                $field_model = EntityAPIUtils::init_entity_data(strtolower($field['entity_name']));
                foreach ($field_model['entity_fields'] as $field_name => $entity_field) { 
                    if($entity_field['is_list_field'] && !$entity_field['is_relationship_field']) { 
                        echo '{"data": "'.$entity_field['name'].'"},'; 
                    }
                    if($entity_field['is_list_field'] && $entity_field['is_relationship_field']) { 
                        echo '{"data": "'.$entity_field['name'].'_txt"},'; 
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

                        
                        return '<a class="data-table-link" href="' + '<?php echo ArtficatAjaxRequestProcessorUtils::get_base_url(); ?>' + 'artifact=<?php echo strtolower($field['entity_name']); ?>&id=' + row.id + '&page_action=view' +  additional_seach_options +'" data-related-artifact-name="<?php echo strtolower($field['entity_name']); ?>" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                    },
                    "targets": 1
                }
            ]
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