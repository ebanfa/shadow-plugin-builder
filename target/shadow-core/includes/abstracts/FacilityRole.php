<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FacilityRole extends Model {

    public $primaryKey = 'id';
    public $table = 'facilityrole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function fr_facility()
    {
        return $this->belongsTo('Facility');
    }
    /**
     * 
     */
    public function fr_partyrole()
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