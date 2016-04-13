
jQuery(document).ready(function ($)
{   
    $('#sb_loanapp_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_partyaddress_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_partyfiles_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_chargecat_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_chargetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_chargefreq_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_charge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_expensecat_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_expensetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_expensefreq_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_expense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_inventype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_fassettype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_dmethod_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_utilitytype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_utility_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_proptype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_propstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_property_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_zonetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_zoningdata_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_mortgagetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_mortgage_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_laccessibility_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_ltopography_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_landtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_soiltype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_lshape_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_land_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_plottype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_plot_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_improvetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_improvement_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_proputility_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pcharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_fixedasset_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_inventory_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_piitem_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_propstaff_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_propfiles_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_buildingtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_building_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_bcharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_bexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_buildfiles_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_allocunit_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_floortype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_floor_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_fcharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_fexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_unittype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_utypecharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_utypeexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_unit_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_unitcharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_unitexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_facilitycat_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_facharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_feexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pslottype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pstypecharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pstypeexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pslot_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreetypecharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_termtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_term_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreement_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_purchaseagrmnt_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_settlementdata_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_settledataloan_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agrmntinspection_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agrmntitemtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreementitem_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_rentagreement_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_seragreement_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_managreement_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_servicetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_service_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreeservice_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreeunit_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreecharge_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_agreeterm_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_chargeinagrmt_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_rentstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_rent_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_assmttype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_assessment_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_landassmnt_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_sdtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_salesdata_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_sditemtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_salesdataitem_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_cdtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_costdata_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_cditemtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_cditemdata_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_idtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_incomedata_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_idetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_idexpense_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_paymenttype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_paymethtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_payment_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_receipt_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_outpayment_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_payroll_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_payapp_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_periodtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_acctperiod_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_coaacctstruct_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_coaacctsegtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_coaasegval_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_coaacctseg_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_coastatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_coa_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_coaaseginst_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_glaccttype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_glaccount_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_buglaccount_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_buglaccountbal_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_feventtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_fevent_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_feventtxntype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_txntypeacct_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_txntype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_transaction_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_txndetail_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budgettype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budgetstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budget_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_bitemtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budgetitem_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budgetrole_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_stperiod_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_brrtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budgetreview_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_brevision_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budgetrevimpact_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_budgetscenario_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_bscenariorule_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_bscenarioapp_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pballocation_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_glbudgetxref_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_disputetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_disputeitem_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pclasstype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_ptypeclass_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_positiontype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_resptype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_validresp_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_position_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_posresp_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pfulfillment_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_preportstruct_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_ratetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_paygrade_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_salarystep_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_ptyperate_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_payhistory_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_benefittype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_partybenefit_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_deductiontype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_deduction_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_prpreference_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_empappstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_empappsrctype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_empapplication_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_skilltype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_tctype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_ptraining_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_resume_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_partyskill_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_perfnoteype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_perfnote_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_perfreview_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_ratingtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_previtemtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_perfreviewitem_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_terminationtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_termreason_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_ucstatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_uempclaim_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_delivertype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_deliverable_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_requiretype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_requirement_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_requirerole_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wetype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_weptype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_westatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_workeffort_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_inspection_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_maintenance_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wrfulfillment_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_weatype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_weassociation_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wertype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wepatyassign_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_timesheet_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_tsrtype_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_tsrole_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_timeentry_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_partyrate_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wearate_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_weiassign_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wefaastatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wefaassign_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wepastatus_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_pfaassign_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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

    $('#sb_wedeliverable_form').bootstrapValidator().on('success.form.bv', function (e)
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
            url: shadowcore_ajax_script.ajaxurl,
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
                        $('#success').html(responseData.data.message);
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


