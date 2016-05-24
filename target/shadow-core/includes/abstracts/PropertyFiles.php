<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PropertyFiles extends Model {

    public $primaryKey = 'id';
    public $table = 'propertyfiles';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pf_property()
    {
        return $this->belongsTo('Property');
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