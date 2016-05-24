<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class RentStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'rentstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>