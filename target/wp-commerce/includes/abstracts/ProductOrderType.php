<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductOrderType extends Model {

    public $primaryKey = 'id';
    public $table = 'productordertype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function prod_order_type()
    {
        return $this->hasMany('ProductOrder');
    }

}

?>