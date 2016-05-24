<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FloorType extends Model {

    public $primaryKey = 'id';
    public $table = 'floortype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function flr_type()
    {
        return $this->hasMany('Floor');
    }

}

?>