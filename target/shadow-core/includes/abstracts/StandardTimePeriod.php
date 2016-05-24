<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class StandardTimePeriod extends Model {

    public $primaryKey = 'id';
    public $table = 'standardtimeperiod';
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
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>