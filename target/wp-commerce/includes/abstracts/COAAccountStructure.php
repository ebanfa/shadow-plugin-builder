<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class COAAccountStructure extends Model {

    public $primaryKey = 'id';
    public $table = 'coaaccountstructure';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

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
    public function seg_acctstruct()
    {
        return $this->hasMany('COAAccountSegment');
    }
    /**
     * 
     */
    public function acct_structure()
    {
        return $this->hasMany('ChartOfAccounts');
    }

}

?>