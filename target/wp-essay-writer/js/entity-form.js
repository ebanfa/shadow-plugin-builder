
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

    $('#sb_country_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partyimage_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partyfile_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_socmediaccttype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_socmediaacct_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contactreq_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_qualtype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partyqual_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_academiclevel_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_documenttype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_noofpages_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_urgency_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_subjectarea_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_subject_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partysubarea_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_writingstyle_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_partyreview_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_classtype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_classification_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contentcat_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contenttype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_content_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contentfile_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contentclass_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_cordertype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_corderstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_paymentstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_contentorder_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_corderfile_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_accttxntype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_accttxnstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_accttransaction_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_disputtype_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_disputestatus_form').bootstrapValidator().on('success.form.bv', function (e)
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

    $('#sb_dispute_form').bootstrapValidator().on('success.form.bv', function (e)
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


