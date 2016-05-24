<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortPartyAssignment extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortpartyassignment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function wepa_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function wepa_roletype()
    {
        return $this->belongsTo('WorkEffortRoleType');
    }
    /**
     * 
     */
    public function wepa_bu()
    {
        return $this->belongsTo('BusinessUnit');
    }
    /**
     * 
     */
    public function wepa_we()
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

    /**
     * 
     */
    public function weassignment()
    {
        return $this->hasMany('WorkEffortAssignmentRate');
    }

}

?>