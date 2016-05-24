<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PropertyStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'propertystatus';
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
        return $this->hasMany('Property');
    }

}

?>