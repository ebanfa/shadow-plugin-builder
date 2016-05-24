<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AgreementTypeCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'agreementtypecharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function atc_type()
    {
        return $this->belongsTo('AgreementType');
    }
    /**
     * 
     */
    public function atc_charge()
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