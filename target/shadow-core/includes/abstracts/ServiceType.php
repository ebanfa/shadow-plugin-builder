<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ServiceType extends Model {

    public $primaryKey = 'id';
    public $table = 'servicetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function s_type()
    {
        return $this->hasMany('Service');
    }

}

?>