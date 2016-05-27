<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UnitOfMeasure extends Model {

    public $primaryKey = 'id';
    public $table = 'unitofmeasure';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function uom()
    {
        return $this->hasMany('Land');
    }
    /**
     * 
     */
    public function a_uom()
    {
        return $this->hasMany('Asset');
    }

}

?>