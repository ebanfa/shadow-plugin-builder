<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductOrderItem extends Model {

    public $primaryKey = 'id';
    public $table = 'productorderitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function item_order()
    {
        return $this->belongsTo('ProductOrder');
    }
    /**
     * 
     */
    public function order_item_type()
    {
        return $this->belongsTo('ProductOrderItemType');
    }
    /**
     * 
     */
    public function order_item_status()
    {
        return $this->belongsTo('ProductOrderItemStatus');
    }


}

?>