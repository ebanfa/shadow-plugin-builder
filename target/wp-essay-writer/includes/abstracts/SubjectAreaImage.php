<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SubjectAreaImage extends Model {

    public $primaryKey = 'id';
    public $table = 'subjectareaimage';
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
        return $this->belongsTo('SubjectArea');
    }


}

?>