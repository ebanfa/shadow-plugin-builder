<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BusinessUnit extends Model {

    public $primaryKey = 'id';
    public $table = 'businessunit';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function currency()
    {
        return $this->belongsTo('Currency');
    }
    /**
     * 
     */
    public function business()
    {
        return $this->belongsTo('Business');
    }

    /**
     * 
     */
    public function org_unit()
    {
        return $this->hasMany('ChartOfAccounts');
    }
    /**
     * 
     */
    public function internal_org()
    {
        return $this->hasMany('PayrollPreference');
    }
    /**
     * 
     */
    public function wepa_bu()
    {
        return $this->hasMany('WorkEffortPartyAssignment');
    }
    /**
     * 
     */
    public function parent_unit()
    {
        return $this->hasMany('PartyRole');
    }
    /**
     * 
     */
    public function default_unit()
    {
        return $this->hasMany('PartyProfile');
    }
    /**
     * 
     */
    public function business_unit()
    {
        return $this->hasMany('WorkEffortDeliverable');
    }

}

?>