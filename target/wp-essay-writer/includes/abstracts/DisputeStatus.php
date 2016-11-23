<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class DisputeStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'disputestatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function dispute_status()
    {
        return $this->hasMany('Dispute');
    }

}

?>