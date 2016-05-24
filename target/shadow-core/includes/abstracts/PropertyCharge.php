<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PropertyCharge extends Model {

    public $primaryKey = 'id';
    public $table = 'propertycharge';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pc_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function pc_charge()
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