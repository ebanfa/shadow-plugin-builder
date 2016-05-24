<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class IncomeDataExpense extends Model {

    public $primaryKey = 'id';
    public $table = 'incomedataexpense';
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
        return $this->belongsTo('IncomeDataExpenseType');
    }
    /**
     * 
     */
    public function income_data()
    {
        return $this->belongsTo('IncomeData');
    }


}

?>