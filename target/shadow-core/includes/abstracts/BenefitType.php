<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BenefitType extends Model {

    public $primaryKey = 'id';
    public $table = 'benefittype';
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
    public function benefit_type()
    {
        return $this->hasMany('PartyBenefit');
    }

}

?>