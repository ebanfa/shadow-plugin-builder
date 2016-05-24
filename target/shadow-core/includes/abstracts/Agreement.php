<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Agreement extends Model {

    public $primaryKey = 'id';
    public $table = 'agreement';
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
        return $this->belongsTo('AgreementType');
    }
    /**
     * 
     */
    public function a_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function a_counter_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function a_property()
    {
        return $this->belongsTo('Property');
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
    public function au_agreement()
    {
        return $this->hasMany('AgreementUnit');
    }
    /**
     * 
     */
    public function agreement()
    {
        return $this->hasMany('Dispute');
    }
    /**
     * 
     */
    public function ai_agreement()
    {
        return $this->hasMany('AgreementItem');
    }
    /**
     * 
     */
    public function at_agreement()
    {
        return $this->hasMany('AgreementTerm');
    }
    /**
     * 
     */
    public function pa_agreement()
    {
        return $this->hasMany('PurchaseAgreement');
    }
    /**
     * 
     */
    public function ac_agreement()
    {
        return $this->hasMany('AgreementCharge');
    }
    /**
     * 
     */
    public function cia_agreement()
    {
        return $this->hasMany('ChargeInAgreement');
    }

}

?>