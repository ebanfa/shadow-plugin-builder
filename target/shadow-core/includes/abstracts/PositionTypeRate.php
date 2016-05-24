<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PositionTypeRate extends Model {

    public $primaryKey = 'id';
    public $table = 'positiontyperate';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function position()
    {
        return $this->belongsTo('Position');
    }
    /**
     * 
     */
    public function rate_type()
    {
        return $this->belongsTo('RateType');
    }
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
    public function salary_step()
    {
        return $this->belongsTo('SalaryStep');
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