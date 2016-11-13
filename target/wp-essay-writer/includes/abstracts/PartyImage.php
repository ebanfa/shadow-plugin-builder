<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyImage extends Model {

    public $primaryKey = 'id';
    public $table = 'partyimage';
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