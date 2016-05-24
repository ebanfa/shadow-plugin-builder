<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyBenefit extends Model {

    public $primaryKey = 'id';
    public $table = 'partybenefit';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function period_type()
    {
        return $this->belongsTo('PeriodType');
    }
    /**
     * 
     */
    public function benefit_type()
    {
        return $this->belongsTo('BenefitType');
    }
    /**
     * 
     */
    public function employment()
    {
        return $this->belongsTo('RelationshipType');
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