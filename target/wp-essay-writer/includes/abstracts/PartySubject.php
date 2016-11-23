<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartySubject extends Model {

    public $primaryKey = 'id';
    public $table = 'partysubject';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function subject_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function target_subject()
    {
        return $this->belongsTo('Subject');
    }


}

?>