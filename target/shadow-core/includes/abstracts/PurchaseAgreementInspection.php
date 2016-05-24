<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseAgreementInspection extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseagreementinspection';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pai_agreement()
    {
        return $this->belongsTo('PurchaseAgreement');
    }
    /**
     * 
     */
    public function pai_inspection()
    {
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