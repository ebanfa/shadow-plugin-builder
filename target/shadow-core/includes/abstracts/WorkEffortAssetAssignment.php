<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortAssetAssignment extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortassetassignment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function weaa_asset()
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
        return $this->belongsTo('WorkEffortAssetAssignmentStatus');
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