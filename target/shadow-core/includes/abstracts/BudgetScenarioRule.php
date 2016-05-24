<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetScenarioRule extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetscenariorule';
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
    public function budget_scenario()
    {
        return $this->belongsTo('BudgetScenario');
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