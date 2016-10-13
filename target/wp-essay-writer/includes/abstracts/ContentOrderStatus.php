<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentOrderStatus extends Model {

    public $primaryKey = 'id';
    public $table = 'contentorderstatus';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function order_status()
    {
        return $this->hasMany('ContentOrder');
    }

}

?>