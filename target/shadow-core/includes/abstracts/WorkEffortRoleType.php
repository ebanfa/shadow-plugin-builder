<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortRoleType extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortroletype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function wepa_roletype()
    {
        return $this->hasMany('WorkEffortPartyAssignment');
    }

}

?>