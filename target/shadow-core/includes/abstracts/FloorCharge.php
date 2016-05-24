<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FloorCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'floorcharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function fc_floor()
    {
        return $this->belongsTo('Floor');
    }
    /**
     * 
     */
    public function fc_charge()
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