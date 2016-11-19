<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Classification extends Model {

    public $primaryKey = 'id';
    public $table = 'classification';
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
        return $this->belongsTo('ClassificationType');
    }

    /**
     * 
     */
    public function content_class()
    {
        return $this->hasMany('ContentClassification');
    }

}

?>