<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ValidResponsibility extends Model {

    public $primaryKey = 'id';
    public $table = 'validresponsibility';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function position_type()
    {
        return $this->belongsTo('PositionType');
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