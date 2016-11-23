<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Dispute extends Model {

    public $primaryKey = 'id';
    public $table = 'dispute';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function dispute_type()
    {
    }
    /**
     * 
     */
    public function dispute_status()
    {
        return $this->belongsTo('DisputeStatus');
    }
    /**
     * 
     */
    public function dispute_order()
    {
        return $this->belongsTo('ContentOrder');
    }
    /**
     * 
     */
    public function dispute_owner()
    {
        return $this->belongsTo('Party');
    }


}

?>