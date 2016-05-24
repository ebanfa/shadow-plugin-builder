<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Invoice extends Model {

    public $primaryKey = 'id';
    public $table = 'invoice';
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
        return $this->belongsTo('InvoiceType');
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
        return $this->belongsTo('InvoiceStatus');
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
    public function ir_invoice()
    {
        return $this->hasMany('InvoiceRole');
    }
    /**
     * 
     */
    public function pa_invoice()
    {
        return $this->hasMany('PaymentApplication');
    }
    /**
     * 
     */
    public function invoice()
    {
        return $this->hasMany('Transaction');
    }
    /**
     * 
     */
    public function it_invoice()
    {
        return $this->hasMany('InvoiceTerm');
    }

}

?>