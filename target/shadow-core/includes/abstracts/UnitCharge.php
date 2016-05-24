<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UnitCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'unitcharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function uc_unit()
    {
        return $this->belongsTo('Unit');
    }
    /**
     * 
     */
    public function uc_charge()
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