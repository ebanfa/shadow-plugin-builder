<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentClassification extends Model {

    public $primaryKey = 'id';
    public $table = 'contentclassification';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function class_content()
    {
        return $this->belongsTo('Content');
    }
    /**
     * 
     */
    public function content_class()
    {
        return $this->belongsTo('Classification');
    }


}

?>