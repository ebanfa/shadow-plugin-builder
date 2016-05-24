<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseAgreement extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseagreement';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pa_seller()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function pa_buyer()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function pa_listagent()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function pa_sellagent()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function pa_agreement()
    {
        return $this->belongsTo('Agreement');
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
    public function sd_agreement()
    {
        return $this->hasMany('SettlementData');
    }
    /**
     * 
     */
    public function pai_agreement()
    {
        return $this->hasMany('PurchaseAgreementInspection');
    }

}

?>