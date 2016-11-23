<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Country extends Model {

    public $primaryKey = 'id';
    public $table = 'country';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>