<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductFeatureType extends Model {

    public $primaryKey = 'id';
    public $table = 'productfeaturetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function feature_category()
    {
        return $this->belongsTo('ProductFeatureCategory');
    }

    /**
     * 
     */
    public function feature_type()
    {
        return $this->hasMany('ProductFeature');
    }

}

?>