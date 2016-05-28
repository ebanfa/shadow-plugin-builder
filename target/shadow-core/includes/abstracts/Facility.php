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
    public function we_facility()
    {
        return $this->hasMany('WorkEffort');
    }
    /**
     * 
     */
    public function fr_facility()
    {
        return $this->hasMany('FacilityRole');
    }
    /**
     * 
     */
    public function f_facility()
    {
        return $this->hasMany('Facility');
    }
    /**
     * 
     */
    public function fc_facility()
    {
        return $this->hasMany('FacilityCharge');
    }
    /**
     * 
     */
    public function p_facility()
    {
        return $this->hasMany('Property');
    }

}

?>