<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BuildingCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'buildingcharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function bc_building()
    {
        return $this->belongsTo('Building');
    }
    /**
     * 
     */
    public function bc_charge()
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