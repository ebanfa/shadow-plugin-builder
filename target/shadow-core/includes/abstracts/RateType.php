<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class RateType extends Model {

    public $primaryKey = 'id';
    public $table = 'ratetype';
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
    public function rate_type()
    {
        return $this->hasMany('WorkEffortAssignmentRate');
    }

}

?>