<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductTemplate extends Model {

    public $primaryKey = 'id';
    public $table = 'producttemplate';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function prod_type()
    {
        return $this->belongsTo('ProductType');
    }


}

?>