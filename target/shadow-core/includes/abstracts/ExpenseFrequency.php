<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ExpenseFrequency extends Model {

    public $primaryKey = 'id';
    public $table = 'expensefrequency';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function frequency()
    {
        return $this->hasMany('Expense');
    }

}

?>