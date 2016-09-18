<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Container extends Model {

    public $primaryKey = 'id';
    public $table = 'container';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function container_type()
    {
        return $this->belongsTo('ContainerType');
    }
    /**
     * 
     */
    public function container_facility()
    {
        return $this->belongsTo('Facility');
    }

    /**
     * 
     */
    public function item_container()
    {
        return $this->hasMany('InventoryItem');
    }

}

?>