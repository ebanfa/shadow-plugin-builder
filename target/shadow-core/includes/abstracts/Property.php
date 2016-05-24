<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Property extends Model {

    public $primaryKey = 'id';
    public $table = 'property';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function p_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function p_type()
    {
        return $this->belongsTo('PropertyType');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('PropertyStatus');
    }
    /**
     * 
     */
    public function p_location()
    {
        return $this->belongsTo('Location');
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
    public function b_property()
    {
        return $this->hasMany('Building');
    }
    /**
     * 
     */
    public function pc_property()
    {
        return $this->hasMany('PropertyCharge');
    }
    /**
     * 
     */
    public function li_soiltype()
    {
        return $this->hasMany('Land');
    }
    /**
     * 
     */
    public function ps_property()
    {
        return $this->hasMany('PropertyStaff');
    }
    /**
     * 
     */
    public function a_property()
    {
        return $this->hasMany('Assessment');
    }
    /**
     * 
     */
    public function f_property()
    {
        return $this->hasMany('Facility');
    }
    /**
     * 
     */
    public function i_property()
    {
        return $this->hasMany('Improvement');
    }
    /**
     * 
     */
    public function li_property()
    {
        return $this->hasMany('Land');
    }
    /**
     * 
     */
    public function pf_property()
    {
        return $this->hasMany('PropertyFiles');
    }
    /**
     * 
     */
    public function utc_property()
    {
        return $this->hasMany('UnitTypeCharge');
    }
    /**
     * 
     */
    public function u_property()
    {
        return $this->hasMany('Unit');
    }
    /**
     * 
     */
    public function we_property()
    {
        return $this->hasMany('WorkEffort');
    }
    /**
     * 
     */
    public function pu_property()
    {
        return $this->hasMany('PropertyUtility');
    }
    /**
     * 
     */
    public function m_property()
    {
        return $this->hasMany('ZoningData');
    }

}

?>