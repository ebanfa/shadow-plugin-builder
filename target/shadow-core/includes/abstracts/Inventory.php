<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Inventory extends Model {

    public $primaryKey = 'id';
    public $table = 'inventory';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function i_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('InventoryType');
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
    public function i_inventory()
    {
        return $this->hasMany('InventoryItem');
    }

}

?>