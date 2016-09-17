<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ProductTypeImage extends Model {

    public $primaryKey = 'id';
    public $table = 'producttypeimage';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function prod_ty_image()
    {
        return $this->belongsTo('ProductType');
    }


}

?>