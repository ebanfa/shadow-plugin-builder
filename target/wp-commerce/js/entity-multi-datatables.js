
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


    var baseUrl = wpcommerce_base_url.baseUrl;
   // Array holding selected row IDs
   var sb_currency_rows_selected = [];
   var sb_currencyTable =  $('#sb_currency-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_currency-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "symbol" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="currency_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#currency_parent_params').length) {
                        parent_params = parent_params + $('#currency_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=currency&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="currency" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_currency_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_currency-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_currencyTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_currency_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_currency_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_currency_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_currencyTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_currency-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_currencyTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_currency-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_currency-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_currencyTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_currencyTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-currency-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_currency_rows_selected, function(index, rowId){

        $.each($('input[name="currency_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'currency_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#currency_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#currency_dependent_list_box').append($(
                '<div id="currency_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="currency" ' + 
                        'data-entity-id="' + rowId + '" class="badge currency_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#currency_dependent_list_box').on('click', '.currency_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="currency_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#currency_dependent_list_box').find('#currency_list_item_' + entityId).remove();

      
   });
   var sb_loctype_rows_selected = [];
   var sb_loctypeTable =  $('#sb_loctype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_loctype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="locationtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#locationtype_parent_params').length) {
                        parent_params = parent_params + $('#locationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=locationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="locationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_loctype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_loctype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_loctypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_loctype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_loctype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_loctype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_loctypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_loctype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_loctypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_loctype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_loctype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_loctypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_loctypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-locationtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_loctype_rows_selected, function(index, rowId){

        $.each($('input[name="locationtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'locationtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#locationtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#locationtype_dependent_list_box').append($(
                '<div id="locationtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="locationtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge locationtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#locationtype_dependent_list_box').on('click', '.locationtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="locationtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#locationtype_dependent_list_box').find('#locationtype_list_item_' + entityId).remove();

      
   });
   var sb_location_rows_selected = [];
   var sb_locationTable =  $('#sb_location-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_location-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "location_type_txt" },

            { data: "location_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="location_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#location_parent_params').length) {
                        parent_params = parent_params + $('#location_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=location&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="location" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_location_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_location-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_locationTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_location_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_location_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_location_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_locationTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_location-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_locationTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_location-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_location-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_locationTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_locationTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-location-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_location_rows_selected, function(index, rowId){

        $.each($('input[name="location_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'location_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#location_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#location_dependent_list_box').append($(
                '<div id="location_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="location" ' + 
                        'data-entity-id="' + rowId + '" class="badge location_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#location_dependent_list_box').on('click', '.location_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="location_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#location_dependent_list_box').find('#location_list_item_' + entityId).remove();

      
   });
   var sb_business_rows_selected = [];
   var sb_businessTable =  $('#sb_business-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_business-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "currency_txt" },
            { data: "name" },

            { data: "pin" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="business_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#business_parent_params').length) {
                        parent_params = parent_params + $('#business_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=business&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="business" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_business_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_business-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_businessTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_business_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_business_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_business_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_businessTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_business-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_businessTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_business-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_business-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_businessTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_businessTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-business-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_business_rows_selected, function(index, rowId){

        $.each($('input[name="business_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'business_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#business_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#business_dependent_list_box').append($(
                '<div id="business_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="business" ' + 
                        'data-entity-id="' + rowId + '" class="badge business_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#business_dependent_list_box').on('click', '.business_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="business_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#business_dependent_list_box').find('#business_list_item_' + entityId).remove();

      
   });
   var sb_businessunit_rows_selected = [];
   var sb_businessunitTable =  $('#sb_businessunit-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_businessunit-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },


            { data: "currency_txt" },
            { data: "address_1" },

            { data: "address_2" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="businessunit_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#businessunit_parent_params').length) {
                        parent_params = parent_params + $('#businessunit_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=businessunit&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="businessunit" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_businessunit_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_businessunit-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_businessunitTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_businessunit_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_businessunit_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_businessunit_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_businessunitTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_businessunit-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_businessunitTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_businessunit-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_businessunit-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_businessunitTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_businessunitTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-businessunit-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_businessunit_rows_selected, function(index, rowId){

        $.each($('input[name="businessunit_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'businessunit_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#businessunit_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#businessunit_dependent_list_box').append($(
                '<div id="businessunit_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="businessunit" ' + 
                        'data-entity-id="' + rowId + '" class="badge businessunit_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#businessunit_dependent_list_box').on('click', '.businessunit_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="businessunit_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#businessunit_dependent_list_box').find('#businessunit_list_item_' + entityId).remove();

      
   });
   var sb_partycat_rows_selected = [];
   var sb_partycatTable =  $('#sb_partycat-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partycat-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partycategory_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partycategory_parent_params').length) {
                        parent_params = parent_params + $('#partycategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partycategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partycat_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partycat-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partycatTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partycat_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partycat_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partycat_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partycatTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partycat-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partycatTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partycat-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partycat-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partycatTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partycatTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partycategory-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partycat_rows_selected, function(index, rowId){

        $.each($('input[name="partycategory_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partycategory_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partycategory_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partycategory_dependent_list_box').append($(
                '<div id="partycategory_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partycategory" ' + 
                        'data-entity-id="' + rowId + '" class="badge partycategory_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partycategory_dependent_list_box').on('click', '.partycategory_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partycategory_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partycategory_dependent_list_box').find('#partycategory_list_item_' + entityId).remove();

      
   });
   var sb_partytype_rows_selected = [];
   var sb_partytypeTable =  $('#sb_partytype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partytype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "party_category_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partytype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partytype_parent_params').length) {
                        parent_params = parent_params + $('#partytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partytype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partytype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partytypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partytype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partytype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partytype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partytypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partytype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partytypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partytype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partytype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partytypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partytypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partytype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partytype_rows_selected, function(index, rowId){

        $.each($('input[name="partytype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partytype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partytype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partytype_dependent_list_box').append($(
                '<div id="partytype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partytype" ' + 
                        'data-entity-id="' + rowId + '" class="badge partytype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partytype_dependent_list_box').on('click', '.partytype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partytype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partytype_dependent_list_box').find('#partytype_list_item_' + entityId).remove();

      
   });
   var sb_roletype_rows_selected = [];
   var sb_roletypeTable =  $('#sb_roletype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_roletype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="roletype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#roletype_parent_params').length) {
                        parent_params = parent_params + $('#roletype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=roletype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="roletype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_roletype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_roletype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_roletypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_roletype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_roletype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_roletype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_roletypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_roletype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_roletypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_roletype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_roletype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_roletypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_roletypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-roletype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_roletype_rows_selected, function(index, rowId){

        $.each($('input[name="roletype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'roletype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#roletype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#roletype_dependent_list_box').append($(
                '<div id="roletype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="roletype" ' + 
                        'data-entity-id="' + rowId + '" class="badge roletype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#roletype_dependent_list_box').on('click', '.roletype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="roletype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#roletype_dependent_list_box').find('#roletype_list_item_' + entityId).remove();

      
   });
   var sb_party_rows_selected = [];
   var sb_partyTable =  $('#sb_party-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_party-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "party_type_txt" },
            { data: "name" },

            { data: "description" },


            { data: "business_unit_txt" },
        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="party_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#party_parent_params').length) {
                        parent_params = parent_params + $('#party_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=party&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="party" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_party_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_party-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_party_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_party_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_party_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_party-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_party-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_party-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-party-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_party_rows_selected, function(index, rowId){

        $.each($('input[name="party_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'party_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#party_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#party_dependent_list_box').append($(
                '<div id="party_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="party" ' + 
                        'data-entity-id="' + rowId + '" class="badge party_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#party_dependent_list_box').on('click', '.party_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="party_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#party_dependent_list_box').find('#party_list_item_' + entityId).remove();

      
   });
   var sb_partyrole_rows_selected = [];
   var sb_partyroleTable =  $('#sb_partyrole-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyrole-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "party_txt" },

            { data: "parent_prole_txt" },

            { data: "role_txt" },

            { data: "parent_unit_txt" },
            { data: "name" },

            { data: "description" },


            { data: "business_unit_txt" },
        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partyrole_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyrole_parent_params').length) {
                        parent_params = parent_params + $('#partyrole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partyrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partyrole_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partyrole-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyroleTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partyrole_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partyrole_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partyrole_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyroleTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partyrole-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyroleTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partyrole-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partyrole-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyroleTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyroleTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partyrole-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partyrole_rows_selected, function(index, rowId){

        $.each($('input[name="partyrole_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partyrole_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partyrole_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partyrole_dependent_list_box').append($(
                '<div id="partyrole_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partyrole" ' + 
                        'data-entity-id="' + rowId + '" class="badge partyrole_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partyrole_dependent_list_box').on('click', '.partyrole_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partyrole_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partyrole_dependent_list_box').find('#partyrole_list_item_' + entityId).remove();

      
   });
   var sb_reltype_rows_selected = [];
   var sb_reltypeTable =  $('#sb_reltype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_reltype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="relationshiptype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#relationshiptype_parent_params').length) {
                        parent_params = parent_params + $('#relationshiptype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=relationshiptype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="relationshiptype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_reltype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_reltype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_reltypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_reltype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_reltype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_reltype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_reltypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_reltype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_reltypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_reltype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_reltype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_reltypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_reltypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-relationshiptype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_reltype_rows_selected, function(index, rowId){

        $.each($('input[name="relationshiptype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'relationshiptype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#relationshiptype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#relationshiptype_dependent_list_box').append($(
                '<div id="relationshiptype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="relationshiptype" ' + 
                        'data-entity-id="' + rowId + '" class="badge relationshiptype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#relationshiptype_dependent_list_box').on('click', '.relationshiptype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="relationshiptype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#relationshiptype_dependent_list_box').find('#relationshiptype_list_item_' + entityId).remove();

      
   });
   var sb_relstatus_rows_selected = [];
   var sb_relstatusTable =  $('#sb_relstatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_relstatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="relationshipstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#relationshipstatus_parent_params').length) {
                        parent_params = parent_params + $('#relationshipstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=relationshipstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="relationshipstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_relstatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_relstatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_relstatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_relstatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_relstatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_relstatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_relstatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_relstatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_relstatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_relstatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_relstatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_relstatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_relstatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-relationshipstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_relstatus_rows_selected, function(index, rowId){

        $.each($('input[name="relationshipstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'relationshipstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#relationshipstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#relationshipstatus_dependent_list_box').append($(
                '<div id="relationshipstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="relationshipstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge relationshipstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#relationshipstatus_dependent_list_box').on('click', '.relationshipstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="relationshipstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#relationshipstatus_dependent_list_box').find('#relationshipstatus_list_item_' + entityId).remove();

      
   });
   var sb_partyrel_rows_selected = [];
   var sb_partyrelTable =  $('#sb_partyrel-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyrel-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "rel_type_txt" },

            { data: "from_role_txt" },

            { data: "to_role_txt" },

            { data: "status_txt" },
            { data: "name" },

            { data: "from_date" },

            { data: "to_date" },

            { data: "description" },


            { data: "business_unit_txt" },
        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partyrelationship_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyrelationship_parent_params').length) {
                        parent_params = parent_params + $('#partyrelationship_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partyrelationship&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyrelationship" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partyrel_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partyrel-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyrelTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partyrel_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partyrel_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partyrel_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyrelTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partyrel-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyrelTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partyrel-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partyrel-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyrelTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyrelTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partyrelationship-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partyrel_rows_selected, function(index, rowId){

        $.each($('input[name="partyrelationship_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partyrelationship_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partyrelationship_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partyrelationship_dependent_list_box').append($(
                '<div id="partyrelationship_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partyrelationship" ' + 
                        'data-entity-id="' + rowId + '" class="badge partyrelationship_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partyrelationship_dependent_list_box').on('click', '.partyrelationship_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partyrelationship_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partyrelationship_dependent_list_box').find('#partyrelationship_list_item_' + entityId).remove();

      
   });
   var sb_partygroup_rows_selected = [];
   var sb_partygroupTable =  $('#sb_partygroup-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partygroup-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "business_unit_txt" },
            { data: "name" },

            { data: "pin" },

            { data: "description" },

            { data: "date_created" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partygroup_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partygroup_parent_params').length) {
                        parent_params = parent_params + $('#partygroup_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partygroup&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partygroup" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partygroup_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partygroup-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partygroupTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partygroup_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partygroup_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partygroup_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partygroupTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partygroup-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partygroupTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partygroup-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partygroup-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partygroupTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partygroupTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partygroup-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partygroup_rows_selected, function(index, rowId){

        $.each($('input[name="partygroup_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partygroup_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partygroup_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partygroup_dependent_list_box').append($(
                '<div id="partygroup_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partygroup" ' + 
                        'data-entity-id="' + rowId + '" class="badge partygroup_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partygroup_dependent_list_box').on('click', '.partygroup_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partygroup_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partygroup_dependent_list_box').find('#partygroup_list_item_' + entityId).remove();

      
   });
   var sb_person_rows_selected = [];
   var sb_personTable =  $('#sb_person-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_person-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "business_unit_txt" },
            { data: "first_name" },

            { data: "last_name" },

            { data: "gender" },

            { data: "date_of_birth" },

            { data: "id_number" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="person_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#person_parent_params').length) {
                        parent_params = parent_params + $('#person_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=person&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="person" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_person_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_person-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_personTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_person_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_person_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_person_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_personTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_person-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_personTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_person-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_person-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_personTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_personTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-person-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_person_rows_selected, function(index, rowId){

        $.each($('input[name="person_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'person_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#person_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#person_dependent_list_box').append($(
                '<div id="person_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="person" ' + 
                        'data-entity-id="' + rowId + '" class="badge person_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#person_dependent_list_box').on('click', '.person_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="person_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#person_dependent_list_box').find('#person_list_item_' + entityId).remove();

      
   });
   var sb_partyprofile_rows_selected = [];
   var sb_partyprofileTable =  $('#sb_partyprofile-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyprofile-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "party_txt" },

            { data: "default_unit_txt" },
            { data: "name" },

            { data: "display_name" },

            { data: "description" },


            { data: "business_unit_txt" },
        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partyprofile_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyprofile_parent_params').length) {
                        parent_params = parent_params + $('#partyprofile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partyprofile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyprofile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partyprofile_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partyprofile-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyprofileTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partyprofile_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partyprofile_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partyprofile_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyprofileTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partyprofile-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyprofileTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partyprofile-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partyprofile-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyprofileTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyprofileTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partyprofile-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partyprofile_rows_selected, function(index, rowId){

        $.each($('input[name="partyprofile_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partyprofile_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partyprofile_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partyprofile_dependent_list_box').append($(
                '<div id="partyprofile_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partyprofile" ' + 
                        'data-entity-id="' + rowId + '" class="badge partyprofile_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partyprofile_dependent_list_box').on('click', '.partyprofile_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partyprofile_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partyprofile_dependent_list_box').find('#partyprofile_list_item_' + entityId).remove();

      
   });
   var sb_cmechtype_rows_selected = [];
   var sb_cmechtypeTable =  $('#sb_cmechtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_cmechtype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="contactmechanismtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contactmechanismtype_parent_params').length) {
                        parent_params = parent_params + $('#contactmechanismtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=contactmechanismtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactmechanismtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_cmechtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_cmechtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_cmechtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_cmechtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_cmechtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_cmechtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_cmechtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_cmechtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_cmechtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_cmechtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_cmechtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_cmechtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_cmechtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contactmechanismtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_cmechtype_rows_selected, function(index, rowId){

        $.each($('input[name="contactmechanismtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'contactmechanismtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contactmechanismtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contactmechanismtype_dependent_list_box').append($(
                '<div id="contactmechanismtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contactmechanismtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge contactmechanismtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contactmechanismtype_dependent_list_box').on('click', '.contactmechanismtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contactmechanismtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contactmechanismtype_dependent_list_box').find('#contactmechanismtype_list_item_' + entityId).remove();

      
   });
   var sb_contactmech_rows_selected = [];
   var sb_contactmechTable =  $('#sb_contactmech-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contactmech-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "address_1" },

            { data: "address_2" },

            { data: "area_code" },

            { data: "contact_number" },

            { data: "country_code" },

            { data: "address_string" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="contactmechanism_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contactmechanism_parent_params').length) {
                        parent_params = parent_params + $('#contactmechanism_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=contactmechanism&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactmechanism" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contactmech_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contactmech-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contactmechTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contactmech_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contactmech_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contactmech_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contactmechTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contactmech-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contactmechTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contactmech-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contactmech-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contactmechTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contactmechTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contactmechanism-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contactmech_rows_selected, function(index, rowId){

        $.each($('input[name="contactmechanism_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'contactmechanism_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contactmechanism_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contactmechanism_dependent_list_box').append($(
                '<div id="contactmechanism_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contactmechanism" ' + 
                        'data-entity-id="' + rowId + '" class="badge contactmechanism_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contactmechanism_dependent_list_box').on('click', '.contactmechanism_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contactmechanism_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contactmechanism_dependent_list_box').find('#contactmechanism_list_item_' + entityId).remove();

      
   });
   var sb_pcmpurposetype_rows_selected = [];
   var sb_pcmpurposetypeTable =  $('#sb_pcmpurposetype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_pcmpurposetype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partycontactmechanismpurposetype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partycontactmechanismpurposetype_parent_params').length) {
                        parent_params = parent_params + $('#partycontactmechanismpurposetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partycontactmechanismpurposetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycontactmechanismpurposetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_pcmpurposetype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_pcmpurposetype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_pcmpurposetypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_pcmpurposetype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_pcmpurposetype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_pcmpurposetype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pcmpurposetypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_pcmpurposetype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_pcmpurposetypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_pcmpurposetype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_pcmpurposetype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_pcmpurposetypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pcmpurposetypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partycontactmechanismpurposetype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_pcmpurposetype_rows_selected, function(index, rowId){

        $.each($('input[name="partycontactmechanismpurposetype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partycontactmechanismpurposetype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partycontactmechanismpurposetype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partycontactmechanismpurposetype_dependent_list_box').append($(
                '<div id="partycontactmechanismpurposetype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partycontactmechanismpurposetype" ' + 
                        'data-entity-id="' + rowId + '" class="badge partycontactmechanismpurposetype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partycontactmechanismpurposetype_dependent_list_box').on('click', '.partycontactmechanismpurposetype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partycontactmechanismpurposetype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partycontactmechanismpurposetype_dependent_list_box').find('#partycontactmechanismpurposetype_list_item_' + entityId).remove();

      
   });
   var sb_partycmech_rows_selected = [];
   var sb_partycmechTable =  $('#sb_partycmech-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partycmech-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partycontactmechanism_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partycontactmechanism_parent_params').length) {
                        parent_params = parent_params + $('#partycontactmechanism_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partycontactmechanism&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycontactmechanism" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partycmech_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partycmech-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partycmechTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partycmech_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partycmech_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partycmech_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partycmechTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partycmech-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partycmechTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partycmech-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partycmech-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partycmechTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partycmechTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partycontactmechanism-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partycmech_rows_selected, function(index, rowId){

        $.each($('input[name="partycontactmechanism_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partycontactmechanism_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partycontactmechanism_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partycontactmechanism_dependent_list_box').append($(
                '<div id="partycontactmechanism_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partycontactmechanism" ' + 
                        'data-entity-id="' + rowId + '" class="badge partycontactmechanism_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partycontactmechanism_dependent_list_box').on('click', '.partycontactmechanism_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partycontactmechanism_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partycontactmechanism_dependent_list_box').find('#partycontactmechanism_list_item_' + entityId).remove();

      
   });
   var sb_pcmpurpose_rows_selected = [];
   var sb_pcmpurposeTable =  $('#sb_pcmpurpose-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_pcmpurpose-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partycontactmechanismpurpose_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partycontactmechanismpurpose_parent_params').length) {
                        parent_params = parent_params + $('#partycontactmechanismpurpose_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=partycontactmechanismpurpose&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycontactmechanismpurpose" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_pcmpurpose_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_pcmpurpose-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_pcmpurposeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_pcmpurpose_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_pcmpurpose_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_pcmpurpose_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pcmpurposeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_pcmpurpose-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_pcmpurposeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_pcmpurpose-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_pcmpurpose-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_pcmpurposeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pcmpurposeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partycontactmechanismpurpose-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_pcmpurpose_rows_selected, function(index, rowId){

        $.each($('input[name="partycontactmechanismpurpose_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'partycontactmechanismpurpose_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partycontactmechanismpurpose_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partycontactmechanismpurpose_dependent_list_box').append($(
                '<div id="partycontactmechanismpurpose_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partycontactmechanismpurpose" ' + 
                        'data-entity-id="' + rowId + '" class="badge partycontactmechanismpurpose_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partycontactmechanismpurpose_dependent_list_box').on('click', '.partycontactmechanismpurpose_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partycontactmechanismpurpose_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partycontactmechanismpurpose_dependent_list_box').find('#partycontactmechanismpurpose_list_item_' + entityId).remove();

      
   });
   var sb_socmediaccttype_rows_selected = [];
   var sb_socmediaccttypeTable =  $('#sb_socmediaccttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_socmediaccttype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="socialmediaaccounttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#socialmediaaccounttype_parent_params').length) {
                        parent_params = parent_params + $('#socialmediaaccounttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=socialmediaaccounttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="socialmediaaccounttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_socmediaccttype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_socmediaccttype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_socmediaccttypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_socmediaccttype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_socmediaccttype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_socmediaccttype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_socmediaccttypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_socmediaccttype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_socmediaccttypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_socmediaccttype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_socmediaccttype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_socmediaccttypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_socmediaccttypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-socialmediaaccounttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_socmediaccttype_rows_selected, function(index, rowId){

        $.each($('input[name="socialmediaaccounttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'socialmediaaccounttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#socialmediaaccounttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#socialmediaaccounttype_dependent_list_box').append($(
                '<div id="socialmediaaccounttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="socialmediaaccounttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge socialmediaaccounttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#socialmediaaccounttype_dependent_list_box').on('click', '.socialmediaaccounttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="socialmediaaccounttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#socialmediaaccounttype_dependent_list_box').find('#socialmediaaccounttype_list_item_' + entityId).remove();

      
   });
   var sb_socmediaacct_rows_selected = [];
   var sb_socmediaacctTable =  $('#sb_socmediaacct-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_socmediaacct-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "soc_account_type_txt" },

            { data: "soc_party_txt" },
            { data: "name" },

            { data: "user_name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="socialmediaaccount_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#socialmediaaccount_parent_params').length) {
                        parent_params = parent_params + $('#socialmediaaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=socialmediaaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="socialmediaaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_socmediaacct_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_socmediaacct-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_socmediaacctTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_socmediaacct_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_socmediaacct_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_socmediaacct_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_socmediaacctTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_socmediaacct-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_socmediaacctTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_socmediaacct-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_socmediaacct-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_socmediaacctTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_socmediaacctTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-socialmediaaccount-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_socmediaacct_rows_selected, function(index, rowId){

        $.each($('input[name="socialmediaaccount_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'socialmediaaccount_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#socialmediaaccount_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#socialmediaaccount_dependent_list_box').append($(
                '<div id="socialmediaaccount_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="socialmediaaccount" ' + 
                        'data-entity-id="' + rowId + '" class="badge socialmediaaccount_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#socialmediaaccount_dependent_list_box').on('click', '.socialmediaaccount_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="socialmediaaccount_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#socialmediaaccount_dependent_list_box').find('#socialmediaaccount_list_item_' + entityId).remove();

      
   });
   var sb_billaccount_rows_selected = [];
   var sb_billaccountTable =  $('#sb_billaccount-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_billaccount-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "balance" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="billingaccount_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#billingaccount_parent_params').length) {
                        parent_params = parent_params + $('#billingaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=billingaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="billingaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_billaccount_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_billaccount-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_billaccountTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_billaccount_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_billaccount_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_billaccount_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_billaccountTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_billaccount-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_billaccountTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_billaccount-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_billaccount-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_billaccountTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_billaccountTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-billingaccount-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_billaccount_rows_selected, function(index, rowId){

        $.each($('input[name="billingaccount_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'billingaccount_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#billingaccount_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#billingaccount_dependent_list_box').append($(
                '<div id="billingaccount_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="billingaccount" ' + 
                        'data-entity-id="' + rowId + '" class="badge billingaccount_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#billingaccount_dependent_list_box').on('click', '.billingaccount_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="billingaccount_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#billingaccount_dependent_list_box').find('#billingaccount_list_item_' + entityId).remove();

      
   });
   var sb_accttxntype_rows_selected = [];
   var sb_accttxntypeTable =  $('#sb_accttxntype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_accttxntype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="accounttransactiontype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accounttransactiontype_parent_params').length) {
                        parent_params = parent_params + $('#accounttransactiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=accounttransactiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransactiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_accttxntype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_accttxntype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_accttxntypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_accttxntype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_accttxntype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_accttxntype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_accttxntypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_accttxntype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_accttxntypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_accttxntype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_accttxntype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_accttxntypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_accttxntypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-accounttransactiontype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_accttxntype_rows_selected, function(index, rowId){

        $.each($('input[name="accounttransactiontype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'accounttransactiontype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#accounttransactiontype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#accounttransactiontype_dependent_list_box').append($(
                '<div id="accounttransactiontype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="accounttransactiontype" ' + 
                        'data-entity-id="' + rowId + '" class="badge accounttransactiontype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#accounttransactiontype_dependent_list_box').on('click', '.accounttransactiontype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="accounttransactiontype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#accounttransactiontype_dependent_list_box').find('#accounttransactiontype_list_item_' + entityId).remove();

      
   });
   var sb_accttxnstatus_rows_selected = [];
   var sb_accttxnstatusTable =  $('#sb_accttxnstatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_accttxnstatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="accounttransactionstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accounttransactionstatus_parent_params').length) {
                        parent_params = parent_params + $('#accounttransactionstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=accounttransactionstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransactionstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_accttxnstatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_accttxnstatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_accttxnstatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_accttxnstatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_accttxnstatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_accttxnstatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_accttxnstatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_accttxnstatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_accttxnstatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_accttxnstatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_accttxnstatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_accttxnstatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_accttxnstatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-accounttransactionstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_accttxnstatus_rows_selected, function(index, rowId){

        $.each($('input[name="accounttransactionstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'accounttransactionstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#accounttransactionstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#accounttransactionstatus_dependent_list_box').append($(
                '<div id="accounttransactionstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="accounttransactionstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge accounttransactionstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#accounttransactionstatus_dependent_list_box').on('click', '.accounttransactionstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="accounttransactionstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#accounttransactionstatus_dependent_list_box').find('#accounttransactionstatus_list_item_' + entityId).remove();

      
   });
   var sb_accttransaction_rows_selected = [];
   var sb_accttransactionTable =  $('#sb_accttransaction-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_accttransaction-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "acct_txn_type_txt" },

            { data: "transaction_status_txt" },
            { data: "name" },

            { data: "txn_date" },


            { data: "account_txt" },
            { data: "amount" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="accounttransaction_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accounttransaction_parent_params').length) {
                        parent_params = parent_params + $('#accounttransaction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=accounttransaction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransaction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_accttransaction_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_accttransaction-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_accttransactionTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_accttransaction_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_accttransaction_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_accttransaction_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_accttransactionTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_accttransaction-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_accttransactionTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_accttransaction-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_accttransaction-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_accttransactionTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_accttransactionTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-accounttransaction-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_accttransaction_rows_selected, function(index, rowId){

        $.each($('input[name="accounttransaction_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'accounttransaction_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#accounttransaction_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#accounttransaction_dependent_list_box').append($(
                '<div id="accounttransaction_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="accounttransaction" ' + 
                        'data-entity-id="' + rowId + '" class="badge accounttransaction_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#accounttransaction_dependent_list_box').on('click', '.accounttransaction_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="accounttransaction_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#accounttransaction_dependent_list_box').find('#accounttransaction_list_item_' + entityId).remove();

      
   });
   var sb_conversation_rows_selected = [];
   var sb_conversationTable =  $('#sb_conversation-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_conversation-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="conversation_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#conversation_parent_params').length) {
                        parent_params = parent_params + $('#conversation_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=conversation&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="conversation" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_conversation_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_conversation-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_conversationTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_conversation_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_conversation_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_conversation_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_conversationTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_conversation-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_conversationTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_conversation-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_conversation-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_conversationTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_conversationTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-conversation-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_conversation_rows_selected, function(index, rowId){

        $.each($('input[name="conversation_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'conversation_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#conversation_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#conversation_dependent_list_box').append($(
                '<div id="conversation_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="conversation" ' + 
                        'data-entity-id="' + rowId + '" class="badge conversation_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#conversation_dependent_list_box').on('click', '.conversation_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="conversation_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#conversation_dependent_list_box').find('#conversation_list_item_' + entityId).remove();

      
   });
   var sb_conuser_rows_selected = [];
   var sb_conuserTable =  $('#sb_conuser-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_conuser-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "conversation_txt" },

            { data: "con_user_txt" },
            { data: "name" },

            { data: "create_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="conversationuser_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#conversationuser_parent_params').length) {
                        parent_params = parent_params + $('#conversationuser_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=conversationuser&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="conversationuser" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_conuser_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_conuser-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_conuserTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_conuser_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_conuser_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_conuser_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_conuserTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_conuser-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_conuserTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_conuser-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_conuser-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_conuserTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_conuserTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-conversationuser-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_conuser_rows_selected, function(index, rowId){

        $.each($('input[name="conversationuser_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'conversationuser_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#conversationuser_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#conversationuser_dependent_list_box').append($(
                '<div id="conversationuser_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="conversationuser" ' + 
                        'data-entity-id="' + rowId + '" class="badge conversationuser_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#conversationuser_dependent_list_box').on('click', '.conversationuser_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="conversationuser_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#conversationuser_dependent_list_box').find('#conversationuser_list_item_' + entityId).remove();

      
   });
   var sb_message_rows_selected = [];
   var sb_messageTable =  $('#sb_message-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_message-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "conversation_txt" },

            { data: "owner_txt" },

            { data: "counter_party_txt" },
            { data: "name" },

            { data: "message" },

            { data: "message_date" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="message_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#message_parent_params').length) {
                        parent_params = parent_params + $('#message_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=message&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="message" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_message_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_message-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_messageTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_message_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_message_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_message_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_messageTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_message-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_messageTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_message-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_message-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_messageTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_messageTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-message-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_message_rows_selected, function(index, rowId){

        $.each($('input[name="message_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'message_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#message_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#message_dependent_list_box').append($(
                '<div id="message_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="message" ' + 
                        'data-entity-id="' + rowId + '" class="badge message_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#message_dependent_list_box').on('click', '.message_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="message_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#message_dependent_list_box').find('#message_list_item_' + entityId).remove();

      
   });
   var sb_messagesfiles_rows_selected = [];
   var sb_messagesfilesTable =  $('#sb_messagesfiles-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_messagesfiles-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "message_txt" },
            { data: "name" },

            { data: "description" },

            { data: "file_url" },

            { data: "file_size" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="messagefiles_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#messagefiles_parent_params').length) {
                        parent_params = parent_params + $('#messagefiles_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=messagefiles&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="messagefiles" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_messagesfiles_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_messagesfiles-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_messagesfilesTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_messagesfiles_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_messagesfiles_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_messagesfiles_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_messagesfilesTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_messagesfiles-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_messagesfilesTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_messagesfiles-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_messagesfiles-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_messagesfilesTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_messagesfilesTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-messagefiles-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_messagesfiles_rows_selected, function(index, rowId){

        $.each($('input[name="messagefiles_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'messagefiles_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#messagefiles_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#messagefiles_dependent_list_box').append($(
                '<div id="messagefiles_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="messagefiles" ' + 
                        'data-entity-id="' + rowId + '" class="badge messagefiles_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#messagefiles_dependent_list_box').on('click', '.messagefiles_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="messagefiles_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#messagefiles_dependent_list_box').find('#messagefiles_list_item_' + entityId).remove();

      
   });
   var sb_notifytype_rows_selected = [];
   var sb_notifytypeTable =  $('#sb_notifytype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_notifytype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

            { data: "title_template" },

            { data: "message_template" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="notificationtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notificationtype_parent_params').length) {
                        parent_params = parent_params + $('#notificationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=notificationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notificationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_notifytype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_notifytype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_notifytypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_notifytype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_notifytype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_notifytype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notifytypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_notifytype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_notifytypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_notifytype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_notifytype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_notifytypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notifytypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-notificationtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_notifytype_rows_selected, function(index, rowId){

        $.each($('input[name="notificationtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'notificationtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#notificationtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#notificationtype_dependent_list_box').append($(
                '<div id="notificationtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="notificationtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge notificationtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#notificationtype_dependent_list_box').on('click', '.notificationtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="notificationtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#notificationtype_dependent_list_box').find('#notificationtype_list_item_' + entityId).remove();

      
   });
   var sb_notifystatus_rows_selected = [];
   var sb_notifystatusTable =  $('#sb_notifystatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_notifystatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="notificationstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notificationstatus_parent_params').length) {
                        parent_params = parent_params + $('#notificationstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=notificationstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notificationstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_notifystatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_notifystatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_notifystatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_notifystatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_notifystatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_notifystatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notifystatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_notifystatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_notifystatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_notifystatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_notifystatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_notifystatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notifystatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-notificationstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_notifystatus_rows_selected, function(index, rowId){

        $.each($('input[name="notificationstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'notificationstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#notificationstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#notificationstatus_dependent_list_box').append($(
                '<div id="notificationstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="notificationstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge notificationstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#notificationstatus_dependent_list_box').on('click', '.notificationstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="notificationstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#notificationstatus_dependent_list_box').find('#notificationstatus_list_item_' + entityId).remove();

      
   });
   var sb_notifylevel_rows_selected = [];
   var sb_notifylevelTable =  $('#sb_notifylevel-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_notifylevel-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="notificationlevel_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notificationlevel_parent_params').length) {
                        parent_params = parent_params + $('#notificationlevel_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=notificationlevel&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notificationlevel" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_notifylevel_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_notifylevel-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_notifylevelTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_notifylevel_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_notifylevel_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_notifylevel_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notifylevelTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_notifylevel-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_notifylevelTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_notifylevel-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_notifylevel-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_notifylevelTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notifylevelTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-notificationlevel-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_notifylevel_rows_selected, function(index, rowId){

        $.each($('input[name="notificationlevel_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'notificationlevel_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#notificationlevel_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#notificationlevel_dependent_list_box').append($(
                '<div id="notificationlevel_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="notificationlevel" ' + 
                        'data-entity-id="' + rowId + '" class="badge notificationlevel_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#notificationlevel_dependent_list_box').on('click', '.notificationlevel_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="notificationlevel_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#notificationlevel_dependent_list_box').find('#notificationlevel_list_item_' + entityId).remove();

      
   });
   var sb_notification_rows_selected = [];
   var sb_notificationTable =  $('#sb_notification-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_notification-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "n_owner_txt" },

            { data: "n_type_txt" },

            { data: "status_txt" },

            { data: "log_level_txt" },
            { data: "name" },

            { data: "description" },


            { data: "business_unit_txt" },
        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="notification_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notification_parent_params').length) {
                        parent_params = parent_params + $('#notification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=notification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_notification_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_notification-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_notificationTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_notification_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_notification_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_notification_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notificationTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_notification-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_notificationTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_notification-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_notification-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_notificationTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_notificationTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-notification-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_notification_rows_selected, function(index, rowId){

        $.each($('input[name="notification_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'notification_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#notification_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#notification_dependent_list_box').append($(
                '<div id="notification_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="notification" ' + 
                        'data-entity-id="' + rowId + '" class="badge notification_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#notification_dependent_list_box').on('click', '.notification_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="notification_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#notification_dependent_list_box').find('#notification_list_item_' + entityId).remove();

      
   });
   var sb_contactus_rows_selected = [];
   var sb_contactusTable =  $('#sb_contactus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contactus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "email" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="contactus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contactus_parent_params').length) {
                        parent_params = parent_params + $('#contactus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=contactus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contactus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contactus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contactusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contactus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contactus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contactus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contactusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contactus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contactusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contactus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contactus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contactusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contactusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contactus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contactus_rows_selected, function(index, rowId){

        $.each($('input[name="contactus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'contactus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contactus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contactus_dependent_list_box').append($(
                '<div id="contactus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contactus" ' + 
                        'data-entity-id="' + rowId + '" class="badge contactus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contactus_dependent_list_box').on('click', '.contactus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contactus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contactus_dependent_list_box').find('#contactus_list_item_' + entityId).remove();

      
   });
   var sb_uom_rows_selected = [];
   var sb_uomTable =  $('#sb_uom-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_uom-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "uom_abbr" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="uom_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#uom_parent_params').length) {
                        parent_params = parent_params + $('#uom_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=uom&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="uom" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_uom_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_uom-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_uomTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_uom_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_uom_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_uom_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_uomTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_uom-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_uomTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_uom-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_uom-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_uomTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_uomTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-uom-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_uom_rows_selected, function(index, rowId){

        $.each($('input[name="uom_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'uom_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#uom_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#uom_dependent_list_box').append($(
                '<div id="uom_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="uom" ' + 
                        'data-entity-id="' + rowId + '" class="badge uom_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#uom_dependent_list_box').on('click', '.uom_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="uom_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#uom_dependent_list_box').find('#uom_list_item_' + entityId).remove();

      
   });
   var sb_uomconversion_rows_selected = [];
   var sb_uomconversionTable =  $('#sb_uomconversion-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_uomconversion-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "from_uom_txt" },

            { data: "to_uom_txt" },
            { data: "name" },

            { data: "conversion_factor" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="uomconversion_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#uomconversion_parent_params').length) {
                        parent_params = parent_params + $('#uomconversion_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=uomconversion&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="uomconversion" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_uomconversion_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_uomconversion-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_uomconversionTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_uomconversion_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_uomconversion_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_uomconversion_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_uomconversionTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_uomconversion-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_uomconversionTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_uomconversion-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_uomconversion-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_uomconversionTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_uomconversionTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-uomconversion-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_uomconversion_rows_selected, function(index, rowId){

        $.each($('input[name="uomconversion_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'uomconversion_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#uomconversion_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#uomconversion_dependent_list_box').append($(
                '<div id="uomconversion_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="uomconversion" ' + 
                        'data-entity-id="' + rowId + '" class="badge uomconversion_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#uomconversion_dependent_list_box').on('click', '.uomconversion_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="uomconversion_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#uomconversion_dependent_list_box').find('#uomconversion_list_item_' + entityId).remove();

      
   });
   var sb_prodcat_rows_selected = [];
   var sb_prodcatTable =  $('#sb_prodcat-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodcat-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productcategory_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productcategory_parent_params').length) {
                        parent_params = parent_params + $('#productcategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productcategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productcategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodcat_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodcat-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodcatTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodcat_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodcat_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodcat_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodcatTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodcat-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodcatTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodcat-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodcat-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodcatTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodcatTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productcategory-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodcat_rows_selected, function(index, rowId){

        $.each($('input[name="productcategory_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productcategory_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productcategory_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productcategory_dependent_list_box').append($(
                '<div id="productcategory_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productcategory" ' + 
                        'data-entity-id="' + rowId + '" class="badge productcategory_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productcategory_dependent_list_box').on('click', '.productcategory_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productcategory_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productcategory_dependent_list_box').find('#productcategory_list_item_' + entityId).remove();

      
   });
   var sb_prodclass_rows_selected = [];
   var sb_prodclassTable =  $('#sb_prodclass-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodclass-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productclassification_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productclassification_parent_params').length) {
                        parent_params = parent_params + $('#productclassification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productclassification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productclassification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodclass_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodclass-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodclassTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodclass_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodclass_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodclass_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodclassTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodclass-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodclassTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodclass-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodclass-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodclassTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodclassTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productclassification-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodclass_rows_selected, function(index, rowId){

        $.each($('input[name="productclassification_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productclassification_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productclassification_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productclassification_dependent_list_box').append($(
                '<div id="productclassification_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productclassification" ' + 
                        'data-entity-id="' + rowId + '" class="badge productclassification_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productclassification_dependent_list_box').on('click', '.productclassification_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productclassification_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productclassification_dependent_list_box').find('#productclassification_list_item_' + entityId).remove();

      
   });
   var sb_prodtype_rows_selected = [];
   var sb_prodtypeTable =  $('#sb_prodtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodtype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "prod_cat_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="producttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#producttype_parent_params').length) {
                        parent_params = parent_params + $('#producttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=producttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="producttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-producttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodtype_rows_selected, function(index, rowId){

        $.each($('input[name="producttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'producttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#producttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#producttype_dependent_list_box').append($(
                '<div id="producttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="producttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge producttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#producttype_dependent_list_box').on('click', '.producttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="producttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#producttype_dependent_list_box').find('#producttype_list_item_' + entityId).remove();

      
   });
   var sb_product_rows_selected = [];
   var sb_productTable =  $('#sb_product-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_product-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "prod_type_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="product_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#product_parent_params').length) {
                        parent_params = parent_params + $('#product_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=product&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="product" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_product_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_product-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_productTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_product_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_product_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_product_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_productTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_product-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_productTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_product-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_product-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_productTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_productTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-product-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_product_rows_selected, function(index, rowId){

        $.each($('input[name="product_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'product_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#product_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#product_dependent_list_box').append($(
                '<div id="product_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="product" ' + 
                        'data-entity-id="' + rowId + '" class="badge product_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#product_dependent_list_box').on('click', '.product_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="product_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#product_dependent_list_box').find('#product_list_item_' + entityId).remove();

      
   });
   var sb_prodclasslink_rows_selected = [];
   var sb_prodclasslinkTable =  $('#sb_prodclasslink-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodclasslink-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "product_txt" },

            { data: "product_class_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productclassificationlink_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productclassificationlink_parent_params').length) {
                        parent_params = parent_params + $('#productclassificationlink_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productclassificationlink&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productclassificationlink" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodclasslink_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodclasslink-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodclasslinkTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodclasslink_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodclasslink_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodclasslink_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodclasslinkTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodclasslink-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodclasslinkTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodclasslink-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodclasslink-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodclasslinkTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodclasslinkTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productclassificationlink-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodclasslink_rows_selected, function(index, rowId){

        $.each($('input[name="productclassificationlink_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productclassificationlink_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productclassificationlink_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productclassificationlink_dependent_list_box').append($(
                '<div id="productclassificationlink_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productclassificationlink" ' + 
                        'data-entity-id="' + rowId + '" class="badge productclassificationlink_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productclassificationlink_dependent_list_box').on('click', '.productclassificationlink_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productclassificationlink_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productclassificationlink_dependent_list_box').find('#productclassificationlink_list_item_' + entityId).remove();

      
   });
   var sb_prodcatimage_rows_selected = [];
   var sb_prodcatimageTable =  $('#sb_prodcatimage-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodcatimage-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "prod_cat_image_txt" },
            { data: "name" },

            { data: "image_url" },

            { data: "image_size" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productcategoryimage_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productcategoryimage_parent_params').length) {
                        parent_params = parent_params + $('#productcategoryimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productcategoryimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productcategoryimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodcatimage_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodcatimage-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodcatimageTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodcatimage_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodcatimage_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodcatimage_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodcatimageTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodcatimage-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodcatimageTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodcatimage-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodcatimage-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodcatimageTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodcatimageTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productcategoryimage-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodcatimage_rows_selected, function(index, rowId){

        $.each($('input[name="productcategoryimage_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productcategoryimage_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productcategoryimage_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productcategoryimage_dependent_list_box').append($(
                '<div id="productcategoryimage_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productcategoryimage" ' + 
                        'data-entity-id="' + rowId + '" class="badge productcategoryimage_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productcategoryimage_dependent_list_box').on('click', '.productcategoryimage_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productcategoryimage_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productcategoryimage_dependent_list_box').find('#productcategoryimage_list_item_' + entityId).remove();

      
   });
   var sb_prodtyimage_rows_selected = [];
   var sb_prodtyimageTable =  $('#sb_prodtyimage-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodtyimage-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "prod_ty_image_txt" },
            { data: "name" },

            { data: "image_url" },

            { data: "image_size" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="producttypeimage_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#producttypeimage_parent_params').length) {
                        parent_params = parent_params + $('#producttypeimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=producttypeimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="producttypeimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodtyimage_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodtyimage-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodtyimageTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodtyimage_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodtyimage_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodtyimage_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodtyimageTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodtyimage-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodtyimageTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodtyimage-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodtyimage-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodtyimageTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodtyimageTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-producttypeimage-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodtyimage_rows_selected, function(index, rowId){

        $.each($('input[name="producttypeimage_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'producttypeimage_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#producttypeimage_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#producttypeimage_dependent_list_box').append($(
                '<div id="producttypeimage_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="producttypeimage" ' + 
                        'data-entity-id="' + rowId + '" class="badge producttypeimage_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#producttypeimage_dependent_list_box').on('click', '.producttypeimage_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="producttypeimage_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#producttypeimage_dependent_list_box').find('#producttypeimage_list_item_' + entityId).remove();

      
   });
   var sb_prodimage_rows_selected = [];
   var sb_prodimageTable =  $('#sb_prodimage-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodimage-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "product_txt" },
            { data: "name" },

            { data: "image_url" },

            { data: "image_size" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productimage_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productimage_parent_params').length) {
                        parent_params = parent_params + $('#productimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodimage_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodimage-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodimageTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodimage_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodimage_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodimage_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodimageTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodimage-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodimageTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodimage-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodimage-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodimageTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodimageTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productimage-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodimage_rows_selected, function(index, rowId){

        $.each($('input[name="productimage_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productimage_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productimage_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productimage_dependent_list_box').append($(
                '<div id="productimage_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productimage" ' + 
                        'data-entity-id="' + rowId + '" class="badge productimage_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productimage_dependent_list_box').on('click', '.productimage_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productimage_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productimage_dependent_list_box').find('#productimage_list_item_' + entityId).remove();

      
   });
   var sb_prodfeatcat_rows_selected = [];
   var sb_prodfeatcatTable =  $('#sb_prodfeatcat-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodfeatcat-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productfeaturecategory_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productfeaturecategory_parent_params').length) {
                        parent_params = parent_params + $('#productfeaturecategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productfeaturecategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeaturecategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodfeatcat_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodfeatcat-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodfeatcatTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodfeatcat_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodfeatcat_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodfeatcat_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodfeatcatTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodfeatcat-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodfeatcatTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodfeatcat-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodfeatcat-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodfeatcatTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodfeatcatTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productfeaturecategory-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodfeatcat_rows_selected, function(index, rowId){

        $.each($('input[name="productfeaturecategory_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productfeaturecategory_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productfeaturecategory_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productfeaturecategory_dependent_list_box').append($(
                '<div id="productfeaturecategory_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productfeaturecategory" ' + 
                        'data-entity-id="' + rowId + '" class="badge productfeaturecategory_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productfeaturecategory_dependent_list_box').on('click', '.productfeaturecategory_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productfeaturecategory_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productfeaturecategory_dependent_list_box').find('#productfeaturecategory_list_item_' + entityId).remove();

      
   });
   var sb_prodfeattype_rows_selected = [];
   var sb_prodfeattypeTable =  $('#sb_prodfeattype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodfeattype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "feature_category_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productfeaturetype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productfeaturetype_parent_params').length) {
                        parent_params = parent_params + $('#productfeaturetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productfeaturetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeaturetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodfeattype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodfeattype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodfeattypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodfeattype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodfeattype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodfeattype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodfeattypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodfeattype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodfeattypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodfeattype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodfeattype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodfeattypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodfeattypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productfeaturetype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodfeattype_rows_selected, function(index, rowId){

        $.each($('input[name="productfeaturetype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productfeaturetype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productfeaturetype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productfeaturetype_dependent_list_box').append($(
                '<div id="productfeaturetype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productfeaturetype" ' + 
                        'data-entity-id="' + rowId + '" class="badge productfeaturetype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productfeaturetype_dependent_list_box').on('click', '.productfeaturetype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productfeaturetype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productfeaturetype_dependent_list_box').find('#productfeaturetype_list_item_' + entityId).remove();

      
   });
   var sb_prodfeature_rows_selected = [];
   var sb_prodfeatureTable =  $('#sb_prodfeature-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodfeature-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "feature_type_txt" },

            { data: "feature_uom_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productfeature_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productfeature_parent_params').length) {
                        parent_params = parent_params + $('#productfeature_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productfeature&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeature" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodfeature_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodfeature-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodfeatureTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodfeature_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodfeature_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodfeature_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodfeatureTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodfeature-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodfeatureTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodfeature-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodfeature-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodfeatureTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodfeatureTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productfeature-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodfeature_rows_selected, function(index, rowId){

        $.each($('input[name="productfeature_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productfeature_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productfeature_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productfeature_dependent_list_box').append($(
                '<div id="productfeature_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productfeature" ' + 
                        'data-entity-id="' + rowId + '" class="badge productfeature_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productfeature_dependent_list_box').on('click', '.productfeature_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productfeature_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productfeature_dependent_list_box').find('#productfeature_list_item_' + entityId).remove();

      
   });
   var sb_featappltype_rows_selected = [];
   var sb_featappltypeTable =  $('#sb_featappltype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_featappltype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="featureapplicabilitytype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#featureapplicabilitytype_parent_params').length) {
                        parent_params = parent_params + $('#featureapplicabilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=featureapplicabilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="featureapplicabilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_featappltype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_featappltype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_featappltypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_featappltype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_featappltype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_featappltype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featappltypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_featappltype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_featappltypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_featappltype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_featappltype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_featappltypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featappltypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-featureapplicabilitytype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_featappltype_rows_selected, function(index, rowId){

        $.each($('input[name="featureapplicabilitytype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'featureapplicabilitytype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#featureapplicabilitytype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#featureapplicabilitytype_dependent_list_box').append($(
                '<div id="featureapplicabilitytype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="featureapplicabilitytype" ' + 
                        'data-entity-id="' + rowId + '" class="badge featureapplicabilitytype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#featureapplicabilitytype_dependent_list_box').on('click', '.featureapplicabilitytype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="featureapplicabilitytype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#featureapplicabilitytype_dependent_list_box').find('#featureapplicabilitytype_list_item_' + entityId).remove();

      
   });
   var sb_featappl_rows_selected = [];
   var sb_featapplTable =  $('#sb_featappl-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_featappl-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "applicability_type_txt" },

            { data: "applicability_prod_txt" },

            { data: "applicability_feat_txt" },
            { data: "name" },

            { data: "from_date" },

            { data: "to_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productfeatureapplicability_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productfeatureapplicability_parent_params').length) {
                        parent_params = parent_params + $('#productfeatureapplicability_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productfeatureapplicability&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeatureapplicability" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_featappl_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_featappl-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_featapplTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_featappl_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_featappl_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_featappl_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featapplTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_featappl-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_featapplTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_featappl-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_featappl-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_featapplTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featapplTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productfeatureapplicability-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_featappl_rows_selected, function(index, rowId){

        $.each($('input[name="productfeatureapplicability_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productfeatureapplicability_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productfeatureapplicability_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productfeatureapplicability_dependent_list_box').append($(
                '<div id="productfeatureapplicability_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productfeatureapplicability" ' + 
                        'data-entity-id="' + rowId + '" class="badge productfeatureapplicability_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productfeatureapplicability_dependent_list_box').on('click', '.productfeatureapplicability_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productfeatureapplicability_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productfeatureapplicability_dependent_list_box').find('#productfeatureapplicability_list_item_' + entityId).remove();

      
   });
   var sb_featinttype_rows_selected = [];
   var sb_featinttypeTable =  $('#sb_featinttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_featinttype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="featureinteractiontype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#featureinteractiontype_parent_params').length) {
                        parent_params = parent_params + $('#featureinteractiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=featureinteractiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="featureinteractiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_featinttype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_featinttype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_featinttypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_featinttype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_featinttype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_featinttype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featinttypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_featinttype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_featinttypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_featinttype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_featinttype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_featinttypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featinttypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-featureinteractiontype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_featinttype_rows_selected, function(index, rowId){

        $.each($('input[name="featureinteractiontype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'featureinteractiontype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#featureinteractiontype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#featureinteractiontype_dependent_list_box').append($(
                '<div id="featureinteractiontype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="featureinteractiontype" ' + 
                        'data-entity-id="' + rowId + '" class="badge featureinteractiontype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#featureinteractiontype_dependent_list_box').on('click', '.featureinteractiontype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="featureinteractiontype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#featureinteractiontype_dependent_list_box').find('#featureinteractiontype_list_item_' + entityId).remove();

      
   });
   var sb_featinteraction_rows_selected = [];
   var sb_featinteractionTable =  $('#sb_featinteraction-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_featinteraction-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "interaction_type_txt" },

            { data: "interaction_prod_txt" },

            { data: "interaction_feat_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productfeatureinteraction_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productfeatureinteraction_parent_params').length) {
                        parent_params = parent_params + $('#productfeatureinteraction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productfeatureinteraction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeatureinteraction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_featinteraction_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_featinteraction-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_featinteractionTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_featinteraction_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_featinteraction_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_featinteraction_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featinteractionTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_featinteraction-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_featinteractionTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_featinteraction-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_featinteraction-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_featinteractionTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_featinteractionTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productfeatureinteraction-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_featinteraction_rows_selected, function(index, rowId){

        $.each($('input[name="productfeatureinteraction_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productfeatureinteraction_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productfeatureinteraction_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productfeatureinteraction_dependent_list_box').append($(
                '<div id="productfeatureinteraction_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productfeatureinteraction" ' + 
                        'data-entity-id="' + rowId + '" class="badge productfeatureinteraction_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productfeatureinteraction_dependent_list_box').on('click', '.productfeatureinteraction_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productfeatureinteraction_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productfeatureinteraction_dependent_list_box').find('#productfeatureinteraction_list_item_' + entityId).remove();

      
   });
   var sb_pricecomptype_rows_selected = [];
   var sb_pricecomptypeTable =  $('#sb_pricecomptype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_pricecomptype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="pricecomponenttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#pricecomponenttype_parent_params').length) {
                        parent_params = parent_params + $('#pricecomponenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=pricecomponenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="pricecomponenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_pricecomptype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_pricecomptype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_pricecomptypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_pricecomptype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_pricecomptype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_pricecomptype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pricecomptypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_pricecomptype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_pricecomptypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_pricecomptype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_pricecomptype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_pricecomptypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pricecomptypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-pricecomponenttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_pricecomptype_rows_selected, function(index, rowId){

        $.each($('input[name="pricecomponenttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'pricecomponenttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#pricecomponenttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#pricecomponenttype_dependent_list_box').append($(
                '<div id="pricecomponenttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="pricecomponenttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge pricecomponenttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#pricecomponenttype_dependent_list_box').on('click', '.pricecomponenttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="pricecomponenttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#pricecomponenttype_dependent_list_box').find('#pricecomponenttype_list_item_' + entityId).remove();

      
   });
   var sb_pricecomp_rows_selected = [];
   var sb_pricecompTable =  $('#sb_pricecomp-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_pricecomp-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "component_type_txt" },

            { data: "component_prod_txt" },
            { data: "name" },

            { data: "component_price" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="pricecomponent_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#pricecomponent_parent_params').length) {
                        parent_params = parent_params + $('#pricecomponent_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=pricecomponent&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="pricecomponent" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_pricecomp_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_pricecomp-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_pricecompTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_pricecomp_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_pricecomp_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_pricecomp_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pricecompTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_pricecomp-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_pricecompTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_pricecomp-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_pricecomp-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_pricecompTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_pricecompTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-pricecomponent-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_pricecomp_rows_selected, function(index, rowId){

        $.each($('input[name="pricecomponent_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'pricecomponent_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#pricecomponent_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#pricecomponent_dependent_list_box').append($(
                '<div id="pricecomponent_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="pricecomponent" ' + 
                        'data-entity-id="' + rowId + '" class="badge pricecomponent_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#pricecomponent_dependent_list_box').on('click', '.pricecomponent_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="pricecomponent_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#pricecomponent_dependent_list_box').find('#pricecomponent_list_item_' + entityId).remove();

      
   });
   var sb_costcomptype_rows_selected = [];
   var sb_costcomptypeTable =  $('#sb_costcomptype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_costcomptype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="costcomponenttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#costcomponenttype_parent_params').length) {
                        parent_params = parent_params + $('#costcomponenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=costcomponenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costcomponenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_costcomptype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_costcomptype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_costcomptypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_costcomptype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_costcomptype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_costcomptype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_costcomptypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_costcomptype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_costcomptypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_costcomptype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_costcomptype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_costcomptypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_costcomptypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-costcomponenttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_costcomptype_rows_selected, function(index, rowId){

        $.each($('input[name="costcomponenttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'costcomponenttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#costcomponenttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#costcomponenttype_dependent_list_box').append($(
                '<div id="costcomponenttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="costcomponenttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge costcomponenttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#costcomponenttype_dependent_list_box').on('click', '.costcomponenttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="costcomponenttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#costcomponenttype_dependent_list_box').find('#costcomponenttype_list_item_' + entityId).remove();

      
   });
   var sb_costcomp_rows_selected = [];
   var sb_costcompTable =  $('#sb_costcomp-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_costcomp-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "cost_type_txt" },

            { data: "cost_prod_txt" },
            { data: "name" },

            { data: "component_cost" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="costcomponent_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#costcomponent_parent_params').length) {
                        parent_params = parent_params + $('#costcomponent_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=costcomponent&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costcomponent" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_costcomp_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_costcomp-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_costcompTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_costcomp_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_costcomp_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_costcomp_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_costcompTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_costcomp-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_costcompTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_costcomp-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_costcomp-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_costcompTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_costcompTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-costcomponent-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_costcomp_rows_selected, function(index, rowId){

        $.each($('input[name="costcomponent_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'costcomponent_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#costcomponent_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#costcomponent_dependent_list_box').append($(
                '<div id="costcomponent_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="costcomponent" ' + 
                        'data-entity-id="' + rowId + '" class="badge costcomponent_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#costcomponent_dependent_list_box').on('click', '.costcomponent_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="costcomponent_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#costcomponent_dependent_list_box').find('#costcomponent_list_item_' + entityId).remove();

      
   });
   var sb_supprating_rows_selected = [];
   var sb_suppratingTable =  $('#sb_supprating-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_supprating-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="supplierrating_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#supplierrating_parent_params').length) {
                        parent_params = parent_params + $('#supplierrating_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=supplierrating&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="supplierrating" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_supprating_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_supprating-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_suppratingTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_supprating_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_supprating_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_supprating_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_suppratingTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_supprating-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_suppratingTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_supprating-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_supprating-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_suppratingTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_suppratingTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-supplierrating-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_supprating_rows_selected, function(index, rowId){

        $.each($('input[name="supplierrating_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'supplierrating_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#supplierrating_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#supplierrating_dependent_list_box').append($(
                '<div id="supplierrating_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="supplierrating" ' + 
                        'data-entity-id="' + rowId + '" class="badge supplierrating_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#supplierrating_dependent_list_box').on('click', '.supplierrating_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="supplierrating_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#supplierrating_dependent_list_box').find('#supplierrating_list_item_' + entityId).remove();

      
   });
   var sb_supppref_rows_selected = [];
   var sb_suppprefTable =  $('#sb_supppref-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_supppref-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="supplierpreference_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#supplierpreference_parent_params').length) {
                        parent_params = parent_params + $('#supplierpreference_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=supplierpreference&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="supplierpreference" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_supppref_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_supppref-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_suppprefTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_supppref_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_supppref_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_supppref_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_suppprefTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_supppref-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_suppprefTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_supppref-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_supppref-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_suppprefTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_suppprefTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-supplierpreference-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_supppref_rows_selected, function(index, rowId){

        $.each($('input[name="supplierpreference_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'supplierpreference_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#supplierpreference_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#supplierpreference_dependent_list_box').append($(
                '<div id="supplierpreference_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="supplierpreference" ' + 
                        'data-entity-id="' + rowId + '" class="badge supplierpreference_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#supplierpreference_dependent_list_box').on('click', '.supplierpreference_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="supplierpreference_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#supplierpreference_dependent_list_box').find('#supplierpreference_list_item_' + entityId).remove();

      
   });
   var sb_prodsupplier_rows_selected = [];
   var sb_prodsupplierTable =  $('#sb_prodsupplier-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodsupplier-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "prod_supplier_txt" },

            { data: "supplier_of_prod_txt" },

            { data: "supplier_rating_txt" },

            { data: "supplier_preference_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productsupplier_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productsupplier_parent_params').length) {
                        parent_params = parent_params + $('#productsupplier_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productsupplier&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productsupplier" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodsupplier_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodsupplier-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodsupplierTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodsupplier_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodsupplier_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodsupplier_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodsupplierTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodsupplier-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodsupplierTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodsupplier-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodsupplier-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodsupplierTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodsupplierTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productsupplier-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodsupplier_rows_selected, function(index, rowId){

        $.each($('input[name="productsupplier_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productsupplier_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productsupplier_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productsupplier_dependent_list_box').append($(
                '<div id="productsupplier_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productsupplier" ' + 
                        'data-entity-id="' + rowId + '" class="badge productsupplier_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productsupplier_dependent_list_box').on('click', '.productsupplier_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productsupplier_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productsupplier_dependent_list_box').find('#productsupplier_list_item_' + entityId).remove();

      
   });
   var sb_facilitytype_rows_selected = [];
   var sb_facilitytypeTable =  $('#sb_facilitytype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_facilitytype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="facilitytype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#facilitytype_parent_params').length) {
                        parent_params = parent_params + $('#facilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=facilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="facilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_facilitytype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_facilitytype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_facilitytypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_facilitytype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_facilitytype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_facilitytype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_facilitytypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_facilitytype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_facilitytypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_facilitytype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_facilitytype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_facilitytypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_facilitytypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-facilitytype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_facilitytype_rows_selected, function(index, rowId){

        $.each($('input[name="facilitytype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'facilitytype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#facilitytype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#facilitytype_dependent_list_box').append($(
                '<div id="facilitytype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="facilitytype" ' + 
                        'data-entity-id="' + rowId + '" class="badge facilitytype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#facilitytype_dependent_list_box').on('click', '.facilitytype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="facilitytype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#facilitytype_dependent_list_box').find('#facilitytype_list_item_' + entityId).remove();

      
   });
   var sb_facility_rows_selected = [];
   var sb_facilityTable =  $('#sb_facility-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_facility-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "facility_type_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="facility_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#facility_parent_params').length) {
                        parent_params = parent_params + $('#facility_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=facility&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="facility" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_facility_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_facility-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_facilityTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_facility_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_facility_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_facility_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_facilityTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_facility-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_facilityTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_facility-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_facility-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_facilityTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_facilityTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-facility-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_facility_rows_selected, function(index, rowId){

        $.each($('input[name="facility_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'facility_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#facility_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#facility_dependent_list_box').append($(
                '<div id="facility_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="facility" ' + 
                        'data-entity-id="' + rowId + '" class="badge facility_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#facility_dependent_list_box').on('click', '.facility_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="facility_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#facility_dependent_list_box').find('#facility_list_item_' + entityId).remove();

      
   });
   var sb_containertype_rows_selected = [];
   var sb_containertypeTable =  $('#sb_containertype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_containertype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="containertype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#containertype_parent_params').length) {
                        parent_params = parent_params + $('#containertype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=containertype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="containertype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_containertype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_containertype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_containertypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_containertype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_containertype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_containertype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_containertypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_containertype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_containertypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_containertype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_containertype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_containertypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_containertypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-containertype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_containertype_rows_selected, function(index, rowId){

        $.each($('input[name="containertype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'containertype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#containertype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#containertype_dependent_list_box').append($(
                '<div id="containertype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="containertype" ' + 
                        'data-entity-id="' + rowId + '" class="badge containertype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#containertype_dependent_list_box').on('click', '.containertype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="containertype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#containertype_dependent_list_box').find('#containertype_list_item_' + entityId).remove();

      
   });
   var sb_container_rows_selected = [];
   var sb_containerTable =  $('#sb_container-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_container-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "container_type_txt" },

            { data: "container_facility_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="container_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#container_parent_params').length) {
                        parent_params = parent_params + $('#container_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=container&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="container" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_container_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_container-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_containerTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_container_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_container_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_container_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_containerTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_container-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_containerTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_container-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_container-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_containerTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_containerTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-container-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_container_rows_selected, function(index, rowId){

        $.each($('input[name="container_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'container_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#container_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#container_dependent_list_box').append($(
                '<div id="container_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="container" ' + 
                        'data-entity-id="' + rowId + '" class="badge container_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#container_dependent_list_box').on('click', '.container_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="container_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#container_dependent_list_box').find('#container_list_item_' + entityId).remove();

      
   });
   var sb_lot_rows_selected = [];
   var sb_lotTable =  $('#sb_lot-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_lot-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="lot_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#lot_parent_params').length) {
                        parent_params = parent_params + $('#lot_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=lot&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="lot" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_lot_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_lot-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_lotTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_lot_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_lot_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_lot_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_lotTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_lot-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_lotTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_lot-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_lot-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_lotTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_lotTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-lot-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_lot_rows_selected, function(index, rowId){

        $.each($('input[name="lot_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'lot_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#lot_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#lot_dependent_list_box').append($(
                '<div id="lot_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="lot" ' + 
                        'data-entity-id="' + rowId + '" class="badge lot_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#lot_dependent_list_box').on('click', '.lot_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="lot_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#lot_dependent_list_box').find('#lot_list_item_' + entityId).remove();

      
   });
   var sb_invitemtype_rows_selected = [];
   var sb_invitemtypeTable =  $('#sb_invitemtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invitemtype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="inventoryitemtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#inventoryitemtype_parent_params').length) {
                        parent_params = parent_params + $('#inventoryitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=inventoryitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventoryitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invitemtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invitemtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invitemtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invitemtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invitemtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invitemtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invitemtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invitemtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invitemtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invitemtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invitemtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invitemtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invitemtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-inventoryitemtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invitemtype_rows_selected, function(index, rowId){

        $.each($('input[name="inventoryitemtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'inventoryitemtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#inventoryitemtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#inventoryitemtype_dependent_list_box').append($(
                '<div id="inventoryitemtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="inventoryitemtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge inventoryitemtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#inventoryitemtype_dependent_list_box').on('click', '.inventoryitemtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="inventoryitemtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#inventoryitemtype_dependent_list_box').find('#inventoryitemtype_list_item_' + entityId).remove();

      
   });
   var sb_invitemstat_rows_selected = [];
   var sb_invitemstatTable =  $('#sb_invitemstat-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invitemstat-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="inventoryitemstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#inventoryitemstatus_parent_params').length) {
                        parent_params = parent_params + $('#inventoryitemstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=inventoryitemstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventoryitemstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invitemstat_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invitemstat-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invitemstatTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invitemstat_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invitemstat_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invitemstat_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invitemstatTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invitemstat-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invitemstatTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invitemstat-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invitemstat-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invitemstatTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invitemstatTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-inventoryitemstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invitemstat_rows_selected, function(index, rowId){

        $.each($('input[name="inventoryitemstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'inventoryitemstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#inventoryitemstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#inventoryitemstatus_dependent_list_box').append($(
                '<div id="inventoryitemstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="inventoryitemstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge inventoryitemstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#inventoryitemstatus_dependent_list_box').on('click', '.inventoryitemstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="inventoryitemstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#inventoryitemstatus_dependent_list_box').find('#inventoryitemstatus_list_item_' + entityId).remove();

      
   });
   var sb_inventoryitem_rows_selected = [];
   var sb_inventoryitemTable =  $('#sb_inventoryitem-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_inventoryitem-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "item_type_txt" },

            { data: "item_product_txt" },

            { data: "item_status_txt" },

            { data: "item_facility_txt" },

            { data: "item_container_txt" },

            { data: "item_lot_txt" },
            { data: "name" },

            { data: "quantity" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="inventoryitem_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#inventoryitem_parent_params').length) {
                        parent_params = parent_params + $('#inventoryitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=inventoryitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventoryitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_inventoryitem_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_inventoryitem-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_inventoryitemTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_inventoryitem_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_inventoryitem_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_inventoryitem_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_inventoryitemTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_inventoryitem-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_inventoryitemTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_inventoryitem-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_inventoryitem-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_inventoryitemTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_inventoryitemTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-inventoryitem-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_inventoryitem_rows_selected, function(index, rowId){

        $.each($('input[name="inventoryitem_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'inventoryitem_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#inventoryitem_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#inventoryitem_dependent_list_box').append($(
                '<div id="inventoryitem_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="inventoryitem" ' + 
                        'data-entity-id="' + rowId + '" class="badge inventoryitem_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#inventoryitem_dependent_list_box').on('click', '.inventoryitem_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="inventoryitem_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#inventoryitem_dependent_list_box').find('#inventoryitem_list_item_' + entityId).remove();

      
   });
   var sb_prodordertype_rows_selected = [];
   var sb_prodordertypeTable =  $('#sb_prodordertype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodordertype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productordertype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productordertype_parent_params').length) {
                        parent_params = parent_params + $('#productordertype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productordertype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productordertype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodordertype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodordertype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodordertypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodordertype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodordertype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodordertype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodordertypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodordertype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodordertypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodordertype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodordertype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodordertypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodordertypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productordertype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodordertype_rows_selected, function(index, rowId){

        $.each($('input[name="productordertype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productordertype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productordertype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productordertype_dependent_list_box').append($(
                '<div id="productordertype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productordertype" ' + 
                        'data-entity-id="' + rowId + '" class="badge productordertype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productordertype_dependent_list_box').on('click', '.productordertype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productordertype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productordertype_dependent_list_box').find('#productordertype_list_item_' + entityId).remove();

      
   });
   var sb_prodorderstatus_rows_selected = [];
   var sb_prodorderstatusTable =  $('#sb_prodorderstatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodorderstatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productorderstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productorderstatus_parent_params').length) {
                        parent_params = parent_params + $('#productorderstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productorderstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodorderstatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodorderstatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodorderstatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodorderstatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodorderstatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodorderstatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderstatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodorderstatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodorderstatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodorderstatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodorderstatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodorderstatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderstatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productorderstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodorderstatus_rows_selected, function(index, rowId){

        $.each($('input[name="productorderstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productorderstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productorderstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productorderstatus_dependent_list_box').append($(
                '<div id="productorderstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productorderstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge productorderstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productorderstatus_dependent_list_box').on('click', '.productorderstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productorderstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productorderstatus_dependent_list_box').find('#productorderstatus_list_item_' + entityId).remove();

      
   });
   var sb_prodorder_rows_selected = [];
   var sb_prodorderTable =  $('#sb_prodorder-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodorder-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "prod_order_type_txt" },

            { data: "prod_order_status_txt" },

            { data: "place_by_party_txt" },

            { data: "taken_by_party_txt" },
            { data: "name" },

            { data: "prod_order_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productorder_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productorder_parent_params').length) {
                        parent_params = parent_params + $('#productorder_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productorder&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorder" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodorder_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodorder-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodorderTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodorder_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodorder_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodorder_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodorder-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodorderTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodorder-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodorder-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodorderTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productorder-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodorder_rows_selected, function(index, rowId){

        $.each($('input[name="productorder_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productorder_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productorder_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productorder_dependent_list_box').append($(
                '<div id="productorder_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productorder" ' + 
                        'data-entity-id="' + rowId + '" class="badge productorder_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productorder_dependent_list_box').on('click', '.productorder_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productorder_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productorder_dependent_list_box').find('#productorder_list_item_' + entityId).remove();

      
   });
   var sb_prodorderitype_rows_selected = [];
   var sb_prodorderitypeTable =  $('#sb_prodorderitype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodorderitype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productorderitemtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productorderitemtype_parent_params').length) {
                        parent_params = parent_params + $('#productorderitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productorderitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodorderitype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodorderitype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodorderitypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodorderitype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodorderitype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodorderitype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderitypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodorderitype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodorderitypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodorderitype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodorderitype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodorderitypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderitypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productorderitemtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodorderitype_rows_selected, function(index, rowId){

        $.each($('input[name="productorderitemtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productorderitemtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productorderitemtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productorderitemtype_dependent_list_box').append($(
                '<div id="productorderitemtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productorderitemtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge productorderitemtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productorderitemtype_dependent_list_box').on('click', '.productorderitemtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productorderitemtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productorderitemtype_dependent_list_box').find('#productorderitemtype_list_item_' + entityId).remove();

      
   });
   var sb_prodorderistatus_rows_selected = [];
   var sb_prodorderistatusTable =  $('#sb_prodorderistatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodorderistatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productorderitemstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productorderitemstatus_parent_params').length) {
                        parent_params = parent_params + $('#productorderitemstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productorderitemstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderitemstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodorderistatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodorderistatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodorderistatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodorderistatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodorderistatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodorderistatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderistatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodorderistatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodorderistatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodorderistatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodorderistatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodorderistatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderistatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productorderitemstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodorderistatus_rows_selected, function(index, rowId){

        $.each($('input[name="productorderitemstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productorderitemstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productorderitemstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productorderitemstatus_dependent_list_box').append($(
                '<div id="productorderitemstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productorderitemstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge productorderitemstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productorderitemstatus_dependent_list_box').on('click', '.productorderitemstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productorderitemstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productorderitemstatus_dependent_list_box').find('#productorderitemstatus_list_item_' + entityId).remove();

      
   });
   var sb_prodorderitem_rows_selected = [];
   var sb_prodorderitemTable =  $('#sb_prodorderitem-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_prodorderitem-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "item_order_txt" },

            { data: "order_item_type_txt" },

            { data: "order_item_status_txt" },
            { data: "name" },

            { data: "item_sequence" },

            { data: "quantity" },

            { data: "order_item_price" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="productorderitem_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productorderitem_parent_params').length) {
                        parent_params = parent_params + $('#productorderitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=productorderitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_prodorderitem_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_prodorderitem-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_prodorderitemTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_prodorderitem_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_prodorderitem_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_prodorderitem_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderitemTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_prodorderitem-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_prodorderitemTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_prodorderitem-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_prodorderitem-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_prodorderitemTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_prodorderitemTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-productorderitem-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_prodorderitem_rows_selected, function(index, rowId){

        $.each($('input[name="productorderitem_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'productorderitem_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#productorderitem_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#productorderitem_dependent_list_box').append($(
                '<div id="productorderitem_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="productorderitem" ' + 
                        'data-entity-id="' + rowId + '" class="badge productorderitem_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#productorderitem_dependent_list_box').on('click', '.productorderitem_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="productorderitem_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#productorderitem_dependent_list_box').find('#productorderitem_list_item_' + entityId).remove();

      
   });
   var sb_invoicetype_rows_selected = [];
   var sb_invoicetypeTable =  $('#sb_invoicetype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoicetype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoicetype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoicetype_parent_params').length) {
                        parent_params = parent_params + $('#invoicetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoicetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoicetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoicetype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoicetype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoicetypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoicetype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoicetype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoicetype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoicetypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoicetype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoicetypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoicetype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoicetype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoicetypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoicetypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoicetype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoicetype_rows_selected, function(index, rowId){

        $.each($('input[name="invoicetype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoicetype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoicetype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoicetype_dependent_list_box').append($(
                '<div id="invoicetype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoicetype" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoicetype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoicetype_dependent_list_box').on('click', '.invoicetype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoicetype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoicetype_dependent_list_box').find('#invoicetype_list_item_' + entityId).remove();

      
   });
   var sb_invoicestatus_rows_selected = [];
   var sb_invoicestatusTable =  $('#sb_invoicestatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoicestatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoicestatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoicestatus_parent_params').length) {
                        parent_params = parent_params + $('#invoicestatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoicestatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoicestatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoicestatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoicestatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoicestatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoicestatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoicestatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoicestatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoicestatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoicestatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoicestatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoicestatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoicestatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoicestatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoicestatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoicestatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoicestatus_rows_selected, function(index, rowId){

        $.each($('input[name="invoicestatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoicestatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoicestatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoicestatus_dependent_list_box').append($(
                '<div id="invoicestatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoicestatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoicestatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoicestatus_dependent_list_box').on('click', '.invoicestatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoicestatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoicestatus_dependent_list_box').find('#invoicestatus_list_item_' + entityId).remove();

      
   });
   var sb_invoice_rows_selected = [];
   var sb_invoiceTable =  $('#sb_invoice-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoice-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "bill_acct_txt" },
            { data: "name" },

            { data: "amount" },


            { data: "business_unit_txt" },
        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoice_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoice_parent_params').length) {
                        parent_params = parent_params + $('#invoice_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoice&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoice" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoice_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoice-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoiceTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoice_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoice_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoice_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoice-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoiceTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoice-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoice-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoiceTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoice-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoice_rows_selected, function(index, rowId){

        $.each($('input[name="invoice_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoice_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoice_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoice_dependent_list_box').append($(
                '<div id="invoice_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoice" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoice_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoice_dependent_list_box').on('click', '.invoice_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoice_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoice_dependent_list_box').find('#invoice_list_item_' + entityId).remove();

      
   });
   var sb_invoicerole_rows_selected = [];
   var sb_invoiceroleTable =  $('#sb_invoicerole-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoicerole-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoicerole_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoicerole_parent_params').length) {
                        parent_params = parent_params + $('#invoicerole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoicerole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoicerole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoicerole_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoicerole-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoiceroleTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoicerole_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoicerole_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoicerole_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceroleTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoicerole-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoiceroleTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoicerole-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoicerole-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoiceroleTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceroleTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoicerole-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoicerole_rows_selected, function(index, rowId){

        $.each($('input[name="invoicerole_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoicerole_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoicerole_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoicerole_dependent_list_box').append($(
                '<div id="invoicerole_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoicerole" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoicerole_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoicerole_dependent_list_box').on('click', '.invoicerole_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoicerole_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoicerole_dependent_list_box').find('#invoicerole_list_item_' + entityId).remove();

      
   });
   var sb_invoiceitemtype_rows_selected = [];
   var sb_invoiceitemtypeTable =  $('#sb_invoiceitemtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoiceitemtype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoiceitemtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoiceitemtype_parent_params').length) {
                        parent_params = parent_params + $('#invoiceitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoiceitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoiceitemtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoiceitemtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoiceitemtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoiceitemtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoiceitemtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoiceitemtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceitemtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoiceitemtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoiceitemtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoiceitemtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoiceitemtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoiceitemtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceitemtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoiceitemtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoiceitemtype_rows_selected, function(index, rowId){

        $.each($('input[name="invoiceitemtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoiceitemtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoiceitemtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoiceitemtype_dependent_list_box').append($(
                '<div id="invoiceitemtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoiceitemtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoiceitemtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoiceitemtype_dependent_list_box').on('click', '.invoiceitemtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoiceitemtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoiceitemtype_dependent_list_box').find('#invoiceitemtype_list_item_' + entityId).remove();

      
   });
   var sb_invoiceitemstatus_rows_selected = [];
   var sb_invoiceitemstatusTable =  $('#sb_invoiceitemstatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoiceitemstatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoiceitemstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoiceitemstatus_parent_params').length) {
                        parent_params = parent_params + $('#invoiceitemstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoiceitemstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceitemstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoiceitemstatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoiceitemstatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoiceitemstatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoiceitemstatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoiceitemstatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoiceitemstatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceitemstatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoiceitemstatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoiceitemstatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoiceitemstatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoiceitemstatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoiceitemstatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceitemstatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoiceitemstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoiceitemstatus_rows_selected, function(index, rowId){

        $.each($('input[name="invoiceitemstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoiceitemstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoiceitemstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoiceitemstatus_dependent_list_box').append($(
                '<div id="invoiceitemstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoiceitemstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoiceitemstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoiceitemstatus_dependent_list_box').on('click', '.invoiceitemstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoiceitemstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoiceitemstatus_dependent_list_box').find('#invoiceitemstatus_list_item_' + entityId).remove();

      
   });
   var sb_invoiceitem_rows_selected = [];
   var sb_invoiceitemTable =  $('#sb_invoiceitem-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoiceitem-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "quantity" },

            { data: "unit_price" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoiceitem_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoiceitem_parent_params').length) {
                        parent_params = parent_params + $('#invoiceitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoiceitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoiceitem_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoiceitem-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoiceitemTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoiceitem_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoiceitem_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoiceitem_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceitemTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoiceitem-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoiceitemTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoiceitem-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoiceitem-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoiceitemTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoiceitemTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoiceitem-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoiceitem_rows_selected, function(index, rowId){

        $.each($('input[name="invoiceitem_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoiceitem_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoiceitem_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoiceitem_dependent_list_box').append($(
                '<div id="invoiceitem_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoiceitem" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoiceitem_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoiceitem_dependent_list_box').on('click', '.invoiceitem_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoiceitem_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoiceitem_dependent_list_box').find('#invoiceitem_list_item_' + entityId).remove();

      
   });
   var sb_invoiceterm_rows_selected = [];
   var sb_invoicetermTable =  $('#sb_invoiceterm-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_invoiceterm-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "it_invoice_txt" },

            { data: "it_term_txt" },
            { data: "name" },

            { data: "value" },

            { data: "from_start" },

            { data: "thru_end" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="invoiceterm_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoiceterm_parent_params').length) {
                        parent_params = parent_params + $('#invoiceterm_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=invoiceterm&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceterm" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_invoiceterm_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_invoiceterm-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_invoicetermTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_invoiceterm_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_invoiceterm_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_invoiceterm_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoicetermTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_invoiceterm-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_invoicetermTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_invoiceterm-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_invoiceterm-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_invoicetermTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_invoicetermTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-invoiceterm-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_invoiceterm_rows_selected, function(index, rowId){

        $.each($('input[name="invoiceterm_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'invoiceterm_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#invoiceterm_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#invoiceterm_dependent_list_box').append($(
                '<div id="invoiceterm_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="invoiceterm" ' + 
                        'data-entity-id="' + rowId + '" class="badge invoiceterm_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#invoiceterm_dependent_list_box').on('click', '.invoiceterm_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="invoiceterm_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#invoiceterm_dependent_list_box').find('#invoiceterm_list_item_' + entityId).remove();

      
   });
   var sb_paymenttype_rows_selected = [];
   var sb_paymenttypeTable =  $('#sb_paymenttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_paymenttype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="paymenttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paymenttype_parent_params').length) {
                        parent_params = parent_params + $('#paymenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=paymenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_paymenttype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_paymenttype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_paymenttypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_paymenttype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_paymenttype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_paymenttype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymenttypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_paymenttype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_paymenttypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_paymenttype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_paymenttype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_paymenttypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymenttypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-paymenttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_paymenttype_rows_selected, function(index, rowId){

        $.each($('input[name="paymenttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'paymenttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#paymenttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#paymenttype_dependent_list_box').append($(
                '<div id="paymenttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="paymenttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge paymenttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#paymenttype_dependent_list_box').on('click', '.paymenttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="paymenttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#paymenttype_dependent_list_box').find('#paymenttype_list_item_' + entityId).remove();

      
   });
   var sb_paymethod_rows_selected = [];
   var sb_paymethodTable =  $('#sb_paymethod-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_paymethod-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="paymentmethod_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paymentmethod_parent_params').length) {
                        parent_params = parent_params + $('#paymentmethod_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=paymentmethod&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymentmethod" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_paymethod_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_paymethod-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_paymethodTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_paymethod_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_paymethod_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_paymethod_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymethodTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_paymethod-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_paymethodTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_paymethod-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_paymethod-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_paymethodTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymethodTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-paymentmethod-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_paymethod_rows_selected, function(index, rowId){

        $.each($('input[name="paymentmethod_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'paymentmethod_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#paymentmethod_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#paymentmethod_dependent_list_box').append($(
                '<div id="paymentmethod_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="paymentmethod" ' + 
                        'data-entity-id="' + rowId + '" class="badge paymentmethod_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#paymentmethod_dependent_list_box').on('click', '.paymentmethod_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="paymentmethod_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#paymentmethod_dependent_list_box').find('#paymentmethod_list_item_' + entityId).remove();

      
   });
   var sb_payment_rows_selected = [];
   var sb_paymentTable =  $('#sb_payment-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_payment-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "p_type_txt" },

            { data: "p_methtype_txt" },

            { data: "payment_from_txt" },

            { data: "payment_to_txt" },

            { data: "payment_account_txt" },

            { data: "payment_invoice_txt" },
            { data: "name" },

            { data: "amount" },

            { data: "effective_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="payment_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#payment_parent_params').length) {
                        parent_params = parent_params + $('#payment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=payment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="payment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_payment_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_payment-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_paymentTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_payment_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_payment_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_payment_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymentTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_payment-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_paymentTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_payment-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_payment-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_paymentTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymentTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-payment-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_payment_rows_selected, function(index, rowId){

        $.each($('input[name="payment_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'payment_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#payment_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#payment_dependent_list_box').append($(
                '<div id="payment_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="payment" ' + 
                        'data-entity-id="' + rowId + '" class="badge payment_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#payment_dependent_list_box').on('click', '.payment_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="payment_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#payment_dependent_list_box').find('#payment_list_item_' + entityId).remove();

      
   });
   var sb_periodtype_rows_selected = [];
   var sb_periodtypeTable =  $('#sb_periodtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_periodtype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="periodtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#periodtype_parent_params').length) {
                        parent_params = parent_params + $('#periodtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=periodtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="periodtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_periodtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_periodtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_periodtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_periodtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_periodtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_periodtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_periodtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_periodtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_periodtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_periodtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_periodtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_periodtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_periodtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-periodtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_periodtype_rows_selected, function(index, rowId){

        $.each($('input[name="periodtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'periodtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#periodtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#periodtype_dependent_list_box').append($(
                '<div id="periodtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="periodtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge periodtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#periodtype_dependent_list_box').on('click', '.periodtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="periodtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#periodtype_dependent_list_box').find('#periodtype_list_item_' + entityId).remove();

      
   });
   var sb_acctperiod_rows_selected = [];
   var sb_acctperiodTable =  $('#sb_acctperiod-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_acctperiod-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "parent_period_txt" },

            { data: "ap_type_txt" },
            { data: "name" },

            { data: "period_no" },

            { data: "active_fg" },

            { data: "from_date" },

            { data: "to_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="accountingperiod_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accountingperiod_parent_params').length) {
                        parent_params = parent_params + $('#accountingperiod_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=accountingperiod&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accountingperiod" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_acctperiod_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_acctperiod-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_acctperiodTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_acctperiod_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_acctperiod_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_acctperiod_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_acctperiodTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_acctperiod-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_acctperiodTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_acctperiod-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_acctperiod-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_acctperiodTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_acctperiodTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-accountingperiod-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_acctperiod_rows_selected, function(index, rowId){

        $.each($('input[name="accountingperiod_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'accountingperiod_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#accountingperiod_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#accountingperiod_dependent_list_box').append($(
                '<div id="accountingperiod_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="accountingperiod" ' + 
                        'data-entity-id="' + rowId + '" class="badge accountingperiod_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#accountingperiod_dependent_list_box').on('click', '.accountingperiod_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="accountingperiod_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#accountingperiod_dependent_list_box').find('#accountingperiod_list_item_' + entityId).remove();

      
   });
   var sb_coaacctstruct_rows_selected = [];
   var sb_coaacctstructTable =  $('#sb_coaacctstruct-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_coaacctstruct-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "seg_separator" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="coaaccountstructure_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountstructure_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountstructure_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=coaaccountstructure&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountstructure" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_coaacctstruct_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_coaacctstruct-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_coaacctstructTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_coaacctstruct_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_coaacctstruct_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_coaacctstruct_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaacctstructTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_coaacctstruct-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_coaacctstructTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_coaacctstruct-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_coaacctstruct-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_coaacctstructTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaacctstructTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-coaaccountstructure-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_coaacctstruct_rows_selected, function(index, rowId){

        $.each($('input[name="coaaccountstructure_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'coaaccountstructure_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#coaaccountstructure_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#coaaccountstructure_dependent_list_box').append($(
                '<div id="coaaccountstructure_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="coaaccountstructure" ' + 
                        'data-entity-id="' + rowId + '" class="badge coaaccountstructure_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#coaaccountstructure_dependent_list_box').on('click', '.coaaccountstructure_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="coaaccountstructure_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#coaaccountstructure_dependent_list_box').find('#coaaccountstructure_list_item_' + entityId).remove();

      
   });
   var sb_coaacctsegtype_rows_selected = [];
   var sb_coaacctsegtypeTable =  $('#sb_coaacctsegtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_coaacctsegtype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "mask" },

            { data: "has_val_src" },

            { data: "val_provider" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="coaaccountsegmenttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegmenttype_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegmenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=coaaccountsegmenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegmenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_coaacctsegtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_coaacctsegtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_coaacctsegtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_coaacctsegtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_coaacctsegtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_coaacctsegtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaacctsegtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_coaacctsegtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_coaacctsegtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_coaacctsegtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_coaacctsegtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_coaacctsegtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaacctsegtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-coaaccountsegmenttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_coaacctsegtype_rows_selected, function(index, rowId){

        $.each($('input[name="coaaccountsegmenttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'coaaccountsegmenttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#coaaccountsegmenttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#coaaccountsegmenttype_dependent_list_box').append($(
                '<div id="coaaccountsegmenttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="coaaccountsegmenttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge coaaccountsegmenttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#coaaccountsegmenttype_dependent_list_box').on('click', '.coaaccountsegmenttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="coaaccountsegmenttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#coaaccountsegmenttype_dependent_list_box').find('#coaaccountsegmenttype_list_item_' + entityId).remove();

      
   });
   var sb_coaasegval_rows_selected = [];
   var sb_coaasegvalTable =  $('#sb_coaasegval-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_coaasegval-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "v_segtype_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="coaaccountsegmenttypevalue_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegmenttypevalue_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegmenttypevalue_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=coaaccountsegmenttypevalue&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegmenttypevalue" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_coaasegval_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_coaasegval-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_coaasegvalTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_coaasegval_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_coaasegval_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_coaasegval_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaasegvalTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_coaasegval-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_coaasegvalTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_coaasegval-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_coaasegval-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_coaasegvalTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaasegvalTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-coaaccountsegmenttypevalue-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_coaasegval_rows_selected, function(index, rowId){

        $.each($('input[name="coaaccountsegmenttypevalue_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'coaaccountsegmenttypevalue_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#coaaccountsegmenttypevalue_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#coaaccountsegmenttypevalue_dependent_list_box').append($(
                '<div id="coaaccountsegmenttypevalue_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="coaaccountsegmenttypevalue" ' + 
                        'data-entity-id="' + rowId + '" class="badge coaaccountsegmenttypevalue_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#coaaccountsegmenttypevalue_dependent_list_box').on('click', '.coaaccountsegmenttypevalue_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="coaaccountsegmenttypevalue_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#coaaccountsegmenttypevalue_dependent_list_box').find('#coaaccountsegmenttypevalue_list_item_' + entityId).remove();

      
   });
   var sb_coaacctseg_rows_selected = [];
   var sb_coaacctsegTable =  $('#sb_coaacctseg-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_coaacctseg-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "seg_type_txt" },

            { data: "seg_acctstruct_txt" },
            { data: "name" },

            { data: "seg_sequence" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="coaaccountsegment_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegment_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=coaaccountsegment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_coaacctseg_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_coaacctseg-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_coaacctsegTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_coaacctseg_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_coaacctseg_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_coaacctseg_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaacctsegTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_coaacctseg-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_coaacctsegTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_coaacctseg-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_coaacctseg-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_coaacctsegTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaacctsegTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-coaaccountsegment-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_coaacctseg_rows_selected, function(index, rowId){

        $.each($('input[name="coaaccountsegment_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'coaaccountsegment_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#coaaccountsegment_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#coaaccountsegment_dependent_list_box').append($(
                '<div id="coaaccountsegment_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="coaaccountsegment" ' + 
                        'data-entity-id="' + rowId + '" class="badge coaaccountsegment_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#coaaccountsegment_dependent_list_box').on('click', '.coaaccountsegment_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="coaaccountsegment_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#coaaccountsegment_dependent_list_box').find('#coaaccountsegment_list_item_' + entityId).remove();

      
   });
   var sb_coastatus_rows_selected = [];
   var sb_coastatusTable =  $('#sb_coastatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_coastatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="coastatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coastatus_parent_params').length) {
                        parent_params = parent_params + $('#coastatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=coastatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coastatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_coastatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_coastatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_coastatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_coastatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_coastatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_coastatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coastatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_coastatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_coastatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_coastatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_coastatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_coastatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coastatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-coastatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_coastatus_rows_selected, function(index, rowId){

        $.each($('input[name="coastatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'coastatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#coastatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#coastatus_dependent_list_box').append($(
                '<div id="coastatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="coastatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge coastatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#coastatus_dependent_list_box').on('click', '.coastatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="coastatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#coastatus_dependent_list_box').find('#coastatus_list_item_' + entityId).remove();

      
   });
   var sb_coa_rows_selected = [];
   var sb_coaTable =  $('#sb_coa-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_coa-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "org_unit_txt" },

            { data: "acct_structure_txt" },
            { data: "name" },

            { data: "from_date" },

            { data: "to_date" },


            { data: "status_txt" },
            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="chartofaccounts_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#chartofaccounts_parent_params').length) {
                        parent_params = parent_params + $('#chartofaccounts_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=chartofaccounts&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="chartofaccounts" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_coa_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_coa-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_coaTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_coa_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_coa_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_coa_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_coa-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_coaTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_coa-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_coa-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_coaTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-chartofaccounts-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_coa_rows_selected, function(index, rowId){

        $.each($('input[name="chartofaccounts_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'chartofaccounts_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#chartofaccounts_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#chartofaccounts_dependent_list_box').append($(
                '<div id="chartofaccounts_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="chartofaccounts" ' + 
                        'data-entity-id="' + rowId + '" class="badge chartofaccounts_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#chartofaccounts_dependent_list_box').on('click', '.chartofaccounts_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="chartofaccounts_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#chartofaccounts_dependent_list_box').find('#chartofaccounts_list_item_' + entityId).remove();

      
   });
   var sb_glaccttype_rows_selected = [];
   var sb_glaccttypeTable =  $('#sb_glaccttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_glaccttype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="glaccounttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#glaccounttype_parent_params').length) {
                        parent_params = parent_params + $('#glaccounttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=glaccounttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="glaccounttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_glaccttype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_glaccttype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_glaccttypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_glaccttype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_glaccttype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_glaccttype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_glaccttypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_glaccttype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_glaccttypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_glaccttype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_glaccttype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_glaccttypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_glaccttypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-glaccounttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_glaccttype_rows_selected, function(index, rowId){

        $.each($('input[name="glaccounttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'glaccounttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#glaccounttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#glaccounttype_dependent_list_box').append($(
                '<div id="glaccounttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="glaccounttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge glaccounttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#glaccounttype_dependent_list_box').on('click', '.glaccounttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="glaccounttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#glaccounttype_dependent_list_box').find('#glaccounttype_list_item_' + entityId).remove();

      
   });
   var sb_glaccount_rows_selected = [];
   var sb_glaccountTable =  $('#sb_glaccount-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_glaccount-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "account_no" },


            { data: "glacct_type_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="glaccount_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#glaccount_parent_params').length) {
                        parent_params = parent_params + $('#glaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=glaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="glaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_glaccount_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_glaccount-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_glaccountTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_glaccount_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_glaccount_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_glaccount_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_glaccountTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_glaccount-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_glaccountTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_glaccount-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_glaccount-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_glaccountTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_glaccountTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-glaccount-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_glaccount_rows_selected, function(index, rowId){

        $.each($('input[name="glaccount_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'glaccount_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#glaccount_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#glaccount_dependent_list_box').append($(
                '<div id="glaccount_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="glaccount" ' + 
                        'data-entity-id="' + rowId + '" class="badge glaccount_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#glaccount_dependent_list_box').on('click', '.glaccount_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="glaccount_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#glaccount_dependent_list_box').find('#glaccount_list_item_' + entityId).remove();

      
   });
   var sb_buglaccount_rows_selected = [];
   var sb_buglaccountTable =  $('#sb_buglaccount-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_buglaccount-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "parent_buglacct_txt" },

            { data: "glaccount_txt" },

            { data: "internal_org_txt" },
            { data: "name" },

            { data: "from_date" },

            { data: "to_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="businessunitglaccount_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#businessunitglaccount_parent_params').length) {
                        parent_params = parent_params + $('#businessunitglaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=businessunitglaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="businessunitglaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_buglaccount_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_buglaccount-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_buglaccountTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_buglaccount_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_buglaccount_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_buglaccount_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_buglaccountTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_buglaccount-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_buglaccountTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_buglaccount-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_buglaccount-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_buglaccountTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_buglaccountTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-businessunitglaccount-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_buglaccount_rows_selected, function(index, rowId){

        $.each($('input[name="businessunitglaccount_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'businessunitglaccount_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#businessunitglaccount_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#businessunitglaccount_dependent_list_box').append($(
                '<div id="businessunitglaccount_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="businessunitglaccount" ' + 
                        'data-entity-id="' + rowId + '" class="badge businessunitglaccount_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#businessunitglaccount_dependent_list_box').on('click', '.businessunitglaccount_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="businessunitglaccount_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#businessunitglaccount_dependent_list_box').find('#businessunitglaccount_list_item_' + entityId).remove();

      
   });
   var sb_buglaccountbal_rows_selected = [];
   var sb_buglaccountbalTable =  $('#sb_buglaccountbal-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_buglaccountbal-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "buglaccount_txt" },

            { data: "internal_org_txt" },

            { data: "acctng_period_txt" },
            { data: "name" },

            { data: "balance" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="businessunitglaccountbalance_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#businessunitglaccountbalance_parent_params').length) {
                        parent_params = parent_params + $('#businessunitglaccountbalance_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=businessunitglaccountbalance&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="businessunitglaccountbalance" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_buglaccountbal_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_buglaccountbal-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_buglaccountbalTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_buglaccountbal_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_buglaccountbal_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_buglaccountbal_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_buglaccountbalTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_buglaccountbal-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_buglaccountbalTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_buglaccountbal-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_buglaccountbal-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_buglaccountbalTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_buglaccountbalTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-businessunitglaccountbalance-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_buglaccountbal_rows_selected, function(index, rowId){

        $.each($('input[name="businessunitglaccountbalance_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'businessunitglaccountbalance_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#businessunitglaccountbalance_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#businessunitglaccountbalance_dependent_list_box').append($(
                '<div id="businessunitglaccountbalance_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="businessunitglaccountbalance" ' + 
                        'data-entity-id="' + rowId + '" class="badge businessunitglaccountbalance_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#businessunitglaccountbalance_dependent_list_box').on('click', '.businessunitglaccountbalance_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="businessunitglaccountbalance_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#businessunitglaccountbalance_dependent_list_box').find('#businessunitglaccountbalance_list_item_' + entityId).remove();

      
   });
   var sb_coaaseginst_rows_selected = [];
   var sb_coaaseginstTable =  $('#sb_coaaseginst-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_coaaseginst-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "coa_txt" },

            { data: "acct_segment_txt" },

            { data: "parent_instance_txt" },
            { data: "name" },

            { data: "is_account" },


            { data: "casi_buglaccount_txt" },
            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="coaaccountsegmentinstance_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegmentinstance_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegmentinstance_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=coaaccountsegmentinstance&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegmentinstance" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_coaaseginst_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_coaaseginst-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_coaaseginstTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_coaaseginst_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_coaaseginst_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_coaaseginst_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaaseginstTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_coaaseginst-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_coaaseginstTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_coaaseginst-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_coaaseginst-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_coaaseginstTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_coaaseginstTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-coaaccountsegmentinstance-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_coaaseginst_rows_selected, function(index, rowId){

        $.each($('input[name="coaaccountsegmentinstance_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'coaaccountsegmentinstance_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#coaaccountsegmentinstance_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#coaaccountsegmentinstance_dependent_list_box').append($(
                '<div id="coaaccountsegmentinstance_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="coaaccountsegmentinstance" ' + 
                        'data-entity-id="' + rowId + '" class="badge coaaccountsegmentinstance_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#coaaccountsegmentinstance_dependent_list_box').on('click', '.coaaccountsegmentinstance_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="coaaccountsegmentinstance_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#coaaccountsegmentinstance_dependent_list_box').find('#coaaccountsegmentinstance_list_item_' + entityId).remove();

      
   });
   var sb_feventtype_rows_selected = [];
   var sb_feventtypeTable =  $('#sb_feventtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_feventtype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="financialeventtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#financialeventtype_parent_params').length) {
                        parent_params = parent_params + $('#financialeventtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=financialeventtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="financialeventtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_feventtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_feventtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_feventtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_feventtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_feventtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_feventtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_feventtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_feventtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_feventtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_feventtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_feventtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_feventtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_feventtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-financialeventtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_feventtype_rows_selected, function(index, rowId){

        $.each($('input[name="financialeventtype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'financialeventtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#financialeventtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#financialeventtype_dependent_list_box').append($(
                '<div id="financialeventtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="financialeventtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge financialeventtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#financialeventtype_dependent_list_box').on('click', '.financialeventtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="financialeventtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#financialeventtype_dependent_list_box').find('#financialeventtype_list_item_' + entityId).remove();

      
   });
   var sb_fevent_rows_selected = [];
   var sb_feventTable =  $('#sb_fevent-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_fevent-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "event_type_txt" },
            { data: "name" },

            { data: "amount" },

            { data: "event_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="financialevent_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#financialevent_parent_params').length) {
                        parent_params = parent_params + $('#financialevent_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=financialevent&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="financialevent" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_fevent_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_fevent-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_feventTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_fevent_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_fevent_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_fevent_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_feventTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_fevent-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_feventTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_fevent-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_fevent-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_feventTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_feventTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-financialevent-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_fevent_rows_selected, function(index, rowId){

        $.each($('input[name="financialevent_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'financialevent_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#financialevent_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#financialevent_dependent_list_box').append($(
                '<div id="financialevent_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="financialevent" ' + 
                        'data-entity-id="' + rowId + '" class="badge financialevent_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#financialevent_dependent_list_box').on('click', '.financialevent_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="financialevent_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#financialevent_dependent_list_box').find('#financialevent_list_item_' + entityId).remove();

      
   });
   var sb_txntype_rows_selected = [];
   var sb_txntypeTable =  $('#sb_txntype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_txntype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "parent_type_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="transactiontype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#transactiontype_parent_params').length) {
                        parent_params = parent_params + $('#transactiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=transactiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transactiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_txntype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_txntype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_txntypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_txntype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_txntype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_txntype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txntypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_txntype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_txntypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_txntype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_txntype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_txntypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txntypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-transactiontype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_txntype_rows_selected, function(index, rowId){

        $.each($('input[name="transactiontype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'transactiontype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#transactiontype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#transactiontype_dependent_list_box').append($(
                '<div id="transactiontype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="transactiontype" ' + 
                        'data-entity-id="' + rowId + '" class="badge transactiontype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#transactiontype_dependent_list_box').on('click', '.transactiontype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="transactiontype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#transactiontype_dependent_list_box').find('#transactiontype_list_item_' + entityId).remove();

      
   });
   var sb_txnstatus_rows_selected = [];
   var sb_txnstatusTable =  $('#sb_txnstatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_txnstatus-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="transactionstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#transactionstatus_parent_params').length) {
                        parent_params = parent_params + $('#transactionstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=transactionstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transactionstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_txnstatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_txnstatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_txnstatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_txnstatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_txnstatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_txnstatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txnstatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_txnstatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_txnstatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_txnstatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_txnstatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_txnstatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txnstatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-transactionstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_txnstatus_rows_selected, function(index, rowId){

        $.each($('input[name="transactionstatus_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'transactionstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#transactionstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#transactionstatus_dependent_list_box').append($(
                '<div id="transactionstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="transactionstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge transactionstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#transactionstatus_dependent_list_box').on('click', '.transactionstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="transactionstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#transactionstatus_dependent_list_box').find('#transactionstatus_list_item_' + entityId).remove();

      
   });
   var sb_transaction_rows_selected = [];
   var sb_transactionTable =  $('#sb_transaction-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_transaction-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "gl_txn_type_txt" },

            { data: "gl_txn_status_txt" },
            { data: "name" },

            { data: "txn_date" },

            { data: "entry_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="transaction_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#transaction_parent_params').length) {
                        parent_params = parent_params + $('#transaction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=transaction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transaction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_transaction_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_transaction-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_transactionTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_transaction_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_transaction_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_transaction_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_transactionTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_transaction-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_transactionTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_transaction-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_transaction-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_transactionTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_transactionTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-transaction-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_transaction_rows_selected, function(index, rowId){

        $.each($('input[name="transaction_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'transaction_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#transaction_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#transaction_dependent_list_box').append($(
                '<div id="transaction_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="transaction" ' + 
                        'data-entity-id="' + rowId + '" class="badge transaction_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#transaction_dependent_list_box').on('click', '.transaction_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="transaction_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#transaction_dependent_list_box').find('#transaction_list_item_' + entityId).remove();

      
   });
   var sb_txndetail_rows_selected = [];
   var sb_txndetailTable =  $('#sb_txndetail-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_txndetail-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "transaction_txt" },

            { data: "td_buglaccount_txt" },
            { data: "name" },

            { data: "dbcr_fg" },

            { data: "amount" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="transactiondetail_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#transactiondetail_parent_params').length) {
                        parent_params = parent_params + $('#transactiondetail_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=transactiondetail&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transactiondetail" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_txndetail_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_txndetail-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_txndetailTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_txndetail_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_txndetail_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_txndetail_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txndetailTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_txndetail-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_txndetailTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_txndetail-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_txndetail-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_txndetailTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txndetailTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-transactiondetail-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_txndetail_rows_selected, function(index, rowId){

        $.each($('input[name="transactiondetail_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'transactiondetail_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#transactiondetail_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#transactiondetail_dependent_list_box').append($(
                '<div id="transactiondetail_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="transactiondetail" ' + 
                        'data-entity-id="' + rowId + '" class="badge transactiondetail_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#transactiondetail_dependent_list_box').on('click', '.transactiondetail_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="transactiondetail_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#transactiondetail_dependent_list_box').find('#transactiondetail_list_item_' + entityId).remove();

      
   });
   var sb_feventtxntype_rows_selected = [];
   var sb_feventtxntypeTable =  $('#sb_feventtxntype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_feventtxntype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "fevent_type_txt" },

            { data: "fetxn_type_txt" },
            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="feventtxntype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#feventtxntype_parent_params').length) {
                        parent_params = parent_params + $('#feventtxntype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=feventtxntype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="feventtxntype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_feventtxntype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_feventtxntype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_feventtxntypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_feventtxntype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_feventtxntype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_feventtxntype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_feventtxntypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_feventtxntype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_feventtxntypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_feventtxntype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_feventtxntype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_feventtxntypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_feventtxntypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-feventtxntype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_feventtxntype_rows_selected, function(index, rowId){

        $.each($('input[name="feventtxntype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'feventtxntype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#feventtxntype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#feventtxntype_dependent_list_box').append($(
                '<div id="feventtxntype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="feventtxntype" ' + 
                        'data-entity-id="' + rowId + '" class="badge feventtxntype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#feventtxntype_dependent_list_box').on('click', '.feventtxntype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="feventtxntype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#feventtxntype_dependent_list_box').find('#feventtxntype_list_item_' + entityId).remove();

      
   });
   var sb_txntypeacct_rows_selected = [];
   var sb_txntypeacctTable =  $('#sb_txntypeacct-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_txntypeacct-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "tta_txn_type_txt" },

            { data: "tta_account_txt" },
            { data: "name" },

            { data: "db_cr_fg" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="txntypeaccount_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#txntypeaccount_parent_params').length) {
                        parent_params = parent_params + $('#txntypeaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=txntypeaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="txntypeaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_txntypeacct_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_txntypeacct-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_txntypeacctTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_txntypeacct_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_txntypeacct_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_txntypeacct_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txntypeacctTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_txntypeacct-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_txntypeacctTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_txntypeacct-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_txntypeacct-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_txntypeacctTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_txntypeacctTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-txntypeaccount-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_txntypeacct_rows_selected, function(index, rowId){

        $.each($('input[name="txntypeaccount_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'txntypeaccount_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#txntypeaccount_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#txntypeaccount_dependent_list_box').append($(
                '<div id="txntypeaccount_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="txntypeaccount" ' + 
                        'data-entity-id="' + rowId + '" class="badge txntypeaccount_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#txntypeaccount_dependent_list_box').on('click', '.txntypeaccount_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="txntypeaccount_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#txntypeaccount_dependent_list_box').find('#txntypeaccount_list_item_' + entityId).remove();

      
   });
   var sb_bankaccttype_rows_selected = [];
   var sb_bankaccttypeTable =  $('#sb_bankaccttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_bankaccttype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },

            { data: "name" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="bankaccounttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#bankaccounttype_parent_params').length) {
                        parent_params = parent_params + $('#bankaccounttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=bankaccounttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="bankaccounttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_bankaccttype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_bankaccttype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_bankaccttypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_bankaccttype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_bankaccttype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_bankaccttype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_bankaccttypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_bankaccttype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_bankaccttypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_bankaccttype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_bankaccttype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_bankaccttypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_bankaccttypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-bankaccounttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_bankaccttype_rows_selected, function(index, rowId){

        $.each($('input[name="bankaccounttype_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'bankaccounttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#bankaccounttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#bankaccounttype_dependent_list_box').append($(
                '<div id="bankaccounttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="bankaccounttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge bankaccounttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#bankaccounttype_dependent_list_box').on('click', '.bankaccounttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="bankaccounttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#bankaccounttype_dependent_list_box').find('#bankaccounttype_list_item_' + entityId).remove();

      
   });
   var sb_bankaccount_rows_selected = [];
   var sb_bankaccountTable =  $('#sb_bankaccount-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_bankaccount-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "entity_code" },


            { data: "bank_account_type_txt" },
            { data: "name" },

            { data: "bank_account_balance" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="bankaccount_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#bankaccount_parent_params').length) {
                        parent_params = parent_params + $('#bankaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpcommerce_base_url.baseUrl + 'artifact=bankaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="bankaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_bankaccount_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_bankaccount-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_bankaccountTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_bankaccount_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_bankaccount_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_bankaccount_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_bankaccountTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_bankaccount-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_bankaccountTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_bankaccount-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_bankaccount-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_bankaccountTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_bankaccountTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-bankaccount-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_bankaccount_rows_selected, function(index, rowId){

        $.each($('input[name="bankaccount_id[]"]'), function(indexx){ 
            var valueToAdd = $(this).val();
            if(valueToAdd === rowId){
              idExists = true;
            }

        });
        if(!idExists){
          // Add the id of the selected row as a hidden input in the 
          // main form 
           $('#' + page_artifact_form).append(
               $('<input>')
                  .attr('type', 'hidden')
                  .attr('name', 'bankaccount_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#bankaccount_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#bankaccount_dependent_list_box').append($(
                '<div id="bankaccount_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="bankaccount" ' + 
                        'data-entity-id="' + rowId + '" class="badge bankaccount_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#bankaccount_dependent_list_box').on('click', '.bankaccount_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="bankaccount_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#bankaccount_dependent_list_box').find('#bankaccount_list_item_' + entityId).remove();

      
   });

});