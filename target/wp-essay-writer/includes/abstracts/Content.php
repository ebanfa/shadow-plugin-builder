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
    public function content_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function content_tutor()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function content_subject()
    {
        return $this->belongsTo('Subject');
    }

    /**
     * 
     */
    public function order_content()
    {
        return $this->hasMany('ContentOrder');
    }
    /**
     * 
     */
    public function class_content()
    {
        return $this->hasMany('ContentClassification');
    }
    /**
     * 
     */
    public function file_of_content()
    {
        return $this->hasMany('ContentFile');
    }

}

?>