<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class ZoningData extends Model {

    public $primaryKey = 'id';
    public $table = 'zoningdata';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function z_type()
    {
        return $this->belongsTo('ZoneType');
    }
    /**
     * 
     */
    public function m_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function is_compliant_fg()
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