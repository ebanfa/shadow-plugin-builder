<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}


class ViewContentOrderPageModel extends ViewEntityPageModel { 

    private $content_files;
    private $is_fully_paid;
    private $is_pending_payment;
    private $outstanding_amount;

	/**
     * Process the load the model for this artifact
     */
    public function process_model() {
        parent::process_model();
        $this->outstanding_amount = $this->model['total'];
        $id = EntityStringUtils::decode_id($this->model['id']);
	    // Get the payment status object
	    $this->is_pending_payment = true;
	    $pay_status_data = EntityAPI::get_by_id('paymentstatus', $this->model['payment_status']);
	    if(isset($pay_status_data['id'])) {
	        if($pay_status_data['entity_code'] != ContentOrderAPI::$pay_status_not_paid) $this->is_pending_payment = false;
	    }
	    if($this->is_pending_payment) $outstanding_amount = (doubleval(50) / doubleval(100)) * doubleval($this->model['total']); 
	    //
	    $this->is_fully_paid = false;
	    $order_status_data = EntityAPI::get_by_id('contentorderstatus', $this->model['order_status']);
	    if(isset($order_status_data['id'])) {
	        if($order_status_data['entity_code'] == ContentOrderAPI::$order_status_completed) $is_fully_paid = true;
	    }
	    $this->content_files = EntityAPI::find_by_criteria('contentorderfile', array('file_content_order' => $id));
    }

   
    /**
     * 
     */
    public function get_content_files(){
        return $this->content_files;
    }

    /**
     * 
     */
    public function is_fully_paid(){
        return $this->is_fully_paid;
    }
    
    /**
     * 
     */
    public function is_pending_payment(){
        return $this->is_pending_payment;
    }
    
    /**
     * 
     */
    public function get_outstanding_amount(){
        return $this->outstanding_amount;
    }

}
?>