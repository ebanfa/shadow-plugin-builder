<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Budget extends Model {

    public $primaryKey = 'id';
    public $table = 'budget';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function b_type()
    {
        return $this->belongsTo('BudgetType');
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
    public function budget()
    {
        return $this->hasMany('PaymentBudgetAllocation');
    }

}

?>