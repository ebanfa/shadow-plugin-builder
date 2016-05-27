<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyAssetAssignment extends Model {

    public $primaryKey = 'id';
    public $table = 'partyassetassignment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pas_asset()
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
        return $this->belongsTo('PartyFAssetAssignmentStatus');
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