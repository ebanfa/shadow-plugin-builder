<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ParkingSlotTypeCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'parkingslottypecharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pstc_type()
    {
        return $this->belongsTo('ParkingSlotType');
    }
    /**
     * 
     */
    public function pstc_charge()
    {
        return $this->belongsTo('Charge');
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