<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UtilityType extends Model {

    public $primaryKey = 'id';
    public $table = 'utilitytype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function u_type()
    {
        return $this->hasMany('Utility');
    }

}

?>