<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Facility extends Model {

    public $primaryKey = 'id';
    public $table = 'facility';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function facility_type()
    {
        return $this->belongsTo('FacilityType');
    }

    /**
     * 
     */
    public function container_facility()
    {
        return $this->hasMany('Container');
    }

}

?>