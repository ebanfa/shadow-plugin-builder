<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetScenario extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetscenario';
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
    public function budget_scenario()
    {
        return $this->hasMany('BudgetScenarioRule');
    }

}

?>