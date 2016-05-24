<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PositionTypeClass extends Model {

    public $primaryKey = 'id';
    public $table = 'positiontypeclass';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function pclass_type()
    {
        return $this->belongsTo('PositionClassificationType');
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
    public function ptype_class()
    {
        return $this->hasMany('PositionType');
    }

}

?>