
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
        swal({title: "Please wait!", text: "Your request is being processed", showConfirmButton: false });
        // Make the Ajax call
        $.ajax({
            url: '../wp-admin/admin-ajax.php',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function(responseData) {
                if (responseData.success) {

                    swal({   
                        title: "Great Job!",   
                        text: "The data operation completed successfully",   
                        type: "success",   
                        showCancelButton: false,   
                        closeOnConfirm: true 
                    }, function(){  
                        var view_options = '';
                        if($('#view_options').length) { 
                            view_options = $('#view_options').val(); 
                        }
                        window.location=responseData.data.message + view_options;
                    });
                }
                else {
                    swal({   
                        title: "Oops!",   
                        text: responseData.data.message,   
                        type: "warning",   
                        showCancelButton: false,   
                        closeOnConfirm: true 
                    });
                }
            }
        });
    });

</#list>
});


