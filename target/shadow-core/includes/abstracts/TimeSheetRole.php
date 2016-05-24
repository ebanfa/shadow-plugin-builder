<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TimeSheetRole extends Model {

    public $primaryKey = 'id';
    public $table = 'timesheetrole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function tsr_type()
    {
        return $this->belongsTo('TimeSheetRoleType');
    }
    /**
     * 
     */
    public function timesheet()
    {
        return $this->belongsTo('TimeSheet');
    }
    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
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