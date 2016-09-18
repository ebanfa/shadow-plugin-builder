<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PriceComponentType extends Model {

    public $primaryKey = 'id';
    public $table = 'pricecomponenttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function component_type()
    {
        return $this->hasMany('PriceComponent');
    }

}

?>