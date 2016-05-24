<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class DisputeItem extends Model {

    public $primaryKey = 'id';
    public $table = 'disputeitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function dispute()
    {
        return $this->belongsTo('Dispute');
    }
    /**
     * 
     */
    public function owner()
    {
        return $this->belongsTo('Party');
    }


}

?>