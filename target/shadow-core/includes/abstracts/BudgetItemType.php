<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetItemType extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetitemtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function b_itemtype()
    {
        return $this->hasMany('BudgetItem');
    }
    /**
     * 
     */
    public function bitem_type()
    {
        return $this->hasMany('GLBudgetXREF');
    }

}

?>