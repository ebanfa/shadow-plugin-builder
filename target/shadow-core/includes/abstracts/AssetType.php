<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class AssetType extends Model {

    public $primaryKey = 'id';
    public $table = 'assettype';
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
        return $this->belongsTo('AssetCategory');
    }
    /**
     * 
     */
    public function business_category()
    {
        return $this->belongsTo('BusinessCategory');
    }

    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('Asset');
    }

}

?>