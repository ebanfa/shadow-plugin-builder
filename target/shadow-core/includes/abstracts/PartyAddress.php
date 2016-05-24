<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyAddress extends Model {

    public $primaryKey = 'id';
    public $table = 'partyaddress';
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
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }
    /**
     * 
     */
    public function location()
    {
        return $this->belongsTo('Location');
    }


}

?>