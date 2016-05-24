<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SalesData extends Model {

    public $primaryKey = 'id';
    public $table = 'salesdata';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function sd_type()
    {
        return $this->belongsTo('SalesDataType');
    }
    /**
     * 
     */
    public function sd_assessment()
    {
        return $this->belongsTo('Assessment');
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
    public function sdi_salesdata()
    {
        return $this->hasMany('SalesDataItem');
    }

}

?>