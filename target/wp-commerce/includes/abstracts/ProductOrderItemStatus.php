<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductOrderItemStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'productorderitemstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function order_item_status()
    {
        return $this->hasMany('ProductOrderItem');
    }

}

?>