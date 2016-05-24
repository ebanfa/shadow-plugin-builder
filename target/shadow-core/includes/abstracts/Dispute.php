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
    public function type()
    {
        return $this->belongsTo('DisputeType');
    }
    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function agreement()
    {
        return $this->belongsTo('Agreement');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('DisputeStatus');
    }

    /**
     * 
     */
    public function dispute()
    {
        return $this->hasMany('DisputeItem');
    }

}

?>