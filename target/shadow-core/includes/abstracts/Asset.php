<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Asset extends Model {

    public $primaryKey = 'id';
    public $table = 'asset';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function a_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function a_dmethod()
    {
        return $this->belongsTo('DeprecationMethod');
    }
    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('AssetType');
    }
    /**
     * 
     */
    public function a_uom()
    {
        return $this->belongsTo('UnitOfMeasure');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function fixed_asset()
    {
        return $this->hasMany('PartyFixedAssetAssignment');
    }
    /**
     * 
     */
    public function i_asset()
    {
        return $this->hasMany('InventoryItem');
    }
    /**
     * 
     */
    public function pfasset()
    {
        return $this->hasMany('Requirement');
    }

}

?>