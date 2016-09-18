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
    public function invoice_type()
    {
        return $this->belongsTo('InvoiceType');
    }
    /**
     * 
     */
    public function invoice_owner()
    {
        return $this->belongsTo('Party');
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
    public function ii_invoice()
    {
        return $this->hasMany('InvoiceItem');
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
    /**
     * 
     */
    public function payment_invoice()
    {
        return $this->hasMany('Payment');
    }

}

?>