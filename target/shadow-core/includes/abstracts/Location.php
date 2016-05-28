<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Location extends Model {

    public $primaryKey = 'id';
    public $table = 'location';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function location_type()
    {
        return $this->belongsTo('LocationType');
    }

    /**
     * 
     */
    public function p_location()
    {
        return $this->hasMany('Property');
    }
    /**
     * 
     */
    public function location()
    {
        return $this->hasMany('Location');
    }
    /**
     * 
     */
    public function sdi_location()
    {
        return $this->hasMany('SalesDataItem');
    }

}

?>