<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartySubjectArea extends Model {

    public $primaryKey = 'id';
    public $table = 'partysubjectarea';
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