<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ClassificationType extends Model {

    public $primaryKey = 'id';
    public $table = 'classificationtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function class_type()
    {
        return $this->hasMany('Classification');
    }

}

?>