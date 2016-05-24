<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Floor extends Model {

    public $primaryKey = 'id';
    public $table = 'floor';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function flr_type()
    {
        return $this->belongsTo('FloorType');
    }
    /**
     * 
     */
    public function flr_allocation()
    {
        return $this->belongsTo('AllocationUnit');
    }
    /**
     * 
     */
    public function flr_building()
    {
        return $this->belongsTo('Building');
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
    public function fc_floor()
    {
        return $this->hasMany('FloorCharge');
    }
    /**
     * 
     */
    public function u_floor()
    {
        return $this->hasMany('Unit');
    }

}

?>