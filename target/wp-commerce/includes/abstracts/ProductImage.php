<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductImage extends Model {

    public $primaryKey = 'id';
    public $table = 'productimage';
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


}

?>