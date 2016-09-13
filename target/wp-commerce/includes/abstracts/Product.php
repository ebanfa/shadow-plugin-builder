<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Product extends Model {

    public $primaryKey = 'id';
    public $table = 'product';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function prod_type()
    {
        return $this->belongsTo('ProductType');
    }

    /**
     * 
     */
    public function product()
    {
        return $this->hasMany('ProductImage');
    }
    /**
     * 
     */
    public function component_prod()
    {
        return $this->hasMany('PriceComponent');
    }
    /**
     * 
     */
    public function interaction_prod()
    {
        return $this->hasMany('ProductFeatureInteraction');
    }
    /**
     * 
     */
    public function item_product()
    {
        return $this->hasMany('InventoryItem');
    }
    /**
     * 
     */
    public function prod_supplier()
    {
        return $this->hasMany('ProductSupplier');
    }
    /**
     * 
     */
    public function applicability_prod()
    {
        return $this->hasMany('ProductFeatureApplicability');
    }
    /**
     * 
     */
    public function cost_prod()
    {
        return $this->hasMany('CostComponent');
    }

}

?>