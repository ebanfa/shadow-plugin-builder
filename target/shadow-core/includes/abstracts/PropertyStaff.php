<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PropertyStaff extends Model {

    public $primaryKey = 'id';
    public $table = 'propertystaff';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ps_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function ps_staff()
    {
        return $this->belongsTo('PartyRole');
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