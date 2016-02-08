
jQuery(document).ready(function($)
{
<#list module.entities as entity>

    <#if entity.name == "Party">
    $('#${entity.postName}-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': ${application.name?lower_case}_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_${entity.postName}_ajax';
               d.form = $("#${entity.postName}-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
<#list entity.fields as field>
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    var role = '';
                    if($('#role').length) { role = '&role=' + $('#role').val(); }
                    return '<a class="data-table-link" href="../page/?type=entity&artifact=${entity.name?lower_case}&id=' + row.id + role + '&page_action=view' + parent_params + '">' + parent_params + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });

    <#else>
    
    $('#${entity.postName}-table').dataTable({
        "ajax": {
            'type': 'POST',
            'url': ${application.name?lower_case}_ajax_script.ajaxurl,
            'data': function(d){
               d.action = 'find_${entity.postName}_ajax';
               d.form = $("#${entity.postName}-list-form").serializeArray();
            },
        },
        columns: [
            { data: "id" }, 
<#list entity.fields as field>
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
            { "visible": false,  "targets": 0 },
            {
                // The `data` parameter refers to the data for the cell (defined by the
                // `data` option, which defaults to the column being worked with, in
                // this case `data: 0`.
                "render": function ( data, type, row ) {
                    return '<a href="../page/?type=entity&artifact=${entity.name?lower_case}&id=' + row.id + '&page_action=view">' + data +  '</a>';
                },
                "targets": 1
            }
        ]
    });
    </#if>
</#list>
});
