<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BusinessCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'businesscategory';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function business_category()
    {
        return $this->hasMany('WorkEffortType');
    }

}

?>