<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class QualificationType extends Model {

    public $primaryKey = 'id';
    public $table = 'qualificationtype';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;


    /**
     * 
     */
    public function qualification_type()
    {
        return $this->hasMany('PartyEducation');
    }

}

?>