<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BusinessUnitGLAccountBalance extends Model {

    public $primaryKey = 'id';
    public $table = 'businessunitglaccountbalance';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function buglaccount()
    {
        return $this->belongsTo('BusinessUnitGLAccount');
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
    public function acctng_period()
    {
        return $this->belongsTo('AccountingPeriod');
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