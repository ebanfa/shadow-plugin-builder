<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Position extends Model {

    public $primaryKey = 'id';
    public $table = 'position';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function position_type()
    {
        return $this->belongsTo('PositionType');
    }
    /**
     * 
     */
    public function hiring_org()
    {
        return $this->belongsTo('PartyGroup');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('PositionStatus');
    }
    /**
     * 
     */
    public function budget_item()
    {
        return $this->belongsTo('BudgetItem');
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
    public function reporter()
    {
        return $this->hasMany('PositionReportingStructure');
    }
    /**
     * 
     */
    public function position()
    {
        return $this->hasMany('PerformanceReview');
    }
    /**
     * 
     */
    public function report_to()
    {
        return $this->hasMany('PositionReportingStructure');
    }

}

?>