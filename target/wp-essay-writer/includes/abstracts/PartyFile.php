<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyFile extends Model {

    public $primaryKey = 'id';
    public $table = 'partyfile';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function file_party()
    {
        return $this->belongsTo('Party');
    }


}

?>