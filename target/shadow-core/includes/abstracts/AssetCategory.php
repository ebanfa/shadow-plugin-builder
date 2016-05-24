<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AssetCategory extends Model {

    public $primaryKey = 'id';
    public $table = 'assetcategory';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function category()
    {
        return $this->hasMany('AssetType');
    }

}

?>