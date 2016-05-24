<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UnitType extends Model {

    public $primaryKey = 'id';
    public $table = 'unittype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function utc_type()
    {
        return $this->hasMany('UnitTypeCharge');
    }
    /**
     * 
     */
    public function u_type()
    {
        return $this->hasMany('Unit');
    }

}

?>