<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TimeSheetRoleType extends Model {

    public $primaryKey = 'id';
    public $table = 'timesheetroletype';
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
    public function tsr_type()
    {
        return $this->hasMany('TimeSheetRole');
    }

}

?>