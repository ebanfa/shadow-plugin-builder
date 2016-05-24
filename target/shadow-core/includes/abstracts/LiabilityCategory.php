<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class LiabilityCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'liabilitycategory';
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
        return $this->hasMany('LiabilityType');
    }

}

?>