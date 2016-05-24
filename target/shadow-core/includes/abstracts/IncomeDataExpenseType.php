<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class IncomeDataExpenseType extends Model {

    public $primaryKey = 'id';
    public $table = 'incomedataexpensetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function ide_type()
    {
        return $this->hasMany('IncomeDataExpense');
    }

}

?>