<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class InventoryItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'inventoryitemtype';
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
        return $this->hasMany('InventoryItem');
    }

}

?>