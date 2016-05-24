<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class IncomeData extends Model {

    public $primaryKey = 'id';
    public $table = 'incomedata';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function id_assessment()
    {
        return $this->belongsTo('Assessment');
    }
    /**
     * 
     */
    public function id_type()
    {
        return $this->belongsTo('IncomeDataType');
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
    public function income_data()
    {
        return $this->hasMany('IncomeDataExpense');
    }

}

?>