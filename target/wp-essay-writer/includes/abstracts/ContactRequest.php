<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContactRequest extends Model {

    public $primaryKey = 'id';
    public $table = 'contactrequest';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>