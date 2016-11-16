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
    public function b_account_party()
    {
        return $this->belongsTo('Party');
    }

    /**
     * 
     */
    public function billing_account()
    {
        return $this->hasMany('AccountTransaction');
    }

}

?>