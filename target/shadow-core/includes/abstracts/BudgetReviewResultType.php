<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetReviewResultType extends Model {

    public $primaryKey = 'id';
    public $table = 'budgetreviewresulttype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function result_type()
    {
        return $this->hasMany('BudgetReview');
    }

}

?>