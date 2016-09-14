<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyContactMechanism extends Model {

    public $primaryKey = 'id';
    public $table = 'partycontactmechanism';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function contact_mech()
    {
        return $this->belongsTo('ContactMechanism');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function pcontact_mech()
    {
        return $this->hasMany('PartyContactMechanismPurpose');
    }

}

?>