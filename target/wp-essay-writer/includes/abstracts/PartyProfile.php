<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyProfile extends Model {

    public $primaryKey = 'id';
    public $table = 'partyprofile';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function profile_party()
    {
        return $this->belongsTo('Party');
    }


}

?>