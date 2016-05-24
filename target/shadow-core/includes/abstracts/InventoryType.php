<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InventoryType extends Model {

    public $primaryKey = 'id';
    public $table = 'inventorytype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function business_category()
    {
        return $this->belongsTo('BusinessCategory');
    }

    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('Inventory');
    }

}

?>