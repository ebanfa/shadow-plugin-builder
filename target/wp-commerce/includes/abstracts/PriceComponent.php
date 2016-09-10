<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PriceComponent extends Model {

    public $primaryKey = 'id';
    public $table = 'pricecomponent';
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
        return $this->belongsTo('PriceComponentType');
    }
    /**
     * 
     */
    public function component_prod()
    {
        return $this->belongsTo('Product');
    }


}

?>