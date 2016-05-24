<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function status()
    {
        return $this->hasMany('WorkEffort');
    }

}

?>