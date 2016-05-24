<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AssessmentType extends Model {

    public $primaryKey = 'id';
    public $table = 'assessmenttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;



}

?>