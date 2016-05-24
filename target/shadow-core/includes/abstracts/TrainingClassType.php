<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class TrainingClassType extends Model {

    public $primaryKey = 'id';
    public $table = 'trainingclasstype';
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

    /**
     * 
     */
    public function tc_type()
    {
        return $this->hasMany('PersonTraining');
    }

}

?>