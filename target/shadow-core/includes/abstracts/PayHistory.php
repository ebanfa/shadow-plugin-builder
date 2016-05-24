<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PayHistory extends Model {

    public $primaryKey = 'id';
    public $table = 'payhistory';
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
    public function salary_step()
    {
        return $this->belongsTo('SalaryStep');
    }
    /**
     * 
     */
    public function employment()
    {
        return $this->belongsTo('RelationshipType');
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
    public function pay_history()
    {
        return $this->hasMany('PerformanceReview');
    }

}

?>