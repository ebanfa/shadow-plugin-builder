<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Lot extends Model {

    public $primaryKey = 'id';
    public $table = 'lot';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function item_lot()
    {
        return $this->hasMany('InventoryItem');
    }

}

?>