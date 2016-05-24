<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TransactionType extends Model {

    public $primaryKey = 'id';
    public $table = 'transactiontype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function fetxn_type()
    {
        return $this->hasMany('FEventTxnType');
    }
    /**
     * 
     */
    public function parent_type()
    {
        return $this->hasMany('TransactionType');
    }
    /**
     * 
     */
    public function txn_type()
    {
        return $this->hasMany('Transaction');
    }
    /**
     * 
     */
    public function tta_txn_type()
    {
        return $this->hasMany('TxnTypeAccount');
    }

}

?>