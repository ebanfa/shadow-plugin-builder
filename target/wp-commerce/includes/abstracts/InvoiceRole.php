<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InvoiceRole extends Model {

    public $primaryKey = 'id';
    public $table = 'invoicerole';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ir_invoice()
    {
        return $this->belongsTo('Invoice');
    }
    /**
     * 
     */
    public function ir_partyrole()
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