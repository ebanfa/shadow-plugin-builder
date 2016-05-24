<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UnitTypeCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'unittypecharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function utc_type()
    {
        return $this->belongsTo('UnitType');
    }
    /**
     * 
     */
    public function utc_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function utc_charge()
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