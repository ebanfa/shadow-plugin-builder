<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductType extends Model {

    public $primaryKey = 'id';
    public $table = 'producttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function prod_cat()
    {
        return $this->belongsTo('ProductCategory');
    }

    /**
     * 
     */
    public function prod_type()
    {
        return $this->hasMany('Product');
    }
    /**
     * 
     */
    public function prod_ty_image()
    {
        return $this->hasMany('ProductTypeImage');
    }

}

?>