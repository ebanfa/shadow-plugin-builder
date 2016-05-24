<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class LandAccessibility extends Model {

    public $primaryKey = 'id';
    public $table = 'landaccessibility';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function li_accessibility()
    {
        return $this->hasMany('Land');
    }

}

?>