<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductOrderStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'productorderstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function prod_order_status()
    {
        return $this->hasMany('ProductOrder');
    }

}

?>