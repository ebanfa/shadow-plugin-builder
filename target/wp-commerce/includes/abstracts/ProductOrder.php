<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductOrder extends Model {

    public $primaryKey = 'id';
    public $table = 'productorder';
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
        return $this->belongsTo('ProductOrderType');
    }
    /**
     * 
     */
    public function prod_order_status()
    {
        return $this->belongsTo('ProductOrderStatus');
    }
    /**
     * 
     */
    public function placed_by_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function taken_by_party()
    {
        return $this->belongsTo('Party');
    }

    /**
     * 
     */
    public function item_order()
    {
        return $this->hasMany('ProductOrderItem');
    }

}

?>