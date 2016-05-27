<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseOrderItem extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseorderitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pi_porder()
    {
        return $this->belongsTo('PurchaseOrder');
    }
    /**
     * 
     */
    public function item_type()
    {
        return $this->belongsTo('PurchaseOrderItemType');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>