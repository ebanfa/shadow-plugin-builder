<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductClassification extends Model {

    public $primaryKey = 'id';
    public $table = 'productclassification';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function product_class()
    {
        return $this->hasMany('ProductClassificationLink');
    }

}

?>