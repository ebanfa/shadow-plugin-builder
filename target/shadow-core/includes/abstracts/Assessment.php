<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Assessment extends Model {

    public $primaryKey = 'id';
    public $table = 'assessment';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function a_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function a_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function a_building()
    {
        return $this->belongsTo('Building');
    }
    /**
     * 
     */
    public function a_land()
    {
        return $this->belongsTo('Land');
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
    public function cd_assessment()
    {
        return $this->hasMany('CostData');
    }
    /**
     * 
     */
    public function sd_assessment()
    {
        return $this->hasMany('SalesData');
    }
    /**
     * 
     */
    public function id_assessment()
    {
        return $this->hasMany('IncomeData');
    }

}

?>