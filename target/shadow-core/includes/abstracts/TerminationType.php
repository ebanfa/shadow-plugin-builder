<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TerminationType extends Model {

    public $primaryKey = 'id';
    public $table = 'terminationtype';
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