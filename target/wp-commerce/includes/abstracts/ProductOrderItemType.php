<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductOrderItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'productorderitemtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function order_item_type()
    {
        return $this->hasMany('ProductOrderItem');
    }

}

?>