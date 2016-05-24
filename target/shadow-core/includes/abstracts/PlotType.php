<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PlotType extends Model {

    public $primaryKey = 'id';
    public $table = 'plottype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function p_type()
    {
        return $this->hasMany('Plot');
    }

}

?>