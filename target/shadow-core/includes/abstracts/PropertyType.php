<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PropertyType extends Model {

    public $primaryKey = 'id';
    public $table = 'propertytype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function btpt_propertytype()
    {
        return $this->hasMany('BuildingTypePropertyType');
    }
    /**
     * 
     */
    public function p_type()
    {
        return $this->hasMany('Property');
    }

}

?>