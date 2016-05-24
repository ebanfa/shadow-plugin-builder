<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortFixedAssetAssignment extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortfixedassetassignment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function fixed_asset()
    {
        return $this->belongsTo('Asset');
    }
    /**
     * 
     */
    public function workeffort()
    {
        return $this->belongsTo('WorkEffort');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('WorkEffortFixedAssignmentStatus');
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