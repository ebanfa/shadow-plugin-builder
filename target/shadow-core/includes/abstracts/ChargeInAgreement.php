<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ChargeInAgreement extends Model {

    public $primaryKey = 'id';
    public $table = 'chargeinagreement';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function cia_agreement()
    {
        return $this->belongsTo('Agreement');
    }
    /**
     * 
     */
    public function cia_charge()
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