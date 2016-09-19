<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductFeatureCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'productfeaturecategory';
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
        return $this->hasMany('ProductFeatureType');
    }

}

?>