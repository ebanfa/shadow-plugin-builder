<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductFeature extends Model {

    public $primaryKey = 'id';
    public $table = 'productfeature';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function feature_type()
    {
        return $this->belongsTo('ProductFeatureType');
    }
    /**
     * 
     */
    public function feature_uom()
    {
        return $this->belongsTo('Uom');
    }

    /**
     * 
     */
    public function interaction_feat()
    {
        return $this->hasMany('ProductFeatureInteraction');
    }
    /**
     * 
     */
    public function applicability_feat()
    {
        return $this->hasMany('ProductFeatureApplicability');
    }

}

?>