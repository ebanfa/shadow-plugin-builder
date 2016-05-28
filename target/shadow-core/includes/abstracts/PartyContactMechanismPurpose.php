<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyContactMechanismPurpose extends Model {

    public $primaryKey = 'id';
    public $table = 'partycontactmechanismpurpose';
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
        return $this->belongsTo('PartyContactMechanismPurposeType');
    }
    /**
     * 
     */
    public function pcontact_mech()
    {
        return $this->belongsTo('PartyContactMechanism');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>