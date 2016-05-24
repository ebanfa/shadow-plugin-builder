<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Liability extends Model {

    public $primaryKey = 'id';
    public $table = 'liability';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function type()
    {
        return $this->belongsTo('LiabilityType');
    }
    /**
     * 
     */
    public function l_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function lender()
    {
        return $this->belongsTo('Party');
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