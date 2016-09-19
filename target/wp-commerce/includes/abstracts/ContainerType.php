<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContainerType extends Model {

    public $primaryKey = 'id';
    public $table = 'containertype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function container_type()
    {
        return $this->hasMany('Container');
    }

}

?>