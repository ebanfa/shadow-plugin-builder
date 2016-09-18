<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class CostComponentType extends Model {

    public $primaryKey = 'id';
    public $table = 'costcomponenttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function cost_type()
    {
        return $this->hasMany('CostComponent');
    }

}

?>