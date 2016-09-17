<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FeatureApplicabilityType extends Model {

    public $primaryKey = 'id';
    public $table = 'featureapplicabilitytype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function applicability_type()
    {
        return $this->hasMany('ProductFeatureApplicability');
    }

}

?>