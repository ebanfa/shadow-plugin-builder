
jQuery(document).ready(function ($)
{   
<#list module.entities as entity> 
    $('#${entity.postName}_form').bootstrapValidator().on('success.form.bv', function (e)
    {
        e.preventDefault();
        var formData = new FormData(), params = $(e.target).serializeArray();
        // Copy other params from the form into the formData
        $.each(params, function(i, val) {
            formData.append(val.name, val.value);
        });
        // As required by wordpress
        formData.append('action', 'create_entity_ajax');
        swal(title: "Please wait!", text: "Your request is being processed", showConfirmButton: false );
        // Make the Ajax call
        $.ajax({
            url: ${application.name?lower_case}_ajax_script.ajaxurl,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(responseData) {
                if (responseData.success) {
                    $('#success').html(responseData.data.message);
                }
                else {
                     $('#success').html(responseData.data.message);
                }
            }
        });
    });

</#list>
});


