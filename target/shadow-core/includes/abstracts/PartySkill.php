<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartySkill extends Model {

    public $primaryKey = 'id';
    public $table = 'partyskill';
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
    public function skill_type()
    {
        return $this->belongsTo('SkillType');
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