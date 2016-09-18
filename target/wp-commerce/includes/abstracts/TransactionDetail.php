<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TransactionDetail extends Model {

    public $primaryKey = 'id';
    public $table = 'transactiondetail';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function transaction()
    {
        return $this->belongsTo('Transaction');
    }
    /**
     * 
     */
    public function td_buglaccount()
    {
        return $this->belongsTo('BusinessUnitGLAccount');
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
    public function txn_detail()
    {
        return $this->hasMany('TransactionDetail');
    }

}

?>