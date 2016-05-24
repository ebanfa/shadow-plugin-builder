<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseOrderStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseorderstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function status()
    {
        return $this->hasMany('PurchaseOrder');
    }

}

?>