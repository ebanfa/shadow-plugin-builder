<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InvoiceItem extends Model {

    public $primaryKey = 'id';
    public $table = 'invoiceitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ii_invoice()
    {
        return $this->belongsTo('Invoice');
    }
    /**
     * 
     */
    public function ii_status()
    {
        return $this->belongsTo('InvoiceItemStatus');
    }
    /**
     * 
     */
    public function ii_type()
    {
        return $this->belongsTo('InvoiceItemType');
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