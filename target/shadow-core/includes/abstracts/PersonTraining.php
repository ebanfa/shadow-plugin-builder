<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PersonTraining extends Model {

    public $primaryKey = 'id';
    public $table = 'persontraining';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function person()
    {
        return $this->belongsTo('Person');
    }
    /**
     * 
     */
    public function tc_type()
    {
        return $this->belongsTo('TrainingClassType');
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