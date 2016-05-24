<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkRequirementFulfillment extends Model {

    public $primaryKey = 'id';
    public $table = 'workrequirementfulfillment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function wrf_requirement()
    {
        return $this->belongsTo('Requirement');
    }
    /**
     * 
     */
    public function wrf_workeffort()
    {
        return $this->belongsTo('WorkEffort');
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