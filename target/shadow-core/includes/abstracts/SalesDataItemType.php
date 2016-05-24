<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SalesDataItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'salesdataitemtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function sdi_type()
    {
        return $this->hasMany('SalesDataItem');
    }

}

?>