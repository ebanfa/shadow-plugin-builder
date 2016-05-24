<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Plot extends Model {

    public $primaryKey = 'id';
    public $table = 'plot';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function p_land()
    {
        return $this->belongsTo('Land');
    }
    /**
     * 
     */
    public function p_type()
    {
        return $this->belongsTo('PlotType');
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