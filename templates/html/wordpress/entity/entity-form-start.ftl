<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
	global $sb_post_type;
?>

<script type="text/javascript">
    
    $(document).ready(function(){
        $('.money').mask('000,000,000,000,000.00', {reverse: true});
    });

</script>

<form role="form" name="<?php echo $sb_post_type;?>_form" 
      id="<?php echo $sb_post_type;?>_form" action="" 
      method="POST" enctype="multipart/form-data" 
      data-bv-framework="bootstrap"
      data-bv-excluded = ":disabled"
      data-bv-message="This value is not valid"
      data-bv-feedbackicons-valid="glyphicon glyphicon-ok"
      data-bv-feedbackicons-invalid="glyphicon glyphicon-remove"
      data-bv-feedbackicons-validating="glyphicon glyphicon-refresh">

