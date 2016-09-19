<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BillingAccount extends Model {

    public $primaryKey = 'id';
    public $table = 'billingaccount';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
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
    public function bill_acct()
    {
        return $this->hasMany('Invoice');
    }
    /**
     * 
     */
    public function payment_account()
    {
        return $this->hasMany('Payment');
    }
    /**
     * 
     */
    public function account()
    {
        return $this->hasMany('AccountTransaction');
    }

}

?>