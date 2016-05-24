<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementcharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ac_agreement()
    {
        return $this->belongsTo('Agreement');
    }
    /**
     * 
     */
    public function ac_charge()
    {
        return $this->belongsTo('Charge');
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