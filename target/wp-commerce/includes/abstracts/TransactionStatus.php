<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TransactionStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'transactionstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function gl_txn_status()
    {
        return $this->hasMany('Transaction');
    }

}

?>