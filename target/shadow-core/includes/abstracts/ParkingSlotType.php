<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ParkingSlotType extends Model {

    public $primaryKey = 'id';
    public $table = 'parkingslottype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

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
    public function pstc_type()
    {
        return $this->hasMany('ParkingSlotTypeCharge');
    }
    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('ParkingSlot');
    }

}

?>