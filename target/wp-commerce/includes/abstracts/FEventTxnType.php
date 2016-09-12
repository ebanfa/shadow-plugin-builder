<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class FEventTxnType extends Model {

    public $primaryKey = 'id';
    public $table = 'feventtxntype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function fevent_type()
    {
        return $this->belongsTo('FinancialEventType');
    }
    /**
     * 
     */
    public function fetxn_type()
    {
        return $this->belongsTo('TransactionType');
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