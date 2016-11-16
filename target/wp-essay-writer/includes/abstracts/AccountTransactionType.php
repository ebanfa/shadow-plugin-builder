<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AccountTransactionType extends Model {

    public $primaryKey = 'id';
    public $table = 'accounttransactiontype';
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
        return $this->hasMany('AccountTransaction');
    }

}

?>