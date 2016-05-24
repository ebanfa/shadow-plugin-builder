<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BudgetType extends Model {

    public $primaryKey = 'id';
    public $table = 'budgettype';
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
        return $this->hasMany('Budget');
    }

}

?>