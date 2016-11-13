<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ContentOrderType extends Model {

    public $primaryKey = 'id';
    public $table = 'contentordertype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function order_type()
    {
        return $this->hasMany('ContentOrder');
    }

}

?>