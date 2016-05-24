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
        return $this->belongsTo('PaymentMethodType');
    }
    /**
     * 
     */
    public function p_fpartyrole()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function p_tpartyrole()
    {
        return $this->belongsTo('PartyRole');
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
        return $this->hasMany('PerformanceReview');
    }
    /**
     * 
     */
    public function pa_payment()
    {
        return $this->hasMany('PaymentApplication');
    }
    /**
     * 
     */
    public function r_payment()
    {
        return $this->hasMany('Receipt');
    }
    /**
     * 
     */
    public function d_payment()
    {
        return $this->hasMany('Disbursement');
    }

}

?>