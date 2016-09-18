<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ChartOfAccounts extends Model {

    public $primaryKey = 'id';
    public $table = 'chartofaccounts';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function org_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }
    /**
     * 
     */
    public function acct_structure()
    {
        return $this->belongsTo('COAAccountStructure');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('COAStatus');
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
    public function coa()
    {
        return $this->hasMany('COAAccountSegmentInstance');
    }

}

?>