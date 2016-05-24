<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyFixedAssetAssignment extends Model {

    public $primaryKey = 'id';
    public $table = 'partyfixedassetassignment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function fixed_asset()
    {
        return $this->belongsTo('Asset');
    }
    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('PartyFixedAssetAssignmentStatus');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }


}

?>