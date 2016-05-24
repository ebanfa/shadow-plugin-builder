<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseOrderItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseorderitemtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function item_type()
    {
        return $this->hasMany('PurchaseOrderItem');
    }

}

?>