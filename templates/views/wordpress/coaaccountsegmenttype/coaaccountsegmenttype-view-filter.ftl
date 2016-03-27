<?php

/*
 *
 */
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class COAAccountSegmentTypeViewFilter extends ViewFilter {

    /**
     *
     */
    public static function init_hooks() { 
        add_filter('shadowbanker_coaaccountsegmenttype_form_fields', array('COAAccountSegmentTypeViewFilter', 'filter_form_fields'), 10, 2);
        add_action('shadowbanker_after_main_content', 'COAAccountSegmentTypeViewFilter::do_shadowbanker_after_main_content', 20);
    }

    /**
     *
     */
    public static function filter_form_fields($view, $form_fields) {
        $page_action = $view->get_page_action();
        $form_fields = parent::filter_form_fields($view, $form_fields);
        if($page_action == 'create' || $page_action == 'edit') {
            foreach ($form_fields as $key => $field) {
                if($field['name'] == 'val_provider'){
                    $field['has_options'] = true;
                    $field['options'] = array();
                    array_push($field['options'], array('name' => 'Business Unit', 'value' => 'businessunit'));
                    array_push($field['options'], array('name' => 'GL Account Type', 'value' => 'glaccounttype'));
                    array_push($field['options'], array('name' => 'GL Account', 'value' => 'glaccount'));
                    $form_fields[$key] = $field;
                }
            }
        }
        return $form_fields;
    }
    /**
     *
     */
    public static function do_shadowbanker_after_main_content() {
        $view = $_REQUEST['page_info']['view'];
        if($view->get_artifact_name() == 'coaaccountsegmenttype') { ?>

        <script type="text/javascript">
        
            jQuery(document).ready(function($)
            {
                $('body').on('click', '#has_val_src', function(e){
                    if($("#has_val_src").is(':checked')) {
                        console.log('checked!!');
                        $('#has_val_src').attr('checked', true);
                        $('#tab1-link').css('display', 'none');
                    }
                    else {
                        console.log('unchecked!!');
                        $('#has_val_src').attr('checked', false);
                        $('#tab1-link').css('display', 'inline-block');
                    }
                                        
                   // $('#has_val_src').prop('checked', true);
                });

                $("#val_provider").change(function() {
                    $('#tab1-link').css('display', 'none');
                });
            });
        </script>

<?php   }
    }

}

?>