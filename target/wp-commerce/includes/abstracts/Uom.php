<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Uom extends Model {

    public $primaryKey = 'id';
    public $table = 'uom';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function from_uom()
    {
        return $this->hasMany('UomConversion');
    }
    /**
     * 
     */
    public function to_uom()
    {
        return $this->hasMany('UomConversion');
    }
    /**
     * 
     */
    public function feature_uom()
    {
        return $this->hasMany('ProductFeature');
    }

}

?>