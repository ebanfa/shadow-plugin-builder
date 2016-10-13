<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyGroup extends Model {

    public $primaryKey = 'id';
    public $table = 'partygroup';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function group_party()
    {
        return $this->belongsTo('Party');
    }


}

?>