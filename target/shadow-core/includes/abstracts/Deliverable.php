<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Deliverable extends Model {

    public $primaryKey = 'id';
    public $table = 'deliverable';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function d_type()
    {
        return $this->belongsTo('DeliverableType');
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
    public function deliverable()
    {
        return $this->hasMany('WorkEffortDeliverable');
    }

}

?>