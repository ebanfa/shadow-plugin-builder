<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortDeliverable extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortdeliverable';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function deliverable()
    {
        return $this->belongsTo('Deliverable');
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