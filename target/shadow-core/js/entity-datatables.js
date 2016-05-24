
jQuery(document).ready(function($)
{

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_currency-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'currency';
               d.form = $("#sb_currency-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#currency_parent_params').length) {
                        parent_params = parent_params + $('#currency_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=currency&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="currency" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_loctype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'locationtype';
               d.form = $("#sb_loctype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },

                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#locationtype_parent_params').length) {
                        parent_params = parent_params + $('#locationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=locationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="locationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_location-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'location';
               d.form = $("#sb_location-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#location_parent_params').length) {
                        parent_params = parent_params + $('#location_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=location&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="location" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_business-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'business';
               d.form = $("#sb_business-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },


                { data: "currency_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#business_parent_params').length) {
                        parent_params = parent_params + $('#business_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=business&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="business" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_businessunit-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'businessunit';
               d.form = $("#sb_businessunit-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "currency_txt" },
                { data: "name" },

                { data: "address_1" },

                { data: "address_2" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#businessunit_parent_params').length) {
                        parent_params = parent_params + $('#businessunit_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=businessunit&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="businessunit" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partycat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partycategory';
               d.form = $("#sb_partycat-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partycategory_parent_params').length) {
                        parent_params = parent_params + $('#partycategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partycategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partytype';
               d.form = $("#sb_partytype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "party_category_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partytype_parent_params').length) {
                        parent_params = parent_params + $('#partytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_roletype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'roletype';
               d.form = $("#sb_roletype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#roletype_parent_params').length) {
                        parent_params = parent_params + $('#roletype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=roletype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="roletype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    $('#sb_party-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'party';
               d.form = $("#sb_party-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var role = '';
                    if($('#role').length) { role = '&role=' + $('#role').val(); }

                    var parent_params = '';
                    if($('#party_parent_params').length) {
                        parent_params = parent_params + $('#party_parent_params').val(); 
                    }

                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=party&id=' + row.id + role + '&page_action=view' + '" data-related-artifact-name="party" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });


    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyrole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyrole';
               d.form = $("#sb_partyrole-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyrole_parent_params').length) {
                        parent_params = parent_params + $('#partyrole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_reltype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'relationshiptype';
               d.form = $("#sb_reltype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#relationshiptype_parent_params').length) {
                        parent_params = parent_params + $('#relationshiptype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=relationshiptype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="relationshiptype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_relstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'relationshipstatus';
               d.form = $("#sb_relstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#relationshipstatus_parent_params').length) {
                        parent_params = parent_params + $('#relationshipstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=relationshipstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="relationshipstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyrel-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyrelationship';
               d.form = $("#sb_partyrel-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyrelationship_parent_params').length) {
                        parent_params = parent_params + $('#partyrelationship_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyrelationship&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyrelationship" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partygroup-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partygroup';
               d.form = $("#sb_partygroup-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partygroup_parent_params').length) {
                        parent_params = parent_params + $('#partygroup_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partygroup&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partygroup" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_person-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'person';
               d.form = $("#sb_person-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#person_parent_params').length) {
                        parent_params = parent_params + $('#person_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=person&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="person" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyprofile-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyprofile';
               d.form = $("#sb_partyprofile-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "party_txt" },

                { data: "default_unit_txt" },

                { data: "business_unit_txt" },
                { data: "name" },

                { data: "display_name" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyprofile_parent_params').length) {
                        parent_params = parent_params + $('#partyprofile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyprofile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyprofile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyaddress-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyaddress';
               d.form = $("#sb_partyaddress-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "address_2" },


                { data: "location_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyaddress_parent_params').length) {
                        parent_params = parent_params + $('#partyaddress_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyaddress&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyaddress" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyfiles-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyfiles';
               d.form = $("#sb_partyfiles-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

                { data: "file_type" },

                { data: "file_url" },

                { data: "file_size" },

                { data: "mime_type" },

                { data: "uploaded_date" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyfiles_parent_params').length) {
                        parent_params = parent_params + $('#partyfiles_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyfiles&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyfiles" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invitestatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'userinvitestatus';
               d.form = $("#sb_invitestatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#userinvitestatus_parent_params').length) {
                        parent_params = parent_params + $('#userinvitestatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=userinvitestatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="userinvitestatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_userinvite-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'userinvite';
               d.form = $("#sb_userinvite-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "status_txt" },
                { data: "first_name" },

                { data: "last_name" },

                { data: "user_email" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#userinvite_parent_params').length) {
                        parent_params = parent_params + $('#userinvite_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=userinvite&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="userinvite" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_businesscat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'businesscategory';
               d.form = $("#sb_businesscat-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#businesscategory_parent_params').length) {
                        parent_params = parent_params + $('#businesscategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=businesscategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="businesscategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_chargetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'chargetype';
               d.form = $("#sb_chargetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#chargetype_parent_params').length) {
                        parent_params = parent_params + $('#chargetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=chargetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="chargetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_chargefreq-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'chargefrequency';
               d.form = $("#sb_chargefreq-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#chargefrequency_parent_params').length) {
                        parent_params = parent_params + $('#chargefrequency_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=chargefrequency&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="chargefrequency" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_charge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'charge';
               d.form = $("#sb_charge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "type_txt" },

                { data: "frequency_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },

                { data: "date_created" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#charge_parent_params').length) {
                        parent_params = parent_params + $('#charge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=charge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="charge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_expensetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'expensetype';
               d.form = $("#sb_expensetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "business_category_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#expensetype_parent_params').length) {
                        parent_params = parent_params + $('#expensetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=expensetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="expensetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_expensefreq-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'expensefrequency';
               d.form = $("#sb_expensefreq-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },

                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#expensefrequency_parent_params').length) {
                        parent_params = parent_params + $('#expensefrequency_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=expensefrequency&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="expensefrequency" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_expense-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'expense';
               d.form = $("#sb_expense-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "amount" },


                { data: "type_txt" },

                { data: "frequency_txt" },
                { data: "description" },

                { data: "date_created" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#expense_parent_params').length) {
                        parent_params = parent_params + $('#expense_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=expense&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="expense" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_liabcat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'liabilitycategory';
               d.form = $("#sb_liabcat-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#liabilitycategory_parent_params').length) {
                        parent_params = parent_params + $('#liabilitycategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=liabilitycategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="liabilitycategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_liabtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'liabilitytype';
               d.form = $("#sb_liabtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "category_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#liabilitytype_parent_params').length) {
                        parent_params = parent_params + $('#liabilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=liabilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="liabilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_liability-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'liability';
               d.form = $("#sb_liability-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "type_txt" },

                { data: "l_party_txt" },
                { data: "name" },


                { data: "lender_txt" },
                { data: "term" },

                { data: "principal" },

                { data: "rate" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#liability_parent_params').length) {
                        parent_params = parent_params + $('#liability_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=liability&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="liability" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_dmethod-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'deprecationmethod';
               d.form = $("#sb_dmethod-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#deprecationmethod_parent_params').length) {
                        parent_params = parent_params + $('#deprecationmethod_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=deprecationmethod&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="deprecationmethod" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_uom-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'unitofmeasure';
               d.form = $("#sb_uom-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#unitofmeasure_parent_params').length) {
                        parent_params = parent_params + $('#unitofmeasure_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=unitofmeasure&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="unitofmeasure" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_utilitytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'utilitytype';
               d.form = $("#sb_utilitytype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#utilitytype_parent_params').length) {
                        parent_params = parent_params + $('#utilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=utilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="utilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_utility-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'utility';
               d.form = $("#sb_utility-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "u_type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#utility_parent_params').length) {
                        parent_params = parent_params + $('#utility_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=utility&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="utility" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_proptype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'propertytype';
               d.form = $("#sb_proptype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },

                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#propertytype_parent_params').length) {
                        parent_params = parent_params + $('#propertytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=propertytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="propertytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_propstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'propertystatus';
               d.form = $("#sb_propstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#propertystatus_parent_params').length) {
                        parent_params = parent_params + $('#propertystatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=propertystatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="propertystatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_property-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'property';
               d.form = $("#sb_property-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "p_party_txt" },

                { data: "p_type_txt" },

                { data: "status_txt" },
                { data: "name" },


                { data: "p_location_txt" },
                { data: "title_number" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#property_parent_params').length) {
                        parent_params = parent_params + $('#property_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=property&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="property" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_zonetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'zonetype';
               d.form = $("#sb_zonetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#zonetype_parent_params').length) {
                        parent_params = parent_params + $('#zonetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=zonetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="zonetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_zoningdata-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'zoningdata';
               d.form = $("#sb_zoningdata-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "z_type_txt" },

                { data: "m_property_txt" },
                { data: "name" },


                { data: "is_compliant_fg_txt" },
                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#zoningdata_parent_params').length) {
                        parent_params = parent_params + $('#zoningdata_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=zoningdata&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="zoningdata" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_mortgagetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'mortgagetype';
               d.form = $("#sb_mortgagetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#mortgagetype_parent_params').length) {
                        parent_params = parent_params + $('#mortgagetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=mortgagetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="mortgagetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_mortgage-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'mortgage';
               d.form = $("#sb_mortgage-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "m_type_txt" },

                { data: "m_party_txt" },
                { data: "name" },


                { data: "lender_txt" },
                { data: "term" },

                { data: "principal" },

                { data: "rate" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#mortgage_parent_params').length) {
                        parent_params = parent_params + $('#mortgage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=mortgage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="mortgage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_laccessibility-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'landaccessibility';
               d.form = $("#sb_laccessibility-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#landaccessibility_parent_params').length) {
                        parent_params = parent_params + $('#landaccessibility_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=landaccessibility&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="landaccessibility" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_ltopography-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'landtopography';
               d.form = $("#sb_ltopography-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#landtopography_parent_params').length) {
                        parent_params = parent_params + $('#landtopography_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=landtopography&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="landtopography" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_landtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'landtype';
               d.form = $("#sb_landtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#landtype_parent_params').length) {
                        parent_params = parent_params + $('#landtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=landtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="landtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_soiltype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'soiltype';
               d.form = $("#sb_soiltype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#soiltype_parent_params').length) {
                        parent_params = parent_params + $('#soiltype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=soiltype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="soiltype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_lshape-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'landshape';
               d.form = $("#sb_lshape-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#landshape_parent_params').length) {
                        parent_params = parent_params + $('#landshape_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=landshape&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="landshape" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_land-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'land';
               d.form = $("#sb_land-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },


                { data: "li_type_txt" },

                { data: "li_accessibility_txt" },

                { data: "li_topography_txt" },

                { data: "li_owner_txt" },
                { data: "name" },

                { data: "land_size" },


                { data: "land_shape_txt" },

                { data: "uom_txt" },
                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#land_parent_params').length) {
                        parent_params = parent_params + $('#land_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=land&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="land" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_plottype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'plottype';
               d.form = $("#sb_plottype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#plottype_parent_params').length) {
                        parent_params = parent_params + $('#plottype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=plottype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="plottype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_plot-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'plot';
               d.form = $("#sb_plot-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "p_type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#plot_parent_params').length) {
                        parent_params = parent_params + $('#plot_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=plot&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="plot" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_improvetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'improvementtype';
               d.form = $("#sb_improvetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#improvementtype_parent_params').length) {
                        parent_params = parent_params + $('#improvementtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=improvementtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="improvementtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_improvement-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'improvement';
               d.form = $("#sb_improvement-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "i_property_txt" },

                { data: "i_type_txt" },
                { data: "name" },

                { data: "direct_cost" },

                { data: "indirect_cost" },

                { data: "p_depreciation" },

                { data: "f_depreciation" },

                { data: "e_depreciation" },

                { data: "economic_life" },

                { data: "r_economic_life" },

                { data: "effective_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#improvement_parent_params').length) {
                        parent_params = parent_params + $('#improvement_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=improvement&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="improvement" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_proputility-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'propertyutility';
               d.form = $("#sb_proputility-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pu_utility_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#propertyutility_parent_params').length) {
                        parent_params = parent_params + $('#propertyutility_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=propertyutility&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="propertyutility" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pcharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'propertycharge';
               d.form = $("#sb_pcharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pc_charge_txt" },
                { data: "name" },

                { data: "description" },

                { data: "amount" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#propertycharge_parent_params').length) {
                        parent_params = parent_params + $('#propertycharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=propertycharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="propertycharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_assetcat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'assetcategory';
               d.form = $("#sb_assetcat-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#assetcategory_parent_params').length) {
                        parent_params = parent_params + $('#assetcategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=assetcategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="assetcategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_assettype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'assettype';
               d.form = $("#sb_assettype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#assettype_parent_params').length) {
                        parent_params = parent_params + $('#assettype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=assettype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="assettype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_asset-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'asset';
               d.form = $("#sb_asset-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "a_dmethod_txt" },

                { data: "type_txt" },

                { data: "a_uom_txt" },
                { data: "name" },

                { data: "description" },

                { data: "a_price" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#asset_parent_params').length) {
                        parent_params = parent_params + $('#asset_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=asset&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="asset" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_inventype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'inventorytype';
               d.form = $("#sb_inventype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#inventorytype_parent_params').length) {
                        parent_params = parent_params + $('#inventorytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=inventorytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventorytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_inventory-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'inventory';
               d.form = $("#sb_inventory-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "i_party_txt" },

                { data: "type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#inventory_parent_params').length) {
                        parent_params = parent_params + $('#inventory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=inventory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invitemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'inventoryitemtype';
               d.form = $("#sb_invitemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#inventoryitemtype_parent_params').length) {
                        parent_params = parent_params + $('#inventoryitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=inventoryitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventoryitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_inventoryitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'inventoryitem';
               d.form = $("#sb_inventoryitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "i_itemtype_txt" },

                { data: "i_inventory_txt" },

                { data: "pi_uom_txt" },
                { data: "name" },

                { data: "quantity" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#inventoryitem_parent_params').length) {
                        parent_params = parent_params + $('#inventoryitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=inventoryitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventoryitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_propstaff-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'propertystaff';
               d.form = $("#sb_propstaff-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "phone" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#propertystaff_parent_params').length) {
                        parent_params = parent_params + $('#propertystaff_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=propertystaff&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="propertystaff" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_propfiles-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'propertyfiles';
               d.form = $("#sb_propfiles-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

                { data: "file_type" },

                { data: "file_url" },

                { data: "file_size" },

                { data: "mime_type" },

                { data: "uploaded_date" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#propertyfiles_parent_params').length) {
                        parent_params = parent_params + $('#propertyfiles_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=propertyfiles&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="propertyfiles" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_buildingtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'buildingtype';
               d.form = $("#sb_buildingtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#buildingtype_parent_params').length) {
                        parent_params = parent_params + $('#buildingtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=buildingtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="buildingtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_buildtypropty-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'buildingtypepropertytype';
               d.form = $("#sb_buildtypropty-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },


                { data: "btpt_buildingtype_txt" },

                { data: "btpt_propertytype_txt" },
                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#buildingtypepropertytype_parent_params').length) {
                        parent_params = parent_params + $('#buildingtypepropertytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=buildingtypepropertytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="buildingtypepropertytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_allocunit-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'allocationunit';
               d.form = $("#sb_allocunit-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#allocationunit_parent_params').length) {
                        parent_params = parent_params + $('#allocationunit_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=allocationunit&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="allocationunit" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_building-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'building';
               d.form = $("#sb_building-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "b_buildingtype_txt" },
                { data: "name" },

                { data: "no_of_flrs" },

                { data: "units_in_flr" },

                { data: "has_basement" },

                { data: "basement_count" },


                { data: "b_property_txt" },

                { data: "b_unitalloc_txt" },
                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#building_parent_params').length) {
                        parent_params = parent_params + $('#building_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=building&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="building" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_bcharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'buildingcharge';
               d.form = $("#sb_bcharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "bc_building_txt" },

                { data: "bc_charge_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#buildingcharge_parent_params').length) {
                        parent_params = parent_params + $('#buildingcharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=buildingcharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="buildingcharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_buildfiles-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'buildingfiles';
               d.form = $("#sb_buildfiles-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

                { data: "file_type" },

                { data: "file_url" },

                { data: "file_size" },

                { data: "mime_type" },

                { data: "uploaded_date" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#buildingfiles_parent_params').length) {
                        parent_params = parent_params + $('#buildingfiles_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=buildingfiles&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="buildingfiles" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_floortype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'floortype';
               d.form = $("#sb_floortype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#floortype_parent_params').length) {
                        parent_params = parent_params + $('#floortype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=floortype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="floortype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_floor-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'floor';
               d.form = $("#sb_floor-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "flr_type_txt" },

                { data: "flr_allocation_txt" },

                { data: "flr_building_txt" },
                { data: "name" },

                { data: "floor_number" },

                { data: "unit_count" },

                { data: "description" },

                { data: "date_created" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#floor_parent_params').length) {
                        parent_params = parent_params + $('#floor_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=floor&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="floor" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_fcharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'floorcharge';
               d.form = $("#sb_fcharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "fc_floor_txt" },

                { data: "fc_charge_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#floorcharge_parent_params').length) {
                        parent_params = parent_params + $('#floorcharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=floorcharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="floorcharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_unittype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'unittype';
               d.form = $("#sb_unittype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#unittype_parent_params').length) {
                        parent_params = parent_params + $('#unittype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=unittype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="unittype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_utypecharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'unittypecharge';
               d.form = $("#sb_utypecharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "utc_type_txt" },

                { data: "utc_property_txt" },

                { data: "utc_charge_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#unittypecharge_parent_params').length) {
                        parent_params = parent_params + $('#unittypecharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=unittypecharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="unittypecharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_unit-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'unit';
               d.form = $("#sb_unit-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "u_type_txt" },
                { data: "u_count" },


                { data: "u_floor_txt" },

                { data: "u_building_txt" },

                { data: "u_property_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#unit_parent_params').length) {
                        parent_params = parent_params + $('#unit_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=unit&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="unit" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_unitcharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'unitcharge';
               d.form = $("#sb_unitcharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "uc_unit_txt" },

                { data: "uc_charge_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#unitcharge_parent_params').length) {
                        parent_params = parent_params + $('#unitcharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=unitcharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="unitcharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_facilitycat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'facilitycategory';
               d.form = $("#sb_facilitycat-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#facilitycategory_parent_params').length) {
                        parent_params = parent_params + $('#facilitycategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=facilitycategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="facilitycategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_facilitytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'facilitytype';
               d.form = $("#sb_facilitytype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "ft_category_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#facilitytype_parent_params').length) {
                        parent_params = parent_params + $('#facilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=facilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="facilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_facility-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'facility';
               d.form = $("#sb_facility-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "f_property_txt" },

                { data: "f_type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#facility_parent_params').length) {
                        parent_params = parent_params + $('#facility_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=facility&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="facility" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_facharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'facilitycharge';
               d.form = $("#sb_facharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "fc_facility_txt" },

                { data: "fc_charge_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#facilitycharge_parent_params').length) {
                        parent_params = parent_params + $('#facilitycharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=facilitycharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="facilitycharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pslottype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'parkingslottype';
               d.form = $("#sb_pslottype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#parkingslottype_parent_params').length) {
                        parent_params = parent_params + $('#parkingslottype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=parkingslottype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="parkingslottype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pstypecharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'parkingslottypecharge';
               d.form = $("#sb_pstypecharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pstc_type_txt" },

                { data: "pstc_charge_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#parkingslottypecharge_parent_params').length) {
                        parent_params = parent_params + $('#parkingslottypecharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=parkingslottypecharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="parkingslottypecharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pslot-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'parkingslot';
               d.form = $("#sb_pslot-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "parking_txt" },

                { data: "type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#parkingslot_parent_params').length) {
                        parent_params = parent_params + $('#parkingslot_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=parkingslot&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="parkingslot" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreecat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementcategory';
               d.form = $("#sb_agreecat-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementcategory_parent_params').length) {
                        parent_params = parent_params + $('#agreementcategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementcategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementcategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementtype';
               d.form = $("#sb_agreetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementtype_parent_params').length) {
                        parent_params = parent_params + $('#agreementtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreetypecharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementtypecharge';
               d.form = $("#sb_agreetypecharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "atc_type_txt" },

                { data: "atc_charge_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementtypecharge_parent_params').length) {
                        parent_params = parent_params + $('#agreementtypecharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementtypecharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementtypecharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_termtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'termtype';
               d.form = $("#sb_termtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "business_category_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#termtype_parent_params').length) {
                        parent_params = parent_params + $('#termtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=termtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="termtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_term-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'term';
               d.form = $("#sb_term-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "t_type_txt" },
                { data: "name" },

                { data: "description" },

                { data: "value" },

                { data: "from_start" },

                { data: "thru_end" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#term_parent_params').length) {
                        parent_params = parent_params + $('#term_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=term&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="term" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreement-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreement';
               d.form = $("#sb_agreement-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "a_party_txt" },

                { data: "a_counter_party_txt" },

                { data: "a_property_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },

                { data: "date_start" },

                { data: "date_end" },

                { data: "date_created" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreement_parent_params').length) {
                        parent_params = parent_params + $('#agreement_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreement&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreement" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_purchaseagrmnt-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseagreement';
               d.form = $("#sb_purchaseagrmnt-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pa_seller_txt" },

                { data: "pa_buyer_txt" },

                { data: "pa_listagent_txt" },

                { data: "pa_sellagent_txt" },
                { data: "name" },

                { data: "price" },

                { data: "date_created" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseagreement_parent_params').length) {
                        parent_params = parent_params + $('#purchaseagreement_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseagreement&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseagreement" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_settlementdata-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'settlementdata';
               d.form = $("#sb_settlementdata-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "sd_agreement_txt" },
                { data: "name" },

                { data: "settle_date" },

                { data: "price" },

                { data: "deposit" },

                { data: "closing_amount" },

                { data: "late_fee" },

                { data: "financing_type" },

                { data: "date_created" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#settlementdata_parent_params').length) {
                        parent_params = parent_params + $('#settlementdata_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=settlementdata&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="settlementdata" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_settledataloan-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'settlementdataloan';
               d.form = $("#sb_settledataloan-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "li_settledata_txt" },
                { data: "name" },

                { data: "loan_date" },

                { data: "loan_amount" },

                { data: "interest_rate" },

                { data: "term" },

                { data: "loan_type" },

                { data: "date_created" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#settlementdataloan_parent_params').length) {
                        parent_params = parent_params + $('#settlementdataloan_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=settlementdataloan&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="settlementdataloan" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agrmntitemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementitemtype';
               d.form = $("#sb_agrmntitemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementitemtype_parent_params').length) {
                        parent_params = parent_params + $('#agreementitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreementitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementitem';
               d.form = $("#sb_agreementitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "ai_agreement_txt" },

                { data: "ai_type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementitem_parent_params').length) {
                        parent_params = parent_params + $('#agreementitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_servicetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'servicetype';
               d.form = $("#sb_servicetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#servicetype_parent_params').length) {
                        parent_params = parent_params + $('#servicetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=servicetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="servicetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_service-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'service';
               d.form = $("#sb_service-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "s_type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#service_parent_params').length) {
                        parent_params = parent_params + $('#service_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=service&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="service" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreeservice-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementservice';
               d.form = $("#sb_agreeservice-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "s_service_txt" },

                { data: "s_agreement_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementservice_parent_params').length) {
                        parent_params = parent_params + $('#agreementservice_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementservice&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementservice" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreeunit-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementunit';
               d.form = $("#sb_agreeunit-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "au_agreement_txt" },

                { data: "au_unit_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementunit_parent_params').length) {
                        parent_params = parent_params + $('#agreementunit_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementunit&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementunit" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreecharge-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementcharge';
               d.form = $("#sb_agreecharge-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "ac_agreement_txt" },

                { data: "ac_charge_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementcharge_parent_params').length) {
                        parent_params = parent_params + $('#agreementcharge_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementcharge&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementcharge" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agreeterm-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'agreementterm';
               d.form = $("#sb_agreeterm-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "at_agreement_txt" },

                { data: "at_term_txt" },
                { data: "name" },

                { data: "value" },

                { data: "from_start" },

                { data: "thru_end" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#agreementterm_parent_params').length) {
                        parent_params = parent_params + $('#agreementterm_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=agreementterm&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="agreementterm" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_chargeinagrmt-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'chargeinagreement';
               d.form = $("#sb_chargeinagrmt-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "cia_agreement_txt" },

                { data: "cia_charge_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#chargeinagreement_parent_params').length) {
                        parent_params = parent_params + $('#chargeinagreement_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=chargeinagreement&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="chargeinagreement" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_rentstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'rentstatus';
               d.form = $("#sb_rentstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#rentstatus_parent_params').length) {
                        parent_params = parent_params + $('#rentstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=rentstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="rentstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_rent-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'rent';
               d.form = $("#sb_rent-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "amount" },

                { data: "due_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#rent_parent_params').length) {
                        parent_params = parent_params + $('#rent_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=rent&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="rent" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_assmttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'assessmenttype';
               d.form = $("#sb_assmttype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#assessmenttype_parent_params').length) {
                        parent_params = parent_params + $('#assessmenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=assessmenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="assessmenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_assessment-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'assessment';
               d.form = $("#sb_assessment-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "a_land_txt" },
                { data: "name" },

                { data: "assmt_created" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#assessment_parent_params').length) {
                        parent_params = parent_params + $('#assessment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=assessment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="assessment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_sdtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'salesdatatype';
               d.form = $("#sb_sdtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#salesdatatype_parent_params').length) {
                        parent_params = parent_params + $('#salesdatatype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=salesdatatype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="salesdatatype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_salesdata-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'salesdata';
               d.form = $("#sb_salesdata-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#salesdata_parent_params').length) {
                        parent_params = parent_params + $('#salesdata_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=salesdata&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="salesdata" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_sditemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'salesdataitemtype';
               d.form = $("#sb_sditemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#salesdataitemtype_parent_params').length) {
                        parent_params = parent_params + $('#salesdataitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=salesdataitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="salesdataitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_salesdataitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'salesdataitem';
               d.form = $("#sb_salesdataitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "construction_date" },

                { data: "proximity" },

                { data: "address_1" },

                { data: "sales_date" },

                { data: "sales_price" },

                { data: "size" },

                { data: "financing_type" },

                { data: "land_tenure" },

                { data: "p_adjustment" },

                { data: "t_adjustment" },

                { data: "l_adjustment" },

                { data: "zone_code" },

                { data: "zone_description" },

                { data: "zone_compliant_fg" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#salesdataitem_parent_params').length) {
                        parent_params = parent_params + $('#salesdataitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=salesdataitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="salesdataitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_cdtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'costdatatype';
               d.form = $("#sb_cdtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#costdatatype_parent_params').length) {
                        parent_params = parent_params + $('#costdatatype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=costdatatype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costdatatype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_costdata-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'costdata';
               d.form = $("#sb_costdata-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "land_value" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#costdata_parent_params').length) {
                        parent_params = parent_params + $('#costdata_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=costdata&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costdata" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_cditemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'costdataitemtype';
               d.form = $("#sb_cditemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#costdataitemtype_parent_params').length) {
                        parent_params = parent_params + $('#costdataitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=costdataitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costdataitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_cditemdata-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'costdataitem';
               d.form = $("#sb_cditemdata-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "cdi_costdata_txt" },

                { data: "cdi_type_txt" },
                { data: "name" },

                { data: "direct_cost" },

                { data: "indirect_cost" },

                { data: "p_depreciation" },

                { data: "f_depreciation" },

                { data: "e_depreciation" },

                { data: "economic_life" },

                { data: "r_economic_life" },

                { data: "effective_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#costdataitem_parent_params').length) {
                        parent_params = parent_params + $('#costdataitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=costdataitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costdataitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_idtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'incomedatatype';
               d.form = $("#sb_idtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#incomedatatype_parent_params').length) {
                        parent_params = parent_params + $('#incomedatatype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=incomedatatype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="incomedatatype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_incomedata-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'incomedata';
               d.form = $("#sb_incomedata-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "pgi" },

                { data: "additional_income" },

                { data: "vacancy_allowance" },

                { data: "credit_loss" },

                { data: "cap_rate" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#incomedata_parent_params').length) {
                        parent_params = parent_params + $('#incomedata_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=incomedata&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="incomedata" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_idetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'incomedataexpensetype';
               d.form = $("#sb_idetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#incomedataexpensetype_parent_params').length) {
                        parent_params = parent_params + $('#incomedataexpensetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=incomedataexpensetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="incomedataexpensetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_idexpense-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'incomedataexpense';
               d.form = $("#sb_idexpense-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "amount" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#incomedataexpense_parent_params').length) {
                        parent_params = parent_params + $('#incomedataexpense_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=incomedataexpense&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="incomedataexpense" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_billaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'billingaccount';
               d.form = $("#sb_billaccount-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "balance" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#billingaccount_parent_params').length) {
                        parent_params = parent_params + $('#billingaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=billingaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="billingaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_accttxntype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'accounttransactiontype';
               d.form = $("#sb_accttxntype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },

                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accounttransactiontype_parent_params').length) {
                        parent_params = parent_params + $('#accounttransactiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=accounttransactiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransactiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_accttxnstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'accounttransactionstatus';
               d.form = $("#sb_accttxnstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },

                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accounttransactionstatus_parent_params').length) {
                        parent_params = parent_params + $('#accounttransactionstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=accounttransactionstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransactionstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_accttransaction-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'accounttransaction';
               d.form = $("#sb_accttransaction-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "status_txt" },
                { data: "name" },

                { data: "txn_date" },


                { data: "account_txt" },
                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accounttransaction_parent_params').length) {
                        parent_params = parent_params + $('#accounttransaction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=accounttransaction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransaction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_fundmeth-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'fundingmethod';
               d.form = $("#sb_fundmeth-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#fundingmethod_parent_params').length) {
                        parent_params = parent_params + $('#fundingmethod_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=fundingmethod&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="fundingmethod" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_templatetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'templatetype';
               d.form = $("#sb_templatetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#templatetype_parent_params').length) {
                        parent_params = parent_params + $('#templatetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=templatetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="templatetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_template-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'template';
               d.form = $("#sb_template-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#template_parent_params').length) {
                        parent_params = parent_params + $('#template_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=template&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="template" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invoicetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoicetype';
               d.form = $("#sb_invoicetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoicetype_parent_params').length) {
                        parent_params = parent_params + $('#invoicetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoicetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoicetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invoicestatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoicestatus';
               d.form = $("#sb_invoicestatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoicestatus_parent_params').length) {
                        parent_params = parent_params + $('#invoicestatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoicestatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoicestatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invoice-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoice';
               d.form = $("#sb_invoice-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },


                { data: "owner_role_txt" },

                { data: "bill_acct_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },

                { data: "message" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoice_parent_params').length) {
                        parent_params = parent_params + $('#invoice_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoice&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoice" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invoicerole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoicerole';
               d.form = $("#sb_invoicerole-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoicerole_parent_params').length) {
                        parent_params = parent_params + $('#invoicerole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoicerole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoicerole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invoiceitemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoiceitemtype';
               d.form = $("#sb_invoiceitemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoiceitemtype_parent_params').length) {
                        parent_params = parent_params + $('#invoiceitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoiceitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invoiceitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoiceitem';
               d.form = $("#sb_invoiceitem-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoiceitem_parent_params').length) {
                        parent_params = parent_params + $('#invoiceitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoiceitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_invoiceterm-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoiceterm';
               d.form = $("#sb_invoiceterm-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#invoiceterm_parent_params').length) {
                        parent_params = parent_params + $('#invoiceterm_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoiceterm&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceterm" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pordertype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseordertype';
               d.form = $("#sb_pordertype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseordertype_parent_params').length) {
                        parent_params = parent_params + $('#purchaseordertype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseordertype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseordertype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_porderstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseorderstatus';
               d.form = $("#sb_porderstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseorderstatus_parent_params').length) {
                        parent_params = parent_params + $('#purchaseorderstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseorderstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseorderstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_porder-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseorder';
               d.form = $("#sb_porder-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "owner_role_txt" },

                { data: "bill_acct_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },

                { data: "message" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseorder_parent_params').length) {
                        parent_params = parent_params + $('#purchaseorder_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseorder&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseorder" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_porole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseorderrole';
               d.form = $("#sb_porole-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseorderrole_parent_params').length) {
                        parent_params = parent_params + $('#purchaseorderrole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseorderrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseorderrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_poitemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseorderitemtype';
               d.form = $("#sb_poitemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseorderitemtype_parent_params').length) {
                        parent_params = parent_params + $('#purchaseorderitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseorderitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseorderitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_porderitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseorderitem';
               d.form = $("#sb_porderitem-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseorderitem_parent_params').length) {
                        parent_params = parent_params + $('#purchaseorderitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseorderitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseorderitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_porderterm-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseorderterm';
               d.form = $("#sb_porderterm-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pot_porder_txt" },

                { data: "po_term_txt" },
                { data: "name" },

                { data: "value" },

                { data: "from_start" },

                { data: "thru_end" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseorderterm_parent_params').length) {
                        parent_params = parent_params + $('#purchaseorderterm_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseorderterm&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseorderterm" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_paymenttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paymenttype';
               d.form = $("#sb_paymenttype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paymenttype_parent_params').length) {
                        parent_params = parent_params + $('#paymenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paymenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_paymethtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paymentmethodtype';
               d.form = $("#sb_paymethtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paymentmethodtype_parent_params').length) {
                        parent_params = parent_params + $('#paymentmethodtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paymentmethodtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymentmethodtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_payment-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'payment';
               d.form = $("#sb_payment-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "p_type_txt" },

                { data: "p_methtype_txt" },

                { data: "p_fpartyrole_txt" },

                { data: "p_tpartyrole_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "effective_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#payment_parent_params').length) {
                        parent_params = parent_params + $('#payment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=payment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="payment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_payapp-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paymentapplication';
               d.form = $("#sb_payapp-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pa_payment_txt" },

                { data: "pa_account_txt" },

                { data: "pa_invoice_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "effective_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paymentapplication_parent_params').length) {
                        parent_params = parent_params + $('#paymentapplication_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paymentapplication&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymentapplication" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_receipttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'receipttype';
               d.form = $("#sb_receipttype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#receipttype_parent_params').length) {
                        parent_params = parent_params + $('#receipttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=receipttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="receipttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_disbursetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'disbursementtype';
               d.form = $("#sb_disbursetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#disbursementtype_parent_params').length) {
                        parent_params = parent_params + $('#disbursementtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=disbursementtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="disbursementtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_receipt-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'receipt';
               d.form = $("#sb_receipt-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "type_txt" },

                { data: "r_methtype_txt" },

                { data: "r_fpartyrole_txt" },

                { data: "r_tpartyrole_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "effective_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#receipt_parent_params').length) {
                        parent_params = parent_params + $('#receipt_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=receipt&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="receipt" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_disbursement-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'disbursement';
               d.form = $("#sb_disbursement-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "type_txt" },

                { data: "p_methtype_txt" },

                { data: "d_fpartyrole_txt" },

                { data: "d_tpartyrole_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "effective_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#disbursement_parent_params').length) {
                        parent_params = parent_params + $('#disbursement_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=disbursement&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="disbursement" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_periodtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'periodtype';
               d.form = $("#sb_periodtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#periodtype_parent_params').length) {
                        parent_params = parent_params + $('#periodtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=periodtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="periodtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_acctperiod-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'accountingperiod';
               d.form = $("#sb_acctperiod-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#accountingperiod_parent_params').length) {
                        parent_params = parent_params + $('#accountingperiod_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=accountingperiod&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accountingperiod" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_coaacctstruct-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'coaaccountstructure';
               d.form = $("#sb_coaacctstruct-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "seg_separator" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountstructure_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountstructure_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=coaaccountstructure&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountstructure" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_coaacctsegtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'coaaccountsegmenttype';
               d.form = $("#sb_coaacctsegtype-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegmenttype_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegmenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=coaaccountsegmenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegmenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_coaasegval-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'coaaccountsegmenttypevalue';
               d.form = $("#sb_coaasegval-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "v_segtype_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegmenttypevalue_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegmenttypevalue_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=coaaccountsegmenttypevalue&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegmenttypevalue" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_coaacctseg-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'coaaccountsegment';
               d.form = $("#sb_coaacctseg-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegment_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=coaaccountsegment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_coastatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'coastatus';
               d.form = $("#sb_coastatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coastatus_parent_params').length) {
                        parent_params = parent_params + $('#coastatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=coastatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coastatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_coa-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'chartofaccounts';
               d.form = $("#sb_coa-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#chartofaccounts_parent_params').length) {
                        parent_params = parent_params + $('#chartofaccounts_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=chartofaccounts&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="chartofaccounts" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_glaccttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'glaccounttype';
               d.form = $("#sb_glaccttype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },

                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#glaccounttype_parent_params').length) {
                        parent_params = parent_params + $('#glaccounttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=glaccounttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="glaccounttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_glaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'glaccount';
               d.form = $("#sb_glaccount-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#glaccount_parent_params').length) {
                        parent_params = parent_params + $('#glaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=glaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="glaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_buglaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'businessunitglaccount';
               d.form = $("#sb_buglaccount-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#businessunitglaccount_parent_params').length) {
                        parent_params = parent_params + $('#businessunitglaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=businessunitglaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="businessunitglaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_buglaccountbal-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'businessunitglaccountbalance';
               d.form = $("#sb_buglaccountbal-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#businessunitglaccountbalance_parent_params').length) {
                        parent_params = parent_params + $('#businessunitglaccountbalance_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=businessunitglaccountbalance&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="businessunitglaccountbalance" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_coaaseginst-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'coaaccountsegmentinstance';
               d.form = $("#sb_coaaseginst-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#coaaccountsegmentinstance_parent_params').length) {
                        parent_params = parent_params + $('#coaaccountsegmentinstance_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=coaaccountsegmentinstance&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="coaaccountsegmentinstance" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_feventtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'financialeventtype';
               d.form = $("#sb_feventtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "entity_code" },

                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#financialeventtype_parent_params').length) {
                        parent_params = parent_params + $('#financialeventtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=financialeventtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="financialeventtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_fevent-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'financialevent';
               d.form = $("#sb_fevent-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#financialevent_parent_params').length) {
                        parent_params = parent_params + $('#financialevent_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=financialevent&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="financialevent" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_txntype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'transactiontype';
               d.form = $("#sb_txntype-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#transactiontype_parent_params').length) {
                        parent_params = parent_params + $('#transactiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=transactiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transactiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_transaction-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'transaction';
               d.form = $("#sb_transaction-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "txn_date" },

                { data: "entry_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#transaction_parent_params').length) {
                        parent_params = parent_params + $('#transaction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=transaction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transaction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_txndetail-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'transactiondetail';
               d.form = $("#sb_txndetail-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#transactiondetail_parent_params').length) {
                        parent_params = parent_params + $('#transactiondetail_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=transactiondetail&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transactiondetail" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_feventtxntype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'feventtxntype';
               d.form = $("#sb_feventtxntype-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#feventtxntype_parent_params').length) {
                        parent_params = parent_params + $('#feventtxntype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=feventtxntype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="feventtxntype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_txntypeacct-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'txntypeaccount';
               d.form = $("#sb_txntypeacct-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#txntypeaccount_parent_params').length) {
                        parent_params = parent_params + $('#txntypeaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=txntypeaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="txntypeaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budgettype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgettype';
               d.form = $("#sb_budgettype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgettype_parent_params').length) {
                        parent_params = parent_params + $('#budgettype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgettype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgettype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budgetstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetstatus';
               d.form = $("#sb_budgetstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetstatus_parent_params').length) {
                        parent_params = parent_params + $('#budgetstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budget-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budget';
               d.form = $("#sb_budget-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "b_type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budget_parent_params').length) {
                        parent_params = parent_params + $('#budget_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budget&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budget" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_bitemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetitemtype';
               d.form = $("#sb_bitemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetitemtype_parent_params').length) {
                        parent_params = parent_params + $('#budgetitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budgetitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetitem';
               d.form = $("#sb_budgetitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "amount" },

                { data: "description" },

                { data: "justification" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetitem_parent_params').length) {
                        parent_params = parent_params + $('#budgetitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budgetrole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetrole';
               d.form = $("#sb_budgetrole-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "party_txt" },

                { data: "role_txt" },
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetrole_parent_params').length) {
                        parent_params = parent_params + $('#budgetrole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_stperiod-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'standardtimeperiod';
               d.form = $("#sb_stperiod-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "period_type_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#standardtimeperiod_parent_params').length) {
                        parent_params = parent_params + $('#standardtimeperiod_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=standardtimeperiod&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="standardtimeperiod" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_brrtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetreviewresulttype';
               d.form = $("#sb_brrtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetreviewresulttype_parent_params').length) {
                        parent_params = parent_params + $('#budgetreviewresulttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetreviewresulttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetreviewresulttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budgetreview-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetreview';
               d.form = $("#sb_budgetreview-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "budget_txt" },

                { data: "result_type_txt" },
                { data: "name" },

                { data: "review_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetreview_parent_params').length) {
                        parent_params = parent_params + $('#budgetreview_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetreview&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetreview" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_brevision-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetrevision';
               d.form = $("#sb_brevision-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "budget_txt" },
                { data: "name" },

                { data: "date_revised" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetrevision_parent_params').length) {
                        parent_params = parent_params + $('#budgetrevision_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetrevision&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetrevision" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budgetrevimpact-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetrevisionimpact';
               d.form = $("#sb_budgetrevimpact-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "budget_item_txt" },

                { data: "budget_revision_txt" },
                { data: "name" },

                { data: "revision_amt" },

                { data: "add_delete_fg" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetrevisionimpact_parent_params').length) {
                        parent_params = parent_params + $('#budgetrevisionimpact_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetrevisionimpact&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetrevisionimpact" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_budgetscenario-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetscenario';
               d.form = $("#sb_budgetscenario-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetscenario_parent_params').length) {
                        parent_params = parent_params + $('#budgetscenario_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetscenario&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetscenario" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_bscenariorule-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetscenariorule';
               d.form = $("#sb_bscenariorule-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "bitem_type_txt" },

                { data: "budget_scenario_txt" },
                { data: "name" },

                { data: "description" },

                { data: "amt_change" },

                { data: "percentage_change" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetscenariorule_parent_params').length) {
                        parent_params = parent_params + $('#budgetscenariorule_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetscenariorule&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetscenariorule" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_bscenarioapp-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'budgetscenarioapplication';
               d.form = $("#sb_bscenarioapp-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "budget_item_txt" },

                { data: "budget_txt" },
                { data: "name" },

                { data: "description" },

                { data: "amt_change" },

                { data: "percentage_change" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#budgetscenarioapplication_parent_params').length) {
                        parent_params = parent_params + $('#budgetscenarioapplication_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=budgetscenarioapplication&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="budgetscenarioapplication" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pballocation-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paymentbudgetallocation';
               d.form = $("#sb_pballocation-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "budget_txt" },

                { data: "payment_txt" },
                { data: "name" },

                { data: "description" },

                { data: "amt_change" },

                { data: "percentage_change" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paymentbudgetallocation_parent_params').length) {
                        parent_params = parent_params + $('#paymentbudgetallocation_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paymentbudgetallocation&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymentbudgetallocation" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_glbudgetxref-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'glbudgetxref';
               d.form = $("#sb_glbudgetxref-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "bitem_type_txt" },

                { data: "gl_account_txt" },
                { data: "name" },

                { data: "description" },

                { data: "alloc_percentage" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#glbudgetxref_parent_params').length) {
                        parent_params = parent_params + $('#glbudgetxref_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=glbudgetxref&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="glbudgetxref" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_disputetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'disputetype';
               d.form = $("#sb_disputetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#disputetype_parent_params').length) {
                        parent_params = parent_params + $('#disputetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=disputetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="disputetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_disputestatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'disputestatus';
               d.form = $("#sb_disputestatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#disputestatus_parent_params').length) {
                        parent_params = parent_params + $('#disputestatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=disputestatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="disputestatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_dispute-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'dispute';
               d.form = $("#sb_dispute-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "type_txt" },

                { data: "party_txt" },

                { data: "agreement_txt" },

                { data: "status_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#dispute_parent_params').length) {
                        parent_params = parent_params + $('#dispute_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=dispute&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="dispute" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_disputeitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'disputeitem';
               d.form = $("#sb_disputeitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "dispute_txt" },

                { data: "owner_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#disputeitem_parent_params').length) {
                        parent_params = parent_params + $('#disputeitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=disputeitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="disputeitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_conversation-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'conversation';
               d.form = $("#sb_conversation-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "owner_txt" },

                { data: "counter_party_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#conversation_parent_params').length) {
                        parent_params = parent_params + $('#conversation_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=conversation&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="conversation" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_message-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'message';
               d.form = $("#sb_message-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#message_parent_params').length) {
                        parent_params = parent_params + $('#message_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=message&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="message" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_messagesfiles-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'messagefiles';
               d.form = $("#sb_messagesfiles-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#messagefiles_parent_params').length) {
                        parent_params = parent_params + $('#messagefiles_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=messagefiles&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="messagefiles" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_notifytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'notificationtype';
               d.form = $("#sb_notifytype-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notificationtype_parent_params').length) {
                        parent_params = parent_params + $('#notificationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=notificationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notificationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_notifystatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'notificationstatus';
               d.form = $("#sb_notifystatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notificationstatus_parent_params').length) {
                        parent_params = parent_params + $('#notificationstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=notificationstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notificationstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_notifylevel-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'notificationlevel';
               d.form = $("#sb_notifylevel-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notificationlevel_parent_params').length) {
                        parent_params = parent_params + $('#notificationlevel_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=notificationlevel&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notificationlevel" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_notification-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'notification';
               d.form = $("#sb_notification-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#notification_parent_params').length) {
                        parent_params = parent_params + $('#notification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=notification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="notification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pclasstype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positionclassificationtype';
               d.form = $("#sb_pclasstype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positionclassificationtype_parent_params').length) {
                        parent_params = parent_params + $('#positionclassificationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positionclassificationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positionclassificationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_ptypeclass-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positiontypeclass';
               d.form = $("#sb_ptypeclass-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pclass_type_txt" },
                { data: "name" },

                { data: "std_hpw" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positiontypeclass_parent_params').length) {
                        parent_params = parent_params + $('#positiontypeclass_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positiontypeclass&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positiontypeclass" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_positiontype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positiontype';
               d.form = $("#sb_positiontype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "ptype_class_txt" },
                { data: "name" },

                { data: "description" },

                { data: "b_percentage" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positiontype_parent_params').length) {
                        parent_params = parent_params + $('#positiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positionstatus';
               d.form = $("#sb_pstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positionstatus_parent_params').length) {
                        parent_params = parent_params + $('#positionstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positionstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positionstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_resptype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'responsibilitytype';
               d.form = $("#sb_resptype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#responsibilitytype_parent_params').length) {
                        parent_params = parent_params + $('#responsibilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=responsibilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="responsibilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_validresp-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'validresponsibility';
               d.form = $("#sb_validresp-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "position_type_txt" },

                { data: "resp_type_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#validresponsibility_parent_params').length) {
                        parent_params = parent_params + $('#validresponsibility_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=validresponsibility&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="validresponsibility" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_position-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'position';
               d.form = $("#sb_position-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "position_type_txt" },

                { data: "hiring_org_txt" },

                { data: "status_txt" },

                { data: "budget_item_txt" },
                { data: "name" },

                { data: "salary_fg" },

                { data: "exempt_fg" },

                { data: "fulltime_fg" },

                { data: "temp_fg" },

                { data: "est_fdate" },

                { data: "est_tdate" },

                { data: "actual_fdate" },

                { data: "actual_tdate" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#position_parent_params').length) {
                        parent_params = parent_params + $('#position_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=position&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="position" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_posresp-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positionresponsibility';
               d.form = $("#sb_posresp-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "position_txt" },

                { data: "resp_type_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positionresponsibility_parent_params').length) {
                        parent_params = parent_params + $('#positionresponsibility_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positionresponsibility&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positionresponsibility" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pfulfillment-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positionfulfillment';
               d.form = $("#sb_pfulfillment-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "position_txt" },

                { data: "acceptor_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positionfulfillment_parent_params').length) {
                        parent_params = parent_params + $('#positionfulfillment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positionfulfillment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positionfulfillment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_preportstruct-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positionreportingstructure';
               d.form = $("#sb_preportstruct-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "reporter_txt" },

                { data: "report_to_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "is_primary_fg" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positionreportingstructure_parent_params').length) {
                        parent_params = parent_params + $('#positionreportingstructure_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positionreportingstructure&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positionreportingstructure" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_ratetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'ratetype';
               d.form = $("#sb_ratetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#ratetype_parent_params').length) {
                        parent_params = parent_params + $('#ratetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=ratetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="ratetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_paygrade-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paygrade';
               d.form = $("#sb_paygrade-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#paygrade_parent_params').length) {
                        parent_params = parent_params + $('#paygrade_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paygrade&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paygrade" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_salarystep-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'salarystep';
               d.form = $("#sb_salarystep-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "amount" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#salarystep_parent_params').length) {
                        parent_params = parent_params + $('#salarystep_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=salarystep&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="salarystep" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_ptyperate-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'positiontyperate';
               d.form = $("#sb_ptyperate-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "position_txt" },

                { data: "rate_type_txt" },

                { data: "period_type_txt" },

                { data: "salary_step_txt" },
                { data: "name" },

                { data: "rate" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#positiontyperate_parent_params').length) {
                        parent_params = parent_params + $('#positiontyperate_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=positiontyperate&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="positiontyperate" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_payhistory-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'payhistory';
               d.form = $("#sb_payhistory-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "period_type_txt" },

                { data: "salary_step_txt" },

                { data: "employment_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#payhistory_parent_params').length) {
                        parent_params = parent_params + $('#payhistory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=payhistory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="payhistory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_benefittype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'benefittype';
               d.form = $("#sb_benefittype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "emppaid_percentage" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#benefittype_parent_params').length) {
                        parent_params = parent_params + $('#benefittype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=benefittype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="benefittype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partybenefit-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partybenefit';
               d.form = $("#sb_partybenefit-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "period_type_txt" },

                { data: "benefit_type_txt" },

                { data: "employment_txt" },
                { data: "name" },

                { data: "cost" },

                { data: "avail_time" },

                { data: "aemppaid_percentage" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partybenefit_parent_params').length) {
                        parent_params = parent_params + $('#partybenefit_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partybenefit&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partybenefit" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_deductiontype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'deductiontype';
               d.form = $("#sb_deductiontype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#deductiontype_parent_params').length) {
                        parent_params = parent_params + $('#deductiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=deductiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="deductiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_deduction-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'deduction';
               d.form = $("#sb_deduction-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "deduction_type_txt" },

                { data: "payment_txt" },
                { data: "name" },

                { data: "amount" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#deduction_parent_params').length) {
                        parent_params = parent_params + $('#deduction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=deduction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="deduction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_prpreference-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'payrollpreference';
               d.form = $("#sb_prpreference-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "period_type_txt" },

                { data: "paymeth_type_txt" },

                { data: "deduction_type_txt" },

                { data: "internal_org_txt" },

                { data: "employee_txt" },
                { data: "name" },

                { data: "flat_amount" },

                { data: "routing_no" },

                { data: "account_no" },

                { data: "bank_name" },

                { data: "percentage" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#payrollpreference_parent_params').length) {
                        parent_params = parent_params + $('#payrollpreference_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=payrollpreference&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="payrollpreference" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_empappstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'employmentapplicationstatus';
               d.form = $("#sb_empappstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#employmentapplicationstatus_parent_params').length) {
                        parent_params = parent_params + $('#employmentapplicationstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=employmentapplicationstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="employmentapplicationstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_empappsrctype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'employmentapplicationsourcetype';
               d.form = $("#sb_empappsrctype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#employmentapplicationsourcetype_parent_params').length) {
                        parent_params = parent_params + $('#employmentapplicationsourcetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=employmentapplicationsourcetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="employmentapplicationsourcetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_empapplication-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'employmentapplication';
               d.form = $("#sb_empapplication-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "position_txt" },

                { data: "status_txt" },

                { data: "source_txt" },

                { data: "referred_by_txt" },

                { data: "applicant_txt" },
                { data: "name" },

                { data: "application_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#employmentapplication_parent_params').length) {
                        parent_params = parent_params + $('#employmentapplication_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=employmentapplication&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="employmentapplication" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_qualtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'qualificationtype';
               d.form = $("#sb_qualtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#qualificationtype_parent_params').length) {
                        parent_params = parent_params + $('#qualificationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=qualificationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="qualificationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_skilltype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'skilltype';
               d.form = $("#sb_skilltype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#skilltype_parent_params').length) {
                        parent_params = parent_params + $('#skilltype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=skilltype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="skilltype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_tctype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'trainingclasstype';
               d.form = $("#sb_tctype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#trainingclasstype_parent_params').length) {
                        parent_params = parent_params + $('#trainingclasstype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=trainingclasstype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="trainingclasstype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_ptraining-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'persontraining';
               d.form = $("#sb_ptraining-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "person_txt" },

                { data: "tc_type_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#persontraining_parent_params').length) {
                        parent_params = parent_params + $('#persontraining_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=persontraining&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="persontraining" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_resume-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'resume';
               d.form = $("#sb_resume-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "party_txt" },
                { data: "name" },

                { data: "resume_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#resume_parent_params').length) {
                        parent_params = parent_params + $('#resume_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=resume&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="resume" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyskill-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyskill';
               d.form = $("#sb_partyskill-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "party_txt" },

                { data: "skill_type_txt" },
                { data: "name" },

                { data: "started_date" },

                { data: "exp_yrs" },

                { data: "skill_level" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyskill_parent_params').length) {
                        parent_params = parent_params + $('#partyskill_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyskill&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyskill" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyqual-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyqualification';
               d.form = $("#sb_partyqual-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "held_by_txt" },

                { data: "qualification_type_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyqualification_parent_params').length) {
                        parent_params = parent_params + $('#partyqualification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyqualification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyqualification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_perfnoteype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'performancenotetype';
               d.form = $("#sb_perfnoteype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#performancenotetype_parent_params').length) {
                        parent_params = parent_params + $('#performancenotetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=performancenotetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="performancenotetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_perfnote-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'performancenote';
               d.form = $("#sb_perfnote-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "given_by_txt" },

                { data: "regarding_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "comm_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#performancenote_parent_params').length) {
                        parent_params = parent_params + $('#performancenote_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=performancenote&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="performancenote" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_perfreview-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'performancereview';
               d.form = $("#sb_perfreview-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "from_role_txt" },

                { data: "for_role_txt" },

                { data: "position_txt" },

                { data: "payment_txt" },

                { data: "pay_history_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#performancereview_parent_params').length) {
                        parent_params = parent_params + $('#performancereview_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=performancereview&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="performancereview" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_ratingtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'ratingtype';
               d.form = $("#sb_ratingtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#ratingtype_parent_params').length) {
                        parent_params = parent_params + $('#ratingtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=ratingtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="ratingtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_previtemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'perfreviewitemtype';
               d.form = $("#sb_previtemtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#perfreviewitemtype_parent_params').length) {
                        parent_params = parent_params + $('#perfreviewitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=perfreviewitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="perfreviewitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_perfreviewitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'performancereviewitem';
               d.form = $("#sb_perfreviewitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "perf_review_txt" },

                { data: "item_type_txt" },

                { data: "rating_type_txt" },
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#performancereviewitem_parent_params').length) {
                        parent_params = parent_params + $('#performancereviewitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=performancereviewitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="performancereviewitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_terminationtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'terminationtype';
               d.form = $("#sb_terminationtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#terminationtype_parent_params').length) {
                        parent_params = parent_params + $('#terminationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=terminationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="terminationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_termreason-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'terminationreason';
               d.form = $("#sb_termreason-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#terminationreason_parent_params').length) {
                        parent_params = parent_params + $('#terminationreason_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=terminationreason&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="terminationreason" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_ucstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'unemploymentclaimstatus';
               d.form = $("#sb_ucstatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#unemploymentclaimstatus_parent_params').length) {
                        parent_params = parent_params + $('#unemploymentclaimstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=unemploymentclaimstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="unemploymentclaimstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_uempclaim-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'unemploymentclaim';
               d.form = $("#sb_uempclaim-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "status_txt" },

                { data: "employment_txt" },
                { data: "name" },

                { data: "claim_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#unemploymentclaim_parent_params').length) {
                        parent_params = parent_params + $('#unemploymentclaim_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=unemploymentclaim&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="unemploymentclaim" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_delivertype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'deliverabletype';
               d.form = $("#sb_delivertype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#deliverabletype_parent_params').length) {
                        parent_params = parent_params + $('#deliverabletype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=deliverabletype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="deliverabletype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_deliverable-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'deliverable';
               d.form = $("#sb_deliverable-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "d_type_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#deliverable_parent_params').length) {
                        parent_params = parent_params + $('#deliverable_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=deliverable&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="deliverable" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_requiretype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'requirementtype';
               d.form = $("#sb_requiretype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#requirementtype_parent_params').length) {
                        parent_params = parent_params + $('#requirementtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=requirementtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="requirementtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_requirement-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'requirement';
               d.form = $("#sb_requirement-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "r_type_txt" },

                { data: "deliverable_txt" },

                { data: "pfasset_txt" },
                { data: "name" },

                { data: "create_date" },

                { data: "require_date" },

                { data: "budget_est" },

                { data: "description" },

                { data: "quantity" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#requirement_parent_params').length) {
                        parent_params = parent_params + $('#requirement_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=requirement&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="requirement" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_requirerole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'requirementrole';
               d.form = $("#sb_requirerole-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "requirement_txt" },

                { data: "party_role_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },


                { data: "business_unit_txt" },
        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#requirementrole_parent_params').length) {
                        parent_params = parent_params + $('#requirementrole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=requirementrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="requirementrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wetypecat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortcategory';
               d.form = $("#sb_wetypecat-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortcategory_parent_params').length) {
                        parent_params = parent_params + $('#workeffortcategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortcategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortcategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workefforttype';
               d.form = $("#sb_wetype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workefforttype_parent_params').length) {
                        parent_params = parent_params + $('#workefforttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workefforttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workefforttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_weptype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortpurposetype';
               d.form = $("#sb_weptype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortpurposetype_parent_params').length) {
                        parent_params = parent_params + $('#workeffortpurposetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortpurposetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortpurposetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_westatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortstatus';
               d.form = $("#sb_westatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortstatus_parent_params').length) {
                        parent_params = parent_params + $('#workeffortstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_workeffort-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffort';
               d.form = $("#sb_workeffort-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "we_redone_via_txt" },

                { data: "type_txt" },

                { data: "wep_type_txt" },

                { data: "we_property_txt" },
                { data: "name" },

                { data: "tot_dallowed" },

                { data: "tot_hallowed" },

                { data: "est_hours" },

                { data: "act_hours" },

                { data: "sched_start_date" },

                { data: "sched_end_date" },

                { data: "act_start_date" },

                { data: "act_end_date" },

                { data: "description" },


                { data: "status_txt" },
                { data: "special_terms" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffort_parent_params').length) {
                        parent_params = parent_params + $('#workeffort_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffort&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffort" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_agrmntinspection-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'purchaseagreementinspection';
               d.form = $("#sb_agrmntinspection-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "pai_agreement_txt" },

                { data: "pai_inspection_txt" },
                { data: "name" },

                { data: "inspection_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#purchaseagreementinspection_parent_params').length) {
                        parent_params = parent_params + $('#purchaseagreementinspection_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=purchaseagreementinspection&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="purchaseagreementinspection" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wrfulfillment-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workrequirementfulfillment';
               d.form = $("#sb_wrfulfillment-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "wrf_requirement_txt" },

                { data: "wrf_workeffort_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workrequirementfulfillment_parent_params').length) {
                        parent_params = parent_params + $('#workrequirementfulfillment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workrequirementfulfillment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workrequirementfulfillment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_weatype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortassociationtype';
               d.form = $("#sb_weatype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortassociationtype_parent_params').length) {
                        parent_params = parent_params + $('#workeffortassociationtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortassociationtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortassociationtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_weassociation-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortassociation';
               d.form = $("#sb_weassociation-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "wea_fworkeffort_txt" },

                { data: "wea_tworkeffort_txt" },
                { data: "name" },

                { data: "eff_from_date" },

                { data: "eff_to_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortassociation_parent_params').length) {
                        parent_params = parent_params + $('#workeffortassociation_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortassociation&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortassociation" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wertype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortroletype';
               d.form = $("#sb_wertype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortroletype_parent_params').length) {
                        parent_params = parent_params + $('#workeffortroletype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortroletype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortroletype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wepatyassign-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortpartyassignment';
               d.form = $("#sb_wepatyassign-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "wepa_party_txt" },

                { data: "wepa_roletype_txt" },

                { data: "wepa_bu_txt" },

                { data: "wepa_we_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortpartyassignment_parent_params').length) {
                        parent_params = parent_params + $('#workeffortpartyassignment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortpartyassignment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortpartyassignment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_timesheet-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'timesheet';
               d.form = $("#sb_timesheet-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "submitter_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#timesheet_parent_params').length) {
                        parent_params = parent_params + $('#timesheet_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=timesheet&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="timesheet" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_tsrtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'timesheetroletype';
               d.form = $("#sb_tsrtype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#timesheetroletype_parent_params').length) {
                        parent_params = parent_params + $('#timesheetroletype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=timesheetroletype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="timesheetroletype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_tsrole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'timesheetrole';
               d.form = $("#sb_tsrole-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "tsr_type_txt" },

                { data: "timesheet_txt" },

                { data: "party_txt" },
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#timesheetrole_parent_params').length) {
                        parent_params = parent_params + $('#timesheetrole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=timesheetrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="timesheetrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_timeentry-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'timeentry';
               d.form = $("#sb_timeentry-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "timesheet_txt" },

                { data: "workeffort_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "hours" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#timeentry_parent_params').length) {
                        parent_params = parent_params + $('#timeentry_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=timeentry&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="timeentry" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_partyrate-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyrate';
               d.form = $("#sb_partyrate-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "party_txt" },

                { data: "rate_type_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "rate" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyrate_parent_params').length) {
                        parent_params = parent_params + $('#partyrate_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyrate&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyrate" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wearate-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortassignmentrate';
               d.form = $("#sb_wearate-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "weassignment_txt" },

                { data: "rate_type_txt" },
                { data: "name" },

                { data: "from_date" },

                { data: "to_date" },

                { data: "rate" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortassignmentrate_parent_params').length) {
                        parent_params = parent_params + $('#workeffortassignmentrate_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortassignmentrate&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortassignmentrate" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_weiassign-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortinventoryassignment';
               d.form = $("#sb_weiassign-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "inventory_item_txt" },

                { data: "workeffort_txt" },
                { data: "name" },

                { data: "quantity" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortinventoryassignment_parent_params').length) {
                        parent_params = parent_params + $('#workeffortinventoryassignment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortinventoryassignment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortinventoryassignment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wefaastatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortfixedassignmentstatus';
               d.form = $("#sb_wefaastatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortfixedassignmentstatus_parent_params').length) {
                        parent_params = parent_params + $('#workeffortfixedassignmentstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortfixedassignmentstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortfixedassignmentstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wefaassign-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortfixedassetassignment';
               d.form = $("#sb_wefaassign-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "fixed_asset_txt" },

                { data: "workeffort_txt" },

                { data: "status_txt" },
                { data: "from_date" },

                { data: "to_date" },

                { data: "name" },

                { data: "alloc_cost" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortfixedassetassignment_parent_params').length) {
                        parent_params = parent_params + $('#workeffortfixedassetassignment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortfixedassetassignment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortfixedassetassignment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wepastatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyfixedassetassignmentstatus';
               d.form = $("#sb_wepastatus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyfixedassetassignmentstatus_parent_params').length) {
                        parent_params = parent_params + $('#partyfixedassetassignmentstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyfixedassetassignmentstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyfixedassetassignmentstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_pfaassign-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyfixedassetassignment';
               d.form = $("#sb_pfaassign-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "fixed_asset_txt" },

                { data: "party_txt" },

                { data: "status_txt" },
                { data: "from_date" },

                { data: "to_date" },

                { data: "name" },

                { data: "alloc_cost" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyfixedassetassignment_parent_params').length) {
                        parent_params = parent_params + $('#partyfixedassetassignment_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyfixedassetassignment&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyfixedassetassignment" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = shadowcore_base_url.baseUrl;

    
    $('#sb_wedeliverable-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': shadowcore_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'workeffortdeliverable';
               d.form = $("#sb_wedeliverable-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "deliverable_txt" },

                { data: "workeffort_txt" },
                { data: "name" },

                { data: "alloc_cost" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#workeffortdeliverable_parent_params').length) {
                        parent_params = parent_params + $('#workeffortdeliverable_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=workeffortdeliverable&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="workeffortdeliverable" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });



});
