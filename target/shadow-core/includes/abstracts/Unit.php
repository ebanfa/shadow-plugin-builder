<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Unit extends Model {

    public $primaryKey = 'id';
    public $table = 'unit';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function u_type()
    {
        return $this->belongsTo('UnitType');
    }
    /**
     * 
     */
    public function u_floor()
    {
        return $this->belongsTo('Floor');
    }
    /**
     * 
     */
    public function u_building()
    {
        return $this->belongsTo('Building');
    }
    /**
     * 
     */
    public function u_property()
    {
        return $this->belongsTo('Property');
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
    public function au_unit()
    {
        return $this->hasMany('AgreementUnit');
    }
    /**
     * 
     */
    public function uc_unit()
    {
        return $this->hasMany('UnitCharge');
    }

}

?>