<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SoilType extends Model {

    public $primaryKey = 'id';
    public $table = 'soiltype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>