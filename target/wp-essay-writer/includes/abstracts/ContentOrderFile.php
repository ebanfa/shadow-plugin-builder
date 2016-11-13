<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentOrderFile extends Model {

    public $primaryKey = 'id';
    public $table = 'contentorderfile';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function file_content_order()
    {
        return $this->belongsTo('ContentOrder');
    }


}

?>