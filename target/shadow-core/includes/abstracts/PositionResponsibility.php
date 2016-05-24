<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PositionResponsibility extends Model {

    public $primaryKey = 'id';
    public $table = 'positionresponsibility';
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
    public function resp_type()
    {
        return $this->belongsTo('ResponsibilityType');
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