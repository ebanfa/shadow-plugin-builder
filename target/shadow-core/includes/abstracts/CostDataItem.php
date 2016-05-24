<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class CostDataItem extends Model {

    public $primaryKey = 'id';
    public $table = 'costdataitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function cdi_costdata()
    {
        return $this->belongsTo('CostData');
    }
    /**
     * 
     */
    public function cdi_type()
    {
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