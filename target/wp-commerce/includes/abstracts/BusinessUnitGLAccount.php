<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BusinessUnitGLAccount extends Model {

    public $primaryKey = 'id';
    public $table = 'businessunitglaccount';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function glaccount()
    {
        return $this->belongsTo('GLAccount');
    }
    /**
     * 
     */
    public function internal_org()
    {
        return $this->belongsTo('BusinessUnit');
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
    public function td_buglaccount()
    {
        return $this->hasMany('TransactionDetail');
    }
    /**
     * 
     */
    public function casi_buglaccount()
    {
        return $this->hasMany('COAAccountSegmentInstance');
    }
    /**
     * 
     */
    public function buglaccount()
    {
        return $this->hasMany('BusinessUnitGLAccountBalance');
    }
    /**
     * 
     */
    public function parent_buglacct()
    {
        return $this->hasMany('BusinessUnitGLAccount');
    }

}

?>