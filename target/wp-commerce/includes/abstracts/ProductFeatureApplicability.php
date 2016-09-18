<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductFeatureApplicability extends Model {

    public $primaryKey = 'id';
    public $table = 'productfeatureapplicability';
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
        return $this->belongsTo('FeatureApplicabilityType');
    }
    /**
     * 
     */
    public function applicability_prod()
    {
        return $this->belongsTo('Product');
    }
    /**
     * 
     */
    public function applicability_feat()
    {
        return $this->belongsTo('ProductFeature');
    }


}

?>