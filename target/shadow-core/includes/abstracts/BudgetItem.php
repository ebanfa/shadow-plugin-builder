<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetItem extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetitem';
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
        return $this->belongsTo('BudgetItemType');
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
    public function budget_item()
    {
        return $this->hasMany('Position');
    }
    /**
     * 
     */
    public function parent_item()
    {
        return $this->hasMany('BudgetItem');
    }

}

?>