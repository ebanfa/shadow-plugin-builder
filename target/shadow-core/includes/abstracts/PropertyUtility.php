<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PropertyUtility extends Model {

    public $primaryKey = 'id';
    public $table = 'propertyutility';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pu_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function pu_utility()
    {
        return $this->belongsTo('Utility');
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