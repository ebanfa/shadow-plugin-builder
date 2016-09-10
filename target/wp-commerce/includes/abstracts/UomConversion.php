<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class UomConversion extends Model {

    public $primaryKey = 'id';
    public $table = 'uomconversion';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function from_uom()
    {
        return $this->belongsTo('Uom');
    }
    /**
     * 
     */
    public function to_uom()
    {
        return $this->belongsTo('Uom');
    }


}

?>