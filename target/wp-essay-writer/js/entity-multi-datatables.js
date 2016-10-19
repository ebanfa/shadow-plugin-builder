
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


    var baseUrl = wpessaywriter_base_url.baseUrl;
   // Array holding selected row IDs
   var sb_currency_rows_selected = [];
   var sb_currencyTable =  $('#sb_currency-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=currency&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="currency" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
   var sb_country_rows_selected = [];
   var sb_countryTable =  $('#sb_country-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_country-multi-list-form").serializeArray();
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
                    return '<input id="country_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#country_parent_params').length) {
                        parent_params = parent_params + $('#country_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=country&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="country" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_country_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_country-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_countryTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_country_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_country_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_country_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_countryTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_country-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_countryTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_country-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_country-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_countryTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_countryTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-country-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_country_rows_selected, function(index, rowId){

        $.each($('input[name="country_id[]"]'), function(indexx){ 
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
                  .attr('name', 'country_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#country_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#country_dependent_list_box').append($(
                '<div id="country_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="country" ' + 
                        'data-entity-id="' + rowId + '" class="badge country_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#country_dependent_list_box').on('click', '.country_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="country_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#country_dependent_list_box').find('#country_list_item_' + entityId).remove();

      
   });
   var sb_business_rows_selected = [];
   var sb_businessTable =  $('#sb_business-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

            { data: "tel_no" },

            { data: "account_notify_email" },

            { data: "orders_notify_email" },

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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=business&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="business" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
   var sb_partycat_rows_selected = [];
   var sb_partycatTable =  $('#sb_partycat-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partycategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=roletype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="roletype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=party&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="party" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyrole-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "party_role_party_txt" },

            { data: "party_role_type_txt" },
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partyrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
   var sb_partygroup_rows_selected = [];
   var sb_partygroupTable =  $('#sb_partygroup-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partygroup-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partygroup&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partygroup" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_person-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "first_name" },

            { data: "last_name" },

            { data: "gender" },

            { data: "description" },

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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=person&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="person" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyprofile-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "profile_party_txt" },
            { data: "name" },

            { data: "display_name" },

            { data: "profile_status" },

            { data: "description" },

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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partyprofile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyprofile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
   var sb_billaccount_rows_selected = [];
   var sb_billaccountTable =  $('#sb_billaccount-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=billingaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="billingaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
   var sb_partyimage_rows_selected = [];
   var sb_partyimageTable =  $('#sb_partyimage-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyimage-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "file_party_txt" },
            { data: "name" },

            { data: "file_url" },

            { data: "file_size" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partyimage_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyimage_parent_params').length) {
                        parent_params = parent_params + $('#partyimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partyimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partyimage_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partyimage-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyimageTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partyimage_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partyimage_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partyimage_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyimageTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partyimage-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyimageTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partyimage-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partyimage-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyimageTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyimageTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partyimage-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partyimage_rows_selected, function(index, rowId){

        $.each($('input[name="partyimage_id[]"]'), function(indexx){ 
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
                  .attr('name', 'partyimage_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partyimage_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partyimage_dependent_list_box').append($(
                '<div id="partyimage_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partyimage" ' + 
                        'data-entity-id="' + rowId + '" class="badge partyimage_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partyimage_dependent_list_box').on('click', '.partyimage_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partyimage_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partyimage_dependent_list_box').find('#partyimage_list_item_' + entityId).remove();

      
   });
   var sb_partyfile_rows_selected = [];
   var sb_partyfileTable =  $('#sb_partyfile-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyfile-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "file_party_txt" },
            { data: "name" },

            { data: "file_url" },

            { data: "file_size" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partyfile_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyfile_parent_params').length) {
                        parent_params = parent_params + $('#partyfile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partyfile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyfile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partyfile_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partyfile-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyfileTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partyfile_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partyfile_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partyfile_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyfileTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partyfile-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyfileTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partyfile-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partyfile-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyfileTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyfileTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partyfile-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partyfile_rows_selected, function(index, rowId){

        $.each($('input[name="partyfile_id[]"]'), function(indexx){ 
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
                  .attr('name', 'partyfile_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partyfile_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partyfile_dependent_list_box').append($(
                '<div id="partyfile_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partyfile" ' + 
                        'data-entity-id="' + rowId + '" class="badge partyfile_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partyfile_dependent_list_box').on('click', '.partyfile_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partyfile_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partyfile_dependent_list_box').find('#partyfile_list_item_' + entityId).remove();

      
   });
   var sb_socmediaccttype_rows_selected = [];
   var sb_socmediaccttypeTable =  $('#sb_socmediaccttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=socialmediaaccounttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="socialmediaaccounttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
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

            { data: "token_id" },

            { data: "token_code" },

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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=socialmediaaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="socialmediaaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
   var sb_contactreq_rows_selected = [];
   var sb_contactreqTable =  $('#sb_contactreq-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contactreq-multi-list-form").serializeArray();
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
                    return '<input id="contactrequest_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contactrequest_parent_params').length) {
                        parent_params = parent_params + $('#contactrequest_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contactrequest&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactrequest" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contactreq_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contactreq-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contactreqTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contactreq_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contactreq_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contactreq_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contactreqTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contactreq-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contactreqTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contactreq-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contactreq-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contactreqTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contactreqTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contactrequest-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contactreq_rows_selected, function(index, rowId){

        $.each($('input[name="contactrequest_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contactrequest_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contactrequest_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contactrequest_dependent_list_box').append($(
                '<div id="contactrequest_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contactrequest" ' + 
                        'data-entity-id="' + rowId + '" class="badge contactrequest_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contactrequest_dependent_list_box').on('click', '.contactrequest_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contactrequest_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contactrequest_dependent_list_box').find('#contactrequest_list_item_' + entityId).remove();

      
   });
   var sb_qualtype_rows_selected = [];
   var sb_qualtypeTable =  $('#sb_qualtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_qualtype-multi-list-form").serializeArray();
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
                    return '<input id="qualificationtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#qualificationtype_parent_params').length) {
                        parent_params = parent_params + $('#qualificationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=qualificationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="qualificationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_qualtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_qualtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_qualtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_qualtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_qualtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_qualtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_qualtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_qualtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_qualtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_qualtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_qualtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_qualtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_qualtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-qualificationtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_qualtype_rows_selected, function(index, rowId){

        $.each($('input[name="qualificationtype_id[]"]'), function(indexx){ 
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
                  .attr('name', 'qualificationtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#qualificationtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#qualificationtype_dependent_list_box').append($(
                '<div id="qualificationtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="qualificationtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge qualificationtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#qualificationtype_dependent_list_box').on('click', '.qualificationtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="qualificationtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#qualificationtype_dependent_list_box').find('#qualificationtype_list_item_' + entityId).remove();

      
   });
   var sb_partyqual_rows_selected = [];
   var sb_partyqualTable =  $('#sb_partyqual-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyqual-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "qualification_type_txt" },
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
                    return '<input id="partyqualification_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyqualification_parent_params').length) {
                        parent_params = parent_params + $('#partyqualification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partyqualification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyqualification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partyqual_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partyqual-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyqualTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partyqual_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partyqual_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partyqual_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyqualTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partyqual-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyqualTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partyqual-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partyqual-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyqualTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyqualTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partyqualification-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partyqual_rows_selected, function(index, rowId){

        $.each($('input[name="partyqualification_id[]"]'), function(indexx){ 
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
                  .attr('name', 'partyqualification_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partyqualification_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partyqualification_dependent_list_box').append($(
                '<div id="partyqualification_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partyqualification" ' + 
                        'data-entity-id="' + rowId + '" class="badge partyqualification_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partyqualification_dependent_list_box').on('click', '.partyqualification_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partyqualification_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partyqualification_dependent_list_box').find('#partyqualification_list_item_' + entityId).remove();

      
   });
   var sb_academiclevel_rows_selected = [];
   var sb_academiclevelTable =  $('#sb_academiclevel-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_academiclevel-multi-list-form").serializeArray();
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
                    return '<input id="academiclevel_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#academiclevel_parent_params').length) {
                        parent_params = parent_params + $('#academiclevel_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=academiclevel&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="academiclevel" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_academiclevel_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_academiclevel-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_academiclevelTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_academiclevel_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_academiclevel_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_academiclevel_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_academiclevelTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_academiclevel-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_academiclevelTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_academiclevel-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_academiclevel-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_academiclevelTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_academiclevelTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-academiclevel-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_academiclevel_rows_selected, function(index, rowId){

        $.each($('input[name="academiclevel_id[]"]'), function(indexx){ 
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
                  .attr('name', 'academiclevel_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#academiclevel_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#academiclevel_dependent_list_box').append($(
                '<div id="academiclevel_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="academiclevel" ' + 
                        'data-entity-id="' + rowId + '" class="badge academiclevel_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#academiclevel_dependent_list_box').on('click', '.academiclevel_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="academiclevel_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#academiclevel_dependent_list_box').find('#academiclevel_list_item_' + entityId).remove();

      
   });
   var sb_documenttype_rows_selected = [];
   var sb_documenttypeTable =  $('#sb_documenttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_documenttype-multi-list-form").serializeArray();
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
                    return '<input id="documenttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#documenttype_parent_params').length) {
                        parent_params = parent_params + $('#documenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=documenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="documenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_documenttype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_documenttype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_documenttypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_documenttype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_documenttype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_documenttype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_documenttypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_documenttype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_documenttypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_documenttype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_documenttype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_documenttypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_documenttypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-documenttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_documenttype_rows_selected, function(index, rowId){

        $.each($('input[name="documenttype_id[]"]'), function(indexx){ 
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
                  .attr('name', 'documenttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#documenttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#documenttype_dependent_list_box').append($(
                '<div id="documenttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="documenttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge documenttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#documenttype_dependent_list_box').on('click', '.documenttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="documenttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#documenttype_dependent_list_box').find('#documenttype_list_item_' + entityId).remove();

      
   });
   var sb_noofpages_rows_selected = [];
   var sb_noofpagesTable =  $('#sb_noofpages-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_noofpages-multi-list-form").serializeArray();
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
                    return '<input id="noofpages_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#noofpages_parent_params').length) {
                        parent_params = parent_params + $('#noofpages_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=noofpages&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="noofpages" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_noofpages_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_noofpages-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_noofpagesTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_noofpages_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_noofpages_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_noofpages_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_noofpagesTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_noofpages-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_noofpagesTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_noofpages-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_noofpages-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_noofpagesTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_noofpagesTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-noofpages-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_noofpages_rows_selected, function(index, rowId){

        $.each($('input[name="noofpages_id[]"]'), function(indexx){ 
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
                  .attr('name', 'noofpages_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#noofpages_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#noofpages_dependent_list_box').append($(
                '<div id="noofpages_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="noofpages" ' + 
                        'data-entity-id="' + rowId + '" class="badge noofpages_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#noofpages_dependent_list_box').on('click', '.noofpages_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="noofpages_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#noofpages_dependent_list_box').find('#noofpages_list_item_' + entityId).remove();

      
   });
   var sb_urgency_rows_selected = [];
   var sb_urgencyTable =  $('#sb_urgency-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_urgency-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },

            { data: "date_value" },

            { data: "date_unit" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="urgency_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#urgency_parent_params').length) {
                        parent_params = parent_params + $('#urgency_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=urgency&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="urgency" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_urgency_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_urgency-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_urgencyTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_urgency_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_urgency_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_urgency_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_urgencyTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_urgency-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_urgencyTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_urgency-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_urgency-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_urgencyTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_urgencyTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-urgency-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_urgency_rows_selected, function(index, rowId){

        $.each($('input[name="urgency_id[]"]'), function(indexx){ 
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
                  .attr('name', 'urgency_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#urgency_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#urgency_dependent_list_box').append($(
                '<div id="urgency_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="urgency" ' + 
                        'data-entity-id="' + rowId + '" class="badge urgency_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#urgency_dependent_list_box').on('click', '.urgency_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="urgency_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#urgency_dependent_list_box').find('#urgency_list_item_' + entityId).remove();

      
   });
   var sb_subjectarea_rows_selected = [];
   var sb_subjectareaTable =  $('#sb_subjectarea-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_subjectarea-multi-list-form").serializeArray();
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
                    return '<input id="subjectarea_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#subjectarea_parent_params').length) {
                        parent_params = parent_params + $('#subjectarea_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=subjectarea&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="subjectarea" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_subjectarea_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_subjectarea-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_subjectareaTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_subjectarea_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_subjectarea_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_subjectarea_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_subjectareaTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_subjectarea-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_subjectareaTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_subjectarea-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_subjectarea-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_subjectareaTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_subjectareaTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-subjectarea-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_subjectarea_rows_selected, function(index, rowId){

        $.each($('input[name="subjectarea_id[]"]'), function(indexx){ 
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
                  .attr('name', 'subjectarea_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#subjectarea_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#subjectarea_dependent_list_box').append($(
                '<div id="subjectarea_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="subjectarea" ' + 
                        'data-entity-id="' + rowId + '" class="badge subjectarea_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#subjectarea_dependent_list_box').on('click', '.subjectarea_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="subjectarea_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#subjectarea_dependent_list_box').find('#subjectarea_list_item_' + entityId).remove();

      
   });
   var sb_subject_rows_selected = [];
   var sb_subjectTable =  $('#sb_subject-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_subject-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "parent_area_txt" },
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
                    return '<input id="subject_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#subject_parent_params').length) {
                        parent_params = parent_params + $('#subject_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=subject&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="subject" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_subject_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_subject-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_subjectTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_subject_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_subject_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_subject_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_subjectTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_subject-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_subjectTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_subject-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_subject-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_subjectTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_subjectTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-subject-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_subject_rows_selected, function(index, rowId){

        $.each($('input[name="subject_id[]"]'), function(indexx){ 
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
                  .attr('name', 'subject_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#subject_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#subject_dependent_list_box').append($(
                '<div id="subject_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="subject" ' + 
                        'data-entity-id="' + rowId + '" class="badge subject_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#subject_dependent_list_box').on('click', '.subject_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="subject_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#subject_dependent_list_box').find('#subject_list_item_' + entityId).remove();

      
   });
   var sb_partysubarea_rows_selected = [];
   var sb_partysubareaTable =  $('#sb_partysubarea-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partysubarea-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "target_subject_txt" },
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
                    return '<input id="partysubjectarea_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partysubjectarea_parent_params').length) {
                        parent_params = parent_params + $('#partysubjectarea_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partysubjectarea&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partysubjectarea" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partysubarea_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partysubarea-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partysubareaTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partysubarea_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partysubarea_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partysubarea_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partysubareaTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partysubarea-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partysubareaTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partysubarea-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partysubarea-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partysubareaTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partysubareaTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partysubjectarea-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partysubarea_rows_selected, function(index, rowId){

        $.each($('input[name="partysubjectarea_id[]"]'), function(indexx){ 
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
                  .attr('name', 'partysubjectarea_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partysubjectarea_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partysubjectarea_dependent_list_box').append($(
                '<div id="partysubjectarea_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partysubjectarea" ' + 
                        'data-entity-id="' + rowId + '" class="badge partysubjectarea_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partysubjectarea_dependent_list_box').on('click', '.partysubjectarea_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partysubjectarea_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partysubjectarea_dependent_list_box').find('#partysubjectarea_list_item_' + entityId).remove();

      
   });
   var sb_writingstyle_rows_selected = [];
   var sb_writingstyleTable =  $('#sb_writingstyle-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_writingstyle-multi-list-form").serializeArray();
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
                    return '<input id="writingstyle_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#writingstyle_parent_params').length) {
                        parent_params = parent_params + $('#writingstyle_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=writingstyle&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="writingstyle" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_writingstyle_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_writingstyle-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_writingstyleTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_writingstyle_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_writingstyle_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_writingstyle_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_writingstyleTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_writingstyle-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_writingstyleTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_writingstyle-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_writingstyle-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_writingstyleTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_writingstyleTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-writingstyle-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_writingstyle_rows_selected, function(index, rowId){

        $.each($('input[name="writingstyle_id[]"]'), function(indexx){ 
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
                  .attr('name', 'writingstyle_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#writingstyle_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#writingstyle_dependent_list_box').append($(
                '<div id="writingstyle_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="writingstyle" ' + 
                        'data-entity-id="' + rowId + '" class="badge writingstyle_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#writingstyle_dependent_list_box').on('click', '.writingstyle_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="writingstyle_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#writingstyle_dependent_list_box').find('#writingstyle_list_item_' + entityId).remove();

      
   });
   var sb_partyreview_rows_selected = [];
   var sb_partyreviewTable =  $('#sb_partyreview-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_partyreview-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "reviewed_party_txt" },

            { data: "reviewed_by_txt" },
            { data: "name" },

            { data: "rating" },

            { data: "review_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="partyreview_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyreview_parent_params').length) {
                        parent_params = parent_params + $('#partyreview_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=partyreview&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyreview" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_partyreview_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_partyreview-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_partyreviewTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_partyreview_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_partyreview_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_partyreview_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyreviewTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_partyreview-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_partyreviewTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_partyreview-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_partyreview-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_partyreviewTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_partyreviewTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-partyreview-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_partyreview_rows_selected, function(index, rowId){

        $.each($('input[name="partyreview_id[]"]'), function(indexx){ 
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
                  .attr('name', 'partyreview_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#partyreview_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#partyreview_dependent_list_box').append($(
                '<div id="partyreview_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="partyreview" ' + 
                        'data-entity-id="' + rowId + '" class="badge partyreview_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#partyreview_dependent_list_box').on('click', '.partyreview_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="partyreview_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#partyreview_dependent_list_box').find('#partyreview_list_item_' + entityId).remove();

      
   });
   var sb_classtype_rows_selected = [];
   var sb_classtypeTable =  $('#sb_classtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_classtype-multi-list-form").serializeArray();
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
                    return '<input id="classificationtype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#classificationtype_parent_params').length) {
                        parent_params = parent_params + $('#classificationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=classificationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="classificationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_classtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_classtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_classtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_classtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_classtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_classtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_classtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_classtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_classtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_classtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_classtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_classtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_classtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-classificationtype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_classtype_rows_selected, function(index, rowId){

        $.each($('input[name="classificationtype_id[]"]'), function(indexx){ 
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
                  .attr('name', 'classificationtype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#classificationtype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#classificationtype_dependent_list_box').append($(
                '<div id="classificationtype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="classificationtype" ' + 
                        'data-entity-id="' + rowId + '" class="badge classificationtype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#classificationtype_dependent_list_box').on('click', '.classificationtype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="classificationtype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#classificationtype_dependent_list_box').find('#classificationtype_list_item_' + entityId).remove();

      
   });
   var sb_classification_rows_selected = [];
   var sb_classificationTable =  $('#sb_classification-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_classification-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "class_type_txt" },
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
                    return '<input id="classification_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#classification_parent_params').length) {
                        parent_params = parent_params + $('#classification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=classification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="classification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_classification_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_classification-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_classificationTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_classification_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_classification_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_classification_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_classificationTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_classification-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_classificationTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_classification-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_classification-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_classificationTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_classificationTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-classification-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_classification_rows_selected, function(index, rowId){

        $.each($('input[name="classification_id[]"]'), function(indexx){ 
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
                  .attr('name', 'classification_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#classification_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#classification_dependent_list_box').append($(
                '<div id="classification_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="classification" ' + 
                        'data-entity-id="' + rowId + '" class="badge classification_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#classification_dependent_list_box').on('click', '.classification_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="classification_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#classification_dependent_list_box').find('#classification_list_item_' + entityId).remove();

      
   });
   var sb_contentcat_rows_selected = [];
   var sb_contentcatTable =  $('#sb_contentcat-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contentcat-multi-list-form").serializeArray();
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
                    return '<input id="contentcategory_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentcategory_parent_params').length) {
                        parent_params = parent_params + $('#contentcategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contentcategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentcategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contentcat_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contentcat-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contentcatTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contentcat_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contentcat_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contentcat_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentcatTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contentcat-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contentcatTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contentcat-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contentcat-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contentcatTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentcatTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contentcategory-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contentcat_rows_selected, function(index, rowId){

        $.each($('input[name="contentcategory_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contentcategory_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contentcategory_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contentcategory_dependent_list_box').append($(
                '<div id="contentcategory_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contentcategory" ' + 
                        'data-entity-id="' + rowId + '" class="badge contentcategory_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contentcategory_dependent_list_box').on('click', '.contentcategory_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contentcategory_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contentcategory_dependent_list_box').find('#contentcategory_list_item_' + entityId).remove();

      
   });
   var sb_contenttype_rows_selected = [];
   var sb_contenttypeTable =  $('#sb_contenttype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contenttype-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "content_category_txt" },
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
                    return '<input id="contenttype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contenttype_parent_params').length) {
                        parent_params = parent_params + $('#contenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contenttype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contenttype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contenttypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contenttype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contenttype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contenttype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contenttypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contenttype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contenttypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contenttype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contenttype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contenttypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contenttypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contenttype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contenttype_rows_selected, function(index, rowId){

        $.each($('input[name="contenttype_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contenttype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contenttype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contenttype_dependent_list_box').append($(
                '<div id="contenttype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contenttype" ' + 
                        'data-entity-id="' + rowId + '" class="badge contenttype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contenttype_dependent_list_box').on('click', '.contenttype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contenttype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contenttype_dependent_list_box').find('#contenttype_list_item_' + entityId).remove();

      
   });
   var sb_content_rows_selected = [];
   var sb_contentTable =  $('#sb_content-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_content-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "content_type_txt" },

            { data: "content_subject_txt" },
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
                    return '<input id="content_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#content_parent_params').length) {
                        parent_params = parent_params + $('#content_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=content&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="content" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_content_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_content-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contentTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_content_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_content_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_content_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_content-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contentTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_content-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_content-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contentTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-content-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_content_rows_selected, function(index, rowId){

        $.each($('input[name="content_id[]"]'), function(indexx){ 
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
                  .attr('name', 'content_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#content_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#content_dependent_list_box').append($(
                '<div id="content_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="content" ' + 
                        'data-entity-id="' + rowId + '" class="badge content_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#content_dependent_list_box').on('click', '.content_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="content_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#content_dependent_list_box').find('#content_list_item_' + entityId).remove();

      
   });
   var sb_contentfile_rows_selected = [];
   var sb_contentfileTable =  $('#sb_contentfile-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contentfile-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "file_of_content_txt" },
            { data: "name" },

            { data: "file_url" },

            { data: "file_size" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="contentfile_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentfile_parent_params').length) {
                        parent_params = parent_params + $('#contentfile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contentfile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentfile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contentfile_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contentfile-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contentfileTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contentfile_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contentfile_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contentfile_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentfileTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contentfile-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contentfileTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contentfile-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contentfile-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contentfileTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentfileTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contentfile-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contentfile_rows_selected, function(index, rowId){

        $.each($('input[name="contentfile_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contentfile_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contentfile_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contentfile_dependent_list_box').append($(
                '<div id="contentfile_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contentfile" ' + 
                        'data-entity-id="' + rowId + '" class="badge contentfile_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contentfile_dependent_list_box').on('click', '.contentfile_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contentfile_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contentfile_dependent_list_box').find('#contentfile_list_item_' + entityId).remove();

      
   });
   var sb_contentclass_rows_selected = [];
   var sb_contentclassTable =  $('#sb_contentclass-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contentclass-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "class_content_txt" },

            { data: "content_class_txt" },
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
                    return '<input id="contentclassification_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentclassification_parent_params').length) {
                        parent_params = parent_params + $('#contentclassification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contentclassification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentclassification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contentclass_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contentclass-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contentclassTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contentclass_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contentclass_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contentclass_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentclassTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contentclass-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contentclassTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contentclass-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contentclass-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contentclassTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentclassTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contentclassification-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contentclass_rows_selected, function(index, rowId){

        $.each($('input[name="contentclassification_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contentclassification_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contentclassification_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contentclassification_dependent_list_box').append($(
                '<div id="contentclassification_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contentclassification" ' + 
                        'data-entity-id="' + rowId + '" class="badge contentclassification_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contentclassification_dependent_list_box').on('click', '.contentclassification_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contentclassification_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contentclassification_dependent_list_box').find('#contentclassification_list_item_' + entityId).remove();

      
   });
   var sb_cordertype_rows_selected = [];
   var sb_cordertypeTable =  $('#sb_cordertype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_cordertype-multi-list-form").serializeArray();
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
                    return '<input id="contentordertype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentordertype_parent_params').length) {
                        parent_params = parent_params + $('#contentordertype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contentordertype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentordertype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_cordertype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_cordertype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_cordertypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_cordertype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_cordertype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_cordertype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_cordertypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_cordertype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_cordertypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_cordertype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_cordertype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_cordertypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_cordertypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contentordertype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_cordertype_rows_selected, function(index, rowId){

        $.each($('input[name="contentordertype_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contentordertype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contentordertype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contentordertype_dependent_list_box').append($(
                '<div id="contentordertype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contentordertype" ' + 
                        'data-entity-id="' + rowId + '" class="badge contentordertype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contentordertype_dependent_list_box').on('click', '.contentordertype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contentordertype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contentordertype_dependent_list_box').find('#contentordertype_list_item_' + entityId).remove();

      
   });
   var sb_corderstatus_rows_selected = [];
   var sb_corderstatusTable =  $('#sb_corderstatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_corderstatus-multi-list-form").serializeArray();
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
                    return '<input id="contentorderstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentorderstatus_parent_params').length) {
                        parent_params = parent_params + $('#contentorderstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contentorderstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentorderstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_corderstatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_corderstatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_corderstatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_corderstatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_corderstatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_corderstatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_corderstatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_corderstatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_corderstatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_corderstatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_corderstatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_corderstatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_corderstatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contentorderstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_corderstatus_rows_selected, function(index, rowId){

        $.each($('input[name="contentorderstatus_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contentorderstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contentorderstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contentorderstatus_dependent_list_box').append($(
                '<div id="contentorderstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contentorderstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge contentorderstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contentorderstatus_dependent_list_box').on('click', '.contentorderstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contentorderstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contentorderstatus_dependent_list_box').find('#contentorderstatus_list_item_' + entityId).remove();

      
   });
   var sb_paymentstatus_rows_selected = [];
   var sb_paymentstatusTable =  $('#sb_paymentstatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_paymentstatus-multi-list-form").serializeArray();
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
                    return '<input id="paymentstatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paymentstatus_parent_params').length) {
                        parent_params = parent_params + $('#paymentstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=paymentstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymentstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_paymentstatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_paymentstatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_paymentstatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_paymentstatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_paymentstatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_paymentstatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymentstatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_paymentstatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_paymentstatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_paymentstatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_paymentstatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_paymentstatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_paymentstatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-paymentstatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_paymentstatus_rows_selected, function(index, rowId){

        $.each($('input[name="paymentstatus_id[]"]'), function(indexx){ 
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
                  .attr('name', 'paymentstatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#paymentstatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#paymentstatus_dependent_list_box').append($(
                '<div id="paymentstatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="paymentstatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge paymentstatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#paymentstatus_dependent_list_box').on('click', '.paymentstatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="paymentstatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#paymentstatus_dependent_list_box').find('#paymentstatus_list_item_' + entityId).remove();

      
   });
   var sb_contentorder_rows_selected = [];
   var sb_contentorderTable =  $('#sb_contentorder-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_contentorder-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
            { data: "name" },


            { data: "order_status_txt" },

            { data: "payment_status_txt" },

            { data: "order_party_txt" },

            { data: "order_tutor_txt" },

            { data: "academic_level_txt" },

            { data: "numpages_txt" },

            { data: "subject_txt" },

            { data: "urgency_txt" },
            { data: "order_date" },

            { data: "total" },

            { data: "amount_paid" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="contentorder_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentorder_parent_params').length) {
                        parent_params = parent_params + $('#contentorder_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contentorder&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentorder" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_contentorder_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_contentorder-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_contentorderTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_contentorder_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_contentorder_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_contentorder_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentorderTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_contentorder-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_contentorderTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_contentorder-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_contentorder-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_contentorderTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_contentorderTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contentorder-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_contentorder_rows_selected, function(index, rowId){

        $.each($('input[name="contentorder_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contentorder_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contentorder_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contentorder_dependent_list_box').append($(
                '<div id="contentorder_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contentorder" ' + 
                        'data-entity-id="' + rowId + '" class="badge contentorder_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contentorder_dependent_list_box').on('click', '.contentorder_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contentorder_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contentorder_dependent_list_box').find('#contentorder_list_item_' + entityId).remove();

      
   });
   var sb_corderfile_rows_selected = [];
   var sb_corderfileTable =  $('#sb_corderfile-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_corderfile-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "file_content_order_txt" },
            { data: "name" },

            { data: "file_url" },

            { data: "file_size" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="contentorderfile_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentorderfile_parent_params').length) {
                        parent_params = parent_params + $('#contentorderfile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=contentorderfile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentorderfile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_corderfile_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_corderfile-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_corderfileTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_corderfile_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_corderfile_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_corderfile_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_corderfileTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_corderfile-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_corderfileTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_corderfile-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_corderfile-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_corderfileTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_corderfileTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-contentorderfile-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_corderfile_rows_selected, function(index, rowId){

        $.each($('input[name="contentorderfile_id[]"]'), function(indexx){ 
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
                  .attr('name', 'contentorderfile_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#contentorderfile_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#contentorderfile_dependent_list_box').append($(
                '<div id="contentorderfile_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="contentorderfile" ' + 
                        'data-entity-id="' + rowId + '" class="badge contentorderfile_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#contentorderfile_dependent_list_box').on('click', '.contentorderfile_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="contentorderfile_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#contentorderfile_dependent_list_box').find('#contentorderfile_list_item_' + entityId).remove();

      
   });
   var sb_accttxntype_rows_selected = [];
   var sb_accttxntypeTable =  $('#sb_accttxntype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=accounttransactiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransactiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=accounttransactionstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransactionstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
            'url': wpessaywriter_ajax_script.ajaxurl,
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


            { data: "billing_account_txt" },

            { data: "transaction_order_txt" },
            { data: "amount" },

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
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=accounttransaction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransaction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
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
   var sb_disputtype_rows_selected = [];
   var sb_disputtypeTable =  $('#sb_disputtype-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_disputtype-multi-list-form").serializeArray();
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
                    return '<input id="disputetype_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#disputetype_parent_params').length) {
                        parent_params = parent_params + $('#disputetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=disputetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="disputetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_disputtype_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_disputtype-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_disputtypeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_disputtype_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_disputtype_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_disputtype_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_disputtypeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_disputtype-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_disputtypeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_disputtype-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_disputtype-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_disputtypeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_disputtypeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-disputetype-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_disputtype_rows_selected, function(index, rowId){

        $.each($('input[name="disputetype_id[]"]'), function(indexx){ 
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
                  .attr('name', 'disputetype_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#disputetype_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#disputetype_dependent_list_box').append($(
                '<div id="disputetype_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="disputetype" ' + 
                        'data-entity-id="' + rowId + '" class="badge disputetype_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#disputetype_dependent_list_box').on('click', '.disputetype_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="disputetype_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#disputetype_dependent_list_box').find('#disputetype_list_item_' + entityId).remove();

      
   });
   var sb_disputestatus_rows_selected = [];
   var sb_disputestatusTable =  $('#sb_disputestatus-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_disputestatus-multi-list-form").serializeArray();
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
                    return '<input id="disputestatus_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#disputestatus_parent_params').length) {
                        parent_params = parent_params + $('#disputestatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=disputestatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="disputestatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_disputestatus_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_disputestatus-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_disputestatusTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_disputestatus_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_disputestatus_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_disputestatus_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_disputestatusTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_disputestatus-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_disputestatusTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_disputestatus-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_disputestatus-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_disputestatusTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_disputestatusTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-disputestatus-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_disputestatus_rows_selected, function(index, rowId){

        $.each($('input[name="disputestatus_id[]"]'), function(indexx){ 
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
                  .attr('name', 'disputestatus_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#disputestatus_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#disputestatus_dependent_list_box').append($(
                '<div id="disputestatus_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="disputestatus" ' + 
                        'data-entity-id="' + rowId + '" class="badge disputestatus_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#disputestatus_dependent_list_box').on('click', '.disputestatus_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="disputestatus_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#disputestatus_dependent_list_box').find('#disputestatus_list_item_' + entityId).remove();

      
   });
   var sb_dispute_rows_selected = [];
   var sb_disputeTable =  $('#sb_dispute-multi-list-table').DataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.form = $("#sb_dispute-multi-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

            { data: "dispute_type_txt" },

            { data: "dispute_status_txt" },

            { data: "dispute_order_txt" },

            { data: "dispute_owner_txt" },
            { data: "name" },

            { data: "created_date" },

            { data: "description" },

        ],
        columnDefs: [
            {
                'targets': 0,
                'searchable': false,
                'orderable': false,
                'className': 'dt-body-center',
                'render': function (data, type, row){
                    return '<input id="dispute_' + row.id + '" type="checkbox" value="' + row.id + '" data-dependent-instance-name="' + row.name + '">';
                },
            },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#dispute_parent_params').length) {
                        parent_params = parent_params + $('#dispute_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + wpessaywriter_base_url.baseUrl + 'artifact=dispute&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="dispute" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ],
        'order': [[1, 'asc']],
        'rowCallback': function(row, data, dataIndex){
         // Get row ID
         var rowId = data[0];

         // If row ID is in the list of selected row IDs
         if($.inArray(rowId, sb_dispute_rows_selected) !== -1){
            $(row).find('input[type="checkbox"]').prop('checked', true);
            $(row).addClass('selected');
         }
        }
    });

   // Handle click on checkbox
   $('#sb_dispute-multi-list-table tbody').on('click', 'input[type="checkbox"]', function(e){
      var $row = $(this).closest('tr');
      // Get row data
      var data = sb_disputeTable.row($row).data();
      // Get row ID
      var rowId = $(this).val();
      // Determine whether row ID is in the list of selected row IDs 
      var index = $.inArray(rowId, sb_dispute_rows_selected);
      console.log('This is index:' + index);
      // If checkbox is checked and row ID is not in list of selected row IDs
      if(this.checked && index === -1){
         console.log('This is checked and index:' + index);
         sb_dispute_rows_selected.push(rowId);
      // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1){
         sb_dispute_rows_selected.splice(index, 1);
         console.log('This is not checked and index:' + index);
      }
      if(this.checked){
         $row.css('background-color', 'rgba(255, 152, 0, 0.5)');
      } else {
         $row.css('background-color', 'rgba(255, 152, 0, 0)');
      }
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_disputeTable);
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle click on table cells with checkboxes
   $('#sb_dispute-multi-list-table').on('click', 'tbody td, thead th:first-child', function(e){
      $(this).parent().find('input[type="checkbox"]').trigger('click');
   });

   // Handle click on "Select all" control
   $('thead input[name="select_all"]', sb_disputeTable.table().container()).on('click', function(e){
      if(this.checked){
         $('#sb_dispute-multi-list-table tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
         $('#sb_dispute-multi-list-table tbody input[type="checkbox"]:checked').trigger('click');
      }
      // Prevent click event from propagating to parent
      e.stopPropagation();
   });

   // Handle table draw event
   sb_disputeTable.on('draw', function(){
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(sb_disputeTable);
   });

   /* Add all check rows in the data table */
   $('body').on('click', '#add-selected-dispute-list-btn', function(e){
      e.preventDefault();
      var page_artifact_form = $('#main-entity-post-name').val();
      // Iterate over all selected checkboxes
      var idExists = false;
      $.each(sb_dispute_rows_selected, function(index, rowId){

        $.each($('input[name="dispute_id[]"]'), function(indexx){ 
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
                  .attr('name', 'dispute_id[]')
                  .val(rowId)
           );
           // Get the value of the name column. Every entity data table has name and description columns
           var dependentInstanceName = $('#dispute_' + rowId).data('dependent-instance-name');
           // Add an entry into the visual list of select instances
           $('#dispute_dependent_list_box').append($(
                '<div id="dispute_list_item_' + rowId + '"> ' + 
                    '<span data-entity-name="dispute" ' + 
                        'data-entity-id="' + rowId + '" class="badge dispute_dependent_list_item" ' + 
                        'style="cursor: pointer; cursor: hand; background-color: red">X</span>' + dependentInstanceName + 
                '</div>').attr('class', 'list-group-item'));
        }
      });
   });
    // Handle click on table cells with checkboxes
   $('#dispute_dependent_list_box').on('click', '.dispute_dependent_list_item', function(e){
      var entityId = $(this).data('entity-id');
      var entityName = $(this).data('entity-name');
      var page_artifact_form = $('#main-entity-post-name').val();
      // first remove the hidden form field and then the list box item
      var existingIds = $('#' + page_artifact_form).find('input[name="dispute_id[]"]');
      $.each(existingIds, function(index, rowId){ 
        if($(rowId).val() == entityId) {
          $(rowId).remove();
        }

      });
      // then remove the list box item
      $('#dispute_dependent_list_box').find('#dispute_list_item_' + entityId).remove();

      
   });

});