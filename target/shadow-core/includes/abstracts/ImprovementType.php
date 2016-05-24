<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ImprovementType extends Model {

    public $primaryKey = 'id';
    public $table = 'improvementtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function i_type()
    {
        return $this->hasMany('Improvement');
    }

}

?>