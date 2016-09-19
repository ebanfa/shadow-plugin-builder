<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SupplierRating extends Model {

    public $primaryKey = 'id';
    public $table = 'supplierrating';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function supplier_rating()
    {
        return $this->hasMany('ProductSupplier');
    }

}

?>