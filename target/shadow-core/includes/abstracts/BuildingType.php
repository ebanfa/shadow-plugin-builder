<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BuildingType extends Model {

    public $primaryKey = 'id';
    public $table = 'buildingtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function b_buildingtype()
    {
        return $this->hasMany('Building');
    }
    /**
     * 
     */
    public function btpt_buildingtype()
    {
        return $this->hasMany('BuildingTypePropertyType');
    }

}

?>