<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TxnTypeAccount extends Model {

    public $primaryKey = 'id';
    public $table = 'txntypeaccount';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function tta_txn_type()
    {
        return $this->belongsTo('TransactionType');
    }
    /**
     * 
     */
    public function tta_account()
    {
        return $this->belongsTo('GLAccount');
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