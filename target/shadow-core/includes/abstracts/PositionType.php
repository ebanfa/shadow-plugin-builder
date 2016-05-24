<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PositionType extends Model {

    public $primaryKey = 'id';
    public $table = 'positiontype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ptype_class()
    {
        return $this->belongsTo('PositionTypeClass');
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
    public function position_type()
    {
        return $this->hasMany('Position');
    }

}

?>