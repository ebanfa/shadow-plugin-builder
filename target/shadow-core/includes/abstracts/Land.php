<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Land extends Model {

    public $primaryKey = 'id';
    public $table = 'land';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function li_type()
    {
        return $this->belongsTo('LandType');
    }
    /**
     * 
     */
    public function li_soiltype()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function li_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function li_accessibility()
    {
        return $this->belongsTo('LandAccessibility');
    }
    /**
     * 
     */
    public function li_topography()
    {
        return $this->belongsTo('LandTopography');
    }
    /**
     * 
     */
    public function li_owner()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function land_shape()
    {
        return $this->belongsTo('LandShape');
    }
    /**
     * 
     */
    public function uom()
    {
        return $this->belongsTo('UnitOfMeasure');
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
    public function p_land()
    {
        return $this->hasMany('Plot');
    }
    /**
     * 
     */
    public function a_land()
    {
        return $this->hasMany('Assessment');
    }

}

?>