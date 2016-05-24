<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortAssignmentRate extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortassignmentrate';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function weassignment()
    {
        return $this->belongsTo('WorkEffortPartyAssignment');
    }
    /**
     * 
     */
    public function rate_type()
    {
        return $this->belongsTo('RateType');
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