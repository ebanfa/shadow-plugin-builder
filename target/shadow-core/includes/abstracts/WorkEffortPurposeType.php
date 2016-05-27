<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortPurposeType extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortpurposetype';
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
    public function wep_type()
    {
        return $this->hasMany('WorkEffort');
    }

}

?>