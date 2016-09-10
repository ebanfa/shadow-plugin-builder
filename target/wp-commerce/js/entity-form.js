
jQuery(document).ready(function ($)
{   
    $('#sb_currency_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_loctype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_location_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_business_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_businessunit_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partycat_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partytype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_roletype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_party_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partyrole_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_reltype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_relstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partyrel_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partygroup_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_person_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partyprofile_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_cmechtype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contactmech_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_pcmpurposetype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partycmech_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_pcmpurpose_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_billaccount_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_conversation_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_conuser_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_message_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_messagesfiles_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_notifytype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_notifystatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_notifylevel_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_notification_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contactus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_uom_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_uomconversion_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodcat_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodclass_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodtype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_product_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodclasslink_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodcatimage_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodtyimage_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodimage_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodfeatcat_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodfeattype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodfeature_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_featappltype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_featappl_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_featinttype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_featinteraction_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_pricecomptype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_pricecomp_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_costcomptype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_costcomp_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_supprating_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_supppref_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodsupplier_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_facilitytype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_facility_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_containertype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_container_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_lot_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invitemtype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invitemstat_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_inventoryitem_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodordertype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodorderstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodorder_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodorderitype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodorderistatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_prodorderitem_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invoicetype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invoicestatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invoice_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invoicerole_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invoiceitemtype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invoiceitem_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_invoiceterm_form').bootstrapValidator().on('success.form.bv', function (e)
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

});


