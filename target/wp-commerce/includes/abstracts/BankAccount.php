<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BankAccount extends Model {

    public $primaryKey = 'id';
    public $table = 'bankaccount';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function bank_account_type()
    {
        return $this->belongsTo('BankAccountType');
    }


}

?>