<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class SalesDataItem extends Model {

    public $primaryKey = 'id';
    public $table = 'salesdataitem';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function sdi_salesdata()
    {
        return $this->belongsTo('SalesData');
    }
    /**
     * 
     */
    public function sdi_type()
    {
        return $this->belongsTo('SalesDataItemType');
    }
    /**
     * 
     */
    public function sdi_location()
    {
        return $this->belongsTo('Location');
    }
    /**
     * 
     */
    public function sdi_shape()
    {
        return $this->belongsTo('LandShape');
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