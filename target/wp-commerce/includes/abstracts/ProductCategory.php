<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'productcategory';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function prod_cat_image()
    {
        return $this->hasMany('ProductCategoryImage');
    }
    /**
     * 
     */
    public function prod_cat()
    {
        return $this->hasMany('ProductType');
    }

}

?>