<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffort extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffort';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('WorkEffortType');
    }
    /**
     * 
     */
    public function wep_type()
    {
        return $this->belongsTo('WorkEffortPurposeType');
    }
    /**
     * 
     */
    public function we_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('WorkEffortStatus');
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
    public function wea_fworkeffort()
    {
        return $this->hasMany('WorkEffortAssociation');
    }
    /**
     * 
     */
    public function wepa_we()
    {
        return $this->hasMany('WorkEffortPartyAssignment');
    }
    /**
     * 
     */
    public function workeffort()
    {
        return $this->hasMany('WorkEffortDeliverable');
    }
    /**
     * 
     */
    public function wea_tworkeffort()
    {
        return $this->hasMany('WorkEffortAssociation');
    }
    /**
     * 
     */
    public function we_redone_via()
    {
        return $this->hasMany('WorkEffort');
    }
    /**
     * 
     */
    public function wrf_workeffort()
    {
        return $this->hasMany('WorkRequirementFulfillment');
    }

}

?>