<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Subject extends Model {

    public $primaryKey = 'id';
    public $table = 'subject';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function parent_area()
    {
        return $this->belongsTo('SubjectArea');
    }

    /**
     * 
     */
    public function content_subject()
    {
        return $this->hasMany('Content');
    }
    /**
     * 
     */
    public function target_subject()
    {
        return $this->hasMany('PartySubject');
    }
    /**
     * 
     */
    public function qualification_sub()
    {
        return $this->hasMany('PartyEducation');
    }
    /**
     * 
     */
    public function subject()
    {
        return $this->hasMany('ContentOrder');
    }

}

?>