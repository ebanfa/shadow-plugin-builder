<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Facility extends Model {

    public $primaryKey = 'id';
    public $table = 'facility';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function f_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function f_type()
    {
        return $this->belongsTo('FacilityType');
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
    public function fc_facility()
    {
        return $this->hasMany('FacilityCharge');
    }

}

?>