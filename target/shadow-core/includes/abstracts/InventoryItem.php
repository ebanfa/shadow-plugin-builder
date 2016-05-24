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
    public function i_itemtype()
    {
        return $this->belongsTo('InventoryItemType');
    }
    /**
     * 
     */
    public function i_inventory()
    {
        return $this->belongsTo('Inventory');
    }
    /**
     * 
     */
    public function pi_uom()
    {
        return $this->belongsTo('UnitOfMeasure');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function inventory_item()
    {
        return $this->hasMany('WorkEffortInventoryAssignment');
    }

}

?>