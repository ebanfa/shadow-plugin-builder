<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentType extends Model {

    public $primaryKey = 'id';
    public $table = 'contenttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function content_category()
    {
        return $this->belongsTo('ContentCategory');
    }

    /**
     * 
     */
    public function content_type()
    {
        return $this->hasMany('Content');
    }
    /**
     * 
     */
    public function document_type()
    {
        return $this->hasMany('ContentOrder');
    }

}

?>