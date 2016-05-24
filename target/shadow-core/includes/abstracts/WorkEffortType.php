<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortType extends Model {

    public $primaryKey = 'id';
    public $table = 'workefforttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function category()
    {
        return $this->belongsTo('WorkEffortCategory');
    }
    /**
     * 
     */
    public function business_category()
    {
        return $this->belongsTo('BusinessCategory');
    }

    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('WorkEffort');
    }

}

?>