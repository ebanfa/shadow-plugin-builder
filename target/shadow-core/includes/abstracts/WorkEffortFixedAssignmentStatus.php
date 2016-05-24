<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortFixedAssignmentStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortfixedassignmentstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function status()
    {
        return $this->hasMany('WorkEffortFixedAssetAssignment');
    }

}

?>