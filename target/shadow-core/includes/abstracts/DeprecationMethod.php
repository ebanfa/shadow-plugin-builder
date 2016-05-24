<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class DeprecationMethod extends Model {

    public $primaryKey = 'id';
    public $table = 'deprecationmethod';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function a_dmethod()
    {
        return $this->hasMany('Asset');
    }

}

?>