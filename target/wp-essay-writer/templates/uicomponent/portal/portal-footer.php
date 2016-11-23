<?php
    /*
     *
     */
    if (!defined('ABSPATH')) {
        exit; // Exit if accessed directly
    } 
    $view = $_REQUEST['page_info']['view'];
?>
</section>
<footer id="footer">
    Copyright &copy; 2015 Cloderia

    <ul class="f-menu">
        <li><a href="www.cloderia.com">Home</a></li>
        <li><a href="mailto:info@cloderia.com">Support</a></li>
        <li><a href="mailto:info@cloderia.com">Contact Us</a></li>
    </ul>
</footer>

<form id="artifact-form" style="display:none" action=""  method="POST">
    <?php wp_nonce_field('post_nonce', 'post_nonce_field'); ?>
    <input type="hidden" name="submitted" id="submitted" value="true" />
    <input type="hidden" name="tab_id" id="tab_id" value="" />
</form>
<script type="text/javascript">
	jQuery(document).ready(function ($)
    {   
        if(sessionStorage.tabID === ''|| sessionStorage.tabID === null) sessionStorage.tabID = Math.random();
		$('body').on('click', '.data-table-link', function(e){
			e.preventDefault();
			$('#artifact-form').attr('action', $(this).data('link'));
            $('#tab_id').val(sessionStorage.tabID);
			$('#artifact-form').submit();
		});
	});
</script>

<?php wp_footer(); ?>
</body>
</html>