<?php
    /*
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    }

?>

<?php 
    do_action('shadowbanker_before_main_content');
    
    do_action('shadowbanker_before_list_entity');
?>
        <div class="table-responsive">
            <table id="sb_collateral-table" class="table table-striped table-bordered table-hover" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>

            <th>Type</th>

                        

            <th>Status</th>

                        
            <th>Name</th>


                        
            <th>Market Value</th>


                        
            <th>Cost</th>


                        
            <th>Date Acquired</th>


                        
            <th>Description</th>


                        
                    </tr>
                </thead>
               <!--  <tfoot>
                    <tr>
                        <th>Invoice</th>
                        <th>Topic</th>
                        <th>Pages</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </tfoot> -->
                <tbody>
                </tbody>
            </table>
            
        </div>

    
<?php 
    do_action('shadowbanker_after_list_entity'); 
    
    do_action('shadowbanker_after_main_content');
?>