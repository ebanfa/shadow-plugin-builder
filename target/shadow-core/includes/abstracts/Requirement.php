<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Requirement extends Model {

    public $primaryKey = 'id';
    public $table = 'requirement';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function r_type()
    {
        return $this->belongsTo('RequirementType');
    }
    /**
     * 
     */
    public function deliverable()
    {
        return $this->belongsTo('Deliverable');
    }
    /**
     * 
     */
    public function r_asset()
    {
        return $this->belongsTo('Asset');
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
    public function wrf_requirement()
    {
        return $this->hasMany('WorkRequirementFulfillment');
    }
    /**
     * 
     */
    public function requirement()
    {
        return $this->hasMany('RequirementRole');
    }

}

?>