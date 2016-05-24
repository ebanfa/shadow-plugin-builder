<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class LandTopography extends Model {

    public $primaryKey = 'id';
    public $table = 'landtopography';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function li_topography()
    {
        return $this->hasMany('Land');
    }

}

?>