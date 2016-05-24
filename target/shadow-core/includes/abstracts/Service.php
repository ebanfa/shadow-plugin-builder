<?php 

use \WeDevs\ORM\Eloquent\Model as Model;

class Service extends Model {

    public $primaryKey = 'id';
    public $table = 'service';
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function s_type()
    {
        return $this->belongsTo('ServiceType');
    }

    /**
     * 
     */
    public function s_service()
    {
        return $this->hasMany('AgreementService');
    }
    /**
     * 
     */
    public function s_agreement()
    {
        return $this->hasMany('AgreementService');
    }

}

?>