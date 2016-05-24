<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Building extends Model {

    public $primaryKey = 'id';
    public $table = 'building';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function b_buildingtype()
    {
        return $this->belongsTo('BuildingType');
    }
    /**
     * 
     */
    public function b_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function b_unitalloc()
    {
        return $this->belongsTo('AllocationUnit');
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
    public function bc_building()
    {
        return $this->hasMany('BuildingCharge');
    }
    /**
     * 
     */
    public function flr_building()
    {
        return $this->hasMany('Floor');
    }
    /**
     * 
     */
    public function u_building()
    {
        return $this->hasMany('Unit');
    }
    /**
     * 
     */
    public function a_building()
    {
        return $this->hasMany('Assessment');
    }
    /**
     * 
     */
    public function building()
    {
        return $this->hasMany('BuildingFiles');
    }

}

?>