<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ZoneType extends Model {

    public $primaryKey = 'id';
    public $table = 'zonetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function z_type()
    {
        return $this->hasMany('ZoningData');
    }

}

?>