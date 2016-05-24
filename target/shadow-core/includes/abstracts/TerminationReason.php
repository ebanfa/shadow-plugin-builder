<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TerminationReason extends Model {

    public $primaryKey = 'id';
    public $table = 'terminationreason';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>