<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PositionClassificationType extends Model {

    public $primaryKey = 'id';
    public $table = 'positionclassificationtype';
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
    public function pclass_type()
    {
        return $this->hasMany('PositionTypeClass');
    }

}

?>