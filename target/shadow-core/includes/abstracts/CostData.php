<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class CostData extends Model {

    public $primaryKey = 'id';
    public $table = 'costdata';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function cd_assessment()
    {
        return $this->belongsTo('Assessment');
    }
    /**
     * 
     */
    public function cd_type()
    {
        return $this->belongsTo('CostDataType');
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
    public function cdi_costdata()
    {
        return $this->hasMany('CostDataItem');
    }

}

?>