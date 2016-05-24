<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SalaryStep extends Model {

    public $primaryKey = 'id';
    public $table = 'salarystep';
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
    public function salary_step()
    {
        return $this->hasMany('PayHistory');
    }

}

?>