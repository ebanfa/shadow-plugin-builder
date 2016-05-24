<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseOrderRole extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseorderrole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pr_porder()
    {
        return $this->belongsTo('PurchaseOrder');
    }
    /**
     * 
     */
    public function pr_partyrole()
    {
        return $this->belongsTo('PartyRole');
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