<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SettlementData extends Model {

    public $primaryKey = 'id';
    public $table = 'settlementdata';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function sd_agreement()
    {
        return $this->belongsTo('PurchaseAgreement');
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
    public function li_settledata()
    {
        return $this->hasMany('SettlementDataLoan');
    }

}

?>