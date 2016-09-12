<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Transaction extends Model {

    public $primaryKey = 'id';
    public $table = 'transaction';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function gl_txn_type()
    {
        return $this->belongsTo('TransactionType');
    }
    /**
     * 
     */
    public function gl_txn_status()
    {
        return $this->belongsTo('TransactionStatus');
    }
    /**
     * 
     */
    public function internal_org()
    {
        return $this->belongsTo('BusinessUnit');
    }
    /**
     * 
     */
    public function from_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function to_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function payment()
    {
        return $this->belongsTo('Payment');
    }
    /**
     * 
     */
    public function invoice()
    {
        return $this->belongsTo('Invoice');
    }
    /**
     * 
     */
    public function porder()
    {
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
    public function transaction()
    {
        return $this->hasMany('TransactionDetail');
    }

}

?>