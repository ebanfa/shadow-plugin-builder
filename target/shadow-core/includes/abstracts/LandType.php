<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class LandType extends Model {

    public $primaryKey = 'id';
    public $table = 'landtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function li_type()
    {
        return $this->hasMany('Land');
    }

}

?>