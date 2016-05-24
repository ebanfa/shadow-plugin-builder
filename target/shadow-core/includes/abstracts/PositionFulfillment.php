<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PositionFulfillment extends Model {

    public $primaryKey = 'id';
    public $table = 'positionfulfillment';
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
    public function acceptor()
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