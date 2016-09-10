<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FacilityType extends Model {

    public $primaryKey = 'id';
    public $table = 'facilitytype';
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
        return $this->hasMany('Facility');
    }

}

?>