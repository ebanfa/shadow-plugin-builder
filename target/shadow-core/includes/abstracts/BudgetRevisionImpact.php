<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetRevisionImpact extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetrevisionimpact';
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
    public function budget_revision()
    {
        return $this->belongsTo('BudgetRevision');
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