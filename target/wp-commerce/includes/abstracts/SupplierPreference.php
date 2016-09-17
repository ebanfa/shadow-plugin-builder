<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SupplierPreference extends Model {

    public $primaryKey = 'id';
    public $table = 'supplierpreference';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function supplier_preference()
    {
        return $this->hasMany('ProductSupplier');
    }

}

?>