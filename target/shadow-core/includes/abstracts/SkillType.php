<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SkillType extends Model {

    public $primaryKey = 'id';
    public $table = 'skilltype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

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
    public function skill_type()
    {
        return $this->hasMany('PartySkill');
    }

}

?>