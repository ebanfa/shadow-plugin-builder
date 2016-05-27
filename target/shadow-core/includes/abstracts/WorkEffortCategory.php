<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortcategory';
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
        return $this->hasMany('WorkEffortPurposeType');
    }

}

?>