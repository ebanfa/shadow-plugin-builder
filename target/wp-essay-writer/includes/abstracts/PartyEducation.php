<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class PartyEducation extends Model {

    public $primaryKey = 'id';
    public $table = 'partyeducation';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function education_party()
    {
        return $this->belongsTo('Party');
    }
    /**
     * 
     */
    public function qualification_type()
    {
        return $this->belongsTo('QualificationType');
    }
    /**
     * 
     */
    public function qualification_sub()
    {
        return $this->belongsTo('Subject');
    }


}

?>