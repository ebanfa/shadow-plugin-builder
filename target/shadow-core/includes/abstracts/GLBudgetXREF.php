<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class GLBudgetXREF extends Model {

    public $primaryKey = 'id';
    public $table = 'glbudgetxref';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function bitem_type()
    {
        return $this->belongsTo('BudgetItemType');
    }
    /**
     * 
     */
    public function gl_account()
    {
        return $this->belongsTo('GLAccount');
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