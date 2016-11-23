<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class DisputeType extends Model {

    public $primaryKey = 'id';
    public $table = 'disputetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>