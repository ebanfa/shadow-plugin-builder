<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AccountingPeriod extends Model {

    public $primaryKey = 'id';
    public $table = 'accountingperiod';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ap_type()
    {
        return $this->belongsTo('PeriodType');
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
    public function parent_period()
    {
        return $this->hasMany('AccountingPeriod');
    }
    /**
     * 
     */
    public function acctng_period()
    {
        return $this->hasMany('BusinessUnitGLAccountBalance');
    }

}

?>