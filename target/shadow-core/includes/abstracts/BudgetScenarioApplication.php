<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetScenarioApplication extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetscenarioapplication';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function budget_item()
    {
        return $this->belongsTo('BudgetItem');
    }
    /**
     * 
     */
    public function budget()
    {
        return $this->belongsTo('Budget');
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