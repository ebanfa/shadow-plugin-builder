<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class RequirementRole extends Model {

    public $primaryKey = 'id';
    public $table = 'requirementrole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function requirement()
    {
        return $this->belongsTo('Requirement');
    }
    /**
     * 
     */
    public function party_role()
    {
        return $this->belongsTo('PartyRole');
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