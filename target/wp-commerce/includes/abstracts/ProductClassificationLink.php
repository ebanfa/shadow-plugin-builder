<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductClassificationLink extends Model {

    public $primaryKey = 'id';
    public $table = 'productclassificationlink';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function product()
    {
        return $this->belongsTo('Product');
    }
    /**
     * 
     */
    public function product_class()
    {
        return $this->belongsTo('ProductClassification');
    }


}

?>