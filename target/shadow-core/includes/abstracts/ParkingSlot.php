<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ParkingSlot extends Model {

    public $primaryKey = 'id';
    public $table = 'parkingslot';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function parking()
    {
    }
    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('ParkingSlotType');
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