<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InventoryItem extends Model {

    public $primaryKey = 'id';
    public $table = 'inventoryitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function item_type()
    {
        return $this->belongsTo('InventoryItemType');
    }
    /**
     * 
     */
    public function item_product()
    {
        return $this->belongsTo('Product');
    }
    /**
     * 
     */
    public function item_status()
    {
        return $this->belongsTo('InventoryItemStatus');
    }
    /**
     * 
     */
    public function item_facility()
    {
        return $this->belongsTo('Facility');
    }
    /**
     * 
     */
    public function item_container()
    {
        return $this->belongsTo('Container');
    }
    /**
     * 
     */
    public function item_lot()
    {
        return $this->belongsTo('Lot');
    }


}

?>