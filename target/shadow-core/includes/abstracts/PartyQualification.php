<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyQualification extends Model {

    public $primaryKey = 'id';
    public $table = 'partyqualification';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function held_by()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function qualification_type()
    {
        return $this->belongsTo('QualificationType');
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