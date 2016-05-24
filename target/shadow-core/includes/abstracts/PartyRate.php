<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyRate extends Model {

    public $primaryKey = 'id';
    public $table = 'partyrate';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function rate_type()
    {
        return $this->belongsTo('RateType');
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