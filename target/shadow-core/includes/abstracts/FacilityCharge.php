<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FacilityCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'facilitycharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function fc_facility()
    {
        return $this->belongsTo('Facility');
    }
    /**
     * 
     */
    public function fc_charge()
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