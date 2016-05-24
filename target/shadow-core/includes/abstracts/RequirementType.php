<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class RequirementType extends Model {

    public $primaryKey = 'id';
    public $table = 'requirementtype';
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
    public function r_type()
    {
        return $this->hasMany('Requirement');
    }

}

?>