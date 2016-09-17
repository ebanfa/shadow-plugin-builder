<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyContactMechanismPurposeType extends Model {

    public $primaryKey = 'id';
    public $table = 'partycontactmechanismpurposetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('PartyContactMechanismPurpose');
    }

}

?>