<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Improvement extends Model {

    public $primaryKey = 'id';
    public $table = 'improvement';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function i_property()
    {
        return $this->belongsTo('Property');
    }
    /**
     * 
     */
    public function i_type()
    {
        return $this->belongsTo('ImprovementType');
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