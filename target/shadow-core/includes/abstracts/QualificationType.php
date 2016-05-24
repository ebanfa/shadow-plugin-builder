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
    public function business_unit()
    {
        return $this->belongsTo('BusinessUnit');
    }

    /**
     * 
     */
    public function qualification_type()
    {
        return $this->hasMany('PartyQualification');
    }

}

?>