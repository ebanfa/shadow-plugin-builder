<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class LandShape extends Model {

    public $primaryKey = 'id';
    public $table = 'landshape';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function sdi_shape()
    {
        return $this->hasMany('SalesDataItem');
    }
    /**
     * 
     */
    public function land_shape()
    {
        return $this->hasMany('Land');
    }

}

?>