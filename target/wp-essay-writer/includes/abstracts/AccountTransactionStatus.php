<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AccountTransactionStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'accounttransactionstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function transaction_status()
    {
        return $this->hasMany('AccountTransaction');
    }

}

?>