<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class DeductionType extends Model {

    public $primaryKey = 'id';
    public $table = 'deductiontype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

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
    public function deduction_type()
    {
        return $this->hasMany('PayrollPreference');
    }

}

?>