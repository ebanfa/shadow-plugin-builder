<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class EmploymentApplication extends Model {

    public $primaryKey = 'id';
    public $table = 'employmentapplication';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function position()
    {
        return $this->belongsTo('Position');
    }
    /**
     * 
     */
    public function status()
    {
        return $this->belongsTo('EmploymentApplicationStatus');
    }
    /**
     * 
     */
    public function source()
    {
        return $this->belongsTo('EmploymentApplicationSourceType');
    }
    /**
     * 
     */
    public function referred_by()
    {
        return $this->belongsTo('Person');
    }
    /**
     * 
     */
    public function applicant()
    {
        return $this->belongsTo('Person');
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