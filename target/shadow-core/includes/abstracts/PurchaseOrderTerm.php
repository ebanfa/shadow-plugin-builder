<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PurchaseOrderTerm extends Model {

    public $primaryKey = 'id';
    public $table = 'purchaseorderterm';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pot_porder()
    {
        return $this->belongsTo('PurchaseOrder');
    }
    /**
     * 
     */
    public function po_term()
    {
        return $this->belongsTo('Term');
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