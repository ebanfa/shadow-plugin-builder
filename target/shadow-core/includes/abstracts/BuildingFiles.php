<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class BuildingFiles extends Model {

    public $primaryKey = 'id';
    public $table = 'buildingfiles';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function building()
    {
        return $this->belongsTo('Building');
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