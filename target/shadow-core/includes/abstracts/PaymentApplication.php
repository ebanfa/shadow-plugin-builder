<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PaymentApplication extends Model {

    public $primaryKey = 'id';
    public $table = 'paymentapplication';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pa_payment()
    {
        return $this->belongsTo('Payment');
    }
    /**
     * 
     */
    public function pa_account()
    {
        return $this->belongsTo('BillingAccount');
    }
    /**
     * 
     */
    public function pa_invoice()
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


}

?>