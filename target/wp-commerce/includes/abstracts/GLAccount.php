<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class GLAccount extends Model {

    public $primaryKey = 'id';
    public $table = 'glaccount';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function glacct_type()
    {
        return $this->belongsTo('GLAccountType');
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
    public function tta_account()
    {
        return $this->hasMany('TxnTypeAccount');
    }
    /**
     * 
     */
    public function glaccount()
    {
        return $this->hasMany('BusinessUnitGLAccount');
    }

}

?>