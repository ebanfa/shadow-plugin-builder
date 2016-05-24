<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PayrollPreference extends Model {

    public $primaryKey = 'id';
    public $table = 'payrollpreference';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function period_type()
    {
        return $this->belongsTo('PeriodType');
    }
    /**
     * 
     */
    public function paymeth_type()
    {
        return $this->belongsTo('PaymentMethodType');
    }
    /**
     * 
     */
    public function deduction_type()
    {
        return $this->belongsTo('DeductionType');
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
    public function employee()
    {
        return $this->belongsTo('Person');
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