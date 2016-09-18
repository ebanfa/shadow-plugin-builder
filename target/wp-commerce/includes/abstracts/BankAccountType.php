<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BankAccountType extends Model {

    public $primaryKey = 'id';
    public $table = 'bankaccounttype';
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
        return $this->hasMany('BankAccount');
    }

}

?>