<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Disbursement extends Model {

    public $primaryKey = 'id';
    public $table = 'disbursement';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('DisbursementType');
    }
    /**
     * 
     */
    public function p_methtype()
    {
        return $this->belongsTo('PaymentMethodType');
    }
    /**
     * 
     */
    public function d_fpartyrole()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function d_tpartyrole()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function d_payment()
    {
        return $this->belongsTo('Payment');
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