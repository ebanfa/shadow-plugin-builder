<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContactMechanismType extends Model {

    public $primaryKey = 'id';
    public $table = 'contactmechanismtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function cm_type()
    {
        return $this->hasMany('ContactMechanism');
    }

}

?>