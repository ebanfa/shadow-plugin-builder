<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InvoiceTerm extends Model {

    public $primaryKey = 'id';
    public $table = 'invoiceterm';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function it_invoice()
    {
        return $this->belongsTo('Invoice');
    }
    /**
     * 
     */
    public function it_term()
    {
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