<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SubjectArea extends Model {

    public $primaryKey = 'id';
    public $table = 'subjectarea';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function file_subject_area()
    {
        return $this->hasMany('SubjectAreaImage');
    }
    /**
     * 
     */
    public function parent_area()
    {
        return $this->hasMany('Subject');
    }

}

?>