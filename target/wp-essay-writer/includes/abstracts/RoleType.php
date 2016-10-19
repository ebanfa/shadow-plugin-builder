<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class RoleType extends Model {

    public $primaryKey = 'id';
    public $table = 'roletype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function party_role_type()
    {
        return $this->hasMany('PartyRole');
    }

}

?>