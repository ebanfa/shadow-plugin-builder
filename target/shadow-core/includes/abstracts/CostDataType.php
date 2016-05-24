<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class CostDataType extends Model {

    public $primaryKey = 'id';
    public $table = 'costdatatype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function cd_type()
    {
        return $this->hasMany('CostData');
    }

}

?>