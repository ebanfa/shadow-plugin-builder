<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BuildingTypePropertyType extends Model {

    public $primaryKey = 'id';
    public $table = 'buildingtypepropertytype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function btpt_buildingtype()
    {
        return $this->belongsTo('BuildingType');
    }
    /**
     * 
     */
    public function btpt_propertytype()
    {
        return $this->belongsTo('PropertyType');
    }


}

?>