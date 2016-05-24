<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Person extends Model {

    public $primaryKey = 'id';
    public $table = 'person';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
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
    public function employee()
    {
        return $this->hasMany('PayrollPreference');
    }
    /**
     * 
     */
    public function referred_by()
    {
        return $this->hasMany('EmploymentApplication');
    }
    /**
     * 
     */
    public function acceptor()
    {
        return $this->hasMany('PositionFulfillment');
    }
    /**
     * 
     */
    public function person()
    {
        return $this->hasMany('PersonTraining');
    }
    /**
     * 
     */
    public function applicant()
    {
        return $this->hasMany('EmploymentApplication');
    }

}

?>