<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PeriodType extends Model {

    public $primaryKey = 'id';
    public $table = 'periodtype';
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
        return $this->hasMany('AccountingPeriod');
    }
    /**
     * 
     */
    public function period_type()
    {
        return $this->hasMany('PayrollPreference');
    }

}

?>