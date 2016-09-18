<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductCategoryImage extends Model {

    public $primaryKey = 'id';
    public $table = 'productcategoryimage';
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
        return $this->belongsTo('ProductCategory');
    }


}

?>