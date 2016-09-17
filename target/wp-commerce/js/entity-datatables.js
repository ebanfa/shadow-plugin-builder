
jQuery(document).ready(function($)
{

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_currency-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_loctype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_location-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_business-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

                { data: "pin" },

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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_businessunit-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'businessunit';
               d.form = $("#sb_businessunit-list-form").serializeArray();
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_partycat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_partytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_roletype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    $('#sb_party-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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


    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_partyrole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_reltype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_relstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_partyrel-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_partygroup-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_person-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_partyprofile-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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
                { data: "name" },

                { data: "display_name" },

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
                    if($('#partyprofile_parent_params').length) {
                        parent_params = parent_params + $('#partyprofile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyprofile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyprofile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_cmechtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contactmechanismtype';
               d.form = $("#sb_cmechtype-list-form").serializeArray();
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
                    if($('#contactmechanismtype_parent_params').length) {
                        parent_params = parent_params + $('#contactmechanismtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contactmechanismtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactmechanismtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_contactmech-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contactmechanism';
               d.form = $("#sb_contactmech-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contactmechanism_parent_params').length) {
                        parent_params = parent_params + $('#contactmechanism_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contactmechanism&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactmechanism" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_pcmpurposetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partycontactmechanismpurposetype';
               d.form = $("#sb_pcmpurposetype-list-form").serializeArray();
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
                    if($('#partycontactmechanismpurposetype_parent_params').length) {
                        parent_params = parent_params + $('#partycontactmechanismpurposetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partycontactmechanismpurposetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycontactmechanismpurposetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_partycmech-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partycontactmechanism';
               d.form = $("#sb_partycmech-list-form").serializeArray();
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
                    if($('#partycontactmechanism_parent_params').length) {
                        parent_params = parent_params + $('#partycontactmechanism_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partycontactmechanism&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycontactmechanism" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_pcmpurpose-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partycontactmechanismpurpose';
               d.form = $("#sb_pcmpurpose-list-form").serializeArray();
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
                    if($('#partycontactmechanismpurpose_parent_params').length) {
                        parent_params = parent_params + $('#partycontactmechanismpurpose_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partycontactmechanismpurpose&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partycontactmechanismpurpose" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_socmediaccttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'socialmediaaccounttype';
               d.form = $("#sb_socmediaccttype-list-form").serializeArray();
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
                    if($('#socialmediaaccounttype_parent_params').length) {
                        parent_params = parent_params + $('#socialmediaaccounttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=socialmediaaccounttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="socialmediaaccounttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_socmediaacct-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'socialmediaaccount';
               d.form = $("#sb_socmediaacct-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#socialmediaaccount_parent_params').length) {
                        parent_params = parent_params + $('#socialmediaaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=socialmediaaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="socialmediaaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_billaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_accttxntype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_accttxnstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_accttransaction-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'accounttransaction';
               d.form = $("#sb_accttransaction-list-form").serializeArray();
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_conversation-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'conversation';
               d.form = $("#sb_conversation-list-form").serializeArray();
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
                    if($('#conversation_parent_params').length) {
                        parent_params = parent_params + $('#conversation_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=conversation&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="conversation" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_conuser-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'conversationuser';
               d.form = $("#sb_conuser-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#conversationuser_parent_params').length) {
                        parent_params = parent_params + $('#conversationuser_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=conversationuser&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="conversationuser" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_message-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_messagesfiles-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_notifytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_notifystatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_notifylevel-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_notification-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_contactus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contactus';
               d.form = $("#sb_contactus-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

                { data: "email" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contactus_parent_params').length) {
                        parent_params = parent_params + $('#contactus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contactus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_uom-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'uom';
               d.form = $("#sb_uom-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#uom_parent_params').length) {
                        parent_params = parent_params + $('#uom_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=uom&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="uom" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_uomconversion-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'uomconversion';
               d.form = $("#sb_uomconversion-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#uomconversion_parent_params').length) {
                        parent_params = parent_params + $('#uomconversion_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=uomconversion&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="uomconversion" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodcat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productcategory';
               d.form = $("#sb_prodcat-list-form").serializeArray();
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
                    if($('#productcategory_parent_params').length) {
                        parent_params = parent_params + $('#productcategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productcategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productcategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodclass-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productclassification';
               d.form = $("#sb_prodclass-list-form").serializeArray();
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
                    if($('#productclassification_parent_params').length) {
                        parent_params = parent_params + $('#productclassification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productclassification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productclassification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'producttype';
               d.form = $("#sb_prodtype-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#producttype_parent_params').length) {
                        parent_params = parent_params + $('#producttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=producttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="producttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_producttmpl-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'producttemplate';
               d.form = $("#sb_producttmpl-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "prod_type_txt" },
                { data: "name" },

                { data: "base_price" },

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
                    if($('#producttemplate_parent_params').length) {
                        parent_params = parent_params + $('#producttemplate_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=producttemplate&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="producttemplate" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_product-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'product';
               d.form = $("#sb_product-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "prod_type_txt" },
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
                    if($('#product_parent_params').length) {
                        parent_params = parent_params + $('#product_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=product&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="product" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodclasslink-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productclassificationlink';
               d.form = $("#sb_prodclasslink-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "product_txt" },

                { data: "product_class_txt" },
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
                    if($('#productclassificationlink_parent_params').length) {
                        parent_params = parent_params + $('#productclassificationlink_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productclassificationlink&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productclassificationlink" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodcatimage-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productcategoryimage';
               d.form = $("#sb_prodcatimage-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "prod_cat_image_txt" },
                { data: "name" },

                { data: "image_url" },

                { data: "image_size" },

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
                    if($('#productcategoryimage_parent_params').length) {
                        parent_params = parent_params + $('#productcategoryimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productcategoryimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productcategoryimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodtyimage-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'producttypeimage';
               d.form = $("#sb_prodtyimage-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "prod_ty_image_txt" },
                { data: "name" },

                { data: "image_url" },

                { data: "image_size" },

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
                    if($('#producttypeimage_parent_params').length) {
                        parent_params = parent_params + $('#producttypeimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=producttypeimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="producttypeimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodimage-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productimage';
               d.form = $("#sb_prodimage-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "product_txt" },
                { data: "name" },

                { data: "image_url" },

                { data: "image_size" },

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
                    if($('#productimage_parent_params').length) {
                        parent_params = parent_params + $('#productimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodfeatcat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productfeaturecategory';
               d.form = $("#sb_prodfeatcat-list-form").serializeArray();
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
                    if($('#productfeaturecategory_parent_params').length) {
                        parent_params = parent_params + $('#productfeaturecategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productfeaturecategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeaturecategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodfeattype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productfeaturetype';
               d.form = $("#sb_prodfeattype-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#productfeaturetype_parent_params').length) {
                        parent_params = parent_params + $('#productfeaturetype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productfeaturetype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeaturetype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodfeature-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productfeature';
               d.form = $("#sb_prodfeature-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "feature_type_txt" },

                { data: "feature_uom_txt" },
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
                    if($('#productfeature_parent_params').length) {
                        parent_params = parent_params + $('#productfeature_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productfeature&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeature" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_featappltype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'featureapplicabilitytype';
               d.form = $("#sb_featappltype-list-form").serializeArray();
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
                    if($('#featureapplicabilitytype_parent_params').length) {
                        parent_params = parent_params + $('#featureapplicabilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=featureapplicabilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="featureapplicabilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_featappl-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productfeatureapplicability';
               d.form = $("#sb_featappl-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "applicability_type_txt" },

                { data: "applicability_prod_txt" },

                { data: "applicability_feat_txt" },
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
                    if($('#productfeatureapplicability_parent_params').length) {
                        parent_params = parent_params + $('#productfeatureapplicability_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productfeatureapplicability&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeatureapplicability" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_featinttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'featureinteractiontype';
               d.form = $("#sb_featinttype-list-form").serializeArray();
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
                    if($('#featureinteractiontype_parent_params').length) {
                        parent_params = parent_params + $('#featureinteractiontype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=featureinteractiontype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="featureinteractiontype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_featinteraction-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productfeatureinteraction';
               d.form = $("#sb_featinteraction-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "interaction_type_txt" },

                { data: "interaction_prod_txt" },

                { data: "interaction_feat_txt" },
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
                    if($('#productfeatureinteraction_parent_params').length) {
                        parent_params = parent_params + $('#productfeatureinteraction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productfeatureinteraction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productfeatureinteraction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_pricecomptype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'pricecomponenttype';
               d.form = $("#sb_pricecomptype-list-form").serializeArray();
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
                    if($('#pricecomponenttype_parent_params').length) {
                        parent_params = parent_params + $('#pricecomponenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=pricecomponenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="pricecomponenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_pricecomp-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'pricecomponent';
               d.form = $("#sb_pricecomp-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#pricecomponent_parent_params').length) {
                        parent_params = parent_params + $('#pricecomponent_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=pricecomponent&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="pricecomponent" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_costcomptype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'costcomponenttype';
               d.form = $("#sb_costcomptype-list-form").serializeArray();
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
                    if($('#costcomponenttype_parent_params').length) {
                        parent_params = parent_params + $('#costcomponenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=costcomponenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costcomponenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_costcomp-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'costcomponent';
               d.form = $("#sb_costcomp-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "cost_type_txt" },

                { data: "cost_prod_txt" },
                { data: "name" },

                { data: "component_cost" },

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
                    if($('#costcomponent_parent_params').length) {
                        parent_params = parent_params + $('#costcomponent_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=costcomponent&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="costcomponent" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_supprating-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'supplierrating';
               d.form = $("#sb_supprating-list-form").serializeArray();
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
                    if($('#supplierrating_parent_params').length) {
                        parent_params = parent_params + $('#supplierrating_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=supplierrating&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="supplierrating" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_supppref-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'supplierpreference';
               d.form = $("#sb_supppref-list-form").serializeArray();
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
                    if($('#supplierpreference_parent_params').length) {
                        parent_params = parent_params + $('#supplierpreference_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=supplierpreference&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="supplierpreference" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodsupplier-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productsupplier';
               d.form = $("#sb_prodsupplier-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "prod_supplier_txt" },

                { data: "supplier_of_prod_txt" },

                { data: "supplier_rating_txt" },

                { data: "supplier_preference_txt" },
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
                    if($('#productsupplier_parent_params').length) {
                        parent_params = parent_params + $('#productsupplier_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productsupplier&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productsupplier" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_facilitytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'facilitytype';
               d.form = $("#sb_facilitytype-list-form").serializeArray();
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
                    if($('#facilitytype_parent_params').length) {
                        parent_params = parent_params + $('#facilitytype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=facilitytype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="facilitytype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_facility-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'facility';
               d.form = $("#sb_facility-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "facility_type_txt" },
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_containertype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'containertype';
               d.form = $("#sb_containertype-list-form").serializeArray();
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
                    if($('#containertype_parent_params').length) {
                        parent_params = parent_params + $('#containertype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=containertype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="containertype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_container-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'container';
               d.form = $("#sb_container-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#container_parent_params').length) {
                        parent_params = parent_params + $('#container_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=container&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="container" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_lot-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'lot';
               d.form = $("#sb_lot-list-form").serializeArray();
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
                    if($('#lot_parent_params').length) {
                        parent_params = parent_params + $('#lot_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=lot&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="lot" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invitemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'inventoryitemtype';
               d.form = $("#sb_invitemtype-list-form").serializeArray();
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
                    if($('#inventoryitemtype_parent_params').length) {
                        parent_params = parent_params + $('#inventoryitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=inventoryitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventoryitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invitemstat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'inventoryitemstatus';
               d.form = $("#sb_invitemstat-list-form").serializeArray();
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
                    if($('#inventoryitemstatus_parent_params').length) {
                        parent_params = parent_params + $('#inventoryitemstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=inventoryitemstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="inventoryitemstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_inventoryitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'inventoryitem';
               d.form = $("#sb_inventoryitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodordertype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productordertype';
               d.form = $("#sb_prodordertype-list-form").serializeArray();
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
                    if($('#productordertype_parent_params').length) {
                        parent_params = parent_params + $('#productordertype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productordertype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productordertype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodorderstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productorderstatus';
               d.form = $("#sb_prodorderstatus-list-form").serializeArray();
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
                    if($('#productorderstatus_parent_params').length) {
                        parent_params = parent_params + $('#productorderstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productorderstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodorder-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productorder';
               d.form = $("#sb_prodorder-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "prod_order_type_txt" },

                { data: "prod_order_status_txt" },

                { data: "placed_by_party_txt" },

                { data: "taken_by_party_txt" },
                { data: "name" },

                { data: "sub_total" },

                { data: "discount" },

                { data: "total" },

                { data: "prod_order_date" },

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
                    if($('#productorder_parent_params').length) {
                        parent_params = parent_params + $('#productorder_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productorder&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorder" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodorderitype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productorderitemtype';
               d.form = $("#sb_prodorderitype-list-form").serializeArray();
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
                    if($('#productorderitemtype_parent_params').length) {
                        parent_params = parent_params + $('#productorderitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productorderitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodorderistatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productorderitemstatus';
               d.form = $("#sb_prodorderistatus-list-form").serializeArray();
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
                    if($('#productorderitemstatus_parent_params').length) {
                        parent_params = parent_params + $('#productorderitemstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productorderitemstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderitemstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_prodorderitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'productorderitem';
               d.form = $("#sb_prodorderitem-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "item_order_txt" },

                { data: "order_item_type_txt" },

                { data: "order_item_status_txt" },
                { data: "name" },

                { data: "item_sequence" },

                { data: "quantity" },

                { data: "order_item_price" },

                { data: "order_item_total" },

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
                    if($('#productorderitem_parent_params').length) {
                        parent_params = parent_params + $('#productorderitem_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=productorderitem&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="productorderitem" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoicetype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoicestatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoice-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoice';
               d.form = $("#sb_invoice-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "bill_acct_txt" },
                { data: "name" },

                { data: "sub_total" },

                { data: "discount" },

                { data: "total" },


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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoicerole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoiceitemtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoiceitemtype';
               d.form = $("#sb_invoiceitemtype-list-form").serializeArray();
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
                    if($('#invoiceitemtype_parent_params').length) {
                        parent_params = parent_params + $('#invoiceitemtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoiceitemtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceitemtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoiceitemstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'invoiceitemstatus';
               d.form = $("#sb_invoiceitemstatus-list-form").serializeArray();
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
                    if($('#invoiceitemstatus_parent_params').length) {
                        parent_params = parent_params + $('#invoiceitemstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=invoiceitemstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="invoiceitemstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoiceitem-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

                { data: "total" },

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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_invoiceterm-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_paymenttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paymenttype';
               d.form = $("#sb_paymenttype-list-form").serializeArray();
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
                    if($('#paymenttype_parent_params').length) {
                        parent_params = parent_params + $('#paymenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paymenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_paymethod-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paymentmethod';
               d.form = $("#sb_paymethod-list-form").serializeArray();
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
                    if($('#paymentmethod_parent_params').length) {
                        parent_params = parent_params + $('#paymentmethod_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paymentmethod&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymentmethod" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_payment-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_periodtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'periodtype';
               d.form = $("#sb_periodtype-list-form").serializeArray();
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
                    if($('#periodtype_parent_params').length) {
                        parent_params = parent_params + $('#periodtype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=periodtype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="periodtype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_acctperiod-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_coaacctstruct-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_coaacctsegtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_coaasegval-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_coaacctseg-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_coastatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_coa-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_glaccttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_glaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_buglaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_buglaccountbal-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_coaaseginst-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_feventtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_fevent-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_txntype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_txnstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'transactionstatus';
               d.form = $("#sb_txnstatus-list-form").serializeArray();
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
                    if($('#transactionstatus_parent_params').length) {
                        parent_params = parent_params + $('#transactionstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=transactionstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="transactionstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_transaction-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'transaction';
               d.form = $("#sb_transaction-list-form").serializeArray();
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_txndetail-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_feventtxntype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_txntypeacct-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
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

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_bankaccttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'bankaccounttype';
               d.form = $("#sb_bankaccttype-list-form").serializeArray();
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
                    if($('#bankaccounttype_parent_params').length) {
                        parent_params = parent_params + $('#bankaccounttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=bankaccounttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="bankaccounttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpcommerce_base_url.baseUrl;

    
    $('#sb_bankaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpcommerce_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'bankaccount';
               d.form = $("#sb_bankaccount-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#bankaccount_parent_params').length) {
                        parent_params = parent_params + $('#bankaccount_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=bankaccount&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="bankaccount" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });



});
