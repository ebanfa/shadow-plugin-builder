<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContactMechanism extends Model {

    public $primaryKey = 'id';
    public $table = 'contactmechanism';
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
        return $this->belongsTo('ContactMechanismType');
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
    public function contact_mech()
    {
        return $this->hasMany('PartyContactMechanism');
    }

}

?>