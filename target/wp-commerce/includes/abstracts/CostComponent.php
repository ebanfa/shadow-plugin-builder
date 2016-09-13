<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class CostComponent extends Model {

    public $primaryKey = 'id';
    public $table = 'costcomponent';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function cost_type()
    {
        return $this->belongsTo('CostComponentType');
    }
    /**
     * 
     */
    public function cost_prod()
    {
        return $this->belongsTo('Product');
    }


}

?>