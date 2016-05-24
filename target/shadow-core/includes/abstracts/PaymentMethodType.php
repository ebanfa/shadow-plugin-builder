<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PaymentMethodType extends Model {

    public $primaryKey = 'id';
    public $table = 'paymentmethodtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function paymeth_type()
    {
        return $this->hasMany('PayrollPreference');
    }
    /**
     * 
     */
    public function r_methtype()
    {
        return $this->hasMany('Receipt');
    }
    /**
     * 
     */
    public function p_methtype()
    {
        return $this->hasMany('Disbursement');
    }

}

?>