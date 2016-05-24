<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ExpenseType extends Model {

    public $primaryKey = 'id';
    public $table = 'expensetype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function business_category()
    {
        return $this->belongsTo('BusinessCategory');
    }

    /**
     * 
     */
    public function type()
    {
        return $this->hasMany('Expense');
    }

}

?>