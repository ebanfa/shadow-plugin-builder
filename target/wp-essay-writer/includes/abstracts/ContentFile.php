<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentFile extends Model {

    public $primaryKey = 'id';
    public $table = 'contentfile';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function file_of_content()
    {
        return $this->belongsTo('Content');
    }


}

?>