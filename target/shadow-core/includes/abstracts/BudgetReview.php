<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetReview extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetreview';
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
    public function result_type()
    {
        return $this->belongsTo('BudgetReviewResultType');
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