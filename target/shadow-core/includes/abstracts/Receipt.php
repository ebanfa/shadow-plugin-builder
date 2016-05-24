<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Receipt extends Model {

    public $primaryKey = 'id';
    public $table = 'receipt';
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
        return $this->belongsTo('ReceiptType');
    }
    /**
     * 
     */
    public function r_methtype()
    {
        return $this->belongsTo('PaymentMethodType');
    }
    /**
     * 
     */
    public function r_fpartyrole()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function r_tpartyrole()
    {
        return $this->belongsTo('PartyRole');
    }
    /**
     * 
     */
    public function r_payment()
    {
        return $this->belongsTo('Payment');
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