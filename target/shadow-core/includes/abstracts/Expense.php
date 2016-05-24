<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Expense extends Model {

    public $primaryKey = 'id';
    public $table = 'expense';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('ExpenseType');
    }
    /**
     * 
     */
    public function frequency()
    {
        return $this->belongsTo('ExpenseFrequency');
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