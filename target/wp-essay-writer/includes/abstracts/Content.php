<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Content extends Model {

    public $primaryKey = 'id';
    public $table = 'content';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function content_type()
    {
        return $this->belongsTo('ContentType');
    }
    /**
     * 
     */
    public function subject_area()
    {
        return $this->belongsTo('SubjectArea');
    }
    /**
     * 
     */
    public function academic_level()
    {
        return $this->belongsTo('AcademicLevel');
    }

    /**
     * 
     */
    public function file_of_content()
    {
        return $this->hasMany('ContentFile');
    }
    /**
     * 
     */
    public function order_content()
    {
        return $this->hasMany('ContentOrder');
    }

}

?>