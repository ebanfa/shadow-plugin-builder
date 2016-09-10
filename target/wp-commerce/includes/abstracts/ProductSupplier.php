<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductSupplier extends Model {

    public $primaryKey = 'id';
    public $table = 'productsupplier';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function prod_supplier()
    {
        return $this->belongsTo('Product');
    }
    /**
     * 
     */
    public function supplier_of_prod()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function supplier_rating()
    {
        return $this->belongsTo('SupplierRating');
    }
    /**
     * 
     */
    public function supplier_preference()
    {
        return $this->belongsTo('SupplierPreference');
    }


}

?>