<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortInventoryAssignment extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortinventoryassignment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function inventory_item()
    {
        return $this->belongsTo('InventoryItem');
    }
    /**
     * 
     */
    public function workeffort()
    {
        return $this->belongsTo('WorkEffort');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>