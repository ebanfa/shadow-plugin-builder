<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class WorkEffortAssociation extends Model {

    public $primaryKey = 'id';
    public $table = 'workeffortassociation';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function wea_fworkeffort()
    {
        return $this->belongsTo('WorkEffort');
    }
    /**
     * 
     */
    public function wea_tworkeffort()
    {
        return $this->belongsTo('WorkEffort');
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