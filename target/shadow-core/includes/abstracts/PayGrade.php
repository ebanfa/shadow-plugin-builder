<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PayGrade extends Model {

    public $primaryKey = 'id';
    public $table = 'paygrade';
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