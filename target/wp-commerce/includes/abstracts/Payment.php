<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Payment extends Model {

    public $primaryKey = 'id';
    public $table = 'payment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function p_type()
    {
        return $this->belongsTo('PaymentType');
    }
    /**
     * 
     */
    public function p_methtype()
    {
        return $this->belongsTo('PaymentMethod');
    }
    /**
     * 
     */
    public function payment_from()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function payment_to()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function payment_account()
    {
        return $this->belongsTo('BillingAccount');
    }
    /**
     * 
     */
    public function payment_invoice()
    {
        return $this->belongsTo('Invoice');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function payment()
    {
        return $this->hasMany('Transaction');
    }

}

?>