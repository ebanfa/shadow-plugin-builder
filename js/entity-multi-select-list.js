
// Updates "Select all" control in a data table
//
function updateDataTableSelectAllCtrl(table){
   var $table             = table.table().node();
   var $chkbox_all        = $('tbody input[type="checkbox"]', $table);
   var $chkbox_checked    = $('tbody input[type="checkbox"]:checked', $table);
   var chkbox_select_all  = $('thead input[name="select_all"]', $table).get(0);

   // If none of the checkboxes are checked
   if($chkbox_checked.length === 0){
      chkbox_select_all.checked = false;
      if('indeterminate' in chkbox_select_all){
         chkbox_select_all.indeterminate = false;
      }

   // If all of the checkboxes are checked
   } else if ($chkbox_checked.length === $chkbox_all.length){
      chkbox_select_all.checked = true;
      if('indeterminate' in chkbox_select_all){
         chkbox_select_all.indeterminate = false;
      }

   // If some of the checkboxes are checked
   } else {
      chkbox_select_all.checked = true;
      if('indeterminate' in chkbox_select_all){
         chkbox_select_all.indeterminate = true;
      }
   }
}

$(document).ready(function (){
   // Array holding selected row IDs
   var rows_selected = [];
<#list module.entities as modEntity>
<#if modEntity.name == "Unit">

   var table =  $('#${modEntity.postName}-list-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': ${application.name?lower_case}_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_${modEntity.postName}_ajax';
               d.form = $("#${modEntity.postName}-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
<#list modEntity.fields as field>
    <#if field.listField == "Y">
        <#if field.relationshipField == "N">
            { data: "${field.name}" },
        </#if>

        <#if field.relationshipField == "Y">
            { data: "${field.name}_txt" },
        </#if>
    </#if>
</#list>
        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, full, meta){
                 return '<input type="checkbox">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#${modEntity.name?lower_case}_parent_params').length) {
                        parent_params = parent_params + $('#${modEntity.name?lower_case}_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="../page/?type=entity&artifact=${modEntity.name?lower_case}&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="${modEntity.name?lower_case}" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#${modEntity.postName}-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');

      // Get row data
      var data = table.row($row).data();

      // Get row ID
      var rowId = data[0];

      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, rows_selected);

      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         rows_selected.push(rowId);

      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         rows_selected.splice(index, 1);
      }

      if(this.checked){
         $row.addClass('selected');
      } else {
         $row.removeClass('selected');
      }

      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(table);

      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#${modEntity.postName}-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });


   // Handle click on "Select all" control actions
   $('thead input[name="select_all"]').on('click', function(e){
      if(this.checked){
         $('#${modEntity.postName}-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#${modEntity.postName}-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }

      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   table.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(table);
   });

   // Handle form submission event 
   /*$('#frm-example').on('submit', function(e){
      var form = this;
      
      // Iterate over all selected checkboxes
      $.each(rows_selected, function(index, rowId){
         // Create a hidden element 
         $(form).append(
             $('<input>')
                .attr('type', 'hidden')
                .attr('name', 'id[]')
                .val(rowId)
         );
      });
   });*/


</#if>
</#list>

});