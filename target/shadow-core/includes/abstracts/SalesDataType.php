<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SalesDataType extends Model {

    public $primaryKey = 'id';
    public $table = 'salesdatatype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function sd_type()
    {
        return $this->hasMany('SalesData');
    }

}

?>