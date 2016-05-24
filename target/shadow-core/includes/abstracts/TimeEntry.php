<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TimeEntry extends Model {

    public $primaryKey = 'id';
    public $table = 'timeentry';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

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
    public function workeffort()
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