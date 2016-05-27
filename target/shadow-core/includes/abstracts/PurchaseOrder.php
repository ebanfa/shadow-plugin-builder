<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseOrder extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseorder';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('PurchaseOrderType');
    }
    /**
     * 
     */
    public function owner_role()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function bill_acct()
    {
        return $this->belongsTo('BillingAccount');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('PurchaseOrderStatus');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function pi_porder()
    {
        return $this->hasMany('PurchaseOrderItem');
    }
    /**
     * 
     */
    public function pr_porder()
    {
        return $this->hasMany('PurchaseOrderRole');
    }
    /**
     * 
     */
    public function pot_porder()
    {
        return $this->hasMany('PurchaseOrderTerm');
    }
    /**
     * 
     */
    public function porder()
    {
        return $this->hasMany('Transaction');
    }

}

?>