<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AccountTransaction extends Model {

    public $primaryKey = 'id';
    public $table = 'accounttransaction';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function acct_txn_type()
    {
        return $this->belongsTo('AccountTransactionType');
    }
    /**
     * 
     */
    public function transaction_status()
    {
        return $this->belongsTo('AccountTransactionStatus');
    }
    /**
     * 
     */
    public function account()
    {
        return $this->belongsTo('BillingAccount');
    }
    /**
     * 
     */
    public function amount()
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