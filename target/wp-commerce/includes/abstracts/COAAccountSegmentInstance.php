<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class COAAccountSegmentInstance extends Model {

    public $primaryKey = 'id';
    public $table = 'coaaccountsegmentinstance';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function coa()
    {
        return $this->belongsTo('ChartOfAccounts');
    }
    /**
     * 
     */
    public function acct_segment()
    {
        return $this->belongsTo('COAAccountSegment');
    }
    /**
     * 
     */
    public function casi_buglaccount()
    {
        return $this->belongsTo('BusinessUnitGLAccount');
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
    public function parent_instance()
    {
        return $this->hasMany('COAAccountSegmentInstance');
    }

}

?>