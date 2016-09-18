<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InventoryItemStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'inventoryitemstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function item_status()
    {
        return $this->hasMany('InventoryItem');
    }

}

?>