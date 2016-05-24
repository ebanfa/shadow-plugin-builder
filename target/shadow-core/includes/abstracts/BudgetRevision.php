<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetRevision extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetrevision';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

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

    /**
     * 
     */
    public function budget_revision()
    {
        return $this->hasMany('BudgetRevisionImpact');
    }

}

?>