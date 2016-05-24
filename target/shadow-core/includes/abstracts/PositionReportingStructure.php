<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PositionReportingStructure extends Model {

    public $primaryKey = 'id';
    public $table = 'positionreportingstructure';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function reporter()
    {
        return $this->belongsTo('Position');
    }
    /**
     * 
     */
    public function report_to()
    {
        return $this->belongsTo('Position');
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