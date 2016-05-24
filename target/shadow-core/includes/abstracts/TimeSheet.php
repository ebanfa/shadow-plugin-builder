<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TimeSheet extends Model {

    public $primaryKey = 'id';
    public $table = 'timesheet';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function submitter()
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

    /**
     * 
     */
    public function timesheet()
    {
        return $this->hasMany('TimeEntry');
    }

}

?>