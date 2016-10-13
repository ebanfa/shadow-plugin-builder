
jQuery(document).ready(function($)
{

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_currency-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_country-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'country';
               d.form = $("#sb_country-list-form").serializeArray();
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
                    if($('#country_parent_params').length) {
                        parent_params = parent_params + $('#country_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=country&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="country" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_business-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

                { data: "tel_no" },

                { data: "account_notify_email" },

                { data: "orders_notify_email" },

                { data: "description" },

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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partycat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partytype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_roletype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    $('#sb_party-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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


    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partyrole-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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
                    if($('#partyrole_parent_params').length) {
                        parent_params = parent_params + $('#partyrole_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyrole&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyrole" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partygroup-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partygroup';
               d.form = $("#sb_partygroup-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },

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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_person-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'person';
               d.form = $("#sb_person-list-form").serializeArray();
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partyprofile-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyprofile';
               d.form = $("#sb_partyprofile-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "profile_party_txt" },
                { data: "name" },

                { data: "display_name" },

                { data: "description" },

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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_billaccount-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_accttxntype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_accttxnstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_accttransaction-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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


                { data: "billing_account_txt" },
                { data: "amount" },

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
                    if($('#accounttransaction_parent_params').length) {
                        parent_params = parent_params + $('#accounttransaction_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=accounttransaction&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="accounttransaction" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partyimage-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyimage';
               d.form = $("#sb_partyimage-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyimage_parent_params').length) {
                        parent_params = parent_params + $('#partyimage_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyimage&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyimage" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partyfile-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyfile';
               d.form = $("#sb_partyfile-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyfile_parent_params').length) {
                        parent_params = parent_params + $('#partyfile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyfile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyfile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_socmediaccttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_socmediaacct-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

                { data: "token_id" },

                { data: "token_code" },

                { data: "description" },

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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_contactreq-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contactrequest';
               d.form = $("#sb_contactreq-list-form").serializeArray();
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
                    if($('#contactrequest_parent_params').length) {
                        parent_params = parent_params + $('#contactrequest_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contactrequest&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contactrequest" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_qualtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partyqual-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyqualification';
               d.form = $("#sb_partyqual-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "qualification_type_txt" },
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
                    if($('#partyqualification_parent_params').length) {
                        parent_params = parent_params + $('#partyqualification_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyqualification&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyqualification" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_academiclevel-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'academiclevel';
               d.form = $("#sb_academiclevel-list-form").serializeArray();
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
                    if($('#academiclevel_parent_params').length) {
                        parent_params = parent_params + $('#academiclevel_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=academiclevel&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="academiclevel" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_documenttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'documenttype';
               d.form = $("#sb_documenttype-list-form").serializeArray();
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
                    if($('#documenttype_parent_params').length) {
                        parent_params = parent_params + $('#documenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=documenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="documenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_noofpages-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'noofpages';
               d.form = $("#sb_noofpages-list-form").serializeArray();
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
                    if($('#noofpages_parent_params').length) {
                        parent_params = parent_params + $('#noofpages_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=noofpages&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="noofpages" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_urgency-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'urgency';
               d.form = $("#sb_urgency-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#urgency_parent_params').length) {
                        parent_params = parent_params + $('#urgency_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=urgency&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="urgency" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_subjectarea-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'subjectarea';
               d.form = $("#sb_subjectarea-list-form").serializeArray();
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
                    if($('#subjectarea_parent_params').length) {
                        parent_params = parent_params + $('#subjectarea_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=subjectarea&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="subjectarea" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partysubarea-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partysubjectarea';
               d.form = $("#sb_partysubarea-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "target_subject_area_txt" },
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
                    if($('#partysubjectarea_parent_params').length) {
                        parent_params = parent_params + $('#partysubjectarea_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partysubjectarea&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partysubjectarea" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_writingstyle-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'writingstyle';
               d.form = $("#sb_writingstyle-list-form").serializeArray();
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
                    if($('#writingstyle_parent_params').length) {
                        parent_params = parent_params + $('#writingstyle_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=writingstyle&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="writingstyle" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_partyreview-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'partyreview';
               d.form = $("#sb_partyreview-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#partyreview_parent_params').length) {
                        parent_params = parent_params + $('#partyreview_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=partyreview&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="partyreview" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_contentcat-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contentcategory';
               d.form = $("#sb_contentcat-list-form").serializeArray();
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
                    if($('#contentcategory_parent_params').length) {
                        parent_params = parent_params + $('#contentcategory_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contentcategory&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentcategory" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_contenttype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contenttype';
               d.form = $("#sb_contenttype-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "content_category_txt" },
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
                    if($('#contenttype_parent_params').length) {
                        parent_params = parent_params + $('#contenttype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contenttype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contenttype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_content-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'content';
               d.form = $("#sb_content-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 

                { data: "content_type_txt" },

                { data: "subject_area_txt" },

                { data: "academic_level_txt" },
                { data: "name" },

                { data: "title" },

                { data: "description" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#content_parent_params').length) {
                        parent_params = parent_params + $('#content_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=content&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="content" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_contentfile-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contentfile';
               d.form = $("#sb_contentfile-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentfile_parent_params').length) {
                        parent_params = parent_params + $('#contentfile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contentfile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentfile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_cordertype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contentordertype';
               d.form = $("#sb_cordertype-list-form").serializeArray();
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
                    if($('#contentordertype_parent_params').length) {
                        parent_params = parent_params + $('#contentordertype_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contentordertype&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentordertype" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_corderstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contentorderstatus';
               d.form = $("#sb_corderstatus-list-form").serializeArray();
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
                    if($('#contentorderstatus_parent_params').length) {
                        parent_params = parent_params + $('#contentorderstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contentorderstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentorderstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_paymentstatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'paymentstatus';
               d.form = $("#sb_paymentstatus-list-form").serializeArray();
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
                    if($('#paymentstatus_parent_params').length) {
                        parent_params = parent_params + $('#paymentstatus_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=paymentstatus&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="paymentstatus" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_contentorder-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contentorder';
               d.form = $("#sb_contentorder-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
                { data: "name" },


                { data: "order_status_txt" },

                { data: "payment_status_txt" },

                { data: "order_party_txt" },

                { data: "academic_level_txt" },

                { data: "numpages_txt" },

                { data: "subject_area_txt" },

                { data: "urgency_txt" },
                { data: "order_date" },

                { data: "total" },

        ],
        columnDefs: [
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentorder_parent_params').length) {
                        parent_params = parent_params + $('#contentorder_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contentorder&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentorder" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_corderfile-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'contentorderfile';
               d.form = $("#sb_corderfile-list-form").serializeArray();
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var parent_params = '';
                    if($('#contentorderfile_parent_params').length) {
                        parent_params = parent_params + $('#contentorderfile_parent_params').val(); 
                    }
                    return '<a class="data-table-link" href="' + baseUrl + 'artifact=contentorderfile&id=' + row.id + '&page_action=view' + parent_params + '" data-related-artifact-name="contentorderfile" data-related-instance-name="' + row.name + '" data-related-instance-id="' + row.id + '">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_disputtype-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'disputetype';
               d.form = $("#sb_disputtype-list-form").serializeArray();
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_disputestatus-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
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

    var baseUrl = wpessaywriter_base_url.baseUrl;

    
    $('#sb_dispute-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': wpessaywriter_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_entity_ajax';
               d.artifact = 'dispute';
               d.form = $("#sb_dispute-list-form").serializeArray();
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



});
