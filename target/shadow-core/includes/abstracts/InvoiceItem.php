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
    public function invoice()
    {
        return $this->belongsTo('Invoice');
    }
    /**
     * 
     */
    public function item_type()
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