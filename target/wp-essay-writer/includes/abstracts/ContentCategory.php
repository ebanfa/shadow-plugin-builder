<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'contentcategory';
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
        return $this->hasMany('ContentType');
    }

}

?>