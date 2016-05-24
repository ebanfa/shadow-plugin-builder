<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ResponsibilityType extends Model {

    public $primaryKey = 'id';
    public $table = 'responsibilitytype';
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
    public function resp_type()
    {
        return $this->hasMany('PositionResponsibility');
    }

}

?>